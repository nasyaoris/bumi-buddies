import { styled, Box } from "@mui/material";

export const JumbotronContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "611px",
  backgroundColor: "rgba(28, 28, 28, 0.6)",
  zIndex: 2,
}));
export const ContentContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  height: "auto",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
}));

export const Content = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "relative",
  width: "60%",
  // height: "100vh",
  height: "fit-content",
  flexDirection: "column",
  padding: theme.spacing(5),
  zIndex: 4,
  backgroundColor: theme.palette.white[100],
  marginTop: "-4rem",
  [theme.breakpoints.down("md")]: {
    width: "90%",
  }
}));

export const VisionContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

export const ServicesContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: theme.spacing(3),
  marginTop: theme.spacing(6),
  zIndex: 0,
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(2,1fr)",
  }
}));

export const ClientContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: theme.spacing(2),
  alignItems: "center",
  justifyItems: "center",
}));