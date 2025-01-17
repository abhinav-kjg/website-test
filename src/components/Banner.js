"use client";
import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import icon22 from "@/public/icco_77.png";
import banner22 from "@/public/banner_22.png";
import banner44 from "@/public/banner_44.png";
import design11 from "@/public/design11.png";
import icoo2 from "@/public/icco_2.png";
import icoo4 from "@/public/icco_4.png";
import icoo5 from "@/public/icco_5.png";
import icoo88 from "@/public/icco_88.png";
import icoo99 from "@/public/icco_99.png";
import icoo111 from "@/public/icco_111.png";
import icoo222 from "@/public/icco_222.png";

export default function HomeBanner() {
  return (
    <>
      <div className="my-16 mb-10 relative hidden md:block">
        <Image
          src={icoo111}
          alt="hero"
          className="z-20 absolute top-9 left-12 w-14 h-14"
        />
        <Image
          src={icoo222}
          alt="hero"
          className="z-20 absolute top-40 left-14  w-7 h-7"
        />
        <Image
          src={icoo2}
          alt="hero"
          className="z-0 absolute bottom-[19.7rem] right-6"
        />

        <Image
          src={icoo88}
          alt="hero"
          className="z-20 absolute top-[15.5rem] right-12 w-16 h-16 "
        />
        <Image
          src={icoo5}
          alt="hero"
          className="z-0 absolute top-36 right-64 w-11 h-11 "
        />
        <Image
          src={icoo4}
          alt="hero"
          className="z-0 absolute top-20 right-40 w-14 h-14 "
        />
        <Image
          src={icoo99}
          alt="hero"
          className="z-0 absolute top-5 right-16 w-12 h-12"
        />
        <div className="flex justify-center bg-white text-center -mb-16">
          <div className=" flex justify-center flex-row gap-10">
            <div className="flex flex-col gap-3 z-30">
              <Typography
                variant="h2"
                className=" max-w-[34rem] "
                sx={{
                  color: "#000000",
                  fontWeight: "800",
                }}
              >
                Your Aspiration, Our Innovation
              </Typography>
              <Typography
                variant="body1"
                className="max-w-[34rem]"
                sx={{
                  color: "#000000",
                  fontWeight: "200",
                  lineHeight: "1.5rem",
                  marginLeft: "0rem",
                  fontSize: "1.25rem",

                  "@media (min-width: 1024px)": {
                    marginLeft: "0.5rem",
                  },
                }}
              >
                At KayJay Global Solutions, we go beyond IT consulting to
                deliver software solutions that directly impact your business's
                bottom line.
              </Typography>

              <button
                className="capitalize w-fit mt-5 px-6 py-3 text-[16px] font-semibold mx-auto text-white bg-[#1868DB] hover:bg-[#307EED] rounded-md  "
                onClick={() => {
                  const element = document.getElementById("contactus-home");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                Let’s Innovate Together
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-end gap-4 relative mx-16 ">
          <div className="h-96 w-80 rounded-[2rem] bg-[#D9E1EE] flex flex-col justify-end items-start relative">
            <Image
              src={design11}
              alt="design"
              className="w-80 absolute z-10 top-0.5 rounded-3xl"
            />
            <Image src={icon22} alt="arrow" className="w-36 mx-10 " />
            <div className="text-[#1868DB] text-lg m-10 mb-14 mt-4">
              Empowering businesses with innovative solutions to achieve
              excellence.
            </div>
          </div>

          <div className="h-64 rounded-[2rem] w-64 bg-[#EEEEEE] flex flex-col justify-end items-center">
            <div variant="h6" className="text-black font-bold text-3xl">
              350%
            </div>
            <div
              variant="h6"
              className="text-[#868F8D] text-base m-6 mb-10 mt-2"
            >
              Simplifying complexities to drive meaningful outcomes.
            </div>
          </div>

          <div className="h-40 w-80 rounded-[2rem] bg-transparent">
            <Image src={banner44} alt="hero" className="h-[10rem] " />
          </div>

          <div className="h-64 rounded-[2rem] w-64 bg-[#D9E1EE] flex flex-col justify-end items-center">
            <div variant="h6" className="text-black font-bold text-3xl">
              350%
            </div>
            <div
              variant="h6"
              className="text-[#868F8D] text-base m-6 mb-10 mt-2"
            >
              Your trusted partner for driving innovation and excellence.
            </div>
          </div>
          <div className="h-96 w-80 rounded-[2rem] flex flex-col overflow-hidden">
            <Image src={banner22} alt="hero" className="h-[24rem] z-10" />
            {/* <div className="">
                        <Image
                            src={banner55}
                            alt="hero"
                            className="h-48 rounded-[2rem] object-cover object-top"
                        />
                    </div>
                    <div className="relative h-[12rem] overflow-hidden rounded-[2rem]">
                        <Image
                            src={banner55}
                            alt="hero"
                            layout="fill"
                            objectFit="cover"
                            className="h-48 rounded-[2rem] scale-[2] absolute bottom-0 object-bottom"
                        />
                    </div> */}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="my-10 mb-8 block md:hidden space-y-10">
        <div className="flex justify-center bg-white text-center">
          <div className=" flex justify-center flex-row gap-10">
            <div className="flex flex-col items-center justify-center gap-3 mx-4">
              <div className="text-black font-bold ">
                Your Aspiration, Our Innovation
              </div>
              <div className=" text-xl leading-6 font-extralight mx-2">
                At KayJay Global Solutions, we go beyond IT consulting to
                deliver software solutions that directly impact your business's
                bottom line.
              </div>

              <button
                className="capitalize w-fit mt-5 text-[16px] px-3 p-2 rounded-md font-semibold mx-auto text-white bg-primary-blue hover:bg-secondary-blue "
                onClick={() => {
                  const element = document.getElementById("contactus-home");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                Let’s Innovate Together
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-6 pb-12">
          <div className="flex flex-row justify-center items-end gap-2 mx-7">
            <div className="h-72 w-1/2 rounded-[2rem] bg-[#D9E1EE] flex flex-col justify-end items-start relative">
              <Image
                src={design11}
                alt="design"
                className="w-full absolute z-10 top-0.5 rounded-3xl "
              />
              <Image src={icon22} alt="hero" className="w-24 mx-8" />
              <Typography
                variant="h6"
                className="text-[#1868DB] text-sm m-8 mb-10 mt-4"
              >
                Empowering businesses with innovative solutions to achieve
                excellence.
              </Typography>
            </div>
            <div className="h-56 w-1/2 rounded-[2rem] bg-[#EEEEEE] flex flex-col justify-end items-center">
              <div className="text-black font-bold text-3xl">350%</div>
              <div className="text-[#868F8D] text-sm m-6 mb-10 mt-2">
                Simplifying complexities to drive meaningful outcomes.
              </div>
            </div>
          </div>
          <div className="flex justify-center items-end mx-7">
            <div className=" h-52 w-80 rounded-[2rem] bg-transparent">
              <Image src={banner44} alt="hero" className="h-52 " />
            </div>
          </div>
          <div className="flex flex-row justify-center items-end gap-2 mx-7 relative pt-40">
            <Image
              src={icoo2}
              alt="hero"
              className="z-0 absolute w-36 top-[8.2rem] -right-4"
            />
            <Image
              src={icoo88}
              alt="hero"
              className="z-20 absolute top-40 -right-1 h-10 w-10 "
            />{" "}
            <Image
              src={icoo5}
              alt="hero"
              className="z-0 absolute top-[6.15rem] right-24 w-8 h-8 "
            />{" "}
            <Image
              src={icoo4}
              alt="hero"
              className="z-0 absolute top-11 right-14 w-10 h-10 "
            />
            <Image
              src={icoo99}
              alt="hero"
              className="z-0 absolute top-4 right-1 w-8 h-8"
            />
            <div className="h-56 w-1/2 rounded-[2rem] bg-[#D9E1EE] flex flex-col justify-end items-center">
              <div variant="h6" className="text-black font-bold text-3xl">
                350%
              </div>
              <div
                variant="h6"
                className="text-[#868F8D] text-sm m-6 mb-10 mt-2"
              >
                Your trusted partner for driving innovation and excellence.
              </div>
            </div>
            <div className="h-72 w-1/2 rounded-[2rem] flex flex-col overflow-hidden">
              <Image src={banner22} alt="hero" className="h-[24rem] z-10" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
