import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Regist from "../assets/register.png";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { useContext, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "..";
import { Navigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errmesg, seterrmesg] = useState("");
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const { Authenticated, setAuthenticated, loading, setLoading } =
    useContext(Context);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setValues((prev) => ({ ...prev, phone: e.target.value }));
    }
  };
  const handlesubmit = async () => {
    if (!values.name || !values.email || !values.password || !values.phone) {
      seterrmesg("Please Fill All Fields !!!");
      return;
    }
    seterrmesg("");

    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://e-com-rksk.onrender.com/register",
        values,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setAuthenticated(true);
      setLoading(false);
    } catch (error) {
      toast.error("some error");
      setAuthenticated(false);
    }
  };
  if (Authenticated) return <Navigate to="/" />;
  return (
    <Box width={"100%"} mt={10} px={{ lg: 25, xs: 5 }}>
      <Grid container>
        <Grid item lg={6} display={{ lg: "block", xs: "none" }}>
          <Box>
            <img src={Regist} alt="sdkandsa" />
          </Box>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            flexDirection={"column"}
          >
            <PersonIcon fontSize="large" />
            <Typography variant="h4" mb={2} fontWeight="bold">
              {" "}
              Register
            </Typography>
            <Box width={"90%"} m={2}>
              <TextField
                m={2}
                required
                fullWidth
                id="outlined-required"
                label="Name"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, name: event.target.value }))
                }
              />
            </Box>

            <Box width={"90%"} m={2}>
              <TextField
                m={2}
                required
                fullWidth
                id="outlined-required"
                label="Email"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }
              />
            </Box>
            <Box width={"90%"} m={2}>
              <TextField
                type="text"
                m={2}
                required
                fullWidth
                id="outlined-required"
                label="Phone"
                onChange={(e) => handleChange(e)}
              />
            </Box>
            <Box width={"90%"} m={2}>
              <FormControl variant="outlined" fullWidth required>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      password: event.target.value,
                    }))
                  }
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <Typography
                textAlign={"center"}
                sx={{ color: "red", fontWeight: "bold" }}
                mt={2}
              >
                {errmesg}
              </Typography>
              <Box
                mt={5}
                display="flex"
                justifyContent={"center"}
                alignItems="center"
                gap={{ lg: 8, xs: 2 }}
                width="100%"
              >
                <button
                  className="w-48 bg-yellow-500 text-black font-bold py-2 px-4 rounded-full"
                  disabled={loading}
                  onClick={handlesubmit}
                >
                  Sign Up
                </button>
                <button className="w-48 text-black border border-yellow-500 font-bold py-2 px-4 rounded-full">
                  Reset
                </button>
              </Box>
              <Typography textAlign={"center"} mt={2}>
                Already Have an Account{" "}
                <span className="text-yellow-500 cursor-pointer">Login</span>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;
