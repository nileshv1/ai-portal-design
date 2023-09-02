import styles from "../../styles/style.module.css";
import Image from "next/image";
import { nn_logo } from "@/public/images";
import { Grid } from "@mui/material";
import Link from "next/link";
import BackgroundImage from "@/components/background-image";

const Home = () => {
  return (
    <Grid>
      <BackgroundImage isCloseBtn="false"/>
      <span>
        <Link href="/search">
          <Image src={nn_logo} alt="Logo" className={styles.logo_img} />
        </Link>
      </span>
    </Grid>
  );
};

export default Home;
