// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// const HeroSection = () => {
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const imageElement = imageRef.current;

//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const scrollThreshold = 100;

//       if (scrollPosition > scrollThreshold) {
//         imageElement.classList.add("scrolled");
//       } else {
//         imageElement.classList.remove("scrolled");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="pt-40 pb-20 px-4">
//       <div className="container mx-auto text-center">
//         <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
//           Manage Your Finances <br /> with Intelligence
//         </h1>
//         <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//           An AI-powered financial management platform that helps you track,
//           analyze, and optimize your spending with real-time insights.
//         </p>
//         <div className="flex justify-center space-x-4">
//           <Link href="/dashboard">
//             <Button size="lg" className="px-8">
//               Get Started
//             </Button>
//           </Link>
     
//         </div>
//         <div className="hero-image-wrapper mt-5 md:mt-0">
//           <div ref={imageRef} className="hero-image">
//             <Image
//               src="/banner.jpeg"
//               width={1280}
//               height={720}
//               alt="Dashboard Preview"
//               className="rounded-lg shadow-2xl border mx-auto"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative pt-36 pb-24 px-4 bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-7xl lg:text-[90px] font-extrabold pb-6 bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent drop-shadow-lg tracking-tight leading-tight">
          Manage Your Finances <br /> with Intelligence
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto font-medium">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div className="flex justify-center space-x-4 mb-10">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="px-8 py-5 text-lg font-semibold bg-blue-700 hover:bg-blue-800 text-white shadow-lg transition-all duration-200"
            >
              Get Started
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-8 flex justify-center">
          <div
            ref={imageRef}
            className="hero-image transition-transform duration-700 ease-in-out shadow-2xl rounded-2xl border-4 border-blue-100 bg-white/80 hover:scale-105"
          >
            <Image
              src="/finsight.webp"
              width={1150}
              height={550}
              alt="Dashboard Preview"
              className="rounded-2xl mx-auto"
              priority
            />
          </div>
        </div>
      </div>
      {/* Decorative blurred background shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 rounded-full opacity-30 blur-3xl z-0" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400 rounded-full opacity-20 blur-3xl z-0" />
    </section>
  );
};

export default HeroSection;