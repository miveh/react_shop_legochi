import axios from "axios";

export async function getCategories() {
  try {
    const res = await axios({
      url: "http://localhost:8000/api/categories",
      method: "get",
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getCategoryById(id) {
  try {
    const res = await axios({
      url: "http://localhost:8000/api/categories/" + id,
      method: "get",
    });
    return await res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
