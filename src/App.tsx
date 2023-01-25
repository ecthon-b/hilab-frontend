import { BrowserRouter } from 'react-router-dom';
import {
  ChakraProvider,
} from "@chakra-ui/react"
import { Router } from './Router';
import theme from './theme/theme'

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ChakraProvider>
)
