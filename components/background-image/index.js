import { nn_logo, img1, img2, img3, img4 } from "@/public/images";
import { Grid } from "@mui/material";
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

  return (
    <Grid>
      <Image
        className={styles.bg_img}
        src={randomImageUrl}
        alt="Banner Image"
      />
      {props == "true" ? (
        <button onClick={getRandomImage} className={styles.close_btn}>
          x
        </button>
      ) : null}
    </Grid>
  );
};

export default BackgroundImage;
