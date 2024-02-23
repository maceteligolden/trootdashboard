import axios from "axios";
import Cookies from "js-cookie";
import { CategoryTypes } from "lib/models/category.model";

const createArticle = async (values: any) => {
    const token = Cookies.get("token");
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/article/add-article`, values,{
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      }
    });

    return response
}

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

const getArticles = async () => {
  const token = Cookies.get("token");
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/article`,{
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
    createArticle,
    getArticle,
    getArticles,
    deleteArticle,
    updateArticle
}