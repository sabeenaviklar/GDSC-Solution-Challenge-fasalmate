import Hero from "@/components/Hero";
import Farm from "@/components/Farm";
import Guide from "@/components/Guide";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";

import Footer from "@/components/Footer";


import Link from "next/link";
import ProductList from "@/components/Products";
import FarmPage from "@/components/FarmpPage";
import PeoplePage from "@/components/Person";
import Navbar from "@/components/Navbar";
import Blogs from "@/components/Blogs";
export default function Home() {
  return (
 <>
     <Hero/>
     {/* <Navbar/>
    <Farm/> */}
     <Guide/>
     <Features/>
     <ProductList/>
     <PeoplePage/>
     <FarmPage/>
     <Blogs/>
     <GetApp/>
     
     <Footer/>
     {/* <GoogleMap/> */}
    
 </>
  );
}
