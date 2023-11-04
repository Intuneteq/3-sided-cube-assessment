import React from "react";
import Link from "next/link";

import { Address, DesktopLogo, FacebookIcon, InstagramIcon, LinkedlIcon, TwitterIcon, YoutubeIcon } from "../atoms";
import { anonymous_Pro, poppins } from "@/fonts";

export default function Footer() {
  return (
    <footer className="min-h-[16.1875rem] bg-primary-black w-full pt-6 pb-[2.62rem] md:pb-[2.12rem] px-[2.38rem] md:px-[8.56rem] flex flex-col justify-center md:justify-start items-start gap-8 md:gap-6">
      <div className="flex justify-center md:justify-start items-center pb-6 border border-b-primary-white w-full">
        <Link href={"/"}>
          <DesktopLogo className="w-[12.25713rem] h-8" />
        </Link>
      </div>

      <div id="contact" className="w-full flex flex-col md:flex-row justify-between gap-[2.19rem] md:gap-0 items-start md:items-center">
        <div id="address" className="flex flex-col md:flex-row justify-start items-center gap-3 md:gap-10">
          <Address
            city="Bournemouth"
            addressLine="Telephone House Bournemouth, BH1 3NE"
          />
          <Address city="London" addressLine="T51 Eastcheap London, EC3M 1JP" />
          <Address
            city="Washington"
            addressLine="80 M Street SE
            Washington, D.C 20003"
          />
          <Address
            city="Florida"
            addressLine="7901 4th St N, STE 300
            St. Petersburg FL 33702"
          />
        </div>
        <div className="text-primary-white" id="socials">
          <p className={`mb-3 ${poppins.className} text-xs font-bold uppercase`}>GET SOCIAL</p>
          <div className="flex justify-between items-center gap-4">
            <TwitterIcon className="w-6 h-[1.375rem] cursor-pointer" />
            <InstagramIcon className="w-6 h-[1.375rem] cursor-pointer" />
            <FacebookIcon className="w-6 h-[1.375rem] cursor-pointer" />
            <LinkedlIcon className="w-6 h-[1.375rem] cursor-pointer" />
            <YoutubeIcon className="w-6 h-[1.375rem] cursor-pointer" />
          </div>
        </div>
      </div>
      <div className={`${anonymous_Pro.className} flex justify-center md:justify-between items-center flex-col md:flex-row text-primary-white w-full text-xs font-bold`}>
        <small className="">© 2023 3 Sided Cube</small>
        <small>Let’s Build Tech For Good</small>
      </div>
    </footer>
  );
}
