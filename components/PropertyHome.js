import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Heading } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import Link from "next/link";
import { comaToDot, dotToComa, point } from "../services/properties/utils/utils";

function PropertyHome(props) {
  return (
    <Box w={"full"} boxShadow={"2xl"} rounded={"md"} overflow={"hidden"} mb="100px" border="1px" borderColor={useColorModeValue("gray.200", "gray.700")}>
      <Box>
        <Image src={props.property.cover} w={"full"} />
      </Box>
      <Box p={6}>
        <Heading as="h3" fontSize="25px" fontWeight="700" color="green.400">
          {props.property.title}
        </Heading>

        <Heading pt="15px" fontSize={{ base: "24px", md: "48px" }} fontWeight="700">
          <del>${point(props.property.price)}</del> → $
          {point(dotToComa((comaToDot(props.property.price) * (100 - props.discount)) / 100))}
        </Heading>

        <Link href={`/casa/${props.property.url}`} passHref>
          <Button as="a" mt="30px" colorScheme="blue" variant="solid">
            Mas detalles
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default PropertyHome;
