import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../assets/logorp.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "..";
import { useContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "../App.css";

export default function ButtonAppBar() {
  const [nav, setnav] = React.useState(false);
  const { isAuthenticated, setisAuthenticated, loading, setLoading } =
    useContext(Context);
  const navigate = useNavigate();
  const navbarstate = () => {
    setnav(!nav);
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      const data = await axios.get("https://e-com-rksk.onrender.com/logout", {
        withCredentials: true,
      });
      if (data) {
        toast.success("logged out ");
        isAuthenticated(false);
      }

      setLoading(false);
    } catch (error) {
      toast.error("error ");
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }} position="sticky" top={0}>
      <AppBar class="bg-amber-400">
        <Toolbar>
          <Box>
            <img
              src={logo}
              alt="logo"
              width="60px"
              height="50px"
              filter="grayscale(100%)"
              style={{ cursor: "pointer" }}
              onClick={() => {
                return <Navigate to="/" />;
              }}
            />
          </Box>
          <Typography
            variant="h5"
            marginLeft={2}
            fontSize={33}
            fontWeight={"bold"}
            fontFamily={"cursive"}
            letterSpacing={2}
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Ro-Com
          </Typography>
          <div className={nav ? "navbarmod" : "navbar"}>
            <Button
              sx={{ color: "black", fontWeight: "bold", fontSize: "17px" }}
              startIcon={<AddShoppingCartIcon />}
              onClick={() => {
                navigate("/cart");
              }}
            >
              cart
            </Button>

            <Button
              sx={{ color: "black", fontWeight: "bold", fontSize: "17px" }}
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </Button>
            <Button
              sx={{ color: "black", fontWeight: "bold", fontSize: "17px" }}
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Button>

            <Button
              disable={loading}
              sx={{ color: "black", fontWeight: "bold", fontSize: "17px" }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
          <div className="menubut">
            {nav ? (
              <CloseRoundedIcon onClick={navbarstate} />
            ) : (
              <MenuRoundedIcon size="large" onClick={navbarstate} />
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
