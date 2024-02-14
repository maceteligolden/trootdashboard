import { apiRoutes } from 'lib/constants';
import Cookies from "js-cookie";
import axios from "axios";

export default async function handler(req, res) {

  const { description, name, type } = req.body;


  try {
    

  } catch (error) {
    res.status(500).json({ error });
  }
}
