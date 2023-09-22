import React, { useEffect, useRef, useState } from "react";
import { car, scooter, home, family } from "@/public/images";
import BackgroundImage from "@/components/background-image";
import {
  Box,
  Card,
  CardContent,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
  TextField,
  IconButton,
  FormControl,
  Switch,
} from "@mui/material";
import Image from "next/image";
import styles from "../styles/style.module.css";
import { grey } from "@mui/material/colors";
import stylesInfo from "../styles/info/info.module.css";
import InputAdornment from "@mui/material/InputAdornment";
import { ThreeDots } from "react-loader-spinner";

export default function Assistant() {
  const data = [
    {
      Order: 3,
      BoxType: "Simple Message",
      BoxTile_EN: "Current Discounts",
      BoxTile_FR: "Remises actuelles",
      BoxTile_NL: "Huidige kortingen",
      BoxTile_DE: "Aktuelle Rabatte",
      BoxAIQuestion_EN:
        "Code *CAR2023*, for ING Auto insurance and *HOME2023*, for home insurance each give 2 months free, i.e. 16.7% discount on the first year.\nTake out an ING Home Insurance *before 5 November 2023* inclusive.",
      BoxAIQuestion_FR:
        "Code *CAR2023*, pour l'assurance ING Auto et *HOME2023*, pour l'assurance habitation donnent chacun respectivement 2 mois gratuits, soit 16,7% de réduction sur la première année.\nSouscrivez à une ING Assurance Habitation *avant le 5 novembre 2023* inclus.",
      BoxAIQuestion_NL:
        "Code *CAR2023*, voor ING Autoverzekering en *HOME2023*, voor opstalverzekeringen geven elk 2 maanden gratis, d.w.z. 16,7% korting op het eerste jaar.\nSluit een ING Home Insurance af tot en met *5 november 2023*.",
      BoxAIQuestion_DE:
        "Code *CAR2023* für die ING Auto-Versicherung und *HOME2023* für die Hausratversicherung geben jeweils 2 Monate gratis, d.h. 16,7% Rabatt auf das erste Jahr.\nSchließen Sie eine ING-Hausratversicherung *bis einschließlich 5. November 2023* ab.",
    },
    {
      Order: 1,
      BoxType: "Simple Message", //New field to identify the type of box //Simple message: the BoxAIQuestion_XX is shown in the box including markdown
      BoxTile_EN: "NN Assistant",
      BoxTile_FR: "Assistant NN",
      BoxTile_NL: "NN Assistent",
      BoxTile_DE: "NN-Assistenten",
      BoxAIQuestion_EN:
        "Welcome to the *NN Assistant*! Ask any question and I'll help the best I can. To get product specific information, you can always select one of the products.",
      BoxAIQuestion_FR:
        "Bienvenue!. Posez n'importe quelle question et je vous aiderai du mieux que je peux. Pour obtenir des informations spécifiques à un produit, vous pouvez toujours le sélectionner.",
      BoxAIQuestion_NL:
        "Welkom bij de *NN Assistent*! Stel een vraag en ik zal mijn best doen om die te beantwoorden. Om productspecifieke informatie te krijgen, kunt u altijd een van de producten selecteren.",
      BoxAIQuestion_DE:
        "Willkommen beim *NN-Assistenten*! Stellen Sie eine Frage und ich helfe Ihnen so gut ich kann. Um produktspezifische Informationen zu erhalten, können Sie jederzeit eines der Produkte auswählen.",
    },
    {
      Order: 2,
      BoxType: "Simple Message",
      BoxTile_EN: "Help me !",
      BoxTile_FR: "Aidez-moi !",
      BoxTile_NL: "Help me !",
      BoxTile_DE: "Hilf mir !",
      BoxAIQuestion_EN:
        "I'm in my trial period. So please feel free to comment on my answers. I will use them to learn and improve. For each of my answers you can give a *positive* or *negative thumbs up*. Thanks in advance!",
      BoxAIQuestion_FR:
        "Je suis dans ma période d'essai. N'hésitez donc pas à commenter mes réponses. Je vais les utiliser pour apprendre et m'améliorer. Pour chacune de mes réponses, vous pouvez donner *un pouce positif* ou *négatif*. Merci d'avance!",
      BoxAIQuestion_NL:
        "Ik zit in mijn proefperiode. Aarzel dus niet om commentaar te geven op mijn antwoorden. Ik zal ze gebruiken om te leren en te verbeteren. Op elk van mijn antwoorden kun je een *positieve* of *negatieve duim geven*. Alvast bedankt!",
      BoxAIQuestion_DE:
        "Ich befinde mich in meiner Probephase. Kommentieren Sie also gerne meine Antworten. Ich werde sie nutzen, um zu lernen und mich zu verbessern. Auf jede meiner Antworten können Sie einen *positiven* oder *negativen Daumen* nach oben geben. Vielen Dank im Voraus!",
    },
  ];

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

  const [apiResponse, setApiResponse] = useState([
    {
      result: {
        user: "Give me a short factual overview in bullet points in order of importance and if there is something to say, on: the financial situation, the recent changes on the policy, missing important data and any open claims for undefined undefined. Don't add any other comments or closing phrases. No need to give an overview of his policies. No need to tell if there is no claim, no recent changes, no missing data",

        bot: "- Financial situation: There is one open invoice of 38.59 euro on policy 60113287.\n- Recent changes on the policy: On 11-09-2023, the policy 60112546 was in state Change object and guarantees.\n- Missing important data: The client is missing an email address.\n- Open claims: The client has 4 open claims on his policies.",
      },
    },

    {
      result: {
        user: "Give me a short factual overview in bullet points in order of probability to materialize of Upsell opportunities for undefined undefined. Don't add any other comments or closing phrases. Don't add the probabilities in the answer. Emphasize important words by putting those between this symbol '*'",

        bot: "- Upsell opportunity: Policy 60112550 covers a recent car but without *Mini-Omnium* nor *Omnium*. It is recommended to have a better coverage for a recent car. Propose to upgrade to *Mini-Omnium* or *Omnium* to the client.\n- Upsell opportunity: Policy 60112546 has no family coverage. *Civil liability insurance* is not mandatory in Belgium, but it is strongly recommended to avoid having to pay heavy compensation in case of damage caused to others.\n- Upsell opportunity: Policy 60113287 has no family coverage. *Civil liability insurance* is not mandatory in Belgium, but it is strongly recommended to avoid having to pay heavy compensation in case of damage caused to others.",
      },
    },

    {
      result: {
        user: "Repeat the following phrase: '- Car Summer Discount has been extended till *31/9*'",

        bot: 'I apologize for the confusion, but the phrase you provided is incorrect. There are only 30 days in September, so the date "31/9" is not valid. Please provide a correct date.',
      },
    },
  ]);

  const boxRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const [que, setQue] = useState("");

  const [btnClick, setBtnClick] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSend = () => {
    setBtnClick(true);

    setQue(inputValue);

    console.log(que, "q1");

    console.log(inputValue, "inputValue1");

    // dispatch(que)

    apiResponse.push({
      result: {
        user: inputValue,
      },
    });

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

    setApiResponse(apiResponse);

    setInputValue("");

    setQue("");
  };

  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const assistantImages = [
    { src: car, width: 60, height: 60, marginTop: "0px", alt: "" },
    {
      src: scooter,
      width: 60,
      height: 60,
      marginTop: "",
      alt: "",
    },
    {
      src: home,
      width: 60,
      height: 60,
      marginTop: "0px",
      alt: "",
    },
    { src: family, width: 60, height: 60, marginTop: "0px", alt: "" },
  ];
  const [highlightedImage, setHighlightedImage] = useState(null);

  const handleAssistantImageClick = (imageIndex) => {
    setHighlightedImage(imageIndex);
    if(imageIndex === highlightedImage){
      setHighlightedImage(null);
    }
  };

  return (
    <ThemeProvider theme={themeinfo}>
      <Grid>
        <BackgroundImage props={true} />
        <Box
          sx={{
            overflow: "auto",
            height: "100vh",
            width: { xs: "90%", md: "100%", sm: "95%" },
            mx: "auto",
          }}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 80,
            bottom: 60,
            mx: "auto",
          }}
        >
          <Grid container>
            <Grid container item sm={8}>
              <Grid
                container
                sx={{
                  display: "flex",
                  ml: { md: 2, xs: 0 },
                  justifyContent: { xs: "center", sm: "start" },
                }}
              >
                {assistantImages.map((image, index) => (
                  <Box>
                    <Image
                      key={image.id}
                      src={image.src}
                      alt={image.alt}
                      className={
                        index === highlightedImage ? styles.highlighted : ""
                      }
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: "20px",
                        padding: "12px",
                        margin: "8px",
                      }}
                      onClick={() => handleAssistantImageClick(index)}
                      width={image.width}
                      height={image.height}
                    />
                  </Box>
                ))}
              </Grid>
              {/* search Block */}
              <Grid
                container
                item
                display="flex"
                flexDirection="coulmn"
                border="0px solid pink"
              >
                {/* /question answer block */}
                <Grid
                  container
                  item
                  md={11}
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
                    height: { lg: "38vh", md: "40vh", sm: "38vh", xs: "28vh" },
                  }}
                  className={stylesInfo.whiteBg}
                  border="0px solid purple"
                >
                  <Box
                    sx={{ height: "100%", overflowY: "auto", width: "100%" }}
                    ref={boxRef}
                    border="0px solid pink"
                  >
                    {apiResponse.length > 0 &&
                      apiResponse.map((qna) => {
                        console.log(qna, "qna");
                        return (
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              width: "100%",
                            }}
                          >
                            {/* Question */}
                            {qna.result.user && (
                              <Box
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
                              </Box>
                            )}

                            {/* Answer */}
                            {qna.result.bot ? (
                              <Box
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
                                      pr: { xs: 1 },
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
                              </Box>
                            ) : (
                              <>
                                <ThreeDots
                                  height="15"
                                  width="90"
                                  radius="1"
                                  color="#808080"
                                  ariaLabel="three-dots-loading"
                                  wrapperStyle={{}}
                                  wrapperClassName=""
                                  visible={true}
                                />
                              </>
                            )}
                          </Box>
                        );
                      })}
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
                    width: { md: "92% !important", xs: "100%" },
                  }}
                  className={stylesInfo.whiteBg}
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
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                      border="0px solid purple"
                    >
                      <Box sx={{ width: { md: "80%", sm: "65%", xs: "65%" } }}>
                        <FormControl border="0px solid pink" fullWidth>
                          <TextField
                            variant="standard"
                            id="outlined-multiline-static"
                            multiline
                            fullWidth
                            rows={1}
                            sx={{
                              outline: "none",
                              border: "none",
                              fontSize: "1rem",
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
                          />
                        </FormControl>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: { md: "20%", sm: "35%", xs: "35%" },
                        }}
                        border="0px solid pink"
                      >
                        <Switch checked={checked} onChange={handleChange} />
                        <Typography sx={{ width: "2rem" }}>
                          short answers
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
                      <IconButton
                        aria-label="delete"
                        onClick={() => handleSend()}
                        disabled={inputValue === ""}
                      >
                        <Image
                          src="/images/send.svg"
                          width={30}
                          height={30}
                          alt="Picture of the back"
                          style={{
                            filter: inputValue == "" ? "blur(1px)" : "none",
                          }}
                        />
                      </IconButton>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item sm={4}>
              <Box sx={{ pl: { sm: 2, xs: 0, md: 0 } }}>
                {data &&
                  data.map((item, index) => {
                    return (
                      <>
                        <Card
                          key={index}
                          style={{
                            transform: `translateX(0%)`,
                          }}
                          sx={{
                            width: { lg: "28vw", md: "25vw", sm: "22vw" },
                            maxHeight: { lg: "22.3vh", md: "26vh", sm: "40vh" },

                            borderRadius: "24px",
                            pt: 1,
                            pl: { xs: 2, lg: 2 },
                            pb: { md: 0, sm: 1, xs: 1 },
                            pr: 2,
                            ml: { md: 3, xs: 0 },
                            mr: { md: 0, sm: 0, xs: 0 },
                            mb: "19px",
                            mt: "6px",
                          }}
                        >
                          <Typography variant="h3" sx={{ pl: 1 }}>
                            {item.BoxTile_EN}
                          </Typography>
                          <CardContent
                            sx={{ overflowY: "auto", height: "24vh" }}
                          >
                            <Box sx={{ display: "flex" }}>
                              <Image
                                src="/images/back.svg"
                                width={30}
                                height={30}
                                alt="Picture of the back"
                              />

                              <Typography variant="h5" sx={{ pl: 0 }}>
                                {item.BoxAIQuestion_EN}
                              </Typography>
                            </Box>
                          </CardContent>
                        </Card>
                      </>
                    );
                  })}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}
