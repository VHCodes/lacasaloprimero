import * as DAOCategories from "../services/categories/dao";
import * as DAOSettings from "../services/settings/dao";
import * as DAOPhotos from "../services/photos/dao";

import Layout from "../components/Layout";
import { Box } from "@chakra-ui/layout";
import { SimpleGrid } from "@chakra-ui/layout";
import Pagination from "../components/Pagination";
import Photo from "../components/Photo";

function Multimedia(props) {
  const photos = props.photos || [];
  const { perPage, page } = props.pagination || 0;

  return (
    <Layout {...props} title="Fotos y videos" subTitle="Fotos y videos">
      <Box>
        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={2}>
          {photos.map((photo) => (
            <Box key={photo.id}>
              <Photo photo={photo.photo} />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Box pt="30px" textAlign="right">
        <Pagination count={props.count} url={`/fotos-y-videos`} perPage={perPage} currentPage={page} />
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

  const offset = context.query.page || 1;

  const resSettings = await DAOSettings.getSettings();
  if (resSettings.message === "success")
    props.pagination = { perPage: resSettings.settings.multimedia.perPage, page: offset };

  const resPhotos = await DAOPhotos.getPhotos(props.pagination.perPage, props.pagination.page);

  if (resPhotos.message === "success") {
    props.photos = resPhotos.photos;
    props.count = resPhotos.count;
  }

  return { props };
}

export default Multimedia;
