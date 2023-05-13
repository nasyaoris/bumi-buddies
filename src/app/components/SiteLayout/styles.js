import { styled, Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100vw",
  height: "100vh",
  justifyContent: "center",
}));

export const WrapperContent = styled(Box)(({ theme }) => ({
  maxWidth: "1440px",
  width: "100%",
}));
