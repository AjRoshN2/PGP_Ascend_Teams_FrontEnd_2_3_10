import React from 'react'
import { Button, Container, Divider, Form, Grid, Segment, Card } from 'semantic-ui-react'
import {  Row, Col } from 'react-bootstrap';


import DefaultPromotions from './DefaultPromotions';
import UserProducts from './UserProducts'
import UserWishlist from './UserWishlist'
import Image from 'react-bootstrap/Image';
import UserInterests from './UserInterests';
import UserFavCategories from './UserFavCategories';
import UserFavCategoriesBrands from './UserFavCategoriesBrands';
import UserBrands from './UserBrands';
const UserDashboard = () => (
   
    <Segment >
         <center><h3>My Dashboard<br/><br></br></h3></center>
        <Grid columns={2} >
            <Grid.Column width={6}>
            <Card>
          <Card.Content>
            <Card.Header>My Wishlist</Card.Header>
            <Card.Description>
              <UserWishlist />
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>My Interests</Card.Header>
            <Card.Description>
              <UserInterests />
            </Card.Description>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header>My Favorite Categories</Card.Header>
            <Card.Description>
              <UserFavCategories />
            </Card.Description>
          </Card.Content>
        </Card>
            </Grid.Column>
            <Grid.Column width={6}>
                <center>
                    <h5>My Notifications</h5>
                Here are some product recommendations based on your recent searches
                </center>
                <br/>
                <UserProducts />
            </Grid.Column>
        </Grid>
        
    </Segment>
    
)
export default UserDashboard;

