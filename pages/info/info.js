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
  Switch
} from "@mui/material";
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

const Info = () => {
  const boxRef = useRef(null);
  const selectedUser = useSelector((state) => state.api.selectedUser);
  const fullName = selectedUser?.FirstName + selectedUser?.Name;
  console.log(fullName, "fullName");
  const graphData = useSelector((state) => state.graphapi.graphResponse);
  console.log(graphData, "graphData");
  const uniquePolicies = {};
  graphData.forEach((item) => {
    const policyNumber = item.policy.policyNumber;
    const policyVersionNumber = parseInt(item.policy.policyVersionNumber);
    const policyType = item.policy.policyType;
    const spkey = policyNumber + policyType;

    // Check if the policyType exists in the uniquePolicies object
    if (!uniquePolicies.hasOwnProperty(spkey)) {
      // If it doesn't exist, add the entire object
      uniquePolicies[spkey] = item;
    } else {
      // If it exists, compare the policyVersionNumber and update if greater
      if (
        policyVersionNumber >
        parseInt(uniquePolicies[spkey].policy.policyVersionNumber)
      ) {
        uniquePolicies[spkey] = item;
      }
    }
  });

  // Convert the uniquePolicies object into an array of objects
  const graphResponse = Object.values(uniquePolicies);
  console.log(graphResponse, "result filter data");
  const result = graphData[graphData?.length - 1];
  // console.log(resultAPI, "resultAPI")
  // const result = JSON.parse(localStorage.getItem("result"))
  console.log(result, "result");
  const policyData = result?.policy;
  const partyData = result?.party[result.party.length - 1];
  const vehicleData = result?.vehicle[0];
  const buildingeData = result?.building[0];
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const coverageBuilding = result?.building[0]?.coverage.map(
    (coverage) => coverage.coverageType
  );
  const coverageCar = result?.vehicle[0]?.coverage.map(
    (coverage) => coverage.coverageType
  );
  const policyType = policyData?.policyType == "Car" ? "Car" : "Home";

  const handleNext = () => {
    if (currentIndex < graphResponse.length - 1) {
      setCurrentIndex(currentIndex + 2);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 2);
    }
  };
  const [inputValue, setInputValue] = useState('');
  const [que, setQue] = useState("");
  const [btnClick, setBtnClick] = useState(false)
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSend = () => {
    setBtnClick(true)
    // dispatch(que)
    apiResponse.push({
      result: {
        user: inputValue
      }
    })
    var x = 5;
    var intervalID = setInterval(() => {
      if (boxRef.current) {
        console.log(boxRef.current.scrollTop, boxRef.current.scrollHeight);
        boxRef.current.scrollTop = boxRef.current.scrollHeight;
      }
      if (x === 5) {
        console.log(x, "x");
        clearInterval(intervalID);
      }
    }, 200);
    setApiResponse(apiResponse)
    setInputValue("");
  };
  console.log(inputValue, "inputValue")
  console.log(btnClick, "btnClick")
 
  const handleEnter = (e) => {
    console.log(e,"key")
    if (e.key == "Enter" && inputValue !== '') {
      console.log(e.key,"key")
      setBtnClick(true)
      // dispatch(que)
      apiResponse.push({
        result: {
          user: inputValue
        }
      })
      var x = 5;
      var intervalID = setInterval(() => {
        if (boxRef.current) {
          console.log(boxRef.current.scrollTop, boxRef.current.scrollHeight);
          boxRef.current.scrollTop = boxRef.current.scrollHeight;
        }
        if (x === 5) {
          console.log(x, "x");
          clearInterval(intervalID);
        }
      }, 200);
      setApiResponse(apiResponse)
      setInputValue("");

    }
  }
  const [apiResponse, setApiResponse] = useState(
    [
      {
        "result": {
          "user": "Give me a short factual overview in bullet points in order of importance and if there is something to say, on: the financial situation, the recent changes on the policy, missing important data and any open claims for undefined undefined. Don't add any other comments or closing phrases. No need to give an overview of his policies. No need to tell if there is no claim, no recent changes, no missing data",
          "bot": "- Financial situation: There is one open invoice of 38.59 euro on policy 60113287.\n- Recent changes on the policy: On 11-09-2023, the policy 60112546 was in state Change object and guarantees.\n- Missing important data: The client is missing an email address.\n- Open claims: The client has 4 open claims on his policies."
        }
      },
      {
        "result": {
          "user": "Give me a short factual overview in bullet points in order of probability to materialize of Upsell opportunities for undefined undefined. Don't add any other comments or closing phrases. Don't add the probabilities in the answer. Emphasize important words by putting those between this symbol '*'",
          "bot": "- Upsell opportunity: Policy 60112550 covers a recent car but without *Mini-Omnium* nor *Omnium*. It is recommended to have a better coverage for a recent car. Propose to upgrade to *Mini-Omnium* or *Omnium* to the client.\n- Upsell opportunity: Policy 60112546 has no family coverage. *Civil liability insurance* is not mandatory in Belgium, but it is strongly recommended to avoid having to pay heavy compensation in case of damage caused to others.\n- Upsell opportunity: Policy 60113287 has no family coverage. *Civil liability insurance* is not mandatory in Belgium, but it is strongly recommended to avoid having to pay heavy compensation in case of damage caused to others."
        }
      },
      {
        "result": {
          "user": "Repeat the following phrase: '- Car Summer Discount has been extended till *31/9*'",
          "bot": "I apologize for the confusion, but the phrase you provided is incorrect. There are only 30 days in September, so the date \"31/9\" is not valid. Please provide a correct date."
        }
      }

    ])



  const data = [
    {
      title: "Attention Points",
      bot: [
        "- Financial situation: There is one open invoice of 38.59 euro on policy 60113287.",
        "- Recent changes on the policy: On 11-09-2023, the policy 60112546 was in state Change object and guarantees.",
        "- Missing important data: The client is missing an email address.",
        "- Open claims: The client has 4 open claims on his policies.",
      ],
    },
    {
      title: "Upsell Opportunities",
      bot: [
        "- Upsell opportunity: Policy 60112550 covers a recent car but without *Mini-Omnium* nor *Omnium*. It is recommended to have a better coverage for a recent car. Propose to upgrade to *Mini-Omnium* or *Omnium* to the client.",
        "- Upsell opportunity: Policy 60112546 has no family coverage. *Civil liability insurance* is not mandatory in Belgium, but it is strongly recommended to avoid having to pay heavy compensation in case of damage caused to others.",
        "- Upsell opportunity: Policy 60113287 has no family coverage. *Civil liability insurance* is not mandatory in Belgium, but it is strongly recommended to avoid having to pay heavy compensation in case of damage caused to others.",
      ],
    },
    {
      title: "Current Discounts",
      bot: [
        'I apologize for the confusion, but the phrase you provided is incorrect. There are only 30 days in September, so the date "31/9" is not valid. Please provide a correct date.',
      ],
    },
    {
      title: "Some fun news",
      bot: [
        'I\'m sorry, but the phrase you provided is incorrect. There are only 30 days in September, so the date "31/9" is not valid. Please provide a correct date.',
      ],
    },
  ];

  const allItemsWithKeys = data.reduce((accumulator, obj) => {
    return accumulator.concat(
      obj.bot.map((item) => ({ title: obj.title, bot: item }))
    );
  }, []);

  const themeinfo = createTheme({
    typography: {
      subtitle2: {
        fontSize: 16,
        fontWeight: 550,
      },
      h3: {
        fontSize: 24,
        fontWeight: "bold",
      },
      h4: {
        fontSize: 16,
        fontWeight: "bold",
      },
      h5: {
        fontSize: 16,
        // fontWeight: "bold"
      },
      h4: {
        fontSize: 18,
      },
    },
  });
  moment.updateLocale("en", {
    relativeTime: {
      past: "%s old",
    },
  });
  const { push } = useRouter();
  const navigateToHome = () => {
    push("/home");
  };


  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuesIndex, setCurrentQuesIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const handleQuestionNext = () => {
    if (currentQuesIndex < allItemsWithKeys.length - 1) {
      setCurrentQuesIndex(currentQuesIndex + 2);
    }
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleQuestionPrevious = () => {
    if (currentQuesIndex > 0) {
      setCurrentQuesIndex(currentQuesIndex - 2);
    }
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <ThemeProvider theme={themeinfo}>
      <Grid>
        <BackgroundImage props={true} />
        <Box
          sx={{
            mx: "auto",
            width: { xs: "90%", md: "100%", sm: "95%" },
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
          }}
        >
          {/* //first half */}
          <Box
            spacing={2}
            sx={{
              mb: 1,
              pl: { xs: 0, md: 2 },
              // height: "45vh",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
            }}
            border="0px solid pink"
            mt={1}
          >
            {/* First Block */}
            <Card
              sx={{
                width: { lg: "30vw", md: "25vw", sm: "22vw" },
                height: { lg: "36vh", md: "42vh", sm: "58vh" },
                borderRadius: "24px",
                pt: 2,
                pl: 2,
                pb: 1,
                pr: 4,
              }}
              display="flex"
              justifyContent="center"
              border="0px solid orange"
              className={stylesInfo.whiteBg}
            // border="2px solid blue"
            >
              <CardContent
                display="flex"
                alignItems="center"
                sx={{ width: "100%" }}
                border="0px solid pink"
              >
                <Image
                  src="/images/person.svg"
                  width={40}
                  height={40}
                  alt="Picture of the Person"
                />
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: 20, md: 22, sm: 20 },
                  }}
                >
                  {selectedUser?.FirstName + " " + selectedUser?.Name}
                </Typography>
                <Typography variant="h5" component="span">
                  {moment(selectedUser?.BirthDate).format("DD MMM YYYY") + ", "}
                </Typography>
                <Typography
                  variant="h5"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  {moment(selectedUser?.BirthDate).fromNow()}
                </Typography>
                <Typography variant="h5">
                  {selectedUser?.MobilePhoneNumber}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ pb: 1, width: "100%" }}
                  border="0px solid orange"
                >
                  <Link
                    href="/"
                    style={{
                      display: "inline-block",
                      maxWidth: "100%",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {selectedUser?.EmailAddress}
                  </Link>
                </Typography>
                <Typography variant="h5">
                  {selectedUser?.FullAddress}
                </Typography>
              </CardContent>
            </Card>

            {graphResponse.length > 3 && (
              <Box
                sx={{
                  pt: { sm: "127px", xs: "10px" },
                  pl: { sm: "10px", xs: "120px" },
                }}
              >
                <IconButton
                  aria-label="delete"
                  size="medium"
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                  className={styles.disbaled}
                  sx={{
                    backgroundColor: "white",
                    color: grey[600],
                    borderRadius: "50%",
                  }}
                >
                  <ArrowBackIcon
                    fontSize="inherit"
                    sx={{ display: { xs: "none", sm: "block" } }}
                  />
                  <NorthIcon
                    fontSize="inherit"
                    sx={{ display: { xs: "block", sm: "none" } }}
                  />
                </IconButton>
              </Box>
            )}
            {graphResponse?.length > 0 &&
              graphResponse
                .slice(currentIndex, currentIndex + 2)
                .map((policy, index) => {
                  const partyFilter = policy?.party?.filter(
                    (p) => p.firstName + p.lastName === fullName
                  );
                  return (
                    <Box
                      // sx={{
                      //   transform: `translateX(-10%)`,
                      // }}
                      border="0px solid orange"
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                      }}
                    >
                      {/* Second Block */}

                      {policy?.building?.length > 0 ? (
                        <Card
                          key={index}
                          className={styles.card}
                          style={{
                            transform: `translateX(0%)`,
                          }}
                          sx={{
                            mx: { xs: 0, sm: 1, md: 2 },
                            my: { xs: 2, sm: 0 },
                            width: { lg: "30vw", md: "25vw", sm: "22vw" },
                            height: { lg: "36vh", md: "42vh", sm: "58vh" },
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            borderRadius: "24px",
                            pt: 2,
                            pl: { xs: 1 },
                            pb: 1,
                            pr: 2,
                          }}
                          border="0px solid blue"
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
                                  {policy?.policy?.policyType}
                                </Typography>
                                <Typography variant="h5">
                                  {policy?.policy?.policyNumber}
                                </Typography>
                              </Box>
                            </Box>
                            <Typography
                              variant="h5"
                              sx={{ pb: 1, pl: 2 }}
                              border="0px solid green"
                            >
                              {policy?.building[0]?.street}{" "}
                              {policy?.building[0]?.streetNumber},{" "}
                              {policy?.building[0]?.city}
                            </Typography>
                            <Typography
                              variant="h5"
                              sx={{ pl: 2, mb: { xs: 2, md: 0 } }}
                            >
                              {policy?.policy?.policyStartDate} –{" "}
                              {policy?.policy?.policyEndDate}
                            </Typography>
                          </CardContent>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              pt: 1,
                              height: {
                                xs: "15vh",
                                md: "30vh",
                                sm: "15vh",
                              },
                              overflowY: "auto",
                              md: 6,
                            }}
                            border="0px solid green"
                          >
                            {partyFilter.map((cov, index) => (
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
                            {policy?.building[0]?.coverage.map((cov, index) => (
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
                        </Card>
                      ) : (
                        <></>
                      )}
                      {/* third Block */}

                      {policy?.vehicle?.length > 0 ? (
                        <Card
                          key={index}
                          className={styles.card}
                          style={{
                            transform: `translateX(0%)`,
                          }}
                          sx={{
                            mx: { xs: 0, sm: 1, md: 2 },
                            my: { xs: 2, sm: 0 },
                            width: { lg: "30vw", md: "25vw", sm: "22vw" },
                            height: { lg: "36vh", md: "42vh", sm: "58vh" },
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            borderRadius: "24px",
                            pt: 2,
                            pl: { xs: 2, lg: 2 },
                            pb: 1,
                            pr: 2,
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
                                  {policy?.policy?.policyType}
                                </Typography>
                                <Typography variant="h5">
                                  {policy?.policy?.policyNumber}
                                </Typography>
                              </Box>
                            </Box>
                            <Typography variant="h5" sx={{ pl: 2, pb: 1 }}>
                              {policy?.vehicle[0]?.make}{" "}
                              {policy?.vehicle[0]?.model}
                            </Typography>
                            <Typography variant="h5" sx={{ pl: 2, pb: 1 }}>
                              {policy?.vehicle[0]?.licensePlate}
                            </Typography>
                            <Typography
                              variant="h5"
                              sx={{ pl: 2, pb: 1, mb: { xs: 2, md: 0 } }}
                            >
                              {policy?.policy?.policyStartDate} –{" "}
                              {policy?.policy?.policyEndDate}
                            </Typography>
                          </CardContent>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              pt: 1,
                              height: {
                                xs: "15vh",
                                md: "30vh",
                                sm: "15vh",
                              },
                              overflowY: "auto",
                            }}
                            border="0px solid green"
                          >
                            {policy?.party.map((cov, index) => (
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
                            {/* <Button variant="contained" xs={12} sx={{ mb: 1, height: "26px", fontSize: "8px", backgroundColor: grey[600] }}>{partyData?.partyRole=="Policy Holder"?"Main driver":"Main driver"}</Button> */}
                            {policy.vehicle[0].coverage.map((cov, index) => (
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
                        </Card>
                      ) : (
                        <></>
                      )}
                    </Box>
                  );
                })}
            {graphResponse.length > 3 && (
              <Box
                sx={{
                  pt: { sm: "127px", xs: "10px" },
                  pl: { sm: 0, xs: "120px" },
                }}
              >
                <IconButton
                  aria-label="delete"
                  size="medium"
                  onClick={handleNext}
                  disabled={currentIndex + 3 >= graphResponse.length}
                  sx={{
                    backgroundColor: "white",
                    color: grey[600],
                    borderRadius: "50%",
                  }}
                >
                  <ArrowForwardIcon
                    fontSize="inherit"
                    sx={{ display: { xs: "none", sm: "block" } }}
                  />
                  <SouthIcon
                    fontSize="inherit"
                    sx={{ display: { xs: "block", sm: "none" } }}
                  />
                </IconButton>
              </Box>
            )}
          </Box>
          {/* //second half */}
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", sm: "row" },
            }}
          >
            {/* search Block */}
            <Grid
              container
              item
              sm={7}
              display="flex"
              // justifyContent="center"
              flexDirection="coulmn"
              border="1px solid pink"


            >
              {/* /question answer block */}
              <Grid
                container
                item
                // md={11}
                // minHeight="auto"
                sx={{
                  borderRadius: "24px",
                  pt: 2,
                  mb: 2,
                  pl: { xs: 2 },
                  pb: 1,
                  pr: 3,
                  mt: { sm: 6, xs: 1 },
                  ml: { md: 3, sm: 1 },
                  visibility: apiResponse.length > 0 ? "block" : "hidden",
                  boxSizing: "border-box",
                  width: "100%",
                  height: { lg: "32vh", md: "40vh", sm: "38vh", xs: "28vh" }
                }}

                className={stylesInfo.whiteBg}
                border="0px solid purple"
              >
                <Box sx={{ height: "100%", overflowY: "auto", width: "100%" }}
                  ref={boxRef}
                  border="0px solid pink"
                >
                  {apiResponse.length > 0 &&
                    apiResponse.map((qna) => {
                      console.log(qna, "qna")
                      return (
                        <Box sx={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                        }}
                          border="2px solid green"
                        >
                          {/* Question */}
                          {qna.result.user && <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row-reverse",
                              alignItems: "center",

                            }}
                            border="0px solid orange"
                          >
                            <Image
                              src="/images/question.svg"
                              width={30}
                              height={30}
                              alt="Picture of the back"
                            />
                            <Box>
                              <Typography
                                variant="h4"
                                sx={{
                                  mb: 1,
                                  ml: 1,
                                  pr: 2,
                                  pt: 1,
                                  pl: 1,
                                  pb: 1,
                                  mr: 1,
                                  backgroundColor: grey[900],
                                  color: "white",
                                }}
                              >
                                {qna.result.user}
                              </Typography>
                            </Box>
                          </Box>}

                          {/* Answer */}
                          {qna.result.bot ? <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              width: { xs: "100%" },
                            }}
                          >
                            <Image
                              src="/images/answer.svg"
                              width={30}
                              height={30}
                              alt="Picture of the back"
                            />
                            <Box>
                              <Typography
                                variant="h4"
                                sx={{
                                  ml: 1,
                                  mb: { xs: 1 },
                                  pr: { xs: 1, },
                                  pt: 1,
                                  pl: 1,
                                  pb: 1,
                                  width: "90%",
                                  backgroundColor: grey[300],
                                }}
                              >
                                {qna.result.bot}
                              </Typography>
                            </Box>
                          </Box> : <><ThreeDots
                            height="15"
                            width="90"
                            radius="1"
                            color="#808080"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                          /></>}
                        </Box>

                      )
                    })
                  }
                </Box>

              </Grid>

              {/* //type your question */}
              <Grid
                container
                item
                sx={{
                  borderRadius: "24px",
                  mb: 2,
                  pt: 2,
                  pl: { xs: 2, md: 2 },
                  pb: 1,
                  pr: 3,
                  ml: { md: 3, sm: 1 },
                  boxSizing: "border-box",
                  height:"20vh"
                }}
                className={stylesInfo.whiteBg}
                border="1px solid blue"
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    width: { xs: "100%" },
                  }}
                  border="0px solid red"
                >
                  <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}
                    border="0px solid purple">
                    <Box sx={{
                      // width: { md: "80%", sm: "65%", xs: "65%" } 
                      width: "100%"
                    }}
                      border="0px solid purple"
                    >
                      <FormControl border="2px solid pink" fullWidth>
                        <TextField
                          variant="standard"
                          id="outlined-multiline-static"
                          // multiline
                          fullWidth
                          rows={1}
                          sx={{
                            outline: "none", border: "none", fontSize: "1rem",
                          }}
                          value={inputValue}
                          onChange={handleInputChange}
                          // error={inputValue == '' && btnClick}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Image
                                  src="/images/search.svg"
                                  width={30}
                                  height={30}
                                  alt="Picture of the back"
                                />
                              </InputAdornment>
                            ),
                            disableUnderline: true,
                          }}
                          defaultValue=""
                          onKeyPress = {(e) => handleEnter(e)}
                        />
                      </FormControl>
                    </Box>
                    <Box sx={{
                      display: "flex", alignItems: "center",
                      mr:2

                    }}
                      border="0px solid pink">
                      <Switch checked={checked}
                        onChange={handleChange} />
                      <Typography sx={{ width: "3rem" }}>short answers</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleSend()}
                      disabled={inputValue === ''}
                    >
                      <Image
                        src="/images/send.svg"
                        width={30}
                        height={30}
                        alt="Picture of the back"
                        style={{
                          filter: inputValue == '' ? 'blur(1px)' : "none"
                        }}
                      />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>

            </Grid>

            {/* vertical Block */}
            <Grid
              container
              item
              sm={5}
              sx={{
                mt: 2,
              }}
              display="flex"
              justifyContent="center"
              position="relative"
            >
              {/* /fourth block */}
              {data.length > 2 && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    marginRight: { md: 0, sm: "15px", xs: "6px" },
                  }}
                >
                  <IconButton
                    aria-label="delete"
                    size="medium"
                    onClick={handleQuestionPrevious}
                    disabled={currentQuesIndex === 0}
                    className={styles.disbaled}
                    sx={{
                      backgroundColor: "white",
                      color: grey[600],
                      borderRadius: "50%",
                    }}
                  >
                    <NorthIcon fontSize="inherit" />
                  </IconButton>
                </Box>
              )}
              <Box sx={{ margin: "30px 0", height: '100%' }}>
                {data &&
                  data
                    .slice(currentQuesIndex, currentQuesIndex + 2)
                    .map((item, index) => {
                      return (
                        <>
                          <Card
                            key={index}
                            className={styles.card}
                            style={{
                              transform: `translateX(0%)`,
                            }}
                            sx={{
                              width: { lg: "30vw", md: "25vw", sm: "22vw" },
                              height: { lg: "25vh", md: "30vh", sm: "40vh" },

                              borderRadius: "24px",
                              pt: 1,
                              pl: { xs: 2, lg: 2 },
                              pb: { md: 3, sm: 1, xs: 1 },
                              pr: 2,
                              ml: { md: 3, xs: 0 },
                              mr: { md: 0, sm: 0, xs: 0 },
                              mb: 3
                            }}
                          >
                            <Typography variant="h3" sx={{ mb: 1 }}>
                              {item.title}
                            </Typography>
                            <CardContent
                              sx={{ height: "20vh", overflowY: "auto" }}
                            >
                              {item.bot.map((comment) => {
                                return (
                                  <Box sx={{ display: "flex" }}>
                                    <Image
                                      src="/images/back.svg"
                                      width={30}
                                      height={30}
                                      alt="Picture of the back"
                                    />
                                    <Typography variant="h5" sx={{ pl: 0 }}>
                                      {comment}
                                    </Typography>
                                  </Box>
                                );
                              })}
                            </CardContent>
                          </Card>
                        </>
                      );
                    })}
              </Box>
              {data.length > 2 && (
                <Box sx={{ position: "absolute", bottom: 0 }}>
                  <IconButton
                    aria-label="delete"
                    size="medium"
                    onClick={handleQuestionNext}
                    disabled={currentQuesIndex + 2 >= data.length}
                    sx={{
                      backgroundColor: "white",
                      color: grey[600],
                      borderRadius: "50%",
                    }}
                  >
                    <SouthIcon fontSize="inherit" />
                  </IconButton>
                </Box>
              )}
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </ThemeProvider>
  );
};

export default Info;
