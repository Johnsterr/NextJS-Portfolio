import { ThumbUpIcon } from "@heroicons/react/outline";
import Head from "next/head";

const MainLayout = function ({children}) {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <header>Header</header>
      {children}
      <footer>Footer</footer>
    </>
  );
};

export default MainLayout;
