import axios from "axios";

let source;

export const cancel = () => {
  source.cancel();
};

export const getCategories = async () => {
  source = axios.CancelToken.source();

  try {
    const res = await axios.get(`${process.env.API_URL}/categories`, {
      cancelToken: source.token,
    });

    if (res.data.message === "success") {
      const categories = res.data.data.categories;

      return { message: "success", categories };
    } else {
      return { message: "error" };
    }
  } catch (error) {
    if (!axios.isCancel(error)) return { message: "serverError" };
  }
};
