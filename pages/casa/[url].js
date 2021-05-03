import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { SimpleGrid } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import Link from "next/link";
import Layout from "../../components/Layout";
import * as DAOCategories from "../../services/categories/dao";
import * as DAOProperties from "../../services/properties/dao";
import { point } from "../../services/properties/utils/utils";
import { formatText } from "../../utils/utils";

function Casa(props) {
  const { cover, blueprint, title, description, price } = props.property || {};

  return (
    <Layout {...props} title={title}>
      <Box w={"full"} overflow={"hidden"} mb="30px" maxH="500px">
        <Image src={cover} w={"full"} />
      </Box>

      <Box>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 0, lg: 10 }}>
          <Box
            w={"full"}
            overflow={"hidden"}
            p={4}
            mb="30px"
            boxShadow={"lg"}
            rounded={"md"}
            border="1px"
            borderColor={useColorModeValue("gray.200", "gray.700")}
          >
            <Image src={blueprint} w={"full"} />
          </Box>
          <Box
            p={4}
            mb="30px"
            boxShadow={"lg"}
            rounded={"md"}
            border="1px"
            borderColor={useColorModeValue("gray.200", "gray.700")}
          >
            <Box mb={3}>
              <Heading as="h4" fontSize="32px" fontWeight="700" color="blue.600">
                {title}
              </Heading>
            </Box>
            <Box mb={3}>{formatText(description)}</Box>
            <Box mb={3}>
              <Heading fontSize="48px" fontWeight="700">
                ${point(price)}
              </Heading>
            </Box>
            <Box>
              <Link href={"/contacto"} passHref>
                <Button as="a" colorScheme="blue" variant="solid">
                  Contactanos
                </Button>
              </Link>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  let props = {};

  const res = await DAOCategories.getCategories();
  if (res.message === "serverError") {
    return { props: { error: 500 } };
  }

  props.categoriesMenu = res.categories;

  const url = context.params.url;

  const property = await DAOProperties.getProperty(url);

  if (property.message !== "success") {
    return { notFound: true };
  }

  props.property = property.property;

  return { props };
}

export default Casa;
