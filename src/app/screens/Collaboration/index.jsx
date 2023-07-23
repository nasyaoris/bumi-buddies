/* eslint-disable @next/next/no-img-element */
import Text from "../../components/Text";
import { Box, IconButton } from "@mui/material";
import theme from "../../styles/theme/theme";
import {
  JumbotronContainer,
  ContentContainer,
  ProjectContainer,
  ProjectItem,
  ImpactContainer,
  CollabContainer,
  CollabContainerMobile,
} from "./styles";
import Button from "../../components/Button";
import { useState } from "react";
import { useRouter } from "next/router";
import useIsMobile from "../../hooks/useIsMobile";
import { Circle } from "../../components/Shapes";

const jumbotronContents = [
  {
    image: "/images/jumbotron-collab.png",
    titleOne: "Solusi Sistem",
    titleTwo: "Keamanan Terbaik",
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
        <ContentContainer>
          <Box style={{ maxWidth: "1080px" }}>
            <Text
              variant="sectionTitle"
              style={{ textAlign: "center", marginBottom: "32px" }}
            >
              Make change, collab with us
            </Text>
            <Text
              variant="bodyLarge"
              style={{ textAlign: "center", color: "#111111" }}
            >
              The urgency to act upon the global environmental problem certainly
              cannot be done alone. Through support and collaboration, we can
              work hand-in-hand to make our dream come true. Hit us up for
              collaboration!
            </Text>
          </Box>
        </ContentContainer>
        <Box
          style={{
            marginTop: isMobile ? "52px" : "120px",
            display: "flex",
            flexDirection: "column",
            marginBottom: isMobile ? "200px" : "unset",
          }}
        >
          <ProjectContainer>
            <ProjectItem
              style={{
                position: "relative",
              }}
            >
              <img
                src="/images/Vector.png"
                alt="project_sample"
                style={{
                  width: "100%",
                  position: "absolute",
                  zIndex: 2,
                  top: "-100px",
                  left: "-50px",
                }}
              />
              <img
                src="/images/yes-project.png"
                alt="project_sample"
                style={{ width: "100%", position: "relative", zIndex: 3 }}
              />
            </ProjectItem>
            <ProjectItem
              style={{
                position: "relative",
                marginBottom: isMobile ? "250px" : "unset",
              }}
            >
              <Box>
                <Circle
                  size="46px"
                  background="#F2C94C"
                  style={{
                    position: "absolute",
                    left: "-10px",
                    top: "-10px",
                    zIndex: 2,
                  }}
                />
                <Box
                  display="flex"
                  flexDirection="column"
                  style={{ position: "absolute", zIndex: 3 }}
                >
                  <Text
                    variant="titleMedium"
                    style={{
                      marginBottom: "24px",
                    }}
                  >
                    YES Project
                  </Text>
                  <Text
                    variant="bodyLarge"
                    style={{ color: theme.palette.gray[200] }}
                  >
                    Stands for Youth Eco School! Working together with schools
                    all across Indonesia, we arrange{" "}
                    <span
                      style={{
                        color: theme.palette.blue[200],
                        fontWeight: "600",
                      }}
                    >
                      online visits to conduct an interactive learning session
                      with students
                    </span>
                    . We offer a variety of topics to choose from, climate
                    change to sustainable lifestyle. This comes with a
                    post-session activity where students can implement what they
                    have learnt.
                  </Text>
                  <Text
                    variant="bodyLarge"
                    style={{
                      color: theme.palette.gray[200],
                      marginTop: "24px",
                    }}
                  >
                    This is targeted for children and youths that are in active
                    school age.
                  </Text>
                  <Button
                    style={{
                      backgroundColor: "#B5CF50",
                      width: "fit-content",
                      marginTop: "24px",
                    }}
                  >
                    <a href="https://linktr.ee/bumibuddies">
                      <Text variant="bodyMedium">Arrange Session</Text>
                    </a>
                  </Button>
                  {/* <ul>
                    <li>
                      <Text variant="bodyLarge">Bullet point if you want</Text>
                    </li>
                    <li>
                      <Text variant="bodyLarge">Bullet point if you want</Text>
                    </li>
                    <li>
                      <Text variant="bodyLarge">Bullet point if you want</Text>
                    </li>
                  </ul> */}
                </Box>
              </Box>
            </ProjectItem>
          </ProjectContainer>
          <ProjectContainer customFlexDirection="column-reverse">
            <ProjectItem
              style={{
                position: "relative",
                marginBottom: isMobile ? "250px" : "unset",
              }}
            >
              <Box>
                <Circle
                  size="46px"
                  background="#BB6BD9"
                  style={{
                    position: "absolute",
                    left: "-10px",
                    top: "-10px",
                    zIndex: 2,
                  }}
                />
                <Box
                  display="flex"
                  flexDirection="column"
                  style={{ position: "absolute", zIndex: 3 }}
                >
                  <Text
                    variant="titleMedium"
                    style={{
                      marginBottom: "24px",
                    }}
                  >
                    Bumi Class
                  </Text>
                  <Text
                    variant="bodyLarge"
                    style={{ color: theme.palette.gray[200] }}
                  >
                    This special introductory class is designed for young
                    professionals who want to{" "}
                    <span
                      style={{
                        color: theme.palette.blue[200],
                        fontWeight: "600",
                      }}
                    >
                      get familiar with the terms and jargon surrounding
                      environmental issues
                    </span>{" "}
                    and{" "}
                    <span
                      style={{
                        color: theme.palette.blue[200],
                        fontWeight: "600",
                      }}
                    >
                      learn more in our more extensive courses and in-depth
                    </span>
                    . We have simplified stuff for you in our compact but
                    extensive course.
                    {/* <span
                      style={{
                        color: theme.palette.blue[200],
                        fontWeight: "600",
                      }}
                    >
                      online visits to conduct an interactive learning session
                      with students
                    </span>
                    . We offer a variety of topics to choose from, climate
                    change to sustainable lifestyle. This comes with a
                    post-session activity where students can implement what they
                    have learnt. */}
                  </Text>
                  <Text
                    variant="bodyLarge"
                    style={{
                      color: theme.palette.gray[200],
                      marginTop: "24px",
                    }}
                  >
                    Areas of discussions are climate change, carbon footprint
                    and greenhouse gas emissions, life cycle assessment and how
                    to implement these in your workplace. The class also
                    includes live sessions and a fun hands-on project that will
                    help you understand the ideas better.
                  </Text>
                  <Button
                    style={{
                      backgroundColor: "#B5CF50",
                      width: "fit-content",
                      marginTop: "24px",
                    }}
                  >
                    <a href="mailto:contact@bumibuddies.org">
                      <Text variant="bodyMedium">Contact Us</Text>
                    </a>
                  </Button>
                  {/* <ul>
                    <li>
                      <Text variant="bodyLarge">Bullet point if you want</Text>
                    </li>
                    <li>
                      <Text variant="bodyLarge">Bullet point if you want</Text>
                    </li>
                    <li>
                      <Text variant="bodyLarge">Bullet point if you want</Text>
                    </li>
                  </ul> */}
                </Box>
              </Box>
            </ProjectItem>
            <ProjectItem style={{ position: "relative" }}>
              <img
                src="/images/Vector.png"
                alt="project_sample"
                style={{
                  width: "100%",
                  position: "absolute",
                  zIndex: 2,
                  top: "-100px",
                  left: "-50px",
                }}
              />
              <img
                src="/images/bumi-class.png"
                alt="project_sample"
                style={{ width: "100%", position: "relative", zIndex: 3 }}
              />
            </ProjectItem>
          </ProjectContainer>
          <ProjectContainer>
            <ProjectItem
              style={{
                position: "relative",
              }}
            >
              <img
                src="/images/Vector.png"
                alt="project_sample"
                style={{
                  width: "100%",
                  position: "absolute",
                  zIndex: 2,
                  top: "-100px",
                  left: "-50px",
                }}
              />
              <img
                src="/images/yes-project.png"
                alt="project_sample"
                style={{ width: "100%", position: "relative", zIndex: 3 }}
              />
            </ProjectItem>
            <ProjectItem
              style={{
                position: "relative",
                marginBottom: isMobile ? "250px" : "unset",
              }}
            >
              <Box>
                <Circle
                  size="46px"
                  background="#F2C94C"
                  style={{
                    position: "absolute",
                    left: "-10px",
                    top: "-10px",
                    zIndex: 2,
                  }}
                />
                <Box
                  display="flex"
                  flexDirection="column"
                  style={{ position: "absolute", zIndex: 3 }}
                >
                  <Text
                    variant="titleMedium"
                    style={{
                      marginBottom: "24px",
                    }}
                  >
                    YES Workshop and Training
                  </Text>
                  <Text
                    variant="bodyLarge"
                    style={{ color: theme.palette.gray[200] }}
                  >
                    Our program offers a{" "}
                    <span
                      style={{
                        color: theme.palette.blue[200],
                        fontWeight: "600",
                      }}
                    >
                      comprehensive and interactive learning experience,{" "}
                    </span>
                    designed to deepen your understanding of environmental
                    issues, and{" "}
                    <span
                      style={{
                        color: theme.palette.blue[200],
                        fontWeight: "600",
                      }}
                    >
                      inspire you to become a change agent in your community
                    </span>
                    . This program consists of inspiring speakers and
                    facilitators that will guide you through a range of topics,
                    including climate change, biodiversity loss, sustainable
                    resource management, and environmental justice.
                  </Text>
                  <Text
                    variant="bodyLarge"
                    style={{
                      color: theme.palette.gray[200],
                      marginTop: "24px",
                    }}
                  >
                    Let's work together towards a brighter future!
                  </Text>
                  <Button
                    style={{
                      backgroundColor: "#B5CF50",
                      width: "fit-content",
                      marginTop: "24px",
                    }}
                  >
                    <a href="https://linktr.ee/bumibuddies">
                      <Text variant="bodyMedium">Find Out More</Text>
                    </a>
                  </Button>
                  {/* <ul>
                    <li>
                      <Text variant="bodyLarge">Bullet point if you want</Text>
                    </li>
                    <li>
                      <Text variant="bodyLarge">Bullet point if you want</Text>
                    </li>
                    <li>
                      <Text variant="bodyLarge">Bullet point if you want</Text>
                    </li>
                  </ul> */}
                </Box>
              </Box>
            </ProjectItem>
          </ProjectContainer>
        </Box>
        {!isMobile ? (
          <ImpactContainer>
            <CollabContainer>
              <Text variant="headingBig">Interested to collab with us?</Text>
              <Text variant="bodyLarge" style={{ width: "70%" }}>
                The urgency to act upon the global environmental problem
                certainly cannot be done alone. Through support and
                collaboration, we can hand-in-hand to make our dream come true.
                Hit us up for collaboration!
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
              Interested to collab with us?
            </Text>
            <Text variant="bodyLarge">
              The urgency to act upon the global environmental problem certainly
              cannot be done alone. Through support and collaboration, we can
              hand-in-hand to make our dream come true. Hit us up for
              collaboration!
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

export default Collaboration;
