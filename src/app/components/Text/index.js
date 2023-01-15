
import { forwardRef } from "react";

import { CustomizedTypography } from "./styles";

const Text = forwardRef(
  (
    {
      children,
      component,
      variant,
      underline,
      color,
      uppercase,
      ...props
    },
    ref
  ) => {
    return (
      <CustomizedTypography
        component={component || "p"}
        _anaUnderline={underline}
        _anaUppercase={uppercase}
        ref={ref}
        color={color || "inherit"}
        variant={variant}
        {...props}
      >
        {children}
      </CustomizedTypography>
    );
  }
);

Text.displayName = "Text";

export default Text;
