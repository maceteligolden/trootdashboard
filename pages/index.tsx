import { pageRoutes } from "lib/constants";
import { GetServerSideProps } from "next";
import cookie from "cookie";

export default function Index() {
  return (
    <>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = cookie.parse(context.req.headers.cookie || '');
 
  if (!session['token']) {
    return {
      redirect: {
        destination: pageRoutes.auth.login, // Redirect to login page if not authenticated
        permanent: false,
      },
    };
  } else {
        return {
            redirect: {
              destination: pageRoutes.dashboard, // Redirect to login page if not authenticated
              permanent: false,
            },
          };
    }
  
    return {
      props: {},
    };
  };