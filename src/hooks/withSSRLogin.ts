import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";

import { parseCookies } from "nookies";

export function withSSRLogin<P extends { [key: string]: any }>(
  fn: GetServerSideProps<P>
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const { "@q2:password": token } = parseCookies(ctx);

    if (!token) {
      return {
        redirect: {
          destination: "/LoginPage",
          permanent: false,
        },
      };
    }

    return await fn(ctx);
  };
}
