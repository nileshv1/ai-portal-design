import {
  Autocomplete,
  Grid,
  IconButton,
  InputBase,
  Paper,
  TextField,
} from "@mui/material";
import React from "react";
import styles from "../../styles/style.module.css";
import BackgroundImage from "@/components/background-image";

import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import { Height } from "@mui/icons-material";

const Search = () => {
  const { push } = useRouter();

  const navigateInfo = () => {
    push("/info");
  };

  const countries = ["United States", "Canada", "United Kingdom", "Australia"];

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      push("/info");
      e.preventDefault();
    }
  };

  return (
    <Grid>
      <BackgroundImage props={true} />
      <Grid item>
        {/* <Paper
          classes={{root:classes.customClass}}
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            position: "absolute",
            left: 0,
            bottom: 325,
            top: 0,
            margin: "auto",
            right: 0,
            color:'black',
            borderRadius: 5        
         }}
         onKeyPress={onKeyPress}
        > */}
        <SearchIcon onClick={navigateInfo} sx={{ cursor: "pointer" }} />
        {/* <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search for a client"
            inputProps={{ "aria-label": "search google maps" }}
          
          />
          <SearchBox/>
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
          ></IconButton> */}
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
          options={countries}
          className={styles.header_img}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search for a client"
              variant="outlined"
              onKeyPress={onKeyPress}
            />
          )}
        />
        {/* </Paper> */}
      </Grid>
    </Grid>
  );
};

export default Search;
