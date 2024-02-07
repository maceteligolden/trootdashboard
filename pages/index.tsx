import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

export default function Index() {

}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);
  
    if (!session) {
      return {
        redirect: {
          destination: '/auth/login', // Redirect to login page if not authenticated
          permanent: false,
        },
      };
    } else {
        return {
            redirect: {
              destination: '/dashboard', // Redirect to login page if not authenticated
              permanent: false,
            },
          };
    }
  
    return {
      props: {},
    };
  };