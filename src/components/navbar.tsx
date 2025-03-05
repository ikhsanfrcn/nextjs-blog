import Link from "next/link";
import Wrapper from "./wrapper";
import Image from "next/image";
import { SearchBar } from "./molecules/searchBar";
import LoginRegister from "./organisms/LoginRegister";
import { MobileNavbar } from "./molecules/MobileNavbar";

export default function Navbar() {


  return (
    <div className="sticky top-0 z-10 bg-white py-2">
      <Wrapper>
        <div className="flex justify-between w-full h-[60px] items-center">
          <div className="flex items-center gap-10">
            <Link href={"/"} className="md:flex items-center gap-2">
              <Image
                alt="logo-blog"
                src={"/logo.png"}
                width={0}
                height={0}
                sizes="100%"
                className="w-[120px] md:w-[178px] h-auto"
                priority
              />
            </Link>
            <div className="hidden md:flex gap-10">
              <Link href={"/"}>Home</Link>
              <Link href={"/about"}>About</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <div className="flex gap-4">
                <SearchBar />
                <LoginRegister />
              </div>
            </div>

            {/* mobile menu */}
            <MobileNavbar />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
