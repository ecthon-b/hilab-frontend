import { BrowserRouter } from 'react-router-dom';
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { Router } from './Router';

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ChakraProvider>
)
