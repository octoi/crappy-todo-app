import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

export default function ChakraWrap({ children }) {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      {children}
    </ChakraProvider>
  );
}
