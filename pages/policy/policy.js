import React from "react";
import {
    Grid,
    Box,
    Typography,
    Button,
    TextField,
    IconButton,
    Card,
    CardContent,
    CardActions,
    FormControl,
    FormHelperText,
    Switch,
    Paper
} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import InputAdornment from "@mui/material/InputAdornment";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import { grey } from "@mui/material/colors";
import Image from "next/image";
import stylesInfo from "../../styles/info/info.module.css";
import BackgroundImage from "@/components/background-image";
import { nn_logo, img1, img2, img3, img4 } from "@/public/images";
import { useEffect, useState, useRef } from "react";
// import styles from "../../styles/style.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";
import Link from "next/link";
import { ThreeDots } from 'react-loader-spinner'
import styles from "../../styles/style.module.css";
import { setPolicyDetails } from "@/redux/slice/apiSearchSlice";

const Policy = () => {
    const policyDetails = useSelector((state) => state.api.policyDetails);
    console.log(policyDetails, "policyDetails")
    const selectedUser = useSelector((state) => state.api.selectedUser);
    console.log(selectedUser, "selectedUser")
    const fullName = selectedUser?.FirstName + selectedUser?.Name;
    const partyFilter = policyDetails?.party?.filter(
        (p) => p.firstName + p.lastName === fullName
    );

    const themeinfo = createTheme({
        typography: {
            h2: {
                fontSize: 30,
                fontWeight: "bold",
            },
            h3: {
                fontSize: 24,
                fontWeight: "bold",
            },
            h5: {
                fontSize: 16,
                // fontWeight: "bold"
              },

        },
    });

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            [theme.breakpoints.up('sm')]: {
                fontSize: 20, // Adjust font size for smaller screens
                paddingLeft: "8px",
                paddingRight: "8px"
            },

            [theme.breakpoints.down('sm')]: {
                fontSize: 14, // Adjust font size for smaller screens
                paddingLeft: "1px",
                paddingRight: "1px",

            },
            backgroundColor: grey[600],
            color: theme.palette.common.white,
            border: "3px solid white",
            paddingTop: "6px",
            paddingBottom: "6px",
        },
        [`&.${tableCellClasses.body}`]:
        {
            // fontSize: 18,
            [theme.breakpoints.up('sm')]: {
                fontSize: 18, // Adjust font size for smaller screens
                paddingLeft: "8px",
                paddingRight: "8px"
            },

            [theme.breakpoints.down('sm')]: {
                fontSize: 14, // Adjust font size for smaller screens
                paddingLeft: "1px",
                paddingRight: "1px",

            },
            fontWeight: "bold",
            border: "3px solid white",
            paddingTop: "4px",
            paddingBottom: "4px",


        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: grey[300],

        },
        '&:nth-of-type(even)': {
            backgroundColor: grey[100],
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            // border: 0,
            // backgroundColor: grey[900],
        },
    }));

    function createData(coverage, situation, proposal,) {
        return { coverage, situation, proposal };
    }

    const rows = [
        createData('Civil Liability', '28,78', '28,78'),
        createData('Mini- Omnium', '', '26,54'),
        createData('Omnium (400)', '', '45,32'),
        createData('Omnium (600)', '', '42,37'),
        createData('Omnium (800)', '', '40,58'),
        createData('Clothing', '8,65', '7,45'),
    ];
    const [ptotal,setPtotal] = useState(0)
    const [ctotal,setCtotal] = useState(0)
    

    return (
        <ThemeProvider theme={themeinfo}>
            <Grid>
                <BackgroundImage props={true} />
                <Box
                    sx={{
                        mx: "auto",
                        width: { xs: "96%", md: "100%", sm: "95%" },
                        overflow: "auto",
                        height: "100vh",

                    }}
                    border="0px solid green"
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 80,
                        bottom: 60,
                        margin: "auto",
                        boxSizing: "border-box"
                    }}
                >
                    <Box sx={{ mt: 4, display: "flex", flexDirection: { xs: "column", md: "row" }, boxSizing: "border-box" }}
                        border="0px solid pink">
                        {/* first block */}
                        <Box sx={{ width: { xs: "100%", md: "60vw" }, display: "flex", justifyContent: "center", alignItems: "center" }}
                            border="0px solid purple">
                            <Box sx={{
                                width: { xs: "100%", sm: "90%" }, borderRadius: "18px", py: 3, mb: 3,
                                display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"
                            }}
                                component={Paper} border="0px solid orange">
                                <Typography variant="h2" sx={{ width: "90%" }} border="0px solid orange">Policy Coverages Analysis</Typography>
                                <Typography variant="h5" sx={{ width: "100%",
                                mr:{sm:26,xs:14},
                                marginBottom: "1px", display: "flex", justifyContent: "flex-end" }}
                                    border="0px solid orange">
                                    In monthly prices
                                </Typography>
                                <TableContainer sx={{ display: "flex", justifyContent: "center", width: { xs: "100%", sm: "90%" } }} border="0px solid pink">
                                    <Table component={Paper} aria-label="customized table" >
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell align="left">Coverage</StyledTableCell>
                                                <StyledTableCell align="center">Current situation</StyledTableCell>
                                                <StyledTableCell align="center">Proposal</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            
                                            {rows.map((row) => {
                                                const [checked, setChecked] = React.useState(false);
                                                const onSelectClick=(event)=>{
                                                    console.log(row, "row")
                                                    setChecked(event.target.checked);
                                                    const newNumber1 = parseFloat(row.proposal.replaceAll(',', ''))
                                                    const newNumber2 = parseFloat(row.situation?.replaceAll(',', ''))
                                                    if(event.target.checked){
                                                        setPtotal(ptotal + newNumber1) 
                                                        setCtotal(ctotal + (newNumber2?newNumber2:0) )
                                                    }
                                                    else{
                                                        setPtotal(ptotal - newNumber1) 
                                                        setCtotal(ctotal - (newNumber2?newNumber2:0)) 
                                                    }
                                                    console.log(ptotal,"total")
                                                }
                                                return(
                                                <StyledTableRow key={row.coverage}>
                                                    <StyledTableCell align="left">
                                                        {row.coverage}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="right">{row.situation}</StyledTableCell>
                                                    <StyledTableCell align="right">{row.proposal}</StyledTableCell>
                                                    <StyledTableCell padding="checkbox" component={Paper} >
                                                        <Checkbox
                                                            color="primary"
                                                            // indeterminate={numSelected > 0 && numSelected < rowCount}
                                                            // checked={rowCount > 0 && numSelected === rowCount}
                                                            checked={checked}
                                                            onChange={onSelectClick}
                                                            inputProps={{
                                                                'aria-label': 'select all desserts',
                                                            }}
                                                        />
                                                    </StyledTableCell>
                                                </StyledTableRow>
                                            )})}
                                        </TableBody>
                                        <TableHead>
                                            <StyledTableRow>
                                                <StyledTableCell align="left">Total</StyledTableCell>
                                                <StyledTableCell align="right">{ctotal.toLocaleString("en-US")}</StyledTableCell>
                                                <StyledTableCell align="right">{ptotal.toLocaleString("en-US")}</StyledTableCell>
                                            </StyledTableRow>
                                        </TableHead>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Box>

                        {/* Second Block */}
                        <Box sx={{ width: { xs: "100%", md: "40vw" }, display: "flex", flexDirection: "column", alignItems: "center" }}
                            border="0px solid orange">
                            {policyDetails?.building?.length > 0 &&
                                <Card
                                    sx={{
                                        my: { xs: 2, sm: 0 },
                                        width: { xs: "90%", sm: "88%", md: "80%", },
                                        height: { lg: "26vh", md: "42vh", sm: "58vh" },
                                        display: "flex",
                                        flexDirection: { xs: "column", md: "row" },
                                        borderRadius: "24px",
                                        pt: 2,
                                        pl: { xs: 1 },
                                        pb: 1,
                                        pr: 2,
                                        mb: 2
                                    }}
                                >
                                    <CardContent
                                        className={styles.cardContent}
                                        sx={{ width: { md: "60%", xs: "100%" } }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                mb: 2,
                                            }}
                                        >
                                            <Image
                                                src="/images/home.svg"
                                                width={50}
                                                height={50}
                                                alt="Picture of the author"
                                            />
                                            <Box sx={{ ml: 1 }}>
                                                <Typography
                                                    sx={{
                                                        ml: 1,
                                                        fontWeight: "bold",
                                                        fontSize: { xs: 20, md: 22, sm: 20 },
                                                    }}
                                                >
                                                    {policyDetails?.policy?.policyType}
                                                </Typography>
                                                <Typography
                                                    variant="h5"
                                                    sx={{ cursor: "pointer", zIndex: 9 }}
                                                // onClick={() =>
                                                //     // handleImageClick(policy, index)
                                                // }
                                                >
                                                    {policyDetails?.policy?.policyNumber}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Typography
                                            variant="h5"
                                            sx={{ pb: 1, pl: 2 }}
                                            border="0px solid green"
                                        >
                                            {policyDetails?.building[0]?.street}{" "}
                                            {policyDetails?.building[0]?.streetNumber},{" "}
                                            {policyDetails?.building[0]?.city}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            sx={{ pl: 2, mb: { xs: 2, md: 0 } }}
                                        >
                                            {policyDetails?.policy?.policyStartDate} –{" "}
                                            {policyDetails?.policy?.policyEndDate}
                                        </Typography>
                                    </CardContent>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            pt: 1,
                                            height: {
                                                xs: "15vh",
                                                md: "26vh",
                                                sm: "15vh",
                                            },
                                            overflowY: "auto",
                                            md: 6,
                                        }}
                                        border="0px solid green"
                                    >
                                        {partyFilter?.map((cov, index) => (
                                            <Button
                                                variant="contained"
                                                xs={12}
                                                sx={{
                                                    mb: 1,
                                                    height: "26px",
                                                    fontSize: "8px",
                                                    backgroundColor: grey[600],
                                                    width: "100%",
                                                }}
                                            >
                                                {cov.partyRole}
                                            </Button>
                                        ))}
                                        {policyDetails?.building[0]?.coverage.map((cov, index) => (
                                            <Button
                                                key={index}
                                                variant="contained"
                                                sx={{
                                                    mb: 1,
                                                    height: "26px",
                                                    fontSize: "8px",
                                                    backgroundColor: grey[900],
                                                    width: "100%",
                                                }}
                                            >
                                                {cov.coverageType}
                                            </Button>
                                        ))}
                                    </Box>
                                </Card>}
                            {policyDetails?.vehicle?.length > 0 &&
                                <Card
                                    sx={{
                                        my: { xs: 2, sm: 0 },
                                        width: { xs: "90%", sm: "88%", md: "80%", },
                                        height: { lg: "26vh", md: "42vh", sm: "58vh" },
                                        display: "flex",
                                        flexDirection: { xs: "column", md: "row" },
                                        borderRadius: "24px",
                                        pt: 2,
                                        pl: { xs: 1 },
                                        pb: 1,
                                        pr: 2,
                                        mb: 2
                                    }}
                                >
                                    <CardContent
                                        className={styles.cardContent}
                                        sx={{ width: { md: "60%", xs: "100%" } }}
                                        border="0px solid green"
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                mb: 2,
                                            }}
                                            border="0px solid green"
                                        >
                                            <Image
                                                src="/images/car.svg"
                                                width={60}
                                                height={60}
                                                alt="Picture of the Car"
                                            />
                                            <Box sx={{ ml: 1 }} border="0px solid green">
                                                <Typography
                                                    sx={{
                                                        fontWeight: "bold",
                                                        fontSize: { xs: 20, md: 22, sm: 20 },
                                                        maxWidth: "60%",
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                    }}
                                                >
                                                    {policyDetails?.policy?.policyType}
                                                </Typography>
                                                <Typography
                                                    variant="h5"
                                                    sx={{ cursor: "pointer", zIndex: 9 }}
                                                //   onClick={() =>
                                                //     handleImageClick(policy, index)
                                                //   }
                                                >
                                                    {policyDetails?.policy?.policyNumber}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Typography variant="h5" sx={{ pl: 2, pb: 1 }}>
                                            {policyDetails?.vehicle[0]?.make}{" "}
                                            {policyDetails?.vehicle[0]?.model}
                                        </Typography>
                                        <Typography variant="h5" sx={{ pl: 2, pb: 1 }}>
                                            {policyDetails?.vehicle[0]?.licensePlate}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            sx={{ pl: 2, pb: 1, mb: { xs: 2, md: 0 } }}
                                        >
                                            {policyDetails?.policy?.policyStartDate} –{" "}
                                            {policyDetails?.policy?.policyEndDate}
                                        </Typography>
                                    </CardContent>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            pt: 1,
                                            height: {
                                                xs: "15vh",
                                                md: "26vh",
                                                sm: "15vh",
                                            },
                                            overflowY: "auto",
                                        }}
                                        border="0px solid green"
                                    >
                                        {policyDetails?.party.map((cov, index) => (
                                            <Button
                                                key={index}
                                                variant="contained"
                                                xs={12}
                                                sx={{
                                                    mb: 1,
                                                    height: "26px",
                                                    fontSize: "8px",
                                                    backgroundColor: grey[600],
                                                    width: "100%",
                                                }}
                                            >
                                                {cov.partyRole}
                                            </Button>
                                        ))}

                                        {policyDetails.vehicle[0].coverage.map((cov, index) => (
                                            <Button
                                                key={index}
                                                variant="contained"
                                                sx={{
                                                    mb: 1,
                                                    height: "26px",
                                                    fontSize: "8px",
                                                    backgroundColor: grey[900],
                                                    width: "100%",
                                                }}
                                            >
                                                {cov.coverageType}
                                            </Button>
                                        ))}
                                    </Box>
                                </Card>}
                            <Card
                                className={styles.card}
                                sx={{
                                    width: { xs: "90%", sm: "88%", md: "80%", },
                                    height: { lg: "22vh", md: "26vh", sm: "40vh" },
                                    borderRadius: "24px",
                                    pt: 2,
                                    pl: { xs: 2 },
                                    pb: { md: 0, sm: 1, xs: 1 },
                                    pr: 2,
                                    ml: { xs: 0 },
                                    mb: "19px",
                                    mt: 4,
                                }}
                            >
                                <Typography variant="h3" sx={{ mb: 1 }}>
                                    {/* {item.title} */}
                                    Attention Points
                                </Typography>
                                <CardContent
                                    sx={{ height: "10vh", overflowY: "auto" }}
                                >
                                    {/* {item.bot.map((comment) => {
                                return (
                                    );
                              })} */}
                                    <Box sx={{ display: "flex" }}>
                                        <Image
                                            src="/images/back.svg"
                                            width={30}
                                            height={30}
                                            alt="Picture of the back"
                                        />
                                        <Typography variant="h5" sx={{ pl: 0 }}>
                                            {/* {comment} */}
                                            Remin the client to pay his invoice for his H&F Policy 
                                        </Typography>
                                    </Box>

                                </CardContent>
                            </Card>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </ThemeProvider>
    );
};

export default Policy;
