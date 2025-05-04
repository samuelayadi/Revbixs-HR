"use client";
import {
  company,
  hookWithUs,
  legal,
  needHelp,
  socials,
  usefulLinks,
} from "@/constants/footerLinks";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-white w-full py-8 flex flex-col gap-y-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 container justify-between mx-auto max-w-[1200px] px-4">
          <Link href={"/"}>
            <Image
              src="/images/hrlogo.jpeg"
              alt="Hookik Logo"
              width={120}
              height={35}
            />
          </Link>

          <div className="flex flex-col gap-y-6">
            <h3 className="font-semibold uppercase ">Useful Links</h3>
            <div className="flex-col flex gap-y-4">
              {usefulLinks?.map((item, index) => (
                <a
                  key={index}
                  href=""
                  className="text-sm font-medium opacity-75"
                >
                  {item?.value}
                </a>
              ))}
            </div>
          </div>

          {/* <div className="flex flex-col gap-y-6">
            <h3 className="font-semibold uppercase ">Hook with us</h3>
            <div className="flex-col flex gap-y-4">
              {hookWithUs?.map((item, index) => (
                <a
                  key={index}
                  href=""
                  className="text-sm font-medium opacity-75"
                >
                  {item?.value}
                </a>
              ))}
            </div>
          </div> */}

          <div className="flex flex-col gap-y-6">
            <h3 className="font-semibold uppercase ">Legal</h3>
            <div className="flex-col flex gap-y-4">
              {legal?.map((item, index) => (
                <a
                  key={index}
                  href=""
                  className="text-sm font-medium opacity-75"
                >
                  {item?.value}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-6">
            <h3 className="font-semibold uppercase ">Company</h3>
            <div className="flex-col flex gap-y-4">
              {company?.map((item, index) => (
                <a
                  key={index}
                  href=""
                  className="text-sm font-medium opacity-75"
                >
                  {item?.value}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-6">
            <h3 className="font-semibold uppercase ">Need Help</h3>
            <div className="flex-col flex gap-y-4">
              {needHelp?.map((item, index) => (
                <a
                  key={index}
                  href=""
                  className="text-sm font-medium opacity-75"
                >
                  {item?.value}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-4">
          <div className="flex justify-end gap-x-4 pb-4 items-center border-b border-[#D9DBE9] container mx-auto max-w-[1200px] px-4">
            {socials.map((item) => (
              <a
                href={item.route}
                key={item.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.value}
              </a>
            ))}
          </div>
          <p className="text-center  font-medium text-[#6F6C90]">
            © 2025 Revbix
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
