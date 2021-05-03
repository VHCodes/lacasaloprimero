import * as DAOCategories from "../../services/categories/dao";
import * as DAOProperties from "../../services/properties/dao";
import * as DAOSettings from "../../services/settings/dao";

import Layout from "../../components/Layout";
import { SimpleGrid } from "@chakra-ui/layout";
import Property from "../../components/Property";
import { Box } from "@chakra-ui/layout";
import Pagination from "../../components/Pagination";

function Category(props) {
  const properties = props.properties || [];
  const { perPage, page } = props.pagination || "";
  const { name, url } = props.category || "";

  return (
    <Layout {...props} title={name} subTitle={name}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </SimpleGrid>

      <Box pt="30px" textAlign="right">
        <Pagination count={props.count} url={`/modelos/${url}`} perPage={perPage} currentPage={page} />
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
  const offset = context.query.page || 1;

  const category = props.categoriesMenu.find((cat) => cat.url === url);

  if (!category) {
    return { notFound: true };
  }

  props.category = category;

  const resSettings = await DAOSettings.getSettings();
  if (resSettings.message === "success")
    props.pagination = { perPage: resSettings.settings.categories.perPage, page: offset };

  const resProperties = await DAOProperties.getProperties(category.id, props.pagination.perPage, props.pagination.page);

  if (resProperties.message === "success") {
    props.properties = resProperties.properties;
    props.count = resProperties.count;
  }

  return { props };
}

export default Category;
