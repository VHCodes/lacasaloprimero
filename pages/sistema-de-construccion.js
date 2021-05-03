import { Box } from "@chakra-ui/layout";
import * as DAOCategories from "../services/categories/dao";
import * as DAOSettings from "../services/settings/dao";

import Layout from "../components/Layout";
import { formatText } from "../utils/utils";

function ConstructionSystem(props) {
  const content = props.constructionSystem || "";

  return (
    <Layout {...props} title="Sistema de construcción" subTitle="Sistema de construcción">
      <Box>{formatText(content)}</Box>
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
  if (resSettings.message === "success") props.constructionSystem = resSettings.settings.constructionSystem.content;

  return { props };
}

export default ConstructionSystem;
