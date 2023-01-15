import { Button, styled } from "@mui/material";

export const CustomizedButton = styled(Button)(({theme}) => ({
  backgroundColor: theme.palette.orange[300],
  color: theme.palette.white[50],
  textTransform: 'none',
  "&:hover": {
    backgroundColor: theme.palette.gray[100],
  }
}));
