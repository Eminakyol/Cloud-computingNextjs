import { useEffect, useState } from "react";
import { Grid, Box, styled, Typography } from "@mui/material";
import Link from "next/link";

export const StyledImage = styled("img")(({}) => ({
  height: 200,
  width: "100%",
  objectFit: "cover",
  borderRadius: 10,
}));
export default function Home() {
  const [category, setCategory] = useState([]);
  const geAllCategory = async () => {
    const res = await fetch("http://16.171.10.65:3001/");
    const data = await res.json();
    console.log(data);
    setCategory(data.data);
  };

  useEffect(() => {
    geAllCategory();
  }, []);
  return (
    <Box textAlign={"center"} px={12} py={2}>
      <h1>Category</h1>
      <Grid container spacing={2}>
        {category.map((item) => (
          <Grid item xs={6} sm={4} md={6}>
            <Link href={`/category/${item?.id}`}>
              <Box
                sx={{
                  position: "relative",
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    color: "white",
                    backgroundColor: "rgba(0,0,0,0.4)",
                    borderRadius: "10px",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  <Typography variant="h5">{item?.name}</Typography>
                </Box>

                <StyledImage src={item?.image_url} alt="" />
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
