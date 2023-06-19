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
  const [admin, setAdmin] = React.useState(false);
  const { Authenticated, setAuthenticated, loading, setLoading } =
    useContext(Context);
  const navigate = useNavigate();
  const navbarstate = () => {
    setnav(!nav);
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      const data = await axios.get("http://localhost:5000/logout", {
        withCredentials: true,
      });
      if (data) {
        toast.success("logged out ");
        setAuthenticated(false);
      }

      setLoading(false);
    } catch (error) {
      toast.error("error ");
    }
  };
  const isauth = async () => {
    const resdata = await axios.get("http://localhost:5000/getuser", {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    console.log(resdata.data.data.isAdmin);
    if (resdata.data.success) {
      setAuthenticated(true);
      if (resdata.data.data.isAdmin == true) {
        setAdmin(true);
      } else {
        setAdmin(false);
      }
    } else {
      setAuthenticated(false);
    }
  };
  React.useEffect(() => {
    isauth();
  });

  return (
    <Box sx={{ flexGrow: 1 }} position="sticky" top={0}>
      <AppBar class="bg-amber-400 lg:px-20  ">
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
            R-Com
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
            {Authenticated ? (
              ""
            ) : (
              <Button
                sx={{ color: "black", fontWeight: "bold", fontSize: "17px" }}
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register
              </Button>
            )}
            {Authenticated ? (
              ""
            ) : (
              <Button
                sx={{ color: "black", fontWeight: "bold", fontSize: "17px" }}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
            )}
            {admin ? (
              <Button
                sx={{ color: "black", fontWeight: "bold", fontSize: "17px" }}
                onClick={() => {
                  navigate("/admin");
                }}
              >
                Dashboard
              </Button>
            ) : (
              ""
            )}
            {Authenticated ? (
              <Button
                disable={loading}
                sx={{ color: "black", fontWeight: "bold", fontSize: "17px" }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              ""
            )}
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
