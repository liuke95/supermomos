import Image from "next/image";
import { TbChevronDown } from "react-icons/tb";
import Router from "next/router";

function Header() {
  const goToHomePage = () => {
    Router.push("/");
  };

  return (
    <ul className="flex mb-[124px] font-medium text-base cursor-pointer text-[#333333]">
      <div className="flex-1">
        <Image
          src="/full-logo.svg"
          alt="Supermomos Logo"
          width={200}
          height={36}
          onClick={goToHomePage}
        />
      </div>
      <li className="mr-12 ">Blog</li>
      <li className="mr-12 ">Socials</li>
      <li className="mr-12 ">Past Socials</li>
      <li className="mr-12 flex ">
        <span>Clubs</span>
        <TbChevronDown className="mt-1 ml-3" />
      </li>
      <li>Contact</li>
    </ul>
  );
}

export default Header;
