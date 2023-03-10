import React from 'react'
import { SvgIcon } from "@mui/material";
import theme from '../../../styles/theme/theme';

const LeftArrow = (props) => (
  <SvgIcon
    width="48" 
    height="48" 
    viewBox="0 0 48 48"
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.5">
      <path d="M32.0607 8.93934C32.5932 9.47187 32.6416 10.3052 32.2059 10.8924L32.0607 11.0607L19.122 24L32.0607 36.9393C32.5932 37.4719 32.6416 38.3052 32.2059 38.8924L32.0607 39.0607C31.5281 39.5932 30.6948 39.6416 30.1076 39.2059L29.9393 39.0607L15.9393 25.0607C15.4068 24.5281 15.3584 23.6948 15.7941 23.1076L15.9393 22.9393L29.9393 8.93934C30.5251 8.35355 31.4749 8.35355 32.0607 8.93934Z" fill="#1C1C1C"/>
    </g>
  </SvgIcon>
);

export default LeftArrow;