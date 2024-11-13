import React from "react";
import { Box } from "@chakra-ui/react";
import PredictionForm from "./PredictionForm";

function App() {
  return (
    <Box
      bgGradient="linear(to-r, teal.600, purple.700)" // Softer gradient with teal and purple
      minHeight="100vh" // Full viewport height
      display="flex" // Center content horizontally and vertically
      justifyContent="center"
      alignItems="center"
      p={4} // Add some padding
    >
      <PredictionForm />
    </Box>
  );
}

export default App;
