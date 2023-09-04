
import { Box,TextField } from '@mui/material'
import { nn_logo, img1, img2, img3, img4 } from "@/public/images";;
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function About() {
    const imageUrls = [img1, img2, img3, img4];
  const { push } = useRouter();

  const [randomImageUrl, setRandomImageUrl] = useState([]);

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    setRandomImageUrl(imageUrls[randomIndex]);
    console.log(randomImageUrl, "randomImageUrl")
  };

  useEffect(() => {
    getRandomImage();
  }, [randomImageUrl]);

  return (
    <Box
      component="div"
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${randomImageUrl.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        // backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        mx:"auto"
      }}
    >
        <TextField id="outlined-basic" sx={{ }} variant="outlined"  />
        </Box>
  );
}