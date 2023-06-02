import { Grid, Box } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Product from "../../components/Product";

const CategoryItem = ({ basket, setBasket }) => {
  const router = useRouter();

  const [categoryItem, setCategoryItem] = useState({});
  const { id } = router.query;
  const getByCategoryId = async () => {
    const res = await fetch(
      '${process.env.NEXT_PUBLIC_API_URL}/categories/' + id
    );
    const data = await res.json();
    setCategoryItem(data.data);
  };
  console.log(process.env.NEXT_PUBLIC_API_URL);
  useEffect(() => {
    if (id) getByCategoryId();
  }, [id]);
  return (
    <Box textAlign={"center"} px={12} py={2}>
      <h1>{categoryItem?.name}</h1>
      <Grid container spacing={4}>
        {categoryItem?.items?.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={6} lg={4}>
            <Product product={item} basket={basket} setBasket={setBasket} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryItem;