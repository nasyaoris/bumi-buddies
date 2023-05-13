import { useMediaQuery } from "@mui/material";

const useIsMobile = (screen) => {
  const isMobile = useMediaQuery(
    (theme) => theme.breakpoints.down(screen ?? "sm")
    // { noSsr: true }
  );

  return isMobile;
};

export default useIsMobile;
