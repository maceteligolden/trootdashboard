import axios from "axios";
import Cookies from "js-cookie";

const updateArticle = async (id: string, description: string, name: string) => {
    const token = Cookies.get("token");
    const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/article/update-article`, {
        description,
        name
    },{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response
}

const getArticle = async (id: string) => {
    const token = Cookies.get("token");
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/article/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response
}

const getOrders = async () => {
  const token = Cookies.get("token");
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/orders`,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response
}

const deleteArticle = async (id: string) => {
    const token = Cookies.get("token");
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/article/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response
}

export {
    getArticle,
    getOrders,
    deleteArticle,
    updateArticle
}