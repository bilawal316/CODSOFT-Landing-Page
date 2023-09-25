import Head from "next/head";
import Navbar from "./components/navbar";
import Image from "next/image";
import Hero from "./components/hero";
import Goal from "./components/goal";

 
const Home = () => {
  return (
    <div className="flex min-h-screen flex-col py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="relative flex-1 lg:container text-center p-0 mx-auto overflow-x-hidden overflow-auto">
<h1 className="text-6xl font-bold">
 	Welcome to{" "}
        <a className="text-blue-600" href="https://nextjs.org">
          Next.js!
        </a>
      </h1>
      <Hero />
      <Goal />
      </main>
    </div>
  );
};
 
export default Home;