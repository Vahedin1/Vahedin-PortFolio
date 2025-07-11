import React from "react";
import { AppBar, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useNavigate } from "react-router-dom";

const HeaderMenuButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projects");
    window.location.reload();
  };

  return (
    <AppBar
      position="fixed"
      sx={{ background: "transparent", boxShadow: "none" }}
    >
      <Box sx={{ position: "relative", textAlign: "center", zIndex: 1300 }}>
        <Box
          sx={{
            width: 130,
            height: 60,
            backgroundColor: "#00E1D4",
            clipPath: "polygon(50% 100%, 100% 0%, 0% 0%)",
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <IconButton
          sx={{
            position: "absolute",
            transform: "translateX(-50%)",
            color: "white",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "translateX(-50%) scale(1.25)",
            },
          }}
          onClick={handleClick}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      </Box>
    </AppBar>
  );
};

export default HeaderMenuButton;
