import React, { useState, useEffect } from "react";
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll the page to the top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Check the scroll position to show/hide the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Zoom in={isVisible}>
      <Fab
        color="primary"
        size="small"
        onClick={handleScrollToTop}
        sx={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            zIndex: 1000,
            backgroundColor: "#000", // Black color
            color: "#fff", // White icon color
            "&:hover": {
              backgroundColor: "#333", // Slightly lighter black on hover
            },
          }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
