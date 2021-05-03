import axios from "axios";

let source;

export const cancel = () => {
  source.cancel();
};

export const getPhotos = async (limit = 0, offset = 0) => {
  source = axios.CancelToken.source();

  try {
    const res = await axios.get(`${process.env.API_URL}/photos?limit=${limit}&offset=${offset - 1}`, {
      cancelToken: source.token,
    });

    if (res.data.message === "success") {
      const photos = res.data.data.photos;
      const photosCount = res.data.data.count;

      return { message: "success", photos, count: photosCount };
    } else {
      return { message: "error" };
    }
  } catch (error) {
    if (!axios.isCancel(error)) return { message: "serverError" };
  }
};