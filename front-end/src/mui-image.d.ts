declare module "mui-image" {
  import { BoxProps } from "@mui/material";

  interface ImageProps extends BoxProps {
    src: string;
    fit?: "contain" | "cover" | "fill";
    duration?: number;
    easing?: string;
    shift?: "top" | "right" | "bottom" | "left" | null;
    distance?: number | string;
    shiftDuration?: number;
    showLoading?: boolean;
    errorIcon?: React.ReactNode;
  }

  export const Image: React.FC<ImageProps>;
  export default Image;
}
