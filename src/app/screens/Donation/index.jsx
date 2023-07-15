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
    image: "/images/donation-jumbotron.png",
    titleOne: "Solusi Sistem",
    titleTwo: "Keamanan Terbaik",
  },
  //   {
  //     image: "/images/jumbotron_2.png",
  //     titleOne: "Pelayanan Jasa",
  //     titleTwo: "Terbaik & Terpercaya"
  //   },
];

const Donation = () => {
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
            src="/images/Vector2.png"
            alt="project_sample"
            style={{
              position: "absolute",
              zIndex: 2,
              // top: "-200px",
              left: "-300px",
              height: "387px",
              width: "400px",
            }}
          />
          <Box style={{ maxWidth: "1080px" }}>
            <Text
              variant="sectionTitle"
              style={{ textAlign: "center", marginBottom: "32px" }}
            >
              Help us make impact
            </Text>
            <Text
              variant="bodyLarge"
              style={{
                textAlign: "center",
                color: "#111111",
                marginBottom: "30px",
              }}
            >
              Do you care about the environment and want to make a difference?
              You can make an impact by supporting Bumi Buddies that focuses on
              environmental education.
            </Text>

            <Text
              variant="bodyLarge"
              style={{ textAlign: "center", color: "#111111" }}
            >
              We believe that education is the key to creating a sustainable
              future for our planet. By teaching young people about the
              importance of environmental conservation, we can empower the next
              generation to make informed choices that will benefit our planet
              and all its inhabitants.
            </Text>
          </Box>
        </ContentContainer>

        <ContentContainer style={{ position: "relative" }}>
          <img
            src="/images/Vector3.png"
            alt="project_sample"
            style={{
              position: "absolute",
              zIndex: 2,
              // top: "-200px",
              right: "-300px",
              height: "387px",
              width: "400px",
            }}
          />
          <Box style={{ maxWidth: "1080px" }}>
            <Text
              variant="sectionTitle"
              style={{ textAlign: "center", marginBottom: "32px" }}
            >
              What will your donation do?
            </Text>
            <Text
              variant="bodyLarge"
              style={{
                textAlign: "center",
                color: "#111111",
                marginBottom: "30px",
              }}
            >
              With your donation, we can continue to provide educational
              programs, workshops, and resources to schools, community centres,
              and other organisations. Your support will help us reach more
              people and make a greater impact on our environment.
            </Text>

            <Text
              variant="bodyLarge"
              style={{
                textAlign: "center",
                color: "#111111",
                marginBottom: "30px",
              }}
            >
              Every little bit helps, and your donation can make a difference.
              Together, we can work towards a better future for our planet.
              Let's make a positive change for our planet and future
              generations. #Educate, Encourage, and Act for the Future.
            </Text>

            <Text
              variant="bodyLarge"
              style={{
                textAlign: "center",
                color: "#111111",
                fontWeight: "600",
              }}
            >
              #Educate, Encourage, and Act for the Future.
            </Text>
          </Box>
        </ContentContainer>
        {/* <PartnerSection>
          <PartnerContainer>
            <img src={"/images/Rectangle.png"} alt="partner_logo" />
            <img src={"/images/Rectangle.png"} alt="partner_logo" />
            <img src={"/images/Rectangle.png"} alt="partner_logo" />
          </PartnerContainer>
          <PartnerContainer>
            <img src={"/images/Rectangle.png"} alt="partner_logo" />
            <img src={"/images/Rectangle.png"} alt="partner_logo" />
            <img src={"/images/Rectangle.png"} alt="partner_logo" />
          </PartnerContainer>
        </PartnerSection> */}

        {!isMobile ? (
          <ImpactContainer>
            <CollabContainer>
              <Text variant="headingBig">Interested to Donate?</Text>
              <Text variant="bodyLarge" style={{ width: "70%" }}>
                Every little bit helps, and your donation can make a difference.
                Together, we can work towards a better future for our planet.
                Let's make a positive change for our planet and future
                generations.
              </Text>
              <a href="mailto:contact@bumibuddies.org">
                <Button
                  style={{
                    width: "fit-content",
                    background: "#FFFF",
                    border: "1px solid #2BB8AB;",
                    color: "#2BB8AB",
                    boxShadow:
                      "0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
                  }}
                >
                  Contact Us
                </Button>
              </a>
            </CollabContainer>
          </ImpactContainer>
        ) : (
          <CollabContainerMobile>
            <Text variant="headingBig" style={{ lineHeight: "29px" }}>
              Interested to Donate?
            </Text>
            <Text variant="bodyLarge">
              Every little bit helps, and your donation can make a difference.
              Together, we can work towards a better future for our planet.
              Let's make a positive change for our planet and future
              generations.
            </Text>
            <a href="mailto:contact@bumibuddies.org">
              <Button
                style={{
                  width: "fit-content",
                  background: "#FFFF",
                  border: "1px solid #2BB8AB;",
                  color: "#2BB8AB",
                  boxShadow:
                    "0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
                }}
              >
                Contact Us
              </Button>
            </a>
          </CollabContainerMobile>
        )}
      </Box>
    </Box>
  );
};

export default Donation;
