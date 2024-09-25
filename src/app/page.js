// "use client"
// import Banner from "@/components/Banner";
// import Banner2 from "@/components/Banner2";
// import Project from "@/components/Project";
// import Review from "@/components/Review";
// import Service from "@/components/Service";
// import Team from "@/components/Team";


// export default function Home() {
//   return (
//     <main>
//     <Banner></Banner>
//     <Banner2></Banner2>
//     <Service></Service>
//     <Project></Project>
//     <Team></Team>
//     <Review></Review>
//     </main>
//   );
// }


"use client";

import { useEffect } from "react";
import Script from "next/script";
import Banner from "@/components/Banner";
import Banner2 from "@/components/Banner2";
import Project from "@/components/Project";
import Review from "@/components/Review";
import Service from "@/components/Service";
import Team from "@/components/Team";

export default function Home() {
  useEffect(() => {
    // Initialize Google Tag Manager
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "AW-16714364749");
  }, []);

  return (
    <main>
      {/* Google Tag Manager Script */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=AW-16714364749`}
      />
      
      {/* Your Components */}
      <Banner />
      <Banner2 />
      <Service />
      <Project />
      <Team />
      <Review />
    </main>
  );
}
