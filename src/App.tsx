import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../src/theme/customTheme";
import AboutPage from "./components/pages/AboutPage";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AboutPage />
    </ChakraProvider>
  );
}

export default App;
