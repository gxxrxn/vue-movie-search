import { API_END_POINT, API_KEY } from "@/env.js";

const request = async (options) => {
  try {
    if (!options) {
      return;
    }

    const query = Object.keys(options)
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(options[k]))
      .join("&");

    // 로딩 화면을 보여주기 위해 3초 지연
    const res = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(fetch(`${API_END_POINT}?apikey=${API_KEY}&${query}`));
      }, 3000);
    });

    if (!res.ok) {
      throw new Error("API를 호출하는데 실패했어요!");
    }

    return res.json();
  } catch (e) {
    alert(e.message);
  }
};

export const API = {
  getMovieList: async (title) => {
    if (!title) {
      return;
    }

    const data = await request({ s: title });

    if (data.Response === "False") {
      return null;
    }

    return data.Search;
  },
};
