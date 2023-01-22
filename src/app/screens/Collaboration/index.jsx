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
  ImpactItems,
  PartnerSection,
  PartnerContainer,
  CollabContainer,
  CollabContainerMobile
} from "./styles";
import Button from "../../components/Button";
import { useState } from "react";
import { useRouter } from "next/router";
import useIsMobile from "../../hooks/useIsMobile";
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";

const jumbotronContents = [
  {
    image: "/images/jumbotron_collab.png",
    titleOne: "Solusi Sistem",
    titleTwo: "Keamanan Terbaik" 
  }, 
//   {
//     image: "/images/jumbotron_2.png",
//     titleOne: "Pelayanan Jasa",
//     titleTwo: "Terbaik & Terpercaya" 
//   }, 
];

const Collaboration = () => {
  const [activeImage, setActiveImage] = useState(0);
  const router = useRouter();
  const isMobile = useIsMobile();

  const PreviousButton = (props) => {
    const { onClick } = props;
    return (
      <Box style={{ position: "absolute", margin: 0, height: "100%", zIndex: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
        <IconButton onClick={onClick}>
        <img src={"/images/Arrow-Left.svg"} alt="leftIcon"/>
      </IconButton>
      </Box>
    )
  }

  console.log("isMobile", isMobile)

  const NextButton = (props) => {
    const { onClick } = props;
    return (
      <Box style={{ position: "absolute", margin: 0, height: "100%", zIndex: 1, display: "flex", justifyContent: "center", alignItems: "center", right: 0, top: 0}}>
      <IconButton onClick={onClick}>
        <img src={"/images/Arrow-Right.svg"} alt="rightIcon" />
      </IconButton>
      </Box>
    )
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextButton />,
    prevArrow: <PreviousButton />,
    appendDots: dots => <div style={{ position: "absolute", bottom: 0}}><ul>{dots}</ul></div>,
    customPaging: i => (
      <div className="ft-slick__dots--custom">
        <div style={{
          width: "18px",
          height: "18px",
          background: "#D9D9D9",
          borderRadius: "50%",
          padding: "10px"
        }}></div>
      </div>
    )
    // appendDots: dots => (
    //   <div
       
    //   >
    //     <ul style={{ margin: "0px" }}> {dots.map((el, idx) => <li key={idx} style={{
    //       width: "18px",
    //       height: "18px",
    //       background: "#D9D9D9",
    //       borderRadius: "50%",
    //       padding: "10px"
    //     }}>{el}</li>)} 
    //     </ul>
    //   </div>
    // ),
  };

  return (

    <Box sx={{ maxWidth: {sm: "100%"}, overflow: "hidden"}}>
      <Box>
      <JumbotronContainer>
        <Box sx={{
                width: "100%",
                height: "100%",
                position: "relative"
        }}>
          <Box>
              <img
                src={jumbotronContents[activeImage].image}
                alt="background_1"
              />
            </Box>
            {/* <Box
              sx={{
                position: "absolute",
                top: "315px",
                left: {md:"100px" , sm: "50px"  },
                transform: "translate(-100px, -50%)",
                zIndex: 1,
                ml: isMobile ? "120px" : "100px",
              }}
            >
              {
                !isMobile &&  <Text variant="bodyLarge" style={{ color: theme.palette.white[100], fontSize: "96px" }}>
                  Join our program!
                </Text>
              }
            </Box> */}
          </Box>
          </JumbotronContainer>
      </Box>


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
        {
          !isMobile ? (
            <ImpactContainer>
            <CollabContainer>
              <Text variant="headingBig">Interested to collab with us?</Text>
              <Text variant="bodyLarge" style={{ width: "70%"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to </Text>
              <Button style={{ 
                width: "fit-content", 
                background: "#FFFF", 
                border: "1px solid #2BB8AB;", 
                color: "#2BB8AB",
                boxShadow: "0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
                }}>
                  Contact Us
                </Button>
            </CollabContainer>
            </ImpactContainer>
          ) : (
            <CollabContainerMobile>
            <Text variant="headingBig" style={{ lineHeight: "29px"}}>Interested to collab with us?</Text>
                <Text variant="bodyLarge">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to </Text>
                <Button style={{ 
                  width: "fit-content", 
                  background: "#FFFF", 
                  border: "1px solid #2BB8AB;", 
                  color: "#2BB8AB",
                  boxShadow: "0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
                  }}>
                    Contact Us
                </Button>
            </CollabContainerMobile>
          )
        }
       
        
      </Box>
 
    </Box>
  );
};

export default Collaboration;