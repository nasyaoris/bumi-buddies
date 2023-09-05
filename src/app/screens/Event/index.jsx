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
import { Circle } from "../../components/Shapes";
import axios from "axios";
import { baseUrl } from "../../../utils/baseApi";
import { format, parseISO } from "date-fns";

const jumbotronContents = [
  {
    image: "/images/event.png",
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
  const [eventPageDesc, setEventPageDesc] = useState({
    title: "",
    description: "",
  });
  const [itemsToShow, setItemsToShow] = useState(isMobile ? 3 : 9);
  const router = useRouter();

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
          (el) => el.attributes.page === "event"
        );
        setJumbotrons(homePageJumbotrons);
        console.log(homePageJumbotrons);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("https://api.bumibuddies.org/api/events", {
        params: {
          populate: "*",
        },
      })
      .then(function (response) {
        const events = response.data.data.map((el) => {
          // const parsedDate = toDate(el.attributes.datetime, {
          //   timeZone: "Asia/Bangkok",
          // });
          // const bangkokDate = utcToZonedTime(parsedDate, "Asia/Bangkok");
          // format(bangkokDate, "eeee , cc LLLL yyyy", {
          //   timeZone: "Asia/Bangkok",
          // }); // 2014-10-25 13:46:20+07:00
          const formattedDate = format(
            parseISO(el.attributes.datetime),
            "eeee, cc LLLL yyyy HH:mm"
          );
          return {
            title: el.attributes.title,
            description: el.attributes.description,
            formLink: el.attributes.formLink,
            date: formattedDate,
            image: el.attributes.images.data[0].attributes.formats.small.url,
          };
        });
        setData(events);
        console.log(events);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("https://api.bumibuddies.org/api/event-title", {
        params: {
          populate: "*",
        },
      })
      .then(function (response) {
        const eventData = {
          title: response.data.data.attributes.title,
          description: response.data.data.attributes.description,
        };
        setEventPageDesc(eventData);
        console.log(eventData);
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

  useEffect(() => {
    if (!isViewMore && isMobile) {
      setItemsToShow(3);
    } else if (!isViewMore && !isMobile) {
      setItemsToShow(9);
    }
  }, [isViewMore, isMobile]);

  const showMore = () => {
    console.log(isViewMore);
    console.log(isMobile ? 3 : 9);
    if (!isViewMore) {
      setItemsToShow(data.length);
      setIsViewMore(true);
    } else {
      setItemsToShow(isMobile ? 3 : 9);
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
                src={`${baseUrl}${jumbotrons[0]?.attributes.image.data[0].attributes.formats.large.url}`}
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
              {eventPageDesc?.title}
            </Text>
            <Text
              variant="bodyLarge"
              style={{ textAlign: "center", color: "#111111" }}
            >
              {eventPageDesc?.description}
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
        <img
          src="/images/Vector7.png"
          alt="project_sample"
          style={{
            position: "absolute",
            zIndex: 0,
            top: "-200px",
            left: "-100px",
            height: "587px",
            width: "400px",
            // top: "100px",
          }}
        />
        <img
          src="/images/Vector5.png"
          alt="project_sample"
          style={{
            position: "absolute",
            zIndex: 1,
            // top: "-200px",
            left: "-50px",
            height: "587px",
            width: "400px",
            top: "500px",
          }}
        />
        <Circle
          size="142px"
          background="#56CCF2"
          style={{
            position: "absolute",
            right: "400px",
            top: "100px",
            zIndex: 2,
          }}
        />
        <Circle
          size="30px"
          background="#9B51E0"
          style={{
            position: "absolute",
            right: "20px",
            top: "400px",
            zIndex: 2,
          }}
        />
        {!isMobile && (
          <img
            src="/images/Vector6.png"
            alt="project_sample"
            style={{
              position: "absolute",
              zIndex: 1,
              // top: "-200px",
              right: "-50px",
              height: "587px",
              width: "400px",
              top: "400px",
            }}
          />
        )}

        <Grid container spacing={{ xs: 2, sm: 3, lg: 1 }} justify="center">
          {data.slice(0, itemsToShow).map((el, index) => (
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
                  zIndex: "2",
                }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={`${baseUrl}${el?.image}`}
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
                    {el?.title}
                  </Text>
                  <Text
                    variant="cardSubheading"
                    style={{ color: "#2BB8AB", textAlign: "left" }}
                  >
                    {el?.date} WIB
                  </Text>
                  <Text
                    variant="cardBody"
                    style={{ color: "#4F4F4F", textAlign: "left" }}
                  >
                    {el?.description}
                  </Text>
                </div>
                <CardActions sx={{ padding: "unset", marginTop: 2 }}>
                  <a href={el?.formLink} style={{ width: "100%" }}>
                    <Button
                      size="large"
                      style={{ backgroundColor: "#B5CF50" }}
                      sx={{ width: "100%" }}
                    >
                      Daftar
                    </Button>
                  </a>
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
              cursor: "pointer",
            }}
          >
            {isViewMore ? <span>View less</span> : <span>View more</span>}
          </a>
        </Box>
      </ContentContainer>
    </Box>
  );
};

export default Event;
