import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Spacer } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Box, Center, Heading } from "@chakra-ui/layout";
import MenuDrawer from "./MenuDrawer";
import ThemeSelector from "./ThemeSelector";

function Header(props) {
  const css = useColorModeValue("", "filter: invert(100%);-webkit-filter: invert(100%);-moz-filter: invert(100%);");

  return (
    <Box as="header" textAlign="center" mb="30px" mt={3}>
      <Flex>
        <Box>
          <MenuDrawer {...props} />
        </Box>
        <Spacer />
        <Box>
          <ThemeSelector />
        </Box>
      </Flex>

      <Center mb={{ base: "15px", md: "30px" }}>
        <Image src={"/img/logo_280x154.png"} css={css} />
      </Center>

      <Heading
        as="h1"
        fontSize={{ base: "30px", md: "40px" }}
        fontWeight="400"
        textTransform="uppercase"
        color="blue.600"
      >
        La casa lo primero
      </Heading>

      <Heading
        as="h2"
        fontSize={{ base: "20px", md: "22px" }}
        fontWeight="400"
        textTransform="uppercase"
        color="green.400"
      >
        Viviendas Americanas
      </Heading>
    </Box>
  );
}

export default Header;
