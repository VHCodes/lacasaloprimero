import { Image } from "@chakra-ui/image";
import { Heading } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";

function Feature(props) {
  return (
    <Box>
      <Center>
        <Image src={props.image} />
      </Center>

      <Box textAlign="center" mb="10px">
        <Heading as="h4" fontSize="20px" fontWeight="700" color="blue.600">
          {props.title}
        </Heading>
      </Box>

      <Box textAlign="center">{props.description}</Box>
    </Box>
  );
}

export default Feature;
