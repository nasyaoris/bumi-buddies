/* eslint-disable @next/next/no-img-element */
import Text from "../../components/Text";
import { Box, Card, CardActions, CardMedia, CardContent, IconButton, Typography, Divider, Grid } from "@mui/material";
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
  CollabContainerMobile,
} from "./styles";
import Button from "../../components/Button";
import { useState } from "react";
import { useRouter } from "next/router";
import useIsMobile from "../../hooks/useIsMobile";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
import { Circle } from "../../components/Shapes";

const jumbotronContents = [
  {
    image: "/images/donation.png",
    titleOne: "Solusi Sistem",
    titleTwo: "Keamanan Terbaik",
  },
  //   {
  //     image: "/images/jumbotron_2.png",
  //     titleOne: "Pelayanan Jasa",
  //     titleTwo: "Terbaik & Terpercaya"
  //   },
];

const Event = () => {
  const [activeImage, setActiveImage] = useState(0);
  const router = useRouter();
  const isMobile = useIsMobile();

  const PreviousButton = (props) => {
    const { onClick } = props;
    return (
      <Box
        style={{
          position: "absolute",
          margin: 0,
          height: "100%",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton onClick={onClick}>
          <img src={"/images/Arrow-Left.svg"} alt="leftIcon" />
        </IconButton>
      </Box>
    );
  };

  console.log("isMobile", isMobile);

  const NextButton = (props) => {
    const { onClick } = props;
    return (
      <Box
        style={{
          position: "absolute",
          margin: 0,
          height: "100%",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          right: 0,
          top: 0,
        }}
      >
        <IconButton onClick={onClick}>
          <img src={"/images/Arrow-Right.svg"} alt="rightIcon" />
        </IconButton>
      </Box>
    );
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextButton />,
    prevArrow: <PreviousButton />,
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: 0 }}>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div
          style={{
            width: "18px",
            height: "18px",
            background: "#D9D9D9",
            borderRadius: "50%",
            padding: "10px",
          }}
        ></div>
      </div>
    ),
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
    <Box sx={{ maxWidth: { sm: "100%" }, overflow: "hidden" }}>
      <Box>
        <JumbotronContainer>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "relative",
              height: "100%",
            }}
          >
            <Box>
              <img
                src={jumbotronContents[activeImage].image}
                alt="background_1"
                style={{
                  width: isMobile ? "100%" : "unset",
                  height: "100%",
                }}
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

      <Box
        style={{
          paddingLeft: isMobile ? "20px" : "70px",
          paddingRight: isMobile ? "20px" : "70px",
        }}
      >
        <ContentContainer style={{ position: "relative" }}>
          <img
            src="/images/Vector4.png"
            alt="project_sample"
            style={{
              position: "absolute",
              zIndex: 0,
              // top: "-200px",
              left: "-200px",
              height: "587px",
              width: "400px",
              top: "100px"  
            }}
          />
          </ContentContainer>
        <ContentContainer>
          <Box style={{ maxWidth: "1080px" }}>
            <Text
              variant="sectionTitle"
              style={{ textAlign: "center", marginBottom: "32px" }}
            >
              Title Introduction
            </Text>
            <Text
              variant="bodyLarge"
              style={{ textAlign: "center", color: "#111111" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting.
            </Text>
          </Box>
        </ContentContainer>
      </Box>
      <ContentContainer style={{ position: "relative", border: "2px solid" }}>
        <Grid container spacing={{ xs: 2, md: 3 }} justify="center">
        {Array.from(Array(24)).map((_, index) => (
          <Grid item xs={12} sm={4} key={index} align="center">
            <Card sx={{ maxWidth: 345 }} style={{
              background: "#fff",
              borderRadius: "8px",
              display: "inline-block",
              margin: "1rem",
              position: "relative",
              padding: "12px"
            }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/images/Rectangle.png"
                title="rectangle"
              />
              <div style={{ display: "flex", gap: '8px', flexDirection: "column", marginTop: "8px" }}>
                <Text variant="cardTitle" style={{color: "#000"}}>
                  Title
                </Text>
                <Text variant="cardSubheading" style={{color: "#2BB8AB"}}>
                  Minggu, 22 Januari 2023 13:00 WIB
                </Text>
                <Text variant="cardBody" style={{color: "#4F4F4F"}}>
                  LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                </Text>
              </div>
              <CardActions>
                <Button size="medium" style={{backgroundColor: "#B5CF50"}} sx={{ width: 345, padding: 1, margin: 2 }}>Submit</Button>
              </CardActions>
            </Card>
          </Grid>
          ))}
        </Grid>
      </ContentContainer>
    </Box>
  );
};

export default Event;
