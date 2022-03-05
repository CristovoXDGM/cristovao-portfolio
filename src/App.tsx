import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import { theme } from "./styles/customTheme";
function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
