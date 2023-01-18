/* eslint-disable @next/next/no-img-element */
import Text from "../../components/Text";
import { Box, IconButton, Divider } from "@mui/material";
import theme from "../../styles/theme/theme";
import {
  JumbotronContainer,
  Content,
  ContentContainer,
  VisionContainer,
  ServicesContainer,
  ClientContainer,
} from "./styles";
import dynamic from "next/dynamic";
import Button from "../../components/Button";
import { useState } from "react";
import { useRouter } from "next/router";
import useIsMobile from "../../hooks/useIsMobile";

const Animated = dynamic(() => import('../../components/Animated'), { ssr: false });
const Animation = dynamic(() => import('../../components/Animation'), { ssr: false });

const jumbotronContents = [
  {
    image: "/images/jumbotron_1.png",
    titleOne: "Solusi Sistem",
    titleTwo: "Keamanan Terbaik" 
  }, 
//   {
//     image: "/images/jumbotron_2.png",
//     titleOne: "Pelayanan Jasa",
//     titleTwo: "Terbaik & Terpercaya" 
//   }, 
];

const Home = () => {
  const [activeImage, setActiveImage] = useState(0);
  const router = useRouter();
  const isMobile = useIsMobile();
  

  const changePreviousImage = () => {
      setActiveImage(0);
  };

  const changeNextImage = () => {
    setActiveImage(1);
  };

  return (
    <Box sx={{ maxWidth: {sm: "100%"}, overflow: "hidden"}}>
      {/* Jumbotron */}
      <JumbotronContainer>
      <Animated
          animationIn="easeIn"
          animationOut="easeOut"
          duration={700}
        >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: 0,
          }}
        >
          <img
            src={jumbotronContents[activeImage].image}
            alt="background_1"
            style={{  height: "100%", width: "100%", objectFit: "cover"}}
            // layout="fill"
            // objectFit="cover"
          />
        </Box>
        </Animated>
        <Box
          sx={{
            position: "absolute",
            top: "315px",
            left: {md:"100px" , sm: "50px"  },
            transform: "translate(-100px, -50%)",
            zIndex: 1,
            ml: isMobile ? "120px" : "100px",
          }}
        >
          {/* <Text
            variant="anagataRegulerSmall"
            style={{ color: theme.palette.white[50] }}
          >
             Join our program!
          </Text> */}
          <Animated
            animationIn="easeIn"
            animationOut="easeOut"
            duration={700}
          >
          <Text variant="bodyLarge" style={{ color: theme.palette.white[100], fontSize: "96px" }}>
          Join our program!
          </Text>
          {/* <Text variant="h1Anagata" style={{ color: theme.palette.white[50] }}>
            {jumbotronContents[activeImage].titleTwo}
          </Text> */}
          </Animated>
        </Box>
        <Box sx={{ 
            position: "absolute",
            top: isMobile ?"450px" : "420px",
            right: isMobile ? "30px" : "100px",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <IconButton onClick={changePreviousImage} disabled={activeImage === 0}>
            <img src={"/images/Arrow-Left.svg"} alt="leftIcon"/>
          </IconButton>
          <Box sx={{ height: "2px", width: "136px", borderBottom: "2px solid white"}}></Box>

          <IconButton onClick={changeNextImage} disabled={activeImage === 1}>
            <img src={"/images/Arrow-Right.svg"} alt="rightIcon" />
          </IconButton>
          
        </Box>
      </JumbotronContainer>
      <ContentContainer>
      </ContentContainer>
    </Box>
  );
};

export default Home;