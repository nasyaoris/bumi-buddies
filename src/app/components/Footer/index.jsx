/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  FooterContainer,
  FooterContentBox,
  InformationBox,
  ShortcutContainer,
} from "./styles";
import { Box } from "@mui/material";
import Text from "../Text";
import theme from "../../styles/theme/theme";
import FadeUp from "../FadeUp";
import Link from "next/link";
// import { PARAMS } from '../../screens/Bisnis/schema';
import useIsMobile from "../../hooks/useIsMobile";
import { useRouter } from "next/router";

const shortcuts = [
  {
    page: "Information",
    links: [
      {
        section: "Event & Class",
        url: "/#anagata",
      },
      {
        section: "About Us",
        url: "/#bisnis",
      },
      {
        section: "Collab with Us",
        url: "/#klien",
      },
    ],
  },
  {
    page: "Connect",
    links: [],
    contents: ["connect@thesocialclub.id"],
  },
  {
    page: "Contact",
    links: [],
    content: [
      "PT Karya Aplikasi Sosial Teknologi SCBD, Treasury Tower, 2nd Floor, Unit 2E District 8, Jl. Jenderal Sudirman No.52-53, RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190",
    ],
  },
  // {
  //   page: "Social Media",
  //   links: [],
  //   contents: ["PT Karya Aplikasi Sosial Teknologi SCBD, Treasury Tower, 2nd Floor, Unit 2E District 8, Jl. Jenderal Sudirman No.52-53, RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190"]
  // },
];
const Footer = () => {
  const router = useRouter();
  const isMobile = useIsMobile();

  return (
    <FooterContainer>
      <FooterContentBox>
        {/* <FadeUp>
        <img src="/images/logoAnagataWhite.svg" alt="logo" style={{height: isMobile? "40px" : "71px"}} />
      </FadeUp> */}
        <FadeUp>
          <InformationBox>
            {/* <Box maxWidth="370px">
            <Text variant="h3" sx={{ color: theme.palette.white[50], marginBottom: theme.spacing(3) }}>Anagata Visi Teknologi</Text>
            <Text variant="anagataRegulerMedium" sx={{ color: theme.palette.white[50]}}> 
            Jl. I Gusti Ngurah Rai, No. 14, RT.001/RW.010, Kranji, Kecamatan Bekasi Barat, Kota Bekasi, Jawa Barat 17135
            </Text>
          </Box> */}
            <ShortcutContainer>
              {/* TODO: change to Link */}
              <Box width="100%">
                <Text
                  variant="subHeadingFooter"
                  style={{ marginBottom: "24px" }}
                >
                  Information
                </Text>
                <Text
                  variant="bodyLarge"
                  style={{ marginBottom: "24px" }}
                  onClick={() => router.push("/event")}
                >
                  Event and Class
                </Text>
                <Text
                  variant="bodyLarge"
                  style={{ marginBottom: "24px" }}
                  onClick={() => router.push("/about-us")}
                >
                  About Us
                </Text>
                <Text
                  variant="bodyLarge"
                  style={{ marginBottom: "24px" }}
                  onClick={() => router.push("/collab")}
                >
                  Collab with Us
                </Text>
              </Box>
              <Box width="100%">
                <Text
                  variant="subHeadingFooter"
                  style={{ marginBottom: "24px" }}
                >
                  Whatsapp
                </Text>
                <Text variant="bodyLarge" style={{ marginBottom: "24px" }}>
                  +62 851-6359-0281
                </Text>
                <Text
                  variant="subHeadingFooter"
                  style={{ marginBottom: "24px" }}
                >
                  Connect
                </Text>
                <a href="mailto:contact@bumibuddies.org">
                  <Text variant="bodyLarge" style={{ marginBottom: "24px" }}>
                    contact@bumibuddies.org
                  </Text>
                </a>
              </Box>
              <Box width="100%"></Box>
              <Box width="100%">
                <Text
                  variant="subHeadingFooter"
                  style={{ marginBottom: "24px" }}
                >
                  Social Media
                </Text>
                <a href="https://www.instagram.com/bumibuddies/?igshid=MzRlODBiNWFlZA%3D%3D">
                  <img
                    src={"/images/Instagram.svg"}
                    alt="instagram"
                    style={{ marginRight: "8px" }}
                  />
                </a>

                <img src={"/images/linkedin.svg"} alt="linkedin" />
              </Box>
              <Box maxWidth="370px">
                <Text
                  variant="subHeadingFooter"
                  style={{ marginBottom: "24px" }}
                >
                  Others
                </Text>

                <a href="https://drive.google.com/drive/folders/1SQPBjwrItHb4vbxY2cRzHw5Po-GeMvy8?usp=sharing">
                  <Text variant="bodyLarge" style={{ marginBottom: "24px" }}>
                    F.A.Q
                  </Text>
                </a>
              </Box>
              {/* {
              shortcuts.map((el, idx) => (
                <Box maxWidth="370px" key={idx}>
                  <Text variant="h3" sx={{ color: theme.palette.white[50] }}>
                    {el.page}
                  </Text>
                  {
                    el.links.map((item, index) => (
                      <Link href={item.url} key={index}>
                        <Text 
                          variant="anagataRegulerMedium"
                          sx={{ 
                            color: theme.palette.white[50],
                            marginTop: theme.spacing(3),
                            cursor: "pointer",
                          }} 
                          key={index}
                        >
                          {item.section}
                        </Text>
                      </Link>
                    ))
                  }
                </Box>
              ))
            } */}
            </ShortcutContainer>
          </InformationBox>
        </FadeUp>
      </FooterContentBox>
      {/* <FadeUp>
        <Box display="flex" flexDirection="row" marginTop={1} >
          <img src="/images/Vector.svg" alt="logo"  style={{marginRight: theme.spacing(1)}} />
          <Text variant="anagataLightSmall" sx={{ color: theme.palette.white[50]}}> 
            2022 Anagata Visi Teknologi, All Rights Reserved
          </Text>
        </Box>
      </FadeUp> */}
    </FooterContainer>
  );
};

export default Footer;
