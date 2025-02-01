import React from "react";
import { Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import HeaderMenuButton from "../components/Project-Header.jsx";

const Unger = () => {
  const theme = useTheme();
  return (
    <div>
      <HeaderMenuButton />
      <Container
        disableGutters
        sx={{
          backgroundColor: theme.palette.background.default, // Applying theme background color
        }}
      >
        {/** All content is commented out for debugging purposes **/}
      </Container>
    </div>
  );
};

export default Unger;
