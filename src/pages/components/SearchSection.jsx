import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const SearchSection = () => {
  return (
    <div className="relative flex justify-center mt-6">
      <Input
        type="text"
        placeholder="Type a Domain you want"
        className="w-52 sm:w-[60%] h-12 sm:h-16 pr-14 rounded-md text:sm md:text-xl"
      />
      <Button
        size="icon"
        className=" h-10 w-12 sm:h-11 sm:w-20 absolute right-[calc(19%)] sm:right-[calc(20.7%)] top-1/2 -translate-y-1/2 bg-gray-800 text-white  rounded-md"
      >
        <Search className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default SearchSection;
