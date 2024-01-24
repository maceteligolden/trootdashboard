import nextConnect from 'next-connect';
import session from 'express-session';

const handler = nextConnect();

handler.use(
  session({
    secret: 'kngfjnejfd29034fni4f3f490fj4oer0fr340f9oj4frj', // replace with a strong secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' ? true : false },
  })
);

handler.post(async (req, res) => {
  try {
    // Assuming you receive the user credentials in the request body
    const { email, password } = req.body;

    // Perform authentication (replace this with your actual authentication logic)
    if (email === 'demo' && password === 'password') {
      // Store user information in the session
      req.session.user = { email };

      // Send a success response
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false, error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

export default handler;