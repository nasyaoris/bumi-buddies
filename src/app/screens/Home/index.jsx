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
  ProjectContainer,
  ProjectItem,
  ImpactContainer,
  ImpactItems
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
      {/* <Animated
          animationIn="easeIn"
          animationOut="easeOut"
          duration={700}
        > */}
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
        {/* </Animated> */}
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
          {/* <Animated
            animationIn="easeIn"
            animationOut="easeOut"
            duration={700}
          > */}
          <Text variant="bodyLarge" style={{ color: theme.palette.white[100], fontSize: "96px" }}>
          Join our program!
          </Text>
          {/* <Text variant="h1Anagata" style={{ color: theme.palette.white[50] }}>
            {jumbotronContents[activeImage].titleTwo}
          </Text> */}
          {/* </Animated> */}
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
      <Box style={{ paddingLeft: isMobile ? "20px" : "70px", paddingRight: isMobile ? "20px" : "70px"}}>
        <ContentContainer>
          <Box style={{ maxWidth: "1080px"}}>
            <Text variant="headingLarge" style={{textAlign: "center", marginBottom: "32px"}}>Title Introduction</Text>
            <Text variant="bodyLarge" style={{textAlign: "center", color: "#111111"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</Text>
          </Box>
        </ContentContainer>
        <Box style={{ marginTop: isMobile? "52px" : "120px"}}>
          <ProjectContainer>
            <ProjectItem>
              <Text variant="headingLarge" style={{ width: isMobile ? "100%" : "50%"}}>What we do for Earth</Text>
            </ProjectItem>
            <ProjectItem>
              <Text variant="bodyLarge">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an</Text>
            </ProjectItem>
          </ProjectContainer>
          <ProjectContainer>
            <ProjectItem>
              <img src="/images/projectsample.png" alt="project_sample" style={{ width: "100%"}} />
            </ProjectItem>
            <ProjectItem>
              <Box>
                <Text variant="headingBig" style={{marginBottom: "24px"}}>YES Project</Text>
                <Text variant="bodyLarge">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an Lorem Ipsum is simply dummy text of the printing and typesetting industry: 
                </Text>
                <ul>
                  <li><Text variant="bodyLarge">Bullet point if you want</Text></li>
                  <li><Text variant="bodyLarge">Bullet point if you want</Text></li>
                  <li><Text variant="bodyLarge">Bullet point if you want</Text></li>
                </ul>
              </Box>
            </ProjectItem>
          </ProjectContainer>
          <ProjectContainer style={{ flexDirection: isMobile ? "column-reverse" : "row"}}>
            <ProjectItem>
            <Box>
                <Text variant="headingBig" style={{marginBottom: "24px"}}>YES Project</Text>
                <Text variant="bodyLarge">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an Lorem Ipsum is simply dummy text of the printing and typesetting industry: 
                </Text>
                <ul>
                  <li><Text variant="bodyLarge">Bullet point if you want</Text></li>
                  <li><Text variant="bodyLarge">Bullet point if you want</Text></li>
                  <li><Text variant="bodyLarge">Bullet point if you want</Text></li>
                </ul>
              </Box>
            </ProjectItem>
            <ProjectItem>
            <img src="/images/projectsample.png" alt="project_sample" style={{ width: "100%"}} />
            </ProjectItem>
          </ProjectContainer>
          <ProjectContainer>
            <ProjectItem>
              <img src="/images/projectsample.png" alt="project_sample" style={{ width: "100%"}} />
            </ProjectItem>
            <ProjectItem>
              <Box>
                <Text variant="headingBig" style={{marginBottom: "24px"}}>YES Project</Text>
                <Text variant="bodyLarge">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an Lorem Ipsum is simply dummy text of the printing and typesetting industry: 
                </Text>
                <ul>
                  <li><Text variant="bodyLarge">Bullet point if you want</Text></li>
                  <li><Text variant="bodyLarge">Bullet point if you want</Text></li>
                  <li><Text variant="bodyLarge">Bullet point if you want</Text></li>
                </ul>
              </Box>
            </ProjectItem>
          </ProjectContainer>
        </Box>
      </Box>
      <ImpactContainer>
        <Text variant="bodyLarge" style={{ marginBottom: "32px"}}>Impact we made together</Text>
        <ImpactItems>
          <Box 
            display="flex" 
            flexDirection="column" 
            justifyContent="center" 
            alignItems="center" 
            style={{
              border: "1px solid #FFFFFF",
              padding: "16px 56px",
              borderTop: "unset",
              borderBottom: isMobile ? "1px solid #FFFFFF" : "unset",
              borderLeft: "unset",
              borderRight: !isMobile ? "1px solid #FFFFFF" : "unset"
            }}
            
            >
            <img src={"/images/ImpactIcon.svg"} alt="impactIcon" style={{ width: "32px"}}/>
            <Text variant="nominal">100</Text>
            <Text variant="bodyLarge">Seminar</Text>
          </Box>
          <Box 
            display="flex" 
            flexDirection="column" 
            justifyContent="center" 
            alignItems="center" 
            
            style={{
              padding: "16px 56px",
              border: "1px solid #FFFFFF",
              borderTop: "unset",
              borderBottom: isMobile ? "1px solid #FFFFFF" : "unset",
              borderLeft: "unset",
              borderRight: !isMobile ? "1px solid #FFFFFF" : "unset"
            }}
            
            >
            <img src={"/images/ImpactIcon.svg"} alt="impactIcon" style={{ width: "32px"}}/>
            <Text variant="nominal">100</Text>
            <Text variant="bodyLarge">Seminar</Text>
          </Box>
          <Box 
            display="flex" 
            flexDirection="column" 
            justifyContent="center" 
            alignItems="center" 
            style={{
              border: "1px solid #FFFFFF",
              padding: "16px 56px",
              borderTop: "unset",
              borderBottom: isMobile ? "1px solid #FFFFFF" : "unset",
              borderLeft: "unset",
              borderRight: !isMobile ? "1px solid #FFFFFF" : "unset"
            }}
            
            >
            <img src={"/images/ImpactIcon.svg"} alt="impactIcon" style={{ width: "32px"}}/>
            <Text variant="nominal">100</Text>
            <Text variant="bodyLarge">Seminar</Text>
          </Box>
          <Box 
            display="flex" 
            flexDirection="column" 
            justifyContent="center" 
            alignItems="center" 
            style={{
              padding: "16px 56px",
            }}
            >
            <img src={"/images/ImpactIcon.svg"} alt="impactIcon" style={{ width: "32px"}}/>
            <Text variant="nominal">100</Text>
            <Text variant="bodyLarge">Seminar</Text>
          </Box>
        </ImpactItems>
      </ImpactContainer>
 
    </Box>
  );
};

export default Home;