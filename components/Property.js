import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Heading } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import Link from "next/link";
import { point } from "../services/properties/utils/utils";

function Property(props) {
  return (
    <Box
      w={"full"}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
      mb="20px"
      border="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
    >
      <Box>
        <Image src={props.property.cover} w={"full"} />
      </Box>
      <Box p={4}>
        <Heading as="h3" fontSize="28px" fontWeight="700" color="green.400" mb="10px">
          {props.property.title}
        </Heading>

        <Heading pt="15px" fontSize="48px" fontWeight="700">
          ${point(props.property.price)}
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

export default Property;
