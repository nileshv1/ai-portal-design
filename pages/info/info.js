import React from 'react'
import { Grid, Box, Typography, Button } from '@mui/material'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from '@mui/material/colors';
import Image from "next/image";

const Info = () => {

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
            h5: {
                fontSize: 16,
                // fontWeight: "bold"
            },

        },
    });

    return (
        <ThemeProvider theme={themeinfo}>
            <Box sx={{ mx: "auto", width: { xs: "90%", md: "100%" } }} border="0px solid green">
                {/* //first half */}
                <Grid container spacing={2} sx={{ mb:2}} border="0px solid pink">
                    {/* First Block */}
                    <Grid container item sm={4} display="flex" justifyContent="center" sx={{pr:{xs:0,md:4}}} border="1px solid orange" >
                        <Grid container item md={10} sx={{ borderRadius: '24px', pt: 2, pl: 2, pb: 1, pr: 4 }} border="2px solid blue">
                           <Box sx={{ display: "flex", flexDirection: "column"  }}>
                           <Box display="flex" alignItems="center">
                                <Image
                                    src="/images/person.svg"
                                    width={40}
                                    height={40}
                                    alt="Picture of the Person"
                                />
                                <Typography variant="h3">James Bond</Typography>
                            </Box>
                            <Box sx={{ pl: 1 }}>
                                <Typography variant="h5">7 Jan 1986, 36 years old</Typography>
                                <Typography variant="h5">0479/58 36 59</Typography>
                                <Typography variant="h5" sx={{ pb: 2 }}>james@bont.com </Typography>
                                <Typography variant="h5">Kerkstraat 9, Leuven </Typography>

                            </Box>
                           </Box>
                        </Grid>
                    </Grid>

                    {/* Second Block */}
                    <Grid container item sm={4} display="flex" justifyContent="center" border="1px solid orange" >
                        <Grid container item md={11} sx={{ borderRadius: '24px', pt: 2, pl: {xs:2, md:5}, pb: 1, pr: 3 }} border="2px solid blue">
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
                                            <Typography variant="h3">H&F P2</Typography>
                                            <Typography variant="h5">30001256</Typography>
                                        </Grid>
                                    </Box>
                                    <Typography variant="h5" sx={{ pb: 2, pl: 2 }}>Kerkstraat 9, Leuven</Typography>
                                    <Typography variant="h5" sx={{ pl: 2, mb:{xs:2, md:0} }}>1/5/2023 – 1/5/2024</Typography>
                                </Box>

                                <Box sx={{ display: "flex", flexDirection: "column", pt:1 }} border="0px solid green">
                                    <Button variant="contained" xs={12} sx={{ mb: 1, height: "26px", fontSize: "10px", backgroundColor: grey[600] }}>{"Policy Holder".toLowerCase()}</Button>
                                    <Button variant="contained" xs={12} sx={{ mb: 1, height: "26px", fontSize: "10px", backgroundColor: grey[900] }}>Content</Button>
                                    <Button variant="contained" xs={12} sx={{ mb: 1, height: "26px", fontSize: "10px", backgroundColor: grey[900] }}>Leg Assist</Button>
                                    <Button variant="contained" xs={12} sx={{ mb: 1, height: "26px", fontSize: "10px", backgroundColor: grey[900] }}>family</Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>


                    {/* third Block */}
                    <Grid container item sm={4} display="flex" justifyContent="center" border="1px solid orange" >
                        <Grid container item md={11} sx={{ borderRadius: '24px', pt: 2, pl: {xs:2, md:5}, pb: 1, pr: 3 }} border="2px solid blue">
                            <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: { xs: "column", md: "row" }, width: { xs: "100%" } }} border="0px solid red">
                                <Box border="0px solid red">
                                    <Box display="flex" sx={{ pb: 2 }} >
                                        <Image
                                            src="/images/car.svg"
                                            width={60}
                                            height={60}
                                            alt="Picture of the Car"

                                        />
                                        <Box sx={{ ml: 2 }}>
                                            <Typography variant="h3">Car P3</Typography>
                                            <Typography variant="h5">30001966</Typography>
                                        </Box>
                                    </Box>
                                    <Typography variant="h5" sx={{ pl: 2 }}>VW Golf</Typography>
                                    <Typography variant="h5" sx={{ pl: 2 }}>1-ABC-123</Typography>
                                    <Typography variant="h5" sx={{ pl: 2, mb:{xs:2, md:0} }}>1/5/2023 – 1/5/2024</Typography>
                                </Box>

                                <Box sx={{ display: "flex", flexDirection: "column", pt:1 }} border="0px solid green">
                                    <Button variant="contained" xs={12} sx={{ mb: 1, height: "26px", fontSize: "10px", backgroundColor: grey[600] }}>Main Driver</Button>
                                    <Button variant="contained" xs={12} sx={{ mb: 1, height: "26px", fontSize: "10px", backgroundColor: grey[900] }}>Omnium</Button>
                                    <Button variant="contained" xs={12} sx={{ mb: 1, height: "26px", fontSize: "10px", backgroundColor: grey[900] }}>Protect</Button>
                                    <Button variant="contained" xs={12} sx={{ mb: 1, height: "26px", fontSize: "10px", backgroundColor: grey[900] }}>Leg Assistant</Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                {/* //second half */}
                <Grid container spacing={2}  sx={{display:"flex", flexDirection:{xs:"column-reverse", sm:"row"}}} >

                    {/* search Block */}
                    <Grid container item sm={8} display="flex" justifyContent="center" border="1px solid orange" >
                        <Grid container item md={11} sx={{ borderRadius: '24px', pt: 2, pl: {xs:2, md:5}, pb: 1, pr: 3 }} border="2px solid blue">
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
                                            <Typography variant="h3">H&F P2</Typography>
                                            <Typography variant="h5">30001256</Typography>
                                        </Grid>
                                    </Box>
                                    <Typography variant="h5" sx={{ pb: 2, pl: 2 }}>Kerkstraat 9, Leuven</Typography>
                                    <Typography variant="h5" sx={{ pl: 2, mb:{xs:2, md:0} }}>1/5/2023 – 1/5/2024</Typography>
                                </Box>

                                <Box sx={{ display: "flex", flexDirection: "column", pt:1 }} border="0px solid green">
                                    <Button variant="contained" xs={12} sx={{ mb: 1, height: "26px", fontSize: "10px", backgroundColor: grey[600] }}>{"Policy Holder".toLowerCase()}</Button>
                                    <Button variant="contained" xs={12} sx={{ mb: 1, height: "26px", fontSize: "10px", backgroundColor: grey[900] }}>Content</Button>
                                    <Button variant="contained" xs={12} sx={{ mb: 1, height: "26px", fontSize: "10px", backgroundColor: grey[900] }}>Leg Assist</Button>
                                    <Button variant="contained" xs={12} sx={{ mb: 1, height: "26px", fontSize: "10px", backgroundColor: grey[900] }}>family</Button>
                                </Box>
                            </Box>
                        </Grid>
                        
                    </Grid>


                    {/* vertical Block */}
                    <Grid container item sm={4} display="flex" justifyContent="center" border="1px solid orange" >
                        {/* /fourth block */}
                        <Grid container item md={11} sx={{ borderRadius: '24px',mb:2, pt: 2, pl: {xs:2, md:5}, pb: 1, pr: 3 }}  border="2px solid blue">
                            <Box sx={{ display: "flex", flexDirection:"column",width: { xs: "100%" }, pr:{lg:8, xs:1, sm:2}}} border="0px solid red">
                                <Typography variant="h3" sx={{mb:1}}>Attention Points</Typography>
                                <Box sx={{ display: "flex", flexDirection:"row" ,mb:1}}>
                                    <Image
                                        src="/images/back.svg"
                                        width={30}
                                        height={30}
                                        alt="Picture of the back"
                                    />
                                    <Typography variant="h5" sx={{pl:1}}>Remind the client to pay his invoice: 234€ for his H&F Policy</Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection:"row" }}>
                                    <Image
                                        src="/images/back.svg"
                                        width={30}
                                        height={30}
                                        alt="Picture of the back"
                                    />
                                    <Typography variant="h5" sx={{pl:1}}>Check the email address, it might be wrong</Typography>
                                </Box>
                            </Box>
                        </Grid>

                        {/* /fifth block */}
                        <Grid container item md={11} sx={{ borderRadius: '24px',mb:2, pt: 2, pl: {xs:2, md:5}, pb: 1, pr: 3 }}  border="2px solid blue">
                            <Box sx={{ display: "flex", flexDirection:"column",width: { xs: "100%" }, pr:{lg:7, xs:1, sm:2}}} border="0px solid red">
                                <Typography variant="h3" sx={{mb:1}}>Attention Points</Typography>
                                <Box sx={{ display: "flex", flexDirection:"row" ,mb:1}}>
                                    <Image
                                        src="/images/back.svg"
                                        width={30}
                                        height={30}
                                        alt="Picture of the back"
                                    />
                                    <Typography variant="h5" sx={{pl:1}}>Risk or churn. Propose “Summer” discount.</Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection:"row" }}>
                                    <Image
                                        src="/images/back.svg"
                                        width={30}
                                        height={30}
                                        alt="Picture of the back"
                                    />
                                    <Typography variant="h5" sx={{pl:1}}>Upsell Car Policy: Mini-Omnium upgrade to Omnium is an additional 15 euros per month.</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    )
}

export default Info