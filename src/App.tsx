import {
  ChakraProvider,
  Box,
  theme,
  Text,
} from "@chakra-ui/react"
import { Home } from "./pages/Home"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Home />
  </ChakraProvider>
)
