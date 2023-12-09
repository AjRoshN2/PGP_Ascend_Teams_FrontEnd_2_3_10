import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const PageHeader = () => {
  // State to capture the search value
  const [searchValue, setSearchValue] = useState('');

  // Function to handle changes in the search input
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">WalECart</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                id="searchValue"
                onChange={handleSearchChange}
              />
              <Button
                variant="info"
                href={`http://localhost:9100/products/searchProductsByTitleNameOrShortDesc/${searchValue}`}
                target="_blank"
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
