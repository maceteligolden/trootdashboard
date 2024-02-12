import axios from "axios";

export default async function handler(req, res){
    try {
        const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}`
        const response = await axios.post(`${BASE_URL}/auth/login`, {
            ...req.body
        });
 
        // httpClient.defaults.headers.common.Authorization = `Bearer ${response.data.data.token}`;
        req.session.set('user', response.data.data.user);
        req.session.set('token', response.data.data.token);
        await req.session.save();
      
        res.status(200).json({data: response});
    }catch(err){
        res.json({message: err.message})
    }
}