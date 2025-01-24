// filepath: /c:/Users/nurfa/OneDrive/Documents/A_CODING/nextjs/tefa-mp/src/pages/index.js
import Head from 'next/head';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Footer from '../components/Footer';
import Contact from '../components/contact';
import Product from '@/components/product';
import { About, ChatWidget, Kerjasama, TopButton } from '@/components';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';

const aboutVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const kerjasamaVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const productVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function Home() {
  const [aboutRef, aboutControls] = useScrollAnimation(aboutVariants);
  const [kerjasamaRef, kerjasamaControls] = useScrollAnimation(kerjasamaVariants);
  const [productRef, productControls] = useScrollAnimation(productVariants);

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Jurusan Menejemen Perkantoran SMKN 1 BANTUL" />
        <title>Manajemen Perkantoran</title>
        <link rel="icon" href="/favicon.ico" sizes="64x64" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </Head>
      <main>
        <Navbar />
        <ChatWidget />
        <Hero /> 
        <br /> <br /> <br />
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
           
          </div>
        </div>
        <motion.div
          id="about"
          ref={aboutRef}
          initial="hidden"
          animate={aboutControls}
          variants={aboutVariants}
        >
          <About />
        </motion.div>
        <br /> <br /> <br />
        <motion.div
          id="kerjasama"
          ref={kerjasamaRef}
          initial="hidden"
          animate={kerjasamaControls}
          variants={kerjasamaVariants}
        >
          <Kerjasama />
        </motion.div>
        <br /> <div id='layanan' /><br /> <br /><br /> <br /> <br />
        <motion.div
          ref={productRef}
          initial="hidden"
          animate={productControls}
          variants={productVariants}
        >
          <Product />
        </motion.div>
        <br /> <div id='contact' /> <br /> <br /> <br /> <br /> <br />
        <Contact />
        <TopButton />
        <Footer />
      </main>
    </div>
  );
}