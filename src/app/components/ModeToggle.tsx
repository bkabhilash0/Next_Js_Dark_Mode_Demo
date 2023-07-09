"use client";

import { useStore } from "@/store";
import Image from "next/image";

const ModeToggle = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);

  return (
    <div
      className="w-10 h-5 bg-gray-700 rounded-lg relative cursor-pointer ml-4"
      onClick={toggleDarkMode}
    >
      <div
        className={`h-6 w-6 rounded-full bg-white absolute -top-[2px] transition-all duration-300 ease-in-out p-1 shadow-md ${
          isDarkMode ? "-translate-x-1/2" : "translate-x-full"
        }`}
      >
        {isDarkMode ? (
          <Image src="/moon.png" alt="Sun" width={40} height={40} />
        ) : (
          <Image src="/sun.svg" alt="Sun" width={40} height={40} />
        )}
      </div>
    </div>
  );
};
export default ModeToggle;
