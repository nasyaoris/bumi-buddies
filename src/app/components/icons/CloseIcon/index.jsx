import React from 'react'
import { SvgIcon } from "@mui/material";
import theme from '../../../styles/theme/theme';

const CloseIcon = (props) => (
  <SvgIcon
  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
  >
  <path d="M19 19L5 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19 5L5 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </SvgIcon>
);

export default CloseIcon;