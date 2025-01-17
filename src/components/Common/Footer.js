import { Typography } from "@mui/material";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMediumM,
  FaQuora,
} from "react-icons/fa";
import XIcon from "@mui/icons-material/X";
import logo from "@/public/full_logo.png";
import medialIcon from "@/public/medial.png";
import Image from "next/image";
import Link from "next/link";

import indiaBackground from "@/public/footer/india.png";
import indiaFlag1 from "@/public/footer/india-flag.png";
import indiaFlag2 from "@/public/footer/india-flag-2.png";
import usaBackground from "@/public/footer/usa.png";
import usaFlag1 from "@/public/footer/usa-flag.png";
import usaFlag2 from "@/public/footer/usa-flag-2.png";
import netherlandBackground from "@/public/footer/europe.png";
import netherlandFlag1 from "@/public/footer/netherland-flag.png";
import netherlandFlag2 from "@/public/footer/netherland-flag-2.png";
import australiaBackground from "@/public/footer/australia.png";
import australiaFlag1 from "@/public/footer/australia-flag.png";
import australiaFlag2 from "@/public/footer/australia-flag-2.png";

const FooterList = [
  {
    title: "Menu",
    list: [
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Industries", href: "/industries" },
      { label: "Technologies", href: "/technologies" },
      { label: "Projects", href: "/projects" },
      { label: "Resources", href: "/resources" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Our Services",
    list: [
      { label: "Client Side Development", href: "/" },
      { label: "Server Side Development", href: "/" },
      { label: "Mobility Services", href: "/" },
      { label: "DevOps Solutions", href: "/" },
      { label: "Software Testing", href: "/" },
      { label: "UI/UX Design Services", href: "/" },
      { label: "Digital Marketing", href: "/" },
    ],
  },
  {
    title: "Technologies",
    list: [
      { label: "Asana", href: "/" },
      { label: "Slack", href: "/" },
      { label: "Teams", href: "/" },
      { label: "Jira", href: "/" },
      { label: "Trello", href: "/" },
      { label: "Balsmiq", href: "/" },
      { label: "Figma", href: "/" },
      { label: "Zaiper", href: "/" },
      { label: "Microsoft Power Automate", href: "/" },
    ],
  },
];

const globalPresenceList = [
  {
    flag: indiaFlag1,
    flag2: indiaFlag2,
    background: indiaBackground,
    location: "India",
    addrees: "Sukher, NH8, Udaipur, Rajasthan, 313001",
  },
  {
    flag: usaFlag1,
    flag2: usaFlag2,
    background: usaBackground,
    location: "USA",
    addrees: "PO Box : 170616, Austin, Texas, 78717",
  },
  {
    flag: netherlandFlag1,
    flag2: netherlandFlag2,
    background: netherlandBackground,
    location: "Netherland",
    addrees: "Molenlaan 84, 3055 EN Rotterdam",
  },
  {
    flag: australiaFlag1,
    flag2: australiaFlag2,
    background: australiaBackground,
    location: "Australia",
    addrees: "Unit 1409/22 Dorcas street, Southbank, Melbourne vic 3006",
  },
];

export default function Footer() {
  return (
    <footer className="bg-footer-background text-black py-4 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start mx-8 md:mx-20 xl:mx-8 custom-770:gap-3 gap-5">
        <div className="flex flex-col items-start mt-5">
          <Link href="/">
            <Image src={logo} alt="Logo" className="w-80 h-24 " />
          </Link>
        </div>
        {/* Links Section */}
        <div className="flex flex-col sm:flex-wrap lg:flex-nowrap xl:flex-row gap-3 text-nowrap custom-770:mx-8">
          {FooterList.map((list, index) => (
            <div key={index} className="px-4">
              <h2 className="font-bold text-lg mb-4 mt-9">{list.title}</h2>
              <ul className="space-y-2">
                {list.list.map((item, index) => (
                  <li key={index} className="cursor-pointer">
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col mt-9 mx-5">
            <h2 className="font-bold text-lg mb-4">Our Global Presence</h2>
            <div className="flex flex-col gap-2.5">
              {globalPresenceList.map((item, index) => (
                <GlobalPresenceCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-[#656565] custom-770:mx-6 mx-10 my-6 h-0.5" />
      <div className="flrx flex-col items-center custom-770:mx-6 mx-10 gap-3">
        <div className="flex custom-770:flex-col-reverse flex-row gap-6 justify-between">
          <h3 className=" text-sm text-custom-gray-text select-none">
            &#169; 2024-2025 KayJay Global Solutions
            <br />
            {/* 
                        Protected by Google{" "}
                        <Link href={"/"} className="underline">
                            reCAPTCHA
                        </Link>
                        .{" "} */}
            Read our{" "}
            <Link href={"/"} className="underline">
              Terms and Policies
            </Link>
          </h3>
          <div className="flex flex-row custom-770:gap-6 gap-8 items-center">
            <Link
              href={"https://www.linkedin.com/company/kayjayglobal"}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-full border-gray-300 p-2 hover:bg-blue-700 hover:text-white transition-all "
            >
              <FaLinkedinIn className="text-lg" />
            </Link>
            <Link
              href={"https://medium.com/@kayjayglobal"}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-full border-gray-300 p-2 hover:bg-black hover:text-white transition-all "
            >
              <FaMediumM className="text-lg" />
            </Link>
            <Link
              href={"https://www.instagram.com/kayjayglobal/"}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-full border-gray-300 p-2 hover:bg-pink-500 hover:text-white transition-all "
            >
              <FaInstagram className="text-lg" />
            </Link>
            <Link
              href={"https://x.com/KayJayGlobal"}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-full border-gray-300 p-[0.35rem] px-[0.5rem] hover:bg-blue-400 hover:text-white transition-all"
            >
              <XIcon className="text-lg" />
            </Link>
            <Link
              href={"https://www.quora.com/profile/Marketing-KJGS"}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-full border-gray-300 p-2 hover:bg-red-600 hover:text-white transition-all"
            >
              <FaQuora className="text-lg" />
            </Link>
            <Link
              href={
                "https://medial.app/user/kayjay-global-solutions-pvt-ltd-8ad48a54c683a"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-full border-gray-300 p-2 hover:bg-red-200 hover:text-white transition-all ml-0.5 mt-0.5 "
            >
              <Image src={medialIcon} alt="medial" className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm text-custom-gray-text mt-5">
            KayJay logo, brandmark and name are a registered trademark of KayJay
            Global Solutions Pvt. Ltd.
          </h3>
        </div>
      </div>
    </footer>
  );
}

const GlobalPresenceCard = ({ flag, flag2, background, location, addrees }) => {
  return (
    <div
      className="relative min-w-64 min-h-[4.5rem] rounded-lg overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Image
        src={background}
        alt={`${location} Background`}
        fill
        className="object-cover"
      />
      <div className="absolute p-1.5">
        <div className="flex items-center justify-center gap-2">
          <Image
            src={flag2}
            alt={`${location} Flag`}
            width={40}
            height={40}
            className="rounded-full border border-white shadow-md"
          />
          <div className="flex flex-col">
            <h1 className="text-base font-bold">{location}</h1>
            <h4 className="text-xs text-wrap">{addrees}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
