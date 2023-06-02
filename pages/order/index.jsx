import React, { useState } from "react";
import { Card, Box, Grid, Button, CardActions, TextField } from "@mui/material";
import { productCount, truncateText } from "../../utils";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Link from "next/link";

const Order = ({ basket, setBasket }) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const router = useRouter();

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      phone: phoneNumber,
      name: fullName,
      email: emailAddress,
      address: homeAddress,
      products: basket.map((item) => item.id),
    };

    // İstek gönderme işlemini burada gerçekleştirin
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/order`, {
      method: "POST",
      body: JSON.stringify({ order: orderData }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 201) {
          toast.success("your order has been received successfully");
          localStorage.removeItem("basket");
          router.push("/");
          setBasket([]);
        } else {
          toast.error(res.message || "something went wrong");
        }
      })
      .catch((error) => {
        toast.error(error.message || "something went wrong");
      });
  };

  return (
    <Box sx={{ py: 0, px: 12, textAlign: "center" }}>
      <h1>Orders</h1>
      {basket.length === 0 ? (
        <>
          <h2>There is no product in the basket</h2>
          <Link
            style={{ color: "blue", textDecoration: "underline" }}
            href={"/"}
          >
            Go to Category Page
          </Link>
        </>
      ) : (
        <>
          <Grid spacing={2} container>
            <Grid item xl={6} md={12}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Full Name"
                      name="fullName"
                      autoComplete="off"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Phone Number"
                      name="phoneNumber"
                      autoComplete="off"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Email Address"
                      name="emailAddress"
                      type="email"
                      autoComplete="off"
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Home Address"
                      name="homeAddress"
                      autoComplete="off"
                      value={homeAddress}
                      onChange={(e) => setHomeAddress(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item xl={6} md={12}>
              {Array.from(new Set(basket.map((obj) => obj.id)))
                .map((id) => basket.find((obj) => obj.id === id))
                .map((item) => (
                  <Card
                    sx={{
                      p: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <img
                      src={item.image_url}
                      alt=""
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                    />
                    <span>{item.name}</span>
                    <span>{item.price}TL</span>
                    <span>{truncateText(item.description, 20)}</span>

                    <CardActions>
                      <Button
                        variant="contained"
                        disabled={productCount(item.id) === 0}
                        onClick={() => deleteBasket(item)}
                      >
                        -
                      </Button>
                      <span style={{ marginInline: "10px" }}>
                        {productCount(item.id)}
                      </span>
                      <Button
                        variant="contained"
                        onClick={() => addBasket(item)}
                      >
                        +
                      </Button>
                    </CardActions>
                  </Card>
                ))}
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
};

export default Order;
