import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const UserFavCategoriesBrands = () => {
  const [favProducts, setFavProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [cats, setCats] = useState([]);
  const [authers, setAuthers] = useState({ email: "", id: 0, jwttoken: "", token: "" });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const s = sessionStorage.getItem("tkn");
        const idParam = new URLSearchParams(location.search).get('id');

        if (!s && !idParam) {
          navigate('/login');
        } else {
          const response = await axios.post('http://localhost:9090/ECartPGPTen/api/ecarto/authenticate', {
            "email": idParam
          });

          const data = response.data.body;
          setAuthers(data);
          sessionStorage.setItem("tkn", data.token);

          if (response.data && response.data.code && response.data.code === 200) {
            await fetchKeywords(data.id);
          } else {
            navigate('/login?err=' + response.data.code);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [navigate, location]);

  const fetchKeywords = async (id) => {
    try {
      const token = sessionStorage.getItem("tkn");

      const responseProducts = await axios.get(`http://localhost:9090/ECartPGPTen/api/ecartp/favBrandsCatgProducts/${id}`, {
        headers: {
          "content-type": "application/json",
          "Authorization": token,
        }
      });

      if (responseProducts.data && responseProducts.data.code && responseProducts.data.code === 200) {
        setFavProducts(responseProducts.data.body);
      } else {
        navigate('/login?err=' + responseProducts.data.code);
      }

      const responseBrandsCats = await axios.get(`http://localhost:9090/ECartPGPTen/api/ecartp/favBrandsCatg/${id}`, {
        headers: {
          "content-type": "application/json",
          "Authorization": token,
        }
      });

      if (responseBrandsCats.data && responseBrandsCats.data.code && responseBrandsCats.data.code === 200) {
        setBrands(responseBrandsCats.data.body.brands);
        setCats(responseBrandsCats.data.body.categories);
      } else {
        navigate('/login?err=' + responseBrandsCats.data.code);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const brandsEntriesUI = Object.entries(brands).map(([key]) => (
    <dl className="row banner-sec-sub overflow-auto block-scroll" key={key}>
      <dt className="col-sm-1 title1 "></dt>
      <dd className="col-sm-11">{key}</dd>
    </dl>
  ));

  return (
    <>
      <div className="banner-sec">
        <div className="banner-right col-lg-6 banner-sec-border position-relative" style={{ paddingRight: "0", paddingLeft: "0" }}>
          {/* ... (your other UI components) */}
          <div className=" justify-content-center banner-sec-border banner-sec-sub">
            <p className="mb-0 text-center h4 margin-top5 sub-header-background-upc">Brands &nbsp;</p>
            {brandsEntriesUI}
          </div>
          <div className=" justify-content-center banner-sec-border banner-sec-sub">
            <p className="mb-0 text-center h4 margin-top5 sub-header-background-upc">Products &nbsp;</p>
            {favProducts.map(comment => (
              <dl className="row banner-sec-sub overflow-auto block-scroll" key={comment.id}>
                <dt className="col-sm-1 title1 "></dt>
                <dd className="col-sm-11">{comment.shortDescription}</dd>
              </dl>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserFavCategoriesBrands;
