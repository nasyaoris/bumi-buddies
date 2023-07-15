/* eslint-disable @next/next/no-img-element */
import Text from "../../components/Text";
import {
  Box,
  Card,
  CardActions,
  CardMedia,
  IconButton,
  Grid,
} from "@mui/material";
import { JumbotronContainer, ContentContainer } from "./styles";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useIsMobile from "../../hooks/useIsMobile";

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
  const isMobile = useIsMobile();
  const [activeImage, setActiveImage] = useState(0);
  const [isViewMore, setIsViewMore] = useState(false);
  const [data, setData] = useState(Array.from(Array(24)));
  const [itemsToShow, setItemsToShow] = useState(isMobile ? 3 : 8);
  console.log(isMobile ? 3 : 8);
  const router = useRouter();

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

  useEffect(() => {
    if (!isViewMore && isMobile) {
      setItemsToShow(3);
    } else if (!isViewMore && !isMobile) {
      setItemsToShow(8);
    }
  }, [isViewMore, isMobile]);

  const showMore = () => {
    console.log(isViewMore);
    console.log(isMobile ? 3 : 8);
    if (!isViewMore) {
      setItemsToShow(data.length);
      setIsViewMore(true);
    } else {
      setItemsToShow(isMobile ? 3 : 8);
      setIsViewMore(false);
    }
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
            src="/images/Vector4.png"
            alt="project_sample"
            style={{
              position: "absolute",
              zIndex: 0,
              // top: "-200px",
              left: "-200px",
              height: "587px",
              width: "400px",
              top: "100px",
            }}
          />
        </ContentContainer>
        <ContentContainer style={{ position: "relative" }}>
          <img
            src="/images/Vector5.png"
            alt="project_sample"
            style={{
              position: "absolute",
              zIndex: 0,
              // top: "-200px",
              left: "-200px",
              height: "587px",
              width: "400px",
              top: "1000px",
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </Text>
          </Box>
        </ContentContainer>
      </Box>
      {/* <h6>
        {isViewMore ? setData(Array.from(Array(24))) :setData(data.slice(0,5))}
        <button className="btn" onClick={() => isViewMore(!isViewMore)}>Show more</button>
        {isViewMore ? "Show less" : "Show more"}
      </h6> */}

      <ContentContainer style={{ position: "relative" }}>
        <Grid container spacing={{ xs: 2, sm: 3 }} justify="center">
          {data.slice(0, itemsToShow).map((_, index) => (
            <Grid item xs={12} sm={4} key={index} align="center">
              <Card
                sx={{ maxWidth: 345 }}
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  display: "inline-block",
                  margin: "1rem",
                  position: "relative",
                  padding: "12px",
                }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image="/images/Rectangle.png"
                  title="rectangle"
                />
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexDirection: "column",
                    marginTop: "8px",
                    justifyContent: "flex-start",
                  }}
                >
                  <Text
                    variant="cardTitle"
                    style={{ color: "#000", textAlign: "left" }}
                  >
                    Title
                  </Text>
                  <Text
                    variant="cardSubheading"
                    style={{ color: "#2BB8AB", textAlign: "left" }}
                  >
                    Minggu, 22 Januari 2023 13:00 WIB
                  </Text>
                  <Text
                    variant="cardBody"
                    style={{ color: "#4F4F4F", textAlign: "left" }}
                  >
                    LLorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an
                  </Text>
                </div>
                <CardActions sx={{ padding: "unset", marginTop: 2 }}>
                  <Button
                    size="large"
                    style={{ backgroundColor: "#B5CF50" }}
                    sx={{ width: "100%" }}
                  >
                    Daftar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box style={{ paddingBottom: "80px", paddingTop: "40px" }}>
          <a
            className="btn btn-primary"
            onClick={showMore}
            style={{
              color: "#2BB8AB",
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal",
            }}
          >
            {isViewMore ? <span>Show less</span> : <span>Show more</span>}
          </a>
        </Box>
      </ContentContainer>
    </Box>
  );
};

export default Event;
