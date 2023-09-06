import {
  Autocomplete,
  Box,
  Grid,
  IconButton,
  InputBase,
  Paper,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "../../styles/style.module.css";
import BackgroundImage from "@/components/background-image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResults, setUser } from "@/redux/slice/apiSearchSlice";
import moment from "moment/moment";
import SearchIcon from "@mui/icons-material/Search";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Search = () => {
  const { push } = useRouter();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const searchList = useSelector((state) => state.api.searchList);
  const [value, setValue] = React.useState(null);
  const selectedUser = useSelector((state) => state.api.selectedUser);
  console.log(selectedUser,"selectedUser")
  const [customValue, setCustomValue] = React.useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    let newQuery;
    if (e == undefined) {
      newQuery = "*";
    } else {
      newQuery = e.target.value;
      if (newQuery !== undefined && newQuery.length < 4) {
        setError("Please enter minimun 4 character");
      } else {
        setError("");
      }
    }
    setQuery(newQuery);

    dispatch(fetchSearchResults(newQuery));
  };

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      if (value !== null) {
        push("/info");
        dispatch(setUser(value));
        e.preventDefault();
      } else {
        toast.error("Please select atleast one name", {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }
    }
  };

  useEffect(() => {
    setInterval(handleInputChange(), 30000);
  }, []);

  const navigateInfo = () => {
    if (value !== null) {
      push("/info");
      dispatch(setUser(value));
    } else {
      toast.error("Please select atleast one name", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  return (
    <Grid>
      <BackgroundImage props={true} />
      <Grid item>
        <Autocomplete
          sx={{
            display: "inline-block",
            "& input": {
              bgcolor: "#fff",
            },
            "& label": {
              fontSize: { xs: 17, md: 20 },

              fontWeight: 400,
              color: "black",
            },
            "& fieldset": {
              border: "none",
            },
            "& p": {
              marginTop: { xs: 3, md: 10 },
              fontWeight: 600,
              fontSize: { xs: 12, md: 16 },
            },
          }}
          id="search-countries"
          options={searchList}
          className={styles.header_img}
          onInputChange={handleInputChange}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          getOptionLabel={(option) =>
            option.FirstName +
            " " +
            option.Name +
            " " +
            moment(option.BirthDate).format("DD MMM yyyy") +
            "-" +
            option.FullAddress
          }
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              <b>
                {option.FirstName !== null ? option.FirstName : ""}{" "}
                {option.Name !== null ? option.Name : ""}
              </b>
              <br></br>
              {option.BirthDate !== null
                ? moment(option.BirthDate).format("DD MMM yyyy")
                : null}{" "}
              - {option.FullAddress}
            </Box>
          )}
          renderInput={(params) => (
            <span sx={{ display: "flex" }}>
              {/* <SearchIcon className={styles.cursor} /> */}
              <TextField
                {...params}
                variant="outlined"
                onKeyPress={onKeyPress}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      <SearchIcon
                        style={{ marginRight: "8px", cursor: "pointer" }}
                        onClick={navigateInfo}
                      />
                      {params.InputProps.startAdornment}
                    </>
                  ),
                }}
                label="Search for a client"
                error={!!error}
                helperText={error}
              />
            </span>
          )}
        />
        <ToastContainer />
      </Grid>
    </Grid>
  );
};

export default Search;
