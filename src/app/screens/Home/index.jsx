/* eslint-disable @next/next/no-img-element */
import Text from "../../components/Text";
import { Box, IconButton } from "@mui/material";
import theme from "../../styles/theme/theme";
import VisibilitySensor from "react-visibility-sensor";
import {
  ContentContainer,
  ProjectContainer,
  ProjectItem,
  ImpactContainer,
  ImpactItems,
  BackgroundContainer,
  Background,
  EnvirontmentalEducation,
  EducationItem,
} from "./styles";
import Button from "../../components/Button";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useIsMobile from "../../hooks/useIsMobile";
import Slider from "react-slick";
import { Circle, Rectangle } from "../../components/Shapes";
import { environtmentalEducation } from "./schema";
import CountUp from "react-countup";
import axios from "axios";
import { baseUrl } from "../../../utils/baseApi";

const jumbotronContents = [
  {
    image: "/images/banner1.png",
    titleOne: "Educate, Encourage and Act for the Future",
    titleTwo:
      "A non-governmental organisation dedicated to educating Indonesian children and youth about environmental awareness.",
  },
  {
    image: "/images/banner1.png",
    titleOne: "Test 1",
    titleTwo:
      "A non-governmental organisation dedicated to educating Indonesian children and youth about environmental awareness.",
  },
];

const Home = () => {
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
          (el) => el.attributes.page === "home"
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
      <Box style={{ zIndex: 1, height: isMobile ? "300px" : "unset" }}>
        <Slider
          {...settings}
          autoplay
          infinite
          style={{ zIndex: 1, height: isMobile ? "300px" : "unset" }}
        >
          {jumbotrons.map((el, idx) => {
            return (
              <Box
                key={idx}
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  height: isMobile ? "300px" : "unset",
                }}
              >
                <Box
                  style={{
                    height: "100%",
                  }}
                >
                  <img
                    src={`${baseUrl}${el.attributes.image.data[0].attributes.formats.large.url}`}
                    alt="background_1"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: isMobile ? "150px" : "315px",
                    left: { md: "100px", sm: "50px" },
                    transform: "translate(-100px, -50%)",
                    zIndex: 2,
                    ml: isMobile ? "120px" : "100px",
                  }}
                >
                  <Text
                    variant="headingLarge"
                    style={{
                      color: theme.palette.white[100],
                      fontSize: isMobile ? "24px" : "64px",
                      lineHeight: isMobile ? "24px" : "inherit",
                      maxWidth: "639px",
                    }}
                  >
                    {el.attributes.title}
                  </Text>

                  <Text
                    variant="bodyLarge"
                    style={{
                      color: theme.palette.gray[50],
                      maxWidth: "639px",
                    }}
                  >
                    {el.attributes.description}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Slider>
      </Box>

      <Box>
        <Box
          style={{
            paddingLeft: isMobile ? "20px" : "70px",
            paddingRight: isMobile ? "20px" : "70px",
          }}
        >
          <ContentContainer>
            <Box style={{ maxWidth: "1080px" }}>
              <Circle
                size="38px"
                background="#219653"
                style={{
                  position: "absolute",
                  left: isMobile ? 0 : "60px",
                  top: isMobile ? "350px" : "700px",
                }}
              />
              <Circle
                size="74px"
                background="#F2C94C"
                style={{
                  position: "absolute",
                  left: "-37px",
                  top: isMobile ? "700px" : "unset",
                }}
              />
              <Text
                variant="headingThin"
                style={{
                  textAlign: "center",
                  color: theme.palette.gray[200],
                }}
              >
                Our fun and interactive programs teach children about the
                importance of caring for our planet, while instilling a sense of
                responsibility and respect for nature. Join us in creating a
                brighter, more sustainable future for all.
              </Text>
            </Box>
            <Circle
              size="105px"
              background="#BB6BD9"
              style={{
                position: "absolute",
                right: "0",
                top: isMobile ? "300px" : "640px",
                overflow: "hidden",
              }}
            />

            {!isMobile && (
              <Circle
                size="38px"
                background="#F2C94C"
                style={{ position: "absolute", top: "976px", right: "200px" }}
              />
            )}
          </ContentContainer>
          <BackgroundContainer>
            <Background>
              <img
                src="/images/global-warming.png"
                alt="global warming"
                style={{ height: "312px", width: "312px" }}
              />
            </Background>
            <Box>
              <Text
                variant="subheadingLargeThin"
                style={{ color: theme.palette.gray[200], marginBottom: "24px" }}
              >
                Excessive greenhouse gas emissions currently present in the
                atmosphere have shifted the{" "}
                <span
                  style={{ color: theme.palette.blue[200], fontWeight: "600" }}
                >
                  change in the climate
                </span>
                , causing unpredictable weather patterns that lead to{" "}
                <span
                  style={{ color: theme.palette.blue[200], fontWeight: "600" }}
                >
                  extreme drought{" "}
                </span>
                and{" "}
                <span
                  style={{ color: theme.palette.blue[200], fontWeight: "600" }}
                >
                  rainfalls.
                </span>
              </Text>
              <Text
                variant="subheadingLargeThin"
                style={{ color: theme.palette.gray[200], marginBottom: "24px" }}
              >
                This process happens naturally, but it is{" "}
                <span
                  style={{ color: theme.palette.blue[200], fontWeight: "600" }}
                >
                  accelerated through human activities
                </span>
                .
              </Text>
              <Text
                variant="subheadingLargeThin"
                style={{ color: theme.palette.gray[200], marginBottom: "24px" }}
              >
                We need to act now, before there will be irreversible damage.
              </Text>
            </Box>
          </BackgroundContainer>
        </Box>
        <Box
          display="flex"
          width="100%"
          justifyContent="center"
          marginBottom="100px"
        >
          <iframe
            width={isMobile ? "80%" : 1000}
            height="500"
            src="https://www.youtube.com/embed/J5NQO20uZ1I"
          ></iframe>
        </Box>

        <Rectangle
          size="105px"
          background="#BB6BD9"
          style={{
            // position: "absolute",
            right: "0",
            top: isMobile ? "300px" : "640px",
            overflow: "hidden",
          }}
        />
        <EnvirontmentalEducation>
          <Text
            variant="sectionTitle"
            marginBottom="24px"
            style={{
              textAlign: "center",
            }}
          >
            Why Environmental Education?
          </Text>
          <Box
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "24px",
            }}
          >
            {environtmentalEducation.map((el, idx) => {
              return (
                <EducationItem key={idx}>
                  <img src={el.icon} alt={`icon-${idx}`} />
                  <Text
                    variant="titleSmall"
                    style={{
                      textAlign: "center",
                    }}
                  >
                    {el.title}
                  </Text>
                  <Text
                    variant="bodyMedium"
                    style={{
                      textAlign: "center",
                      color: theme.palette.gray[100],
                    }}
                  >
                    {el.desc}
                  </Text>
                </EducationItem>
              );
            })}
          </Box>
        </EnvirontmentalEducation>
      </Box>

      <Box
        style={{
          paddingLeft: isMobile ? "20px" : "70px",
          paddingRight: isMobile ? "20px" : "70px",
          marginBottom: "100px",
        }}
      >
        <Box
          style={{
            marginTop: isMobile ? "52px" : "120px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ProjectContainer style={{ marginBottom: "300px" }}>
            <ProjectItem
              style={{
                position: "relative",
                marginBottom: isMobile ? "60px" : "unset",
              }}
            >
              <Circle
                size="70px"
                background="#56CCF2"
                style={{
                  position: "absolute",
                  left: "0px",
                  top: "-15px",
                  zIndex: 2,
                }}
              />
              <Box
                display="flex"
                flexDirection="column"
                style={{ position: "absolute", zIndex: 3 }}
              >
                <Text variant="sectionTitle">Our Program</Text>
                <div
                  style={{
                    width: "360px",
                    height: "6px",
                    backgroundColor: "#F2C94C",
                  }}
                ></div>
              </Box>
            </ProjectItem>
            <ProjectItem style={{ position: "relative" }}>
              <Text
                variant="bodyLarge"
                style={{ color: theme.palette.gray[200], position: "absolute" }}
              >
                Our fun and interactive programs teach children about the
                importance of caring for our planet, while instilling a sense of
                responsibility and respect for nature. Join us in creating a
                brighter, more sustainable future for all.
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
              <Box style={{ marginTop: "30px" }}>
                <Circle
                  size="46px"
                  background="#F2C94C"
                  style={{
                    position: "absolute",
                    left: "-10px",
                    top: "20px",
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
                    <Text variant="bodyMedium">Arrange Session</Text>
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
              <Box style={{ marginTop: "30px" }}>
                <Circle
                  size="46px"
                  background="#BB6BD9"
                  style={{
                    position: "absolute",
                    left: "-10px",
                    top: "20px",
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
                  height: "auto",
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
              <Box style={{ marginTop: "30px" }}>
                <Circle
                  size="46px"
                  background="#F2C94C"
                  style={{
                    position: "absolute",
                    left: "-10px",
                    top: "20px",
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
                    <Text variant="bodyMedium">Find Out More</Text>
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
      </Box>

      <ImpactContainer>
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
        </ImpactItems>
      </ImpactContainer>
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
          }}
        >
          <ProjectContainer>
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
                <Text variant="sectionTitle">Our Past Work</Text>
                <div
                  style={{
                    width: "360px",
                    height: "6px",
                    backgroundColor: "#F2C94C",
                  }}
                ></div>
              </Box>
            </ProjectItem>
          </ProjectContainer>
          <ProjectContainer>
            <ProjectItem
              style={{
                position: "relative",
                marginBottom: isMobile ? "150px" : "unset",
              }}
            >
              <img
                src="/images/Vector2.png"
                alt="project_sample"
                style={{
                  width: "100%",
                  position: "absolute",
                  zIndex: 2,
                  top: "-200px",
                  left: "-300px",
                }}
              />
              <Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  style={{ position: "absolute", zIndex: 3, height: "100%" }}
                >
                  <Text
                    variant="titleMedium"
                    style={{
                      marginBottom: "24px",
                    }}
                  >
                    Green Youth Action
                  </Text>
                  <Text
                    variant="bodyLarge"
                    style={{ color: theme.palette.gray[200] }}
                  >
                    This is where it all started! We held sessions every
                    Saturday with children in Taman Baca Keputih, Surabaya. The
                    children would draw what a better Earth look like to them,
                    participated in games where we separated organic and
                    inorganic wastes, and celebrated World Water Day 2019 with
                    Environmental Engineering students of ITS. 
                  </Text>
                </Box>
              </Box>
            </ProjectItem>
            <ProjectItem style={{ position: "relative" }}>
              {!isMobile && (
                <>
                  <Circle
                    size="36px"
                    background="#219653"
                    style={{
                      position: "absolute",
                      left: "-20px",
                      top: "-10px",
                      zIndex: 2,
                    }}
                  />
                  <Circle
                    size="135px"
                    background="#F2C94C"
                    style={{
                      position: "absolute",
                      right: "-50px",
                      top: "-30px",
                      zIndex: 2,
                    }}
                  />
                  <Circle
                    size="135px"
                    background="#BB6BD9"
                    style={{
                      position: "absolute",
                      right: "50px",
                      bottom: "-30px",
                      zIndex: 2,
                    }}
                  />
                </>
              )}

              <img
                src={
                  isMobile
                    ? "/images/past-work-mobile.png"
                    : "/images/past-work.png"
                }
                alt="project_sample"
                style={{ width: "100%", position: "relative", zIndex: 3 }}
              />
            </ProjectItem>
          </ProjectContainer>
          <ProjectContainer customFlexDirection="column-reverse">
            <ProjectItem
              style={{
                position: "relative",
              }}
            >
              {!isMobile && (
                <>
                  <Circle
                    size="36px"
                    background="#219653"
                    style={{
                      position: "absolute",
                      left: "-20px",
                      top: "-10px",
                      zIndex: 2,
                    }}
                  />
                  <Circle
                    size="135px"
                    background="#BB6BD9"
                    style={{
                      position: "absolute",
                      right: "50px",
                      bottom: "-30px",
                      zIndex: 2,
                    }}
                  />
                </>
              )}
              <img
                src={
                  isMobile
                    ? "/images/past-work-mobile.png"
                    : "/images/more-love.png"
                }
                alt="project_sample"
                style={{ width: "100%", position: "relative", zIndex: 3 }}
              />
            </ProjectItem>
            <ProjectItem
              style={{
                position: "relative",
                marginBottom: isMobile ? "450px" : "unset",
              }}
            >
              <Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  style={{
                    position: "absolute",
                    zIndex: 3,
                    height: "100%",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="/images/Vector3.png"
                    alt="project_sample"
                    style={{
                      position: "absolute",
                      zIndex: 0,
                      // top: "-200px",
                      right: "-200px",
                      height: "387px",
                      width: "400px",
                    }}
                  />
                  <Text
                    variant="titleMedium"
                    style={{
                      marginBottom: "24px",
                    }}
                  >
                    Less Waste, more love!
                  </Text>
                  <Text
                    variant="bodyLarge"
                    style={{ color: theme.palette.gray[200], zIndex: 1 }}
                  >
                    One of our biggest themes in 2021 was to waste less but
                    share more love. This program is targeted for Indonesian
                    youths and adults,{" "}
                    <span
                      style={{
                        color: theme.palette.blue[200],
                        fontWeight: "600",
                      }}
                    >
                      to raise awareness of issues surrounding waste management
                      and how it connects to climate change. 
                    </span>
                  </Text>
                  <Text
                    variant="bodyLarge"
                    style={{
                      color: theme.palette.gray[200],
                      marginTop: "24px",
                    }}
                  >
                    The
                    <span
                      style={{
                        color: theme.palette.blue[200],
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      activities{" "}
                    </span>{" "}
                    that we did under this project ranged from
                    <span
                      style={{
                        color: theme.palette.blue[200],
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      less-waste in-person workshops, webinar series on
                      less-waste lifestyle, and workshops on creating art and
                      craft using waste.{" "}
                    </span>{" "}
                    We also offer a course about Climate Change and
                    Sustainability, working together with GY4ES (Global Youth
                    for Environment and Sustainability) India.
                  </Text>
                </Box>
              </Box>
            </ProjectItem>
          </ProjectContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
