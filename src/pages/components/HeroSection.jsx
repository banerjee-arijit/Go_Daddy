import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import BGVIDEO from "../../assets/video/bgvideo2.mp4";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const { scrollY } = useScroll();

  const videoScale = useTransform(scrollY, [0, 300], [1, 1.15]);

  const contentY = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <div className="relative w-full h-screen overflow-hidden flex justify-center mt-6">
      <motion.video
        src={BGVIDEO}
        autoPlay
        loop
        muted
        className="absolute top-0 w-[92%] h-full object-cover rounded-md"
        style={{ scale: videoScale }}
      ></motion.video>

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        style={{ y: contentY }}
      >
        <h3 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          Welcome to GO-Daddy
        </h3>
        <p className="text-white text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed opacity-90 mb-4">
          3-year purchase required. Additional years at{" "}
          <span className="font-semibold">₹1,499.00*</span>
        </p>
        <p className="text-white text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed opacity-80">
          Build your dream website with our powerful tools and reliable hosting
          solutions.
        </p>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          className="bg-white p-4 mt-6 w-64 sm:w-full flex justify-between items-center rounded-md"
        >
          <div className="font-bold  text-sm sm:text-xl">.com Domains</div>
          <div className="flex gap-3">
            <div className="text-justify">
              <h5 className="font-semibold hidden sm:block">
                ‪₹ 1.00*‬ /1st yr
              </h5>
              <p className="text-sm hidden sm:block">
                3-year purchase required
              </p>
            </div>
            <Button className="h-12">Find Your .com</Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
