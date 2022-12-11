import Head from "next/head";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function EventDetail() {
  const router = useRouter();

  const { query } = router;
  console.log("query :", query);

  const displayDate = () => {
    const currentDate = new Date();
    if (query.startAt) {
      return new Date(query.startAt as string).toLocaleDateString("en-US", {
        weekday: "short",
        month: "long",
        day: "numeric",
      });
    }
    return currentDate.toLocaleDateString("en-US", {
      weekday: "short",
      month: "long",
      day: "numeric",
    });
  };

  const displayTime = () => {
    const currentDate = new Date();
    if (query.startAt) {
      return new Date(query.startAt as string).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
      });
    }
    return currentDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
  };

  return (
    <div>
      <Head>
        <title>Event Detail</title>
        <meta name="description" content="Event Detail" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main>
        <div className="flex">
          <div className="flex-1">
            <div>
              <label className=" text-5xl font-bold text-white bg-[#942F70] leading-[60px]">
                {query.title}
              </label>
            </div>
            {/* Date & Time*/}
            <div className="flex items-center mt-7">
              <div className="flex items-center mr-10">
                <Image
                  className="mr-4"
                  src="/date.svg"
                  alt="date"
                  width={34}
                  height={34}
                />
                <label className="font-semibold text-[28px] text-[#333333]">
                  {displayDate()}
                </label>
              </div>
              <div className="flex items-center mr-10">
                <Image
                  className="mr-4"
                  src="/time.svg"
                  alt="time"
                  width={34}
                  height={34}
                />
                <label className="font-semibold text-[28px] text-[#333333]">
                  {displayTime()}
                </label>
              </div>
            </div>
            {/* Location */}
            <div className="mt-7 flex items-center">
              <Image
                className="mr-4"
                src="/location.svg"
                alt="location"
                width={14}
                height={17}
              />
              <label className="font-semibold text-[16px] text-[#333333]">
                {query.venue}
              </label>
            </div>
            {/* Capacity & Cost */}
            <div className="flex items-center mt-3">
              <div className="flex items-center mr-9">
                <Image
                  className="mr-3"
                  src="/people.svg"
                  alt="people"
                  width={14}
                  height={17}
                />
                <label className="font-semibold text-[16px] text-[#333333]">
                  {query.capacity}
                </label>
              </div>

              <div className="flex items-center">
                <Image
                  className="mr-4"
                  src="/dola.svg"
                  alt="Cost Per Person"
                  width={14}
                  height={17}
                />
                <label className="font-semibold text-[16px] text-[#333333]">
                  {`$${query.price}`}
                </label>
              </div>
            </div>
            {/* Description */}
            <div className="mt-8">
              <label className="font-normal text-[16px] text-[#333333]">
                {query.description}
              </label>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex-[2_2_0%]">
              <div className="ml-5 h-[450px] border-none rounded-tr-[64px] rounded-bl-[64px] cursor-pointer">
                <div className="flex justify-center items-center w-full h-full relative">
                  <Image
                    src={query.banner as string}
                    alt="banner"
                    fill={true}
                    className="rounded-tr-[64px] rounded-bl-[64px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default EventDetail;
