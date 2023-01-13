import Head from "next/head";
import { withSSRGuest } from "../hooks/SSRGuest";
import Client from "./ClientsPage/index.page";
import Login from "./LoginPage/index.page";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Q2 Test</title>
      </Head>

      <main>
        <Client />
      </main>
    </div>
  );
}
export const getServerSideProps = withSSRGuest(async () => {
  return { props: {} };
});
