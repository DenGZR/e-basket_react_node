import React from 'react';
import  { Link } from 'react-router-dom';
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const CardItem = props => {
  const { title, imgSrc, price, productLink, addToCart } = props;
    // description: "Aboca RuscoVen Bio Gel 100ml"
    // img: "http://lefarma.ru/image/cache/catalog/li/zdorove-razlichnie-boli-tyazhest-v-nogah/aboca-ruscoven-bio--450x600.jpeg"
    // price: "939 р."
    // productLink: "/product/aboca-ruscoven-bio-gel-100ml"
    
    const onAddOrderToCart = () => {
  const { title, imgSrc, price, productLink, addToCart } = props;
      addToCart({title, productLink, imgSrc, price, quantity: 1})
    };

  return (
    <Card>
      <CardBody>
        <Link to={productLink}>
          <CardImg top width="100%" src={imgSrc} alt="Card image cap" />
          <CardTitle>{title}</CardTitle>
        </Link>    
        <CardSubtitle>{price}</CardSubtitle>
        <Button onClick={onAddOrderToCart}>В корзину</Button>
      </CardBody>  
    </Card> 
  );
};

export default CardItem;