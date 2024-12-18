// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import { darken } from '@mui/system';

// const ColorButton = styled(Button)(({ theme, backgroundColor, hoverBackgroundColor }) => ({
//   ...(backgroundColor &&  {color: theme.palette.getContrastText(backgroundColor) }),
//   ...(backgroundColor &&  {backgroundColor: backgroundColor }),
//   textTransform: 'none',
//   '&:hover': {
//     // ...(backgroundColor &&  {backgroundColor: darken(backgroundColor, 0)}),
//     backgroundColor: hoverBackgroundColor ? darken(hoverBackgroundColor, 0) : darken(backgroundColor, 0)

//   },
// }));

// export default function FoxyButton({ label, variant, backgroundColor, onClick, fullWidth, height, width, hoverBackgroundColor, sx }) {
//   return (
//         <ColorButton
//           variant={variant}
//           backgroundColor={backgroundColor}
//           hoverBackgroundColor={hoverBackgroundColor}
//           onClick={onClick}
//           fullWidth={fullWidth}
//           height={height}
//           width={width}
//           sx={sx}
//           >
//           {label}
//         </ColorButton>
//   );
// }
import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { darken } from "@mui/system";

const ColorButton = styled(Button, {
  shouldForwardProp: (prop) =>
    prop !== "backgroundColor" && prop !== "hoverBackgroundColor",
})(({ theme, backgroundColor, hoverBackgroundColor, height, width }) => ({
  ...(backgroundColor && {
    color: theme.palette.getContrastText(backgroundColor),
  }),
  ...(backgroundColor && { backgroundColor }),
  textTransform: "none",
  height: height || "auto",
  width: width || "auto",
  "&:hover": {
    backgroundColor: hoverBackgroundColor
      ? darken(hoverBackgroundColor, 0)
      : darken(backgroundColor, 0),
  },
}));

export default function FoxyButton({
  label,
  variant,
  backgroundColor,
  hoverBackgroundColor,
  onClick,
  fullWidth,
  height,
  width,
  sx,
}) {
  return (
    <ColorButton
      variant={variant}
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
      onClick={onClick}
      fullWidth={fullWidth}
      height={height}
      width={width}
      sx={sx}
    >
      {label}
    </ColorButton>
  );
}
