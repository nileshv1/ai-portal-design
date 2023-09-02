import { nn_logo, img1, img2, img3, img4 } from "@/public/images";
import { Grid } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../../styles/style.module.css";
import { useRouter } from "next/router";

const BackgroundImage = ({ props }) => {
  const imageUrls = [img1, img2, img3, img4];
  const { push } = useRouter();

  const [randomImageUrl, setRandomImageUrl] = useState([]);

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    setRandomImageUrl(imageUrls[randomIndex]);
  };

  const navigateToHome = () => {
    push("/home");
  };

  useEffect(() => {
    getRandomImage();
  }, [randomImageUrl]);

  return (
    <Grid>
      <Image
        className={styles.bg_img}
        src={randomImageUrl}
        alt="Banner Image"
      />
      {props == "true" ? (
        <button onClick={navigateToHome} className={styles.close_btn}>
          x
        </button>
      ) : null}
    </Grid>
  );
};

export default BackgroundImage;
