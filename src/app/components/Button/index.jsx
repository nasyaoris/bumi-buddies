import { CircularProgress } from "@mui/material";
import { forwardRef } from "react";

import { CustomizedButton } from "./styles";

const Button = forwardRef(
  (
    {
      isLoading = false,
      uppercase = false,
      children,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <CustomizedButton
        disabled={disabled || isLoading}
        ref={ref}
        uppercase="false"
        className={className}
        {...props}
      >
        {isLoading ? (
          <CircularProgress size={16} style={{ marginRight: "0.6rem" }} />
        ) : null}
        {children}
      </CustomizedButton>
    );
  }
);

Button.displayName = "Button";

export default Button;
