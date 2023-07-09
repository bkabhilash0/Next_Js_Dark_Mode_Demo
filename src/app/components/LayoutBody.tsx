"use client";

import { useStore } from "@/store";
import { FC } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
}
const LayoutBody: FC<Props> = ({ children }) => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  return (
    <body
      className={`${inter.className} ${
        isDarkMode ? "dark bg-[#262A2E]" : "bg-[#F9F9FF] antialiased"
      }`}
    >
      {children}
    </body>
  );
};
export default LayoutBody;
