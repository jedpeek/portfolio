import Image from "next/image";
import React from "react";

const SiteCard = ({ title, description, imgURL, author, link }: any) => {
  return (
    <div className="flex items-center justify-center  ">
      <div className="group h-96 w-80 [perspective:1000px] p-3">
        <div className=" relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className=" absolute inset-0  ">
            <Image
              width={100}
              height={100}
              alt="card-image"
              className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
              src={imgURL}
            />
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h1 className="text-3xl font-bold">{author}</h1>
              <p className="text-lg">{title}</p>
              <p className="text-base">{description}</p>
              <a
                href={link}
                className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"
                target="_blank"
              >
                Check It Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteCard;
