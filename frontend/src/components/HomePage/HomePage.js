import React from "react";
import './HomePage.css'
import { useNavigate } from 'react-router-dom'
import ProductList from "../ProductList/productList";
import { Button, styled } from '@mui/material'


const HomePage = () => {
  const navigate = useNavigate();

  const CartButton = styled(Button)`
        position: absolute;
        top: 10px; /* Adjust the top value to your desired position */
        left: 10px; /* Adjust the left value to your desired position */
`;

    const handleCart = ()=>{
      navigate('/cart')
    }

  return (
    <div className="homepage">
      <h1>HomePage</h1>
      <div className="button" onClick={() => navigate('/')}>Logout</div>

      {/* Display the product list */}
      <ProductList />
      {/* Display the Cart button */}

      <CartButton variant="contained" onClick={() => handleCart()}> Cart </CartButton>
    </div>
  );
}

export default HomePage;
