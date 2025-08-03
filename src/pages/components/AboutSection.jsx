import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="mt-10 px-4">
      {/* Top Review Section */}
      <div className="flex flex-wrap items-center justify-center gap-4 p-6">
        <p className="text-base sm:text-lg md:text-xl font-medium text-center sm:text-left">
          <span className="text-gray-800 font-bold">Excellent</span>
        </p>

        <span className="hidden sm:inline text-gray-300">|</span>

        <div className="flex flex-col items-center sm:items-start gap-1">
          <p className="text-sm text-gray-600 text-center sm:text-left">
            <span className="text-green-500 font-semibold">4.6</span> out of 5
            stars based on <span className="font-medium">123,005 reviews</span>
          </p>
        </div>

        <span className="hidden sm:inline text-gray-300">|</span>

        <div className="text-sm font-semibold text-gray-700">
          <span className="bg-green-600 text-white px-3 py-1 rounded">
            Trustpilot
          </span>
        </div>
      </div>

      {/* Tab Selector */}
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-xl text-center mt-10 font-semibold">
          What’s first up for your business?
        </h3>

        <div
          className="mt-6 overflow-x-auto w-full"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#d1d5db transparent",
          }}
        >
          <Tabs defaultValue="Domain" className="min-w-[300px] sm:w-full">
            <TabsList className="w-max bg-gray-100 p-1 rounded-full shadow-sm space-x-2 mx-auto">
              <TabsTrigger
                value="Domain"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-full px-4 py-2 text-sm font-medium transition duration-300"
              >
                Domain
              </TabsTrigger>
              <TabsTrigger
                value="password"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-full px-4 py-2 text-sm font-medium transition duration-300"
              >
                Recommended
              </TabsTrigger>
              <TabsTrigger
                value="wordpress"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-full px-4 py-2 text-sm font-medium transition duration-300"
              >
                WordPress & Security
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
