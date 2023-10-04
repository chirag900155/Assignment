import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, styled } from "@mui/material";
import { useCart } from "./CartContext"; // Import the useCart hook

const CartButton = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart(); // Use the useCart hook to access the cart state

  const LogoutButton = styled(Button)`
    position: absolute;
    top: 10px;
    right: 10px;
    background: #1877f2;
    border: 1px solid #1877f2;
    color: #fff;
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    outline: none;
    hover: none;
  `;

  return (
    <div>
      <LogoutButton onClick={() => navigate('/')}> Logout </LogoutButton>
      <p>Cart Items: {cartItems.length}</p>
    </div>
  );
};

export default CartButton;