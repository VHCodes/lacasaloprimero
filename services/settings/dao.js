import axios from "axios";

let source;

export const cancel = () => {
  source.cancel();
};

export const getSettings = async () => {
  source = axios.CancelToken.source();

  try {
    const res = await axios.get(`${process.env.API_URL}/settings`, {
      cancelToken: source.token,
    });

    if (res.data.message === "success") {
      const settings = res.data.data.settings;

      return { message: "success", settings };
    } else {
      return { message: "error" };
    }
  } catch (error) {
    if (!axios.isCancel(error)) return { message: "serverError" };
  }
};
