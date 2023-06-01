import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Badge } from "@mui/material";
import Link from "next/link";

function Navbar({ basket }) {
  return (
    <AppBar
      position="sticky"
      data-testid="navbar"
      sx={{ background: "#ff7f00", px: 8 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              // letterSpacing: ".3rem",
              color: "inherit",
              textTransform: "uppercase",
            }}
          >
            Lezzeti-Alem
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              display: "flex",
              alignItems: "center",
              ml: 4,
              gap: 1,
            }}
          >
            <LocalPhoneIcon fontSize="medium" />

            <Typography
              style={{
                color: "white",
                display: "block",
                fontWeight: 700,
                fontSize: "1rem",
              }}
            >
              1-543-123-4567
            </Typography>
          </Box>
          <Link href={"/order"} data-testid="shopping-basket-link">
            <Box sx={{ position: "relative", flexGrow: 0, cursor: "pointer" }}>
              <Badge
                sx={{
                  position: "absolute",
                  background: "#1976D2",
                  // p: 1,
                  width: "25px",
                  height: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  top: "-8px",
                  right: "-15px",
                }}
              >
                {basket.length}
              </Badge>
              <ShoppingBasketIcon />
            </Box>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
