import Image from "next/image";
import Link from "next/link";
import ModeToggle from "./components/ModeToggle";

export default function Home() {
  return (
    <main className="py-12 px-28">
      <header className="bg-[#F9F9FF] p-5 px-8 rounded-2xl shadow-lg flex items-center gap-x-5 dark:bg-[#161819]">
        <nav className="text-black dark:text-white flex items-center justify-between flex-1">
          <h1 className="text-3xl font-bold">BK</h1>
          <ul className="flex">
            <li className="px-8 hover:text-gray-400 transition-all">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="px-8 hover:text-gray-400 transition-all">
              <Link href={"/"}>About</Link>
            </li>
            <li className="px-8 hover:text-gray-400 transition-all">
              <Link href={"/"}>Blog</Link>
            </li>
            <li className="px-8 pr-0 hover:text-gray-400 transition-all">
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
        </nav>
        <ModeToggle />
      </header>
      <section className="py-20 grid grid-cols-[0.7fr_1fr] gap-x-10">
        <div className="flex flex-col gap-y-4">
          <p className="bg-gray-200 text-black py-2 px-4 cursor-pointer rounded-full inline-block w-auto self-start text-sm dark:bg-gray-950/50 dark:text-gray-200">
            Travel
          </p>
          <h1 className="text-black text-[40px] font-semibold dark:text-white">
            Never let your memories be greater than your <br /> dreams
          </h1>
          <p className="text-gray-800 dark:text-gray-200 text-xl leading-8">
            Before long the searchlight discovered some distance away a schooner
            with all sails set, apparently the same vessel which had been
            noticed earlier in the evening.
          </p>
        </div>
        <div className="w-full bg-white p-4 rounded-md dark:bg-[#161819]">
          <div className="w-full h-full aspect-video rounded-md overflow-hidden">
            <Image
              src="/banner.jpeg"
              width={600}
              height={400}
              alt="Banner"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
