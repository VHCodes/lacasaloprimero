import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";

function Footer() {
  const css = useColorModeValue("", "filter: invert(100%);-webkit-filter: invert(100%);-moz-filter: invert(100%);");

  return (
    <Box pb={10} pt="80px">
      <Flex
        align={"center"}
        _before={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: useColorModeValue("gray.200", "gray.700"),
          flexGrow: 1,
          mr: 8,
        }}
        _after={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: useColorModeValue("gray.200", "gray.700"),
          flexGrow: 1,
          ml: 8,
        }}
      >
        <Image src={"/img/logo_280x154.png"} width="140px" css={css} />
      </Flex>
      <Text pt={6} fontSize={"sm"} textAlign={"center"}>
        © 2021 La casa lo primero. Todos los derechos reservados
      </Text>
    </Box>
  );
}

export default Footer;
