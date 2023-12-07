import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Grid from '@mui/material/Grid';

function UserProducts() {
    const [userData, setdata] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:9900/api/userdashboard/getUserProducts/20")
            .then((response) => {

                setdata(response.data)
            })
    }, [])

        
const cardComponent = () => <Card.Group centered items={items} />
    return (

        <div>
            < Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {userData.map((data) => {
                return (
                    <div><center>
                        <Grid item md={2}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={data.imageUrls} />
                                <Card.Body>
                                    <Card.Title> {data.title}</Card.Title>
                                    <Card.Text>
                                        {data.shortDescription}
                                    </Card.Text>
                                   
                                    
                                </Card.Body>
                            </Card>
                        </Grid>                    
                    </center>             
             </div>
            )
})}
      </Grid>  
    </div >
   
    )
}

export default UserProducts;