import axios from "axios";
import Cookies from "js-cookie";
import { apiRoutes } from "lib/constants";
import { Blog } from "lib/models";

const createBlog = async (payload: Blog) => {
    const token = Cookies.get("token");
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}${apiRoutes.blogs.create}`, {
      ...payload
    },{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response
}

const updateBlog = async (id: string, payload: Partial<Blog>) => {
    const token = Cookies.get("token");
    const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`, {
        ...payload
    },{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response
}

const getBlogs = async () => {
    const token = Cookies.get("token");
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blogs`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response
}

const getBlog = async (id: string) => {
    const token = Cookies.get("token");
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response
}

const deleteBlog = async (id: string) => {
    const token = Cookies.get("token");
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response
}

export {
    createBlog,
    getBlogs,
    getBlog,
    deleteBlog,
    updateBlog
}