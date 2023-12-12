import axios from "axios";

export async function getProducts() {
  try {
    const res = await axios({
      url: "http://localhost:8000/api/products",
      method: "get",
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}


