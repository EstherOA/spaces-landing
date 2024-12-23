import { ChakraProvider, createSystem, defineConfig } from "@chakra-ui/react";
import { Hero } from "./pages";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
});

const system = createSystem(config);

function App() {
  return (
    <>
      <ChakraProvider value={system}>
        <Hero />
      </ChakraProvider>
    </>
  );
}

export default App;
