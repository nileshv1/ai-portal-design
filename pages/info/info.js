import React from 'react'
import { Grid, Box, Typography, Button,TextField ,IconButton} from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from '@mui/material/colors';
import Image from "next/image";
import stylesInfo from "../../styles/info/info.module.css";
import BackgroundImage from "@/components/background-image";
import { nn_logo, img1, img2, img3, img4 } from "@/public/images";
import { useEffect, useState } from "react";
// import styles from "../../styles/style.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";
import Link from 'next/link';


const Info = () => {
    const selectedUser = useSelector((state) => state.api.selectedUser);
    const fullName = selectedUser?.FirstName + selectedUser?.Name
    console.log(fullName, "fullName")
    const graphData = useSelector((state) => state.graphapi.graphResponse);
    console.log(graphData,"graphData")
    const uniquePolicies = {};
    graphData.forEach((item) => {
        const policyNumber = item.policy.policyNumber;
        const policyVersionNumber = parseInt(item.policy.policyVersionNumber);
        const policyType = item.policy.policyType;
        const spkey = policyNumber + policyType
    
     
    
        // Check if the policyType exists in the uniquePolicies object
        if (!uniquePolicies.hasOwnProperty(spkey)) {
            // If it doesn't exist, add the entire object
            uniquePolicies[spkey] = item;
        } else {
            // If it exists, compare the policyVersionNumber and update if greater
            if (policyVersionNumber > parseInt(uniquePolicies[spkey].policy.policyVersionNumber)) {
                uniquePolicies[spkey] = item;
            }
        }
    });
    
    // Convert the uniquePolicies object into an array of objects
    const graphResponse = Object.values(uniquePolicies);
    console.log(graphResponse, "result filter data");
    const result = graphData[graphData?.length-1]
    // console.log(resultAPI, "resultAPI")
    // const result = JSON.parse(localStorage.getItem("result"))
    console.log(result, "result")
    const policyData = result?.policy
    const partyData = result?.party[result.party.length - 1]
    const vehicleData = result?.vehicle[0]
    const buildingeData = result?.building[0]
    const coverageBuilding = result?.building[0]?.coverage.map(coverage => coverage.coverageType)
    const coverageCar = result?.vehicle[0]?.coverage.map(coverage => coverage.coverageType)
    const policyType = policyData?.policyType =="Car"?"Car":"Home"

    const themeinfo = createTheme({
        typography: {
            subtitle2: {
                fontSize: 16,
                fontWeight: 550,
            },
            h3: {
                fontSize: 24,
                fontWeight: "bold"
            },
            h4:{
                fontSize: 16,
                fontWeight: 'bold',
            },
            h5: {
                fontSize: 16,
                // fontWeight: "bold"
            },
            h4:{
                fontSize:18
            }

        },
    });
    moment.updateLocale('en', {
        relativeTime: {
          past: '%s old',
        },
      });   
  const { push } = useRouter();
  const navigateToHome = () => {
    push("/home");
  };
  const [que, setQue] = useState(false);
 const handleSend = () => {
       setQue(!que);
 }
  
    return (
        <ThemeProvider theme={themeinfo}>
            <Grid >
            <BackgroundImage props={true} />
            <Box sx={{ mx: "auto", width: { xs: "90%", md: "100%",sm:"95%" } ,overflow: 'auto' , height:'100vh'}} border="0px solid green" 
             style={{position: "absolute",
                left: 0,
                right: 0,
                top: 80,
                bottom: 60,
                margin: "auto"}}
               >
            
                {/* //first half */}
                <Grid container spacing={2} sx={{ mb: 2, pl:{xs:0, md:2} }} border="0px solid pink" mt={4}>
                    {/* First Block */}
                    <Grid container item sm={4} sx={{height: {xs:"50vh",sm:"60vh",md:"80vh",lg:"40vh"}}} display="flex" justifyContent="center"  border="0px solid orange" >
                        <Grid container item md={11} sx={{ borderRadius: '24px', pt: 2, pl: 2, pb: 1, pr: 4 }} className={stylesInfo.whiteBg} border="0px solid blue">
                            <Box sx={{ display: "flex", flexDirection: "column",width:"100%" }} border="0px solid blue">
                                <Box display="flex" alignItems="center" sx={{width:"100%"}} border="0px solid pink">
                                    <Image
                                        src="/images/person.svg"
                                        width={40}
                                        height={40}
                                        alt="Picture of the Person"
                                    />
                                    <Typography sx={{fontWeight:"bold",fontSize:{xs:20,md:22,sm:20}}} >{selectedUser?.FirstName + " " + selectedUser?.Name}</Typography>
                                </Box>
                                <Box sx={{ pl: 1 , width:"100%"}}  border="0px solid orange">
                                    <Typography variant="h5" component="span">{moment(selectedUser?.BirthDate).format("DD MMM YYYY")+ ", " }</Typography>
                                    <Typography variant="h5" component="span" sx={{fontWeight: 'bold'}}>{moment(selectedUser?.BirthDate).fromNow() }</Typography>
                                    <Typography variant="h5">{selectedUser?.MobilePhoneNumber}</Typography>
                                    <Typography variant="h5" sx={{ pb: 2, width:"100%" }} border="0px solid orange">
                                        <Link href="/" style={{ display: "inline-block", maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                            {selectedUser?.EmailAddress}
                                        </Link> 
                                    </Typography>                                                  
                                    <Typography variant="h5">{selectedUser?.FullAddress}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                   
                   {graphResponse?.length>0 && graphResponse.map((policy)=>{
                        console.log(policy,"policy")
                        console.log(policy.vehicle,"vehicle")
                        // console.log(policy.vehicle[0].coverage,"vehicle")
                        console.log(policy?.party,"party")
                        console.log(policy?.building,"building")

                        const partyFilter = policy?.party?.filter((p) => p.firstName + p.lastName === fullName)
                        return (
                        <>
                        {/* Second Block */}
                    {policy?.building?.length>0 ?
                    <Grid container item sm={4} sx={{height: {xs:"50vh",sm:"60vh",md:"80vh",lg:"40vh"}}} display="flex" justifyContent="center" border="0px solid orange" >
                        <Grid container item md={11} sx={{ borderRadius: '24px', pt: 2, pl: { xs: 2, md: 5 }, pb: 1, pr: 3 }} className={stylesInfo.whiteBg} border="0px solid blue">
                            <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: { xs: "column", md: "row" }, width: { xs: "100%" } }} border="0px solid red">
                                <Box border="0px solid red">
                                    <Box display="flex" sx={{ pb: 2 }} >
                                        <Image
                                            src="/images/home.svg"
                                            width={50}
                                            height={50}
                                            alt="Picture of the author"

                                        />
                                        <Grid sx={{ ml: 2 }}>
                                            <Typography sx={{fontWeight:"bold",fontSize:{xs:20,md:22,sm:20}}}>{policy?.policy?.policyType}</Typography>
                                            <Typography variant="h5">{policy?.policy?.policyNumber}</Typography>
                                        </Grid>
                                    </Box>
                                    <Typography variant="h5" sx={{ pb: 2, pl: 2 }}>{policy?.building[0]?.street} {policy?.building[0]?.streetNumber}, {policy?.building[0]?.city}</Typography>
                                    <Typography variant="h5" sx={{ pl: 2, mb: { xs: 2, md: 0 } }}>{policy?.policy?.policyStartDate} – {policy?.policy?.policyEndDate}</Typography>
                                </Box>

                                <Box sx={{ display: "flex", flexDirection: "column", pt: 1,height:{xs:"15vh",md:"30vh",sm:"15vh"},overflowY:"auto" }} border="0px solid green">
                                    {partyFilter.map((cov, index) => (  
                                    <Button variant="contained" xs={12} sx={{ mb: 1, height: "26px", fontSize: "8px", backgroundColor: grey[600] , width: "100%",}}>{cov.partyRole}</Button>))
                                    }                              
                                    {
                                    policy?.building[0]?.coverage.map((cov, index) => (  
                                    <Button key={index} variant="contained" sx={{mb: 1, height: "26px", fontSize: "8px", backgroundColor: grey[900],  width: "100%", }}>{cov.coverageType}</Button>))
                                    }
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>:<></>}
                    
                    {/* third Block */}
                    {policy?.vehicle?.length>0 ?
                   <Grid container item sm={4} sx={{height: {xs:"50vh",sm:"60vh",md:"80vh",lg:"40vh"}}} display="flex" justifyContent="center" border="0px solid orange" >
                        <Grid container item md={11} sx={{ borderRadius: '24px', pt: 2, pl: { xs: 2, md: 5 }, pb: 1, pr: 3 }} className={stylesInfo.whiteBg} border="0px solid blue">
                            <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: { xs: "column", md: "row" }, width: { xs: "100%" } }} border="0px solid red">
                                <Box border="0px solid red">
                                    <Box display="flex" sx={{ pb: 2 }} >
                                        <Image
                                            src="/images/car.svg"
                                            width={60}
                                            height={60}
                                            alt="Picture of the Car"
                                        />
                                        <Box sx={{ ml: 2}}>
                                            <Typography sx={{fontWeight:"bold",fontSize:{xs:20,md:22,sm:20}}}>{policy?.policy?.policyType}</Typography>
                                            <Typography variant="h5">{policy?.policy?.policyNumber}</Typography>
                                        </Box>
                                    </Box>
                                    <Typography variant="h5" sx={{ pl: 2 }}>{policy?.vehicle[0]?.make} {policy?.vehicle[0]?.model}</Typography>
                                    <Typography variant="h5" sx={{ pl: 2 }}>{policy?.vehicle[0]?.licensePlate}</Typography>
                                    <Typography variant="h5" sx={{ pl: 2, mb: { xs: 2, md: 0 } }}>{policy?.policy?.policyStartDate} – {policy?.policy?.policyEndDate}</Typography>
                                </Box>

                                <Box sx={{ display: "flex", flexDirection: "column", pt: 1,height:{xs:"15vh",md:"30vh",sm:"15vh"},overflowY:"auto" }} border="0px solid green">
                                    {policy?.party.map((cov, index) => (  
                                    <Button key={index} variant="contained" xs={12} sx={{ mb: 1, height: "26px", fontSize: "8px", backgroundColor: grey[600],  width: "100%", }}>{cov.partyRole}</Button>))}
                                    {/* <Button variant="contained" xs={12} sx={{ mb: 1, height: "26px", fontSize: "8px", backgroundColor: grey[600] }}>{partyData?.partyRole=="Policy Holder"?"Main driver":"Main driver"}</Button> */}
                                    {policy.vehicle[0].coverage.map((cov, index) => (  
                                    <Button key={index} variant="contained" sx={{mb: 1, height: "26px", fontSize: "8px", backgroundColor: grey[900],  width: "100%", }}>{cov.coverageType}</Button>))
                                    }
                                   
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>:<></>}
                                   
                   </>
                   )})}

                </Grid>

                {/* //second half */}
                <Grid container spacing={2} sx={{ display: "flex", flexDirection: { xs: "column-reverse", sm: "row" }  }} >

                    {/* search Block */}
                    <Grid container item sm={8} display="flex" justifyContent="center" border="0px solid orange" >
                        {/* /question answer block */}
                        <Grid container item md={11}  minHeight="auto" sx={{ borderRadius: '24px', pt: 2,mb:2, pl: { xs: 2}, pb: 1, pr: 3, 
                               visibility: que?'block':"hidden"
                                  }}  className={stylesInfo.whiteBg} border="0px solid purple">
                            <Box sx={{ display: "flex",flexDirection: "column", width: { xs: "100%" } }} border="0px solid red">
                               <Box sx={{ display:"flex",flexDirection:"row", alignItems:"center", width: { xs: "100%" }}}>
                                    <Image
                                        src="/images/answer.svg"
                                        width={30}
                                        height={30}
                                        alt="Picture of the back"
                                    />
                                    <Box>
                                        <Typography variant="h4" sx={{  ml:1,mb:{xs:1}, pr:{xs:1,md:18},pt:1,pl:1,pb:1, width:"74%",backgroundColor:grey[300] }}>There is an open invoice for Policy 30001256. James Bond still needs to pay 234€</Typography>
                                    </Box>
                               </Box>
                               <Box sx={{ display:"flex",flexDirection:"row-reverse", alignItems:"center"}}>
                                    <Image
                                        src="/images/question.svg"
                                        width={30}
                                        height={30}
                                        alt="Picture of the back"
                                    />
                                    <Box>
                                        <Typography variant="h4" sx={{ mb: 1, ml:1,pr:2,pt:1,pl:1,pb:1,mr:1,backgroundColor:grey[900], color:"white" }}>Is he covered for storm ? </Typography>
                                    </Box>
                               </Box>
                            </Box>
                        </Grid>

                        {/* //type your question */}
                        <Grid container item md={11} sx={{ borderRadius: '24px',mb:2, pt: 2, pl: { xs: 2, md: 5 }, pb: 1, pr: 3 }} className={stylesInfo.whiteBg} border="0px solid blue">
                            <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", width: { xs: "100%" } }} border="0px solid red">
                               <Box sx={{ display: "flex", flexDirection: "row" }}>
                                   <TextField
                                        id="outlined-multiline-static"
                                        multiline
                                        fullWidth
                                        rows={1}
                                        sx={{ outline:"none", border: 'none'}}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><Image
                                            src="/images/search.svg"
                                            width={30}
                                            height={30}
                                            alt="Picture of the back"
                                        /></InputAdornment>,
                                          }}
                                        defaultValue="Is he covered for storm ?"                            
                                    />
                               </Box>
                               <Box sx={{ display:"flex",flexDirection:"row-reverse"}}>
                                    <IconButton aria-label="delete"
                                    onClick={() => handleSend()}>
                                        <Image
                                            src="/images/send.svg"
                                            width={30}
                                            height={30}
                                            alt="Picture of the back"
                                        />
                                    </IconButton>
                               </Box>
                            </Box>
                        </Grid>

                    </Grid>


                    {/* vertical Block */}
                    <Grid container item sm={4} display="flex" justifyContent="center" border="0px solid orange" >
                        {/* /fourth block */}
                        <Grid container item md={11} sx={{ borderRadius: '24px', mb: 2, pt: 2, pl: { xs: 2, md: 5 }, pb: 1, pr: 3 }} className={stylesInfo.whiteBg} border="0px solid blue">
                            <Box sx={{ display: "flex", flexDirection: "column", width: { xs: "100%" }, pr: { lg: 8, xs: 1, sm: 2 } }} border="0px solid red">
                                <Typography variant="h3" sx={{ mb: 1 }}>Attention Points</Typography>
                                <Box sx={{ display: "flex", flexDirection: "row", mb: 1 }}>
                                    <Image
                                        src="/images/back.svg"
                                        width={30}
                                        height={30}
                                        alt="Picture of the back"
                                    />
                                    <Typography variant="h5" sx={{ pl: 1 }}>Remind the client to pay his invoice: 234€ for his H&F Policy</Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "row" }}>
                                    <Image
                                        src="/images/back.svg"
                                        width={30}
                                        height={30}
                                        alt="Picture of the back"
                                    />
                                    <Typography variant="h5" sx={{ pl: 1 }}>Check the email address, it might be wrong</Typography>
                                </Box>
                            </Box>
                        </Grid>

                        {/* /fifth block */}
                        <Grid container item md={11} sx={{ borderRadius: '24px', mb: 2, pt: 2, pl: { xs: 2, md: 5 }, pb: 1, pr: 3 }} className={stylesInfo.whiteBg} border="0px solid blue">
                            <Box sx={{ display: "flex", flexDirection: "column", width: { xs: "100%" }, pr: { lg: 7, xs: 1, sm: 2 } }} border="0px solid red">
                                <Typography variant="h3" sx={{ mb: 1 }}>Attention Points</Typography>
                                <Box sx={{ display: "flex", flexDirection: "row", mb: 1 }}>
                                    <Image
                                        src="/images/back.svg"
                                        width={30}
                                        height={30}
                                        alt="Picture of the back"
                                    />
                                    <Typography variant="h5" sx={{ pl: 1 }}>Risk or churn. Propose “Summer” discount.</Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "row" }}>
                                    <Image
                                        src="/images/back.svg"
                                        width={30}
                                        height={30}
                                        alt="Picture of the back"
                                    />
                                    <Typography variant="h5" sx={{ pl: 1 }}>Upsell Car Policy: Mini-Omnium upgrade to Omnium is an additional 15 euros per month.</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            </Grid>
        </ThemeProvider>
    )
}

export default Info