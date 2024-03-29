/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { AppBarContainer, NavbarContainer } from "./styles";
import {
  Toolbar,
  CssBaseline,
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import Menu from "../icons/MenuIcon";
import CloseIcon from "../icons/CloseIcon";
import Text from "../Text";
import Link from "next/link";
import theme from "../../styles/theme/theme";
import { useRouter } from "next/router";
import useIsMobile from "../../hooks/useIsMobile";
import { navItems } from "./schema";
import dynamic from "next/dynamic";
import Button from "../Button";

const Animation = dynamic(() => import("../Animation"), { ssr: false });

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useIsMobile();
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "left" }}>
      <Box
        sx={{
          padding: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* <img src="/images/New_Logo.svg" alt="logo" style={{height: "34px"}} /> */}
        <CloseIcon />
      </Box>
      <Divider />
      <List>
        {navItems?.map((item) => (
          <ListItem
            key={item}
            disablePadding
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <ListItemButton sx={{ textAlign: "left" }}>
              <Link href={item.url}>
                <Text
                  variant="h4Small"
                  sx={{
                    color:
                      router.pathname == item.url
                        ? "green"
                        : theme.palette.black[50],
                    marginRight: theme.spacing(6),
                    cursor: "pointer",
                  }}
                >
                  {item.page}
                </Text>
              </Link>
            </ListItemButton>
            {item.links && (
              <Box marginLeft={2} style={{ position: "relative" }}>
                <List>
                  {/* <Animation style={{ position: "absolute", zIndex: 0, display: "flex",
                        justifyContent: "center", alignItems: "center", left: 10 }}>
                        <img
                          src="/images/logobaru_opacity.png"
                          alt="logoOpacity"
                          style={{ width: isMobile ? "300px" : "inherit"}}
                        /> 
                      </Animation> */}
                  {item.links.map((el) => (
                    <ListItem key={el.section} disablePadding>
                      <ListItemButton sx={{ textAlign: "left" }}>
                        <Link href={el.url}>
                          <Text
                            variant="h4Small"
                            sx={{
                              color:
                                router.query.section == el.param
                                  ? theme.palette.primary.orange
                                  : theme.palette.black[50],
                              marginRight: theme.spacing(6),
                              cursor: "pointer",
                            }}
                          >
                            {el.section}
                          </Text>
                        </Link>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
          </ListItem>
        ))}
        <ListItem
          disablePadding
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <ListItemButton sx={{ textAlign: "left" }}>
            <a href="https://api.whatsapp.com/send?phone=6285163590281">
              <Text
                variant="h4Small"
                sx={{
                  color: theme.palette.black[50],
                  marginRight: theme.spacing(6),
                  cursor: "pointer",
                }}
              >
                Contact Us
              </Text>
            </a>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <AppBarContainer position="static" component="nav">
        <CssBaseline />
        <Toolbar>
          <NavbarContainer>
            <Box style={{ cursor: "pointer" }}>
              <Link href="/">
                <Text variant="h4" sx={{ color: theme.palette.black[50] }}>
                  {/* <img src="/images/New_Logo.svg" alt="logo" style={{height: isMobile ? "34px" : "52px"}} /> */}
                </Text>
              </Link>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-around"
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              {navItems?.map((item) => (
                <Link href={item.url} key={item.url}>
                  <Text
                    variant="bodyLarge"
                    sx={{
                      color:
                        router.pathname == item.url
                          ? "green"
                          : theme.palette.black[50],
                      marginRight: theme.spacing(6),
                      cursor: "pointer",
                    }}
                  >
                    {item.page}
                  </Text>
                </Link>
              ))}
              <a href="https://api.whatsapp.com/send?phone=6285163590281">
                <Text
                  variant="h4Small"
                  sx={{
                    color: theme.palette.black[50],
                    marginRight: theme.spacing(6),
                    cursor: "pointer",
                  }}
                >
                  Contact Us
                </Text>
              </a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScu0bzJSCpLoidDGK5JC2WovYwsa5Ka_CpQSpMji8-sS2a_Qg/viewform?usp=sf_link">
                <Button style={{ backgroundColor: "#B5CF50" }}>
                  <Text variant="bodyMedium">Donate</Text>
                </Button>
              </a>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <Menu color="black.100" />
            </IconButton>
          </NavbarContainer>
        </Toolbar>
      </AppBarContainer>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
