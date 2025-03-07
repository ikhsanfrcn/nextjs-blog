import Link from "next/link";
import Wrapper from "./wrapper";
import { SearchBar } from "./molecules/searchBar";
import LoginRegister from "./organisms/LoginRegister";
import { MobileNavbar } from "./molecules/MobileNavbar";
import { Logo } from "./atoms/Logo";

export default function Navbar() {


  return (
    <div className="sticky top-0 z-10 bg-white text-black py-2">
      <Wrapper>
        <div className="flex justify-between w-full h-[60px] items-center">
          <div className="flex items-center gap-10">
            <Link href={"/"} className="md:flex items-center gap-2">
              <Logo />
            </Link>
            <div className="hidden md:flex gap-10">
              <Link href={"/"}>Home</Link>
              <Link href={"/about"}>About</Link>
            </div>
          </div>

          <div className="flex items-center">
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
