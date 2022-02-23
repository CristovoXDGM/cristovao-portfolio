import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { theme } from "../src/theme/customTheme";
import AboutPage from "./components/pages/AboutPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
