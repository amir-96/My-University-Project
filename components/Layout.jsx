import Head from "next/head";
import Header from "./Header/Header";

const Layout = ({ title, children }) => {
  return ( 
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <header><Header /></header>
      <main>{children}</main>
    </>
   );
}
 
export default Layout;