import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Heading } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import Link from "next/link";
import Head from "next/head";

function NotFound() {
  return (
    <>
      <Head>
        <title>La casa lo primero - Error 404</title>
      </Head>
      <Flex minHeight="100vh" width="full" align="center" justifyContent="center" position="relative">
        <Box
          maxW={{ base: "290px", md: "495px" }}
          w="100%"
          lineHeight="1.4"
          textAlign="center"
          position="absolute"
          left="50%"
          top="50%"
          transform="translate(-50%,-50%);"
        >
          <Box position="relative" h={{ base: "120px", md: "200px" }} margin="0 auto 20px" zIndex="-1">
            <Heading
              as="h1"
              fontSize={{ base: "120px", md: "236px" }}
              fontWeight="200"
              textTransform="uppercase"
              position="absolute"
              left="50%"
              top="50%"
              transform="translate(-50%,-50%);"
            >
              Oops!
            </Heading>
            <Heading
              as="h2"
              fontSize={{ base: "16px", md: "28px" }}
              fontWeight="400"
              textTransform="uppercase"
              display="inline-blocks"
              position="absolute"
              padding="5px"
              bottom={{ base: "0", md: "-1" }}
              left="0"
              right="0"
              bg={useColorModeValue("#fff", "gray.800")}
            >
              No se puede encontrar la página
            </Heading>
          </Box>
          <Box display="inline-blocks" transition=".2s all">
            <Link href={"/"} passHref>
              <Button as="a" colorScheme="blue" variant="solid" size="lg">
                IR AL INICIO
              </Button>
            </Link>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default NotFound;
