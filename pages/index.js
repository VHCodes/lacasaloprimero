import { Heading } from "@chakra-ui/layout";
import { SimpleGrid } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";

import Feature from "../components/Feature";

import * as DAOCategories from "../services/categories/dao";
import * as DAOSettings from "../services/settings/dao";
import PropertyHome from "../components/PropertyHome";

import Layout from "../components/Layout";

function Home(props) {
  return (
    <Layout {...props} title="Inicio">
      <Box>
        {props.home && props.home.property ? (
          <PropertyHome property={props.home.property} discount={props.home.discount} />
        ) : null}

        <Box pb="30px">
          <Box textAlign="center" mb="50px">
            <Heading as="h4" fontSize="20px" fontWeight="700" color="blue.600">
              ¿Por qué elegirnos?
            </Heading>
          </Box>

          <Box>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <Feature
                image="/img/personal.png"
                title="Nuestro personal"
                description="Contamos con personal altamente capacitado."
              />

              <Feature
                image="/img/financiacion.png"
                title="Financiación"
                description="Te ofrecemos diferentes tipos de financiación adaptadas a lo que necesites."
              />

              <Feature
                image="/img/calidad.png"
                title="Máxima calidad"
                description="Contamos con materiales de primera marca y calidad."
              />
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export async function getServerSideProps() {
  let props = {};

  const res = await DAOCategories.getCategories();
  if (res.message === "serverError") {
    return { props: { error: 500 } };
  }

  props.categoriesMenu = res.categories;

  const resSettings = await DAOSettings.getSettings();
  if (resSettings.message === "success") props.home = resSettings.settings.home;

  return { props };
}

export default Home;
