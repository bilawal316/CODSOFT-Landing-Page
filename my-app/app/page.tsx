import Head from 'next/head';
import { Metadata } from 'next';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Goal from './components/goal';
import Services from './components/services';
import Team from './components/team';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import Footer from './components/footer';

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col py-2">
      <Head>
        <Metadata>
          <title>My Page Title</title>
          <link rel="icon" href="/favicon.ico" />
          {/* Add any additional metadata tags here */}
        </Metadata>
      </Head>

      <Navbar />
      <main className="relative flex-1 lg:container text-center p-0 mx-auto overflow-x-hidden overflow-auto">
        <Hero />
        <Goal />
        <Services />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
