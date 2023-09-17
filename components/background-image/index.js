import {
  nn_logo,
  img1,
  img2,
  img3,
  img4,
  flagDutch,
  flagFrance,
  flagGer,
  flagUK,
} from "@/public/images";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/style.module.css";
import { useRouter } from "next/router";

const BackgroundImage = ({ props }) => {
  const imageUrls = [img1, img2, img3, img4];

  const { push } = useRouter();

  const [randomImageUrl, setRandomImageUrl] = useState();

  const getRandomImage = () => {
    let randomImage;
    randomImage = JSON.parse(localStorage.getItem("randomImage"));
    if (randomImage !== undefined && randomImage < 4) {
      const items = randomImage + 1;
      setRandomImageUrl(imageUrls[items]);
      localStorage.setItem("randomImage", JSON.stringify(items));
      push("/home");
    }
  };

  useEffect(() => {
    let randomImage;
    randomImage = JSON.parse(localStorage.getItem("randomImage"));
    if (randomImage == undefined) {
      setRandomImageUrl(imageUrls[0]);
    } else if (randomImage !== undefined && randomImage < 4) {
      setRandomImageUrl(imageUrls[randomImage]);
    } else {
      setRandomImageUrl(imageUrls[0]);
      localStorage.setItem("randomImage", JSON.stringify(0));
    }
  }, []);

  const [highlightedImage, setHighlightedImage] = useState(0);

  const handleImageClick = (imageIndex) => {
    setHighlightedImage(imageIndex);
  };

  const router = useRouter();
  const flagImages = [flagUK, flagDutch, flagFrance, flagGer];

  return (
    <Grid>
      <Image
        className={styles.bg_img}
        src={randomImageUrl ? randomImageUrl : imageUrls[0]}
        alt="Banner Image"
      />
      <Box className={styles.flagImg} sx={{ display: "flex" }}>
        {router.pathname == "/home" || router.pathname == "/search" ? (
          <Image
            width={30}
            height={30}
            className={styles.highlighted}
            src={flagUK}
          />
        ) : (
          <>
            {flagImages.map((image, index) => (
              <Image
                width={30}
                height={30}
                alt={`Image ${index + 1}`}
                className={
                  index === highlightedImage
                    ? styles.highlighted
                    : styles.flagDutchImg
                }
                onClick={() => handleImageClick(index)}
                key={index}
                src={image}
              />
            ))}
          </>
        )}
      </Box>
      {props == true ? (
        <button onClick={getRandomImage} className={styles.close_btn}>
          x
        </button>
      ) : null}
    </Grid>
  );
};

export default BackgroundImage;
