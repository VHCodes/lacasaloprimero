import axios from "axios";

let source;

export const cancel = () => {
  source.cancel();
};

export const getProperties = async (category = "", limit = 0, offset = 0) => {
  source = axios.CancelToken.source();

  try {
    const res = await axios.get(
      `${process.env.API_URL}/properties?category=${category}&limit=${limit}&offset=${offset - 1}`,
      {
        cancelToken: source.token,
      }
    );

    if (res.data.message === "success") {
      const properties = res.data.data.properties;
      const propertiesCount = res.data.data.count;

      return { message: "success", properties, count: propertiesCount };
    } else {
      return { message: "error" };
    }
  } catch (error) {
    if (!axios.isCancel(error)) return { message: "serverError" };
  }
};

export const getProperty = async (url) => {
  source = axios.CancelToken.source();

  try {
    const res = await axios.get(`${process.env.API_URL}/properties?url=${url}`, {
      cancelToken: source.token,
    });

    if (res.data.message === "success") {
      const property = res.data.data.properties[0];

      if (property) {
        return { message: "success", property };
      } else {
        return { message: "error" };
      }
    } else {
      return { message: "errors", errors: res.data.errors };
    }
  } catch (error) {
    if (!axios.isCancel(error)) return { message: "serverError" };
  }
};
