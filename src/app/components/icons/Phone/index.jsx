import React from 'react'
import { SvgIcon } from "@mui/material";
import theme from '../../../styles/theme/theme';

const Phone = (props) => (
  <SvgIcon
    width="28" 
    height="28" 
    viewBox="0 0 28 28"
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
      <path fillRule="evenodd" clipRule="evenodd" d="M13.4602 14.7402C18.8898 20.1683 20.1215 13.8886 23.5786 17.3432C26.9114 20.6752 28.827 21.3427 24.6043 25.5642C24.0754 25.9893 20.7147 31.1033 8.90437 19.2962C-2.90746 7.48769 2.20359 4.12362 2.62878 3.59484C6.8617 -0.638356 7.51775 1.28835 10.8506 4.62027C14.3077 8.07636 8.03061 9.31214 13.4602 14.7402Z" fill="#1C1C1C"/>
  </SvgIcon>
);

export default Phone;