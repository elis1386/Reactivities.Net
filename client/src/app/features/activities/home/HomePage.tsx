import { Group } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { generatePerimeterPositions, PositionedImage } from "../../../../utils/imageHelpers";
import "./homestyles.css";

const imageNames = [
  "culture.jpg",
  "drinks.jpg",
  "film.jpg",
  "food.jpg",
  "music.jpg",
  "travel.jpg",
  "wind.jpg",
  "palms.jpg",
  "air.jpg",
  "cookie.jpg",
  "snow.jpg",
];

const HomePage = () => {
  const [visibleImages, setVisibleImages] = useState<PositionedImage[]>([]);

  useEffect(() => {
    const images = generatePerimeterPositions(imageNames);
    setVisibleImages(images);
  }, []);

  return (
    <Box sx={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          perspective: 1000,
          transformStyle: "preserve-3d",
        }}
      >
        {visibleImages.map((img) => (
          <Box
            key={img.id}
            component="img"
            className="floating-img"
            src={img.src}
            alt=""
            sx={{
              position: "absolute",
              left: `${img.x}px`,
              top: `${img.y}px`,
              width: 500,
              height: 400,
              borderRadius: 2,
              objectFit: "cover",
            }}
          />
        ))}
      </Box>

      <Paper
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          gap: 6,
          backgroundImage: "linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 3, zIndex: 1 }}>
          <Group sx={{ height: 110, width: 110 }} />
          <Typography variant="h1">Reactivities</Typography>
        </Box>
        <Typography variant="h3">Welcome to reactivities</Typography>
        <Button
          component={Link}
          to="/activities"
          size="large"
          variant="contained"
          sx={{ height: 80, borderRadius: 4, fontSize: "1.5rem", zIndex: 1 }}
        >
          Take me to the activities!
        </Button>
      </Paper>
    </Box>
  );
};

export default HomePage;
