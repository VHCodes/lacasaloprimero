import { Box } from "@chakra-ui/layout";
import * as DAOCategories from "../services/categories/dao";
import * as DAOSettings from "../services/settings/dao";

import Layout from "../components/Layout";
import { SimpleGrid } from "@chakra-ui/layout";
import { FaEnvelope, FaInternetExplorer, FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";
import { useColorModeValue } from "@chakra-ui/color-mode";
import ContactFeature from "../components/ContactFeature";

function Contact(props) {
  const { address, emails, phones, socialMedia } = props.contact || "";

  return (
    <Layout {...props} title="Contacto" subTitle="Contacto">
      <Box boxShadow={"lg"} border="1px" borderColor={useColorModeValue("gray.200", "gray.700")}>
        <iframe
          width="100%"
          height="320px;"
          frameBorder="0"
          style={{ border: 0 }}
          src={`http://maps.google.com/maps?q=${address}&z=17&output=embed`}
          allowFullScreen
        ></iframe>
      </Box>
      <Box mt="50px">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <ContactFeature
            icon={<FaEnvelope fontSize="36px" color="white" />}
            title="correos"
            data={emails}
            isEmail={true}
          />
          <ContactFeature
            icon={<FaMobileAlt fontSize="36px" color="white" />}
            title="teléfonos"
            data={phones}
            isPhone={true}
          />
          <ContactFeature icon={<FaMapMarkerAlt fontSize="36px" color="white" />} title="dirección" data={[address]} />
          <ContactFeature
            icon={<FaInternetExplorer fontSize="36px" color="white" />}
            title="redes sociales"
            data={socialMedia}
            isSocialMedia={true}
          />
        </SimpleGrid>
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
  if (resSettings.message === "success") props.contact = resSettings.settings.contact;

  return { props };
}

export default Contact;
