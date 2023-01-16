/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { 
  FooterContainer, 
  FooterContentBox, 
  InformationBox,
  ShortcutContainer
} from "./styles"
import { Box } from '@mui/material';
import Text from '../Text';
import theme from '../../styles/theme/theme';
import FadeUp from '../FadeUp';
import Link from 'next/link'
// import { PARAMS } from '../../screens/Bisnis/schema';
import useIsMobile from '../../hooks/useIsMobile';

// const shortcuts = [
//   {
//     page: "Beranda",
//     links: [
//       {
//         section: "Anagata",
//         url: "/#anagata"
//       },
//       {
//         section: "Bisnis",
//         url: "/#bisnis"
//       },
//       {
//         section: "Klien Kami",
//         url: "/#klien"
//       }
//     ]
//   },
//   {
//     page: "Tentang",
//     links: [
//       {
//         section: "Tentang Kami",
//         url: "/tentang/#tentang-kami"
//       },
//       {
//         section: "Fokus Kami",
//         url: "/tentang/#fokus-kami"
//       },
//     ]
//   },
//   {
//     page: "Bisnis",
//     links: [
//       {
//         section: "Security System",
//         url: `/bisnis?section=${PARAMS.SECURITY_SYSTEM.key}`
//       },
//       {
//         section: "Audio Visual",
//         url: `/bisnis?section=${PARAMS.AUDIO_VISUAL.key}`
//       },
//       {
//         section: "Telecommunication",
//         url: `/bisnis?section=${PARAMS.TELECOMMUNICATION.key}`
//       },
//       {
//         section: "Air Conditioning System",
//         url: `/bisnis?section=${PARAMS.AIR_CONDITIONING.key}`
//       },
//       {
//         section: "Integrated System",
//         url: `/bisnis?section=${PARAMS.INTEGRATED_SYSTEM.key}`
//       },
//       {
//         section: "Maintenance Service",
//         url: `/bisnis?section=${PARAMS.MAINTENANCE.key}`
//       },
//     ]
//   },
// ]
const Footer = () => {
  const isMobile = useIsMobile();
  
  return (
    <FooterContainer>
      <FooterContentBox borderBottom={1}>
      <FadeUp>
        <img src="/images/logoAnagataWhite.svg" alt="logo" style={{height: isMobile? "40px" : "71px"}} />
      </FadeUp>
      <FadeUp>
        <InformationBox>
          <Box maxWidth="370px">
            <Text variant="h3" sx={{ color: theme.palette.white[50], marginBottom: theme.spacing(3) }}>Anagata Visi Teknologi</Text>
            <Text variant="anagataRegulerMedium" sx={{ color: theme.palette.white[50]}}> 
            Jl. I Gusti Ngurah Rai, No. 14, RT.001/RW.010, Kranji, Kecamatan Bekasi Barat, Kota Bekasi, Jawa Barat 17135
            </Text>
          </Box>
          <ShortcutContainer>
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
      <FadeUp>
        <Box display="flex" flexDirection="row" marginTop={1} >
          <img src="/images/Vector.svg" alt="logo"  style={{marginRight: theme.spacing(1)}} />
          <Text variant="anagataLightSmall" sx={{ color: theme.palette.white[50]}}> 
            2022 Anagata Visi Teknologi, All Rights Reserved
          </Text>
        </Box>
      </FadeUp>
     

    </FooterContainer>
  )
}

export default Footer; 