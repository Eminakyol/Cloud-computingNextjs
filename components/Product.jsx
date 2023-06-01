import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { productCount } from "../utils";

export default function Product({ product, basket, setBasket }) {
  const addBasket = (product) => {
    var existingArray = JSON.parse(localStorage.getItem("basket")) || [];
    existingArray.push(product);
    localStorage.setItem("basket", JSON.stringify(existingArray));
    setBasket(existingArray);
  };
  const deleteBasket = (product) => {
    var existingArray = JSON.parse(localStorage.getItem("basket")) || [];
    const index = existingArray.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      existingArray.splice(index, 1);
      localStorage.setItem("basket", JSON.stringify(existingArray));
      setBasket(existingArray);
    }
  };
  return (
    <Card
      sx={{
        maxWidth: 400,
        "&:hover": { transform: "scale(1.01)" },
        transition: ".3s all ease",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={product.image_url}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {product?.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {product?.description}
          </Typography>
          <Typography variant="h4" color="green">
            {product.price}TL
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
          variant="contained"
          disabled={productCount(product.id) === 0}
          onClick={() => deleteBasket(product)}
        >
          -
        </Button>
        <span>{productCount(product.id)}</span>
        <Button variant="contained" onClick={() => addBasket(product)}>
          +
        </Button>
      </CardActions>
    </Card>
  );
}
