import { Grid, IconButton, InputBase, Paper } from "@mui/material";
import React from "react";
import styles from "../../styles/style.module.css";
import BackgroundImage from "@/components/background-image";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  customClass: {
    width: 400,
    height: 70,
    "@media only screen and (max-width: 768px)": {
      width: 300,
      height: 50,
    },
    "@media only screen and (max-width: 600px)": {
      width: 200,
      height: 50,
    },
  },
}));


const Search = () => {

const { push } = useRouter();

const navigateInfo = () =>{
push('/info')
}

const onKeyPress = (e) => { if (e.key == 'Enter') { push('/info');e.preventDefault()}
;};

  const classes = useStyles();
  return (
    <Grid>
      <BackgroundImage props={true}/>
      <Grid item>
        <Paper
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
        >
          <SearchIcon onClick={navigateInfo} sx={{cursor:'pointer'}}/>
          <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search for a client"
            inputProps={{ "aria-label": "search google maps" }}
          
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
          ></IconButton>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Search;