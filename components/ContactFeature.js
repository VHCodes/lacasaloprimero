import { useColorModeValue } from "@chakra-ui/color-mode";
import { Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";

function ContactFeature(props) {
  const data = props.data || [];

  return (
    <Box>
      <Box position="relative" textAlign="center">
        <Box
          rounded="full"
          bg="blue.300"
          w="88px"
          h="88px"
          position="relative"
          margin="auto"
          border="8px"
          borderColor={useColorModeValue("white", "gray.800")}
        >
          <Center mt="16px">{props.icon}</Center>
        </Box>
        <Box
          minHeight="165px"
          bg={useColorModeValue("gray.50", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          border="1px"
          borderColor={useColorModeValue("gray.200", "gray.700")}
          mt="-24px"
          pt="24px"
          pb="15px"
        >
          <Heading as="h3" fontSize="16px" fontWeight="700" textTransform="uppercase" mb="15px">
            {props.title}
          </Heading>
          {data.map((d) =>
            props.isPhone ? (
              <Text fontSize="14px" key={d}>
                <Link href={`https://api.whatsapp.com/send?phone=549${d}`} color="blue.500" isExternal>
                  +549 {d}
                </Link>
              </Text>
            ) : props.isSocialMedia ? (
              <Text fontSize="14px" key={d._id}>
                <Link href={d.url} color="blue.500" isExternal>
                  {d.name}
                </Link>
              </Text>
            ) : props.isEmail ? (
              <Text fontSize="14px" key={d}>
                <Link href={`mailto:${d}`} color="blue.500">
                  {d}
                </Link>
              </Text>
            ) : (
              <Text fontSize="14px" key={d}>
                {d}
              </Text>
            )
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default ContactFeature;
