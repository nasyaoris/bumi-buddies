import { styled, Box } from "@mui/material";
import { color, display } from "@mui/system";

export const JumbotronContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "611px",
  // backgroundColor: "rgba(28, 28, 28, 0.6)",
  // zIndex: 2,
}));
export const ContentContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  height: "auto",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: theme.spacing(10),
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
  },
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
  },
}));

export const ClientContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: theme.spacing(2),
  alignItems: "center",
  justifyItems: "center",
}));

export const ProjectContainer = styled(Box)(
  ({ theme, customFlexDirection }) => ({
    display: "flex",
    flexDirection: "row",
    gap: "42px",
    marginBottom: "160px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: customFlexDirection || "column",
    },
  })
);

export const ProjectItem = styled(Box)(({ theme }) => ({
  width: "50%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const BackgroundContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "42px",
  marginBottom: "160px",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "112px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    marginBottom: "54px",
  },
}));

export const Background = styled(Box)(({ theme }) => ({
  width: "30%",
  margin: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const ImpactContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#2BB8AB",
  color: "#FFFF",
  paddingTop: "39px",
  paddingBottom: "39px",
}));

export const ImpactItems = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const PartnerSection = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "120px",
  padding: "70px",
  [theme.breakpoints.down("sm")]: {
    padding: "20px",
    marginTop: "44px",
  },
}));

export const PartnerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "39px",
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
  },
}));

export const EnvirontmentalEducation = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#B5CF50",
  padding: "70px",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    padding: "40px",
  },
}));

export const EducationItem = styled(Box)(({ theme }) => ({
  width: "311px",
  height: "424px",
  padding: "30px",
  display: "flex",
  justifyContent: "center",
  gap: "16px",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: theme.palette.white[100],
  boxShadow: "0px 10px 12px rgba(0, 0, 0, 0.3)",
  borderRadius: "8px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
