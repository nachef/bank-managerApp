import Head from "next/head";
import { withSSRGuest } from "../hooks/SSRGuest";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main></main>
    </div>
  );
}
export const getServerSideProps = withSSRGuest(async () => {
  return { props: {} };
});
