/* eslint-disable @next/next/no-img-element */
import Text from "../../components/Text";
import { Box, IconButton } from "@mui/material";
import theme from "../../styles/theme/theme";
import {
  JumbotronContainer,
  ContentContainer,
  ProjectContainer,
  ProjectItem,
  PartnerSection,
  PartnerContainer,
  EnvirontmentalEducation,
  EducationItem,
  ReachContainer,
  ReachItems,
} from "./styles";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useIsMobile from "../../hooks/useIsMobile";
import { Circle } from "../../components/Shapes";
import { taglines } from "./schema";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { baseUrl } from "../../../utils/baseApi";
import axios from "axios";

const jumbotronContents = [
  {
    image: "/images/about-us-jumbotron.png",
    titleOne: "Solusi Sistem",
    titleTwo: "Keamanan Terbaik",
  },
  //   {
  //     image: "/images/jumbotron_2.png",
  //     titleOne: "Pelayanan Jasa",
  //     titleTwo: "Terbaik & Terpercaya"
  //   },
];

const AboutUs = () => {
  const [activeImage, setActiveImage] = useState(0);
  const router = useRouter();
  const isMobile = useIsMobile();

  const [jumbotrons, setJumbotrons] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.bumibuddies.org/api/jumbotrons", {
        params: {
          populate: "*",
        },
      })
      .then(function (response) {
        const homePageJumbotrons = response.data.data.filter(
          (el) => el.attributes.page === "about"
        );
        setJumbotrons(homePageJumbotrons);
        console.log(homePageJumbotrons);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
                src={`${baseUrl}${jumbotrons[0]?.attributes.image.data[0].attributes.formats.medium.url}`}
                alt="background_1"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Box>
        </JumbotronContainer>
      </Box>
      <ContentContainer>
        <Box style={{ maxWidth: "1080px" }}>
          <Text
            variant="sectionTitle"
            style={{ textAlign: "center", marginBottom: "32px" }}
          >
            About Us
          </Text>
          <Text
            variant="bodyLarge"
            style={{ textAlign: "center", color: "#111111" }}
          >
            The urgency to act upon the global environmental problem certainly
            cannot be done alone. Through support and collaboration, we can work
            hand-in-hand to make our dream come true. Hit us up for
            collaboration!
          </Text>
        </Box>
      </ContentContainer>

      <Box
        style={{
          paddingLeft: isMobile ? "20px" : "70px",
          paddingRight: isMobile ? "20px" : "70px",
        }}
      >
        <Box
          style={{
            marginTop: isMobile ? "52px" : "120px",
            display: "flex",
            flexDirection: "column",
            marginBottom: isMobile ? "200px" : "unset",
          }}
        >
          <ProjectContainer style={{ marginBottom: "300px" }}>
            <ProjectItem
              style={{
                position: "relative",
                marginBottom: isMobile ? "60px" : "unset",
              }}
            >
              <img
                src="/images/Vector4.png"
                alt="project_sample"
                style={{
                  // width: "100%",
                  position: "absolute",
                  zIndex: 2,
                  top: "-100px",
                  right: "-600px",
                }}
              />
              <Box
                display="flex"
                flexDirection="column"
                style={{ position: "absolute", zIndex: 3 }}
              >
                <Text variant="sectionTitle">OUR Vision</Text>
              </Box>
            </ProjectItem>
            <ProjectItem style={{ position: "relative" }}>
              <Text
                variant="bodyLarge"
                style={{ color: theme.palette.gray[200], position: "absolute" }}
              >
                <Text
                  variant="subheadingLargeThin"
                  style={{
                    color: theme.palette.gray[200],
                    marginBottom: "24px",
                  }}
                >
                  Becoming a platform for children and youth in{" "}
                  <span
                    style={{
                      color: theme.palette.blue[200],
                      fontWeight: "600",
                    }}
                  >
                    raising environmental awareness{" "}
                  </span>
                  and{" "}
                  <span
                    style={{
                      color: theme.palette.blue[200],
                      fontWeight: "600",
                    }}
                  >
                    inspiring them to bring change for a sustainable Earth.{" "}
                  </span>
                </Text>
              </Text>
              {!isMobile && (
                <Circle
                  size="70px"
                  background="#56CCF2"
                  style={{
                    position: "absolute",
                    right: "-60px",
                    top: "50px",
                    zIndex: 0,
                  }}
                />
              )}

              {!isMobile && (
                <Circle
                  size="36px"
                  background="purple"
                  style={{
                    position: "absolute",
                    right: "200px",
                    top: "200px",
                    zIndex: 0,
                  }}
                />
              )}
            </ProjectItem>
          </ProjectContainer>
          <ProjectContainer style={{ marginBottom: "300px" }}>
            <ProjectItem
              style={{
                position: "relative",
                marginBottom: isMobile ? "60px" : "unset",
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                style={{ position: "absolute", zIndex: 3 }}
              >
                <Text variant="sectionTitle">OUR Mision</Text>
              </Box>
              {!isMobile && (
                <Circle
                  size="54px"
                  background="#f2c94c"
                  style={{
                    position: "absolute",
                    left: "10px",
                    top: "100px",
                    zIndex: 0,
                  }}
                />
              )}
            </ProjectItem>
            <ProjectItem style={{ position: "relative" }}>
              <Text
                variant="bodyLarge"
                style={{ color: theme.palette.gray[200], position: "absolute" }}
              >
                <Text
                  variant="subheadingLargeThin"
                  style={{
                    color: theme.palette.gray[200],
                    marginBottom: "24px",
                  }}
                >
                  We educate children and youth about environmental awareness
                  through{" "}
                  <span
                    style={{
                      color: theme.palette.blue[200],
                      fontWeight: "600",
                    }}
                  >
                    creative and interactive learning.
                  </span>{" "}
                </Text>
                <Text
                  variant="subheadingLargeThin"
                  style={{
                    color: theme.palette.gray[200],
                    marginBottom: "24px",
                  }}
                >
                  By learning from what we shared with them, we also want to
                  encourage the children and youth to have an
                  <span
                    style={{
                      color: theme.palette.blue[200],
                      fontWeight: "600",
                    }}
                  >
                    environmentally-friendly mindset and habits.{" "}
                  </span>
                </Text>
              </Text>

              {!isMobile && (
                <Circle
                  size="36px"
                  background="#219653"
                  style={{
                    position: "absolute",
                    right: "200px",
                    top: "200px",
                    zIndex: 0,
                  }}
                />
              )}
            </ProjectItem>
          </ProjectContainer>
        </Box>
      </Box>
      <EnvirontmentalEducation style={{ position: "relative" }}>
        <img
          src="/images/Vector4.png"
          alt="project_sample"
          style={{
            // width: "100%",
            position: "absolute",
            zIndex: 2,
            top: "-100px",
            left: "100px",
          }}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            marginLeft: !isMobile ? "70px" : "unset",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
          <Text
            variant="sectionTitle"
            marginBottom="24px"
            style={{
              textAlign: "left",
              color: "white",
            }}
          >
            Our Tagline
          </Text>
          <Text
            variant="headingMedium"
            style={{
              color: "white",
            }}
          >
            Educate, Encourage and Act for the future
          </Text>
        </div>

        <Box
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "24px",
          }}
        >
          {taglines.map((el, idx) => {
            return (
              <EducationItem key={idx}>
                <img src={el.icon} alt={`icon-${idx}`} />
                <Text
                  variant="headingMedium"
                  style={{
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  {el.title}
                </Text>
                <Text
                  variant="bodyLarge"
                  style={{
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  {el.desc}
                </Text>
              </EducationItem>
            );
          })}
        </Box>
      </EnvirontmentalEducation>

      <PartnerSection>
        <Text
          variant="sectionTitle"
          style={{ marginBottom: "64px", textAlign: "center" }}
        >
          Our Partners
        </Text>
        <PartnerContainer>
          <img
            src={"/images/logo/logo4.png"}
            style={{ height: "120px", width: isMobile ? "120px" : "auto" }}
            alt="partner_logo"
          />
          <img
            src={"/images/logo/logo2.png"}
            style={{ height: "120px", width: "auto" }}
            alt="partner_logo"
          />
          <img
            src={"/images/logo/logo1.png"}
            style={{ height: "120px", width: isMobile ? "120px" : "auto" }}
            alt="partner_logo"
          />
          <img
            src={"/images/logo/logo3.png"}
            style={{ height: "120px", width: isMobile ? "120px" : "auto" }}
            alt="partner_logo"
          />
        </PartnerContainer>
      </PartnerSection>

      <ReachContainer>
        <Text
          variant="sectionTitle"
          marginBottom="24px"
          style={{
            textAlign: "left",
            color: "white",
          }}
        >
          Our Reach
        </Text>
        <ReachItems>
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
              borderRight: !isMobile ? "1px solid #FFFFFF" : "unset",
            }}
          >
            <Text variant="nominal">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div>
                    {isVisible ? (
                      <Text variant="nominal">
                        <CountUp end={15} />+
                      </Text>
                    ) : (
                      <Text variant="nominal">0</Text>
                    )}
                  </div>
                )}
              </VisibilitySensor>
            </Text>
            <Text
              variant="bodyLarge"
              style={{
                textAlign: "center",
              }}
            >
              schools visited through YES Project
            </Text>
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
              borderRight: !isMobile ? "1px solid #FFFFFF" : "unset",
            }}
          >
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
              {({ isVisible }) => (
                <div>
                  {isVisible ? (
                    <Text variant="nominal">
                      <CountUp separator="" end={2000} />+
                    </Text>
                  ) : (
                    <Text variant="nominal">0</Text>
                  )}
                </div>
              )}
            </VisibilitySensor>
            <Text
              variant="bodyLarge"
              style={{
                textAlign: "center",
              }}
            >
              students educated through YES Project
            </Text>
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
              borderRight: !isMobile ? "1px solid #FFFFFF" : "unset",
            }}
          >
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
              {({ isVisible }) => (
                <div>
                  {isVisible ? (
                    <Text variant="nominal">
                      <CountUp separator="" end={3500} />+
                    </Text>
                  ) : (
                    <Text variant="nominal">0</Text>
                  )}
                </div>
              )}
            </VisibilitySensor>
            <Text
              variant="bodyLarge"
              style={{
                textAlign: "center",
              }}
            >
              followers educated through instagram
            </Text>
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
              borderRight: !isMobile ? "1px solid #FFFFFF" : "unset",
            }}
          >
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
              {({ isVisible }) => (
                <div>
                  {isVisible ? (
                    <Text variant="nominal">
                      <CountUp separator="" end={20} />+
                    </Text>
                  ) : (
                    <Text variant="nominal">0</Text>
                  )}
                </div>
              )}
            </VisibilitySensor>
            <Text
              variant="bodyLarge"
              style={{
                textAlign: "center",
              }}
            >
              NGOs engaged with us
            </Text>
          </Box>
        </ReachItems>
      </ReachContainer>
    </Box>
  );
};

export default AboutUs;
