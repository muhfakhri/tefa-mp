import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Footer from '../components/Footer';
import Contact from '../components/contact';
import Product from '@/components/product';
import { About, ChatWidget, Kerjasama, TopButton } from '@/components';


export default function Home() {

  return (
    
    <div>
      
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content="Jurusan Menejemen Perkantoran SMKN 1 BANTUL" />


      

      
      <main>
   
       
        <Navbar />
       <ChatWidget />
        <Hero />
        
        <br /><br /> <br /> <br /><br /> <br /><div id='about' /> 
        <br /> <br /> 
       
        <About />
        
      
        <br /> <br /> <br />
        <Kerjasama />
        <br />   <div id='layanan' /><br /> <br /><br /> <br /> <br />
        
        <Product />
        
        <br /> <br /> <br /><br /> 
        <br /> <br /> <br /><br /> <br /> <br />
        <div id='contact' />
        <Contact />
        <TopButton />
        <Footer />
        

       
      </main>
      
    </div>
  );
}