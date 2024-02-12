import { getToken } from 'next-auth/jwt';
import { httpClient } from 'lib/utils';
import { apiRoutes } from 'lib/constants';

export default async function handler(req, res) {

  const { description, name, type } = req.body;

  // Get the user session
  const token = await getToken({ req });
    console.log("token: " + token)
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Use the user's token for a server-side request
    const { data } = await httpClient.post(`${apiRoutes.categories.create}`, {
        description,
        name, 
        type
    });

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
