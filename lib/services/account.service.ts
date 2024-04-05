import axios from "axios";
import Cookies from "js-cookie";
import { apiRoutes } from "lib/constants";
import { Account, Blog } from "lib/models";
import { IResponse } from "lib/models/response.model";

const createAccount = async (payload: Account) => {
    const token = Cookies.get("token");
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}${apiRoutes.accounts.create}`, {
      ...payload
    },{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response
}

const updateAccount = async (id: string, payload: Partial<Blog>) => {
    const token = Cookies.get("token");
    const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/accounts/${id}`, {
        ...payload
    },{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response
}

const getAccounts = async () => {
    const token = Cookies.get("token");
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/accounts`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response
}

const getAccount = async (id: string) => {
    const token = Cookies.get("token");
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/accounts/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response
}

const deleteAccount = async (id: string) => {
    const token = Cookies.get("token");
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/accounts/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response
}

export {
    createAccount,
    getAccounts,
    getAccount,
    deleteAccount,
    updateAccount
}