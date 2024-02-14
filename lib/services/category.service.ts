import axios from "axios";
import Cookies from "js-cookie";
import { apiRoutes } from "lib/constants";
import { CategoryTypes } from "lib/models/category.model";

const createCategory = async (description: string, name: string, type: CategoryTypes) => {
    const token = Cookies.get("token");
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}${apiRoutes.categories.create}`, {
        description,
        name, 
        type
    },{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response
}

const updateCategory = async (id: string, description: string, name: string) => {
    const token = Cookies.get("token");
    const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}${apiRoutes.categories.all}/${id}`, {
        description,
        name
    },{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response
}

const getCategory = async (type: CategoryTypes) => {
    const token = Cookies.get("token");
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}${apiRoutes.categories.all}/${type}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response
}

const deleteCategory = async (id: string) => {
    const token = Cookies.get("token");
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}${apiRoutes.categories.all}/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response
}

export {
    createCategory,
    getCategory,
    deleteCategory,
    updateCategory
}