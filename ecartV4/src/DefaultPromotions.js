import React from 'react'
import { Button, Container, Divider, Form, Grid, Card } from 'semantic-ui-react'
import promo1  from './img/promo1.jpg'
import buddha from './img/buddha.jpg'
const items = [
    {
      header: 'Mobile phones',
      description:
        ' iPhone 15 and iPhone 15 Plus will be available in five stunning new colors: pink, yellow, green, blue, and black. Pre-orders begin Friday, September 15, with availability beginning Friday, September 22.”.',
        image:'https://images.macrumors.com/t/oiWkxB5isnYn8BFbcgKsnDIUOdI=/800x0/smart/article-new/2023/09/iPhone-15-Pro-Lineup-Feature.jpg?lossy' ,
      meta: 'Upto 50% off',
    },
    {
        header: 'Home decor',
        description:
        'Give your home a fresh new look. Wide range of options to choose from.',
          image:buddha,
        meta: 'Upto 30% off',
      },
      {
        header: 'Women fashion',
        description:
        'Flaunt your style for office, party , festival wear',
          image: promo1,
        meta: 'Upto 20% off',
      },
  ]
  
  const DefaultPromotions = () => 
  < Grid container spacing = { 24} >
            <Grid item md={3}>
  
  <Card.Group centered items={items} />
  </Grid>
  </Grid>
  export default DefaultPromotions