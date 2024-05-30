import React from "react";
import Image from "next/image";
import { WobbleCard } from "@/components/ui/wobble-card";
import Link from "next/link";

const Page = () => {
  return (
    <div className="container mx-auto p-2 bg-black">
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-950 min-h-[500px] lg:min-h-[300px]"
          
        >
          <div className="m-14 max-w">
            <h2 className="md:text-5xl lg:text-4xl font-semibold tracking-[-0.015em] text-neutral-200">
              Welcome to my portfolio!
            </h2>
            <p className="mt-4 text-left text-lg text-neutral-300">
              I am Tavethiya Sanket, a passionate Frontend Developer with 6
              months of hands-on experience in creating visually appealing and
              user-friendly web applications.
            </p>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <Image
            src="/courses/sanket.jpg"
            height={1000}
            width={1000}
            className="max-w-xs mx-auto h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="img"
          />
          <p className="mt-4 max-w-[26rem] text-2xl text-center font-bold text-neutral-300">
            <cite className="pe-3 font-medium text-white">
              SANKET TAVETHIYA
            </cite>
            <br />
            <cite className="text-sm text-gray-400">
              [Frontend developer]
            </cite>
          </p>
        </WobbleCard>
        <div className="flex justify-center col-span-1 lg:col-span-3">
          <Link href="/resume.pdf">
            <p
              rel="noopener noreferrer"
              className="px-4 m-1 py-2 rounded border hover:bg-neutral-400 text-neutral-700 bg-white transition duration-200"
            >
              Visit My Resume
            </p>
          </Link>
        </div>
        <WobbleCard containerClassName="col-span-1 mb-5 lg:col-span-3 bg-blue-950 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="m-10 max-w">
            <h2 className="md:text-5xl lg:text-4xl font-semibold tracking-[-0.015em] text-neutral-200">
              About Me
            </h2>
            <p className="mt-4 text-left text-lg text-neutral-300">
              I specialize in HTML, CSS, and JavaScript, and I am proficient in
              modern frontend frameworks such as React js and Next-js, My
              journey in frontend development has been driven by a desire to
              transform creative ideas into seamless digital experiences. I have
              a strong foundation in building responsive and interactive
              websites that prioritize user experience.
            </p>
          </div>
        </WobbleCard>
      </div>
    </div>
  );
};

export default Page;
