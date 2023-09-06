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

const Search = () => {
  const { push } = useRouter();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const searchList = useSelector((state) => state.api.searchList);
  const [value, setValue] = React.useState(null);
  const selectedUser = useSelector((state) => state.api.selectedUser);
  const [customValue, setCustomValue] = React.useState("");

  const handleInputChange = (e) => {
    let newQuery;
    if (e == undefined) {
      newQuery = "*";
    } else {
      newQuery = e.target.value;
    }
    setQuery(newQuery);
    dispatch(fetchSearchResults(newQuery))
      .unwrap()
      .then((data) => {
        console.log("Data---", data);
        const result = data.value.map(
          ({ FirstName, Name, BirthDate, FullAddress }) => ({
            FirstName,
            Name,
            BirthDate,
            FullAddress,
          })
        );
        setSuggestions(result);
      })
      .catch((error) => {
        console.log("search api error", error);
      });
  };

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      push("/info");
      e.preventDefault();
    }
    dispatch(setUser(value));
  };

  useEffect(() => {
    handleInputChange();
  }, []);

  const navigateInfo = () => {
    push("/info");
    dispatch(setUser(value));
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
          }}
          id="search-countries"
          options={searchList}
          className={styles.header_img}
          onInputChange={handleInputChange}
          onChange={(event, newValue) => {
            setValue(newValue);
            setCustomValue(newValue.FirstName + newValue.FullAddress);
          }}
          getOptionLabel={(option) => option.FirstName}
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
            <span>
              <SearchIcon onClick={navigateInfo} sx={{ cursor: "pointer" }} />
              <TextField
                {...params}
                value={customValue}
                label="Search for a client"
                variant="outlined"
                onKeyPress={onKeyPress}
              />
            </span>
          )}
        />
      </Grid>
    </Grid>
  );
};

export default Search;
