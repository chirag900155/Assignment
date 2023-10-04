import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Button } from '@mui/material';
import { useCart } from '../Cart/CartContext';


 const ProductList = ()=> {

  const { cartItems, setCartItems } = useCart(); // Use the useCart hook to access the cart state

  const handleButtonClick = (title) => {
    // Add item.title to cartItems
    setCartItems([...cartItems, title]);
  };
  

  return (
    <ImageList sx={{ width: 700, height: 600, marginTop: 10 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>Price: {item.Price}</span>}
            position="below"
            actionIcon={
              <Button
                variant="contained"
                onClick={() => handleButtonClick(item.title)}
              >
                Click for Price
              </Button>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://5.imimg.com/data5/SL/PO/JS/SELLER-5493067/men-check-printed-shirt.jpg',
    title: 'CHECK PRINT SHIRT',
    Price: '110₹',
  },
  {
    img: 'https://www.shopsocialthreads.com/cdn/shop/products/ST_041421_0708_800x.jpg?v=1638481190',
    title: 'GLORIA HIGH',
    Price: '91.0₹',
  },
  {
    img: 'https://im9.cz/iR/importprodukt-orig/a1d/a1d5105b9afeed18ff994c867410a225--mmf350x350.jpg',
    title: 'CATE RIGID BAG',
    Price: '94.5₹',
  },
  {
    img: 'https://m.media-amazon.com/images/I/51rwWtacCfL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_PIStarRatingFOUR%2CBottomLeft%2C360%2C-6_SR600%2C315_ZA17%2C445%2C290%2C400%2C400%2CAmazonEmberBold%2C12%2C4%2C0%2C0%2C5_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg',
    title: 'Guess Connect Watch',
    Price: '438.9₹',
  },
  {
    img: 'https://www.time4diamonds.com/media/mgs_blog/3/-/3-1_1__1.jpg',
    title: 'Rollex Watch',
    Price: '80000₹',
  },
  {
    img: 'https://luxurycolumnist.com/wp-content/uploads/2021/06/cullinan-diamonds.jpg',
    title: 'Rarest Diamanod',
    Price: 'PriceLess',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    Price: '900₹',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    Price: '50000₹',
  },
];

export default ProductList
