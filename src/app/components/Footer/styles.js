import { Box, styled } from "@mui/material";

export const FooterContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(4),
  backgroundColor: "#2F3948",
  zIndex: 1,
  position: "relative",
  bottom: 0,
  [theme.breakpoints.down("sm")]: {
    flex: 1
  }
}))

export const FooterContentBox = styled(Box)(({ theme }) => ({
  width: "90%",
  height: "auto",
  borderBottom: `2px solid ${theme.palette.white[50]}`,
  flexDirection: "column",
  position: "relative",
  overflow: "wrap",
}))

export const InformationBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginTop: theme.spacing(3),
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    marginBottom: theme.spacing(3),
    marginBottom: theme.spacing(2),
  }
}))

export const ShortcutContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: "50px",
  width: "100%",
  marginBottom: theme.spacing(3),
  color: "#FFFFFF",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(2,1fr)",
    marginTop: theme.spacing(2)
  }
}));