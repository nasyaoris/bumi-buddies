import { Box, AppBar, styled } from "@mui/material";

export const NavbarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  backgroundColor: theme.palette.white[100],
  padding: theme.spacing(1)
}))

export const AppBarContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.white[100],
  boxShadow: "unset",
}))

