import Head from "next/head";
import React, { useState } from "react";
import Router from "next/router";
import Content from "../components/Content";
import Modal from "../components/Modal";
import Settings from "../components/Settings";

export type EventType = {
  title: string;
  startAt: string;
  venue: string;
  capacity: number;
  price: number;
  description: string;
  isManualApprove: boolean;
  privacy: string;
  banner: string;
  tags: string[];
};

export default function Home() {
  const [data, setData] = useState<EventType>({
    title: "",
    startAt: "",
    venue: "",
    capacity: 0,
    price: 0,
    description: "",
    isManualApprove: false,
    privacy: "",
    banner: "",
    tags: [],
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // narrow to HTMLInputElement
    if (e.target.type == "checkbox" && "checked" in e.target) {
      setData({
        ...data,
        [e.target.name]: e.target.checked,
      });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const emitSelectedTag = (tags: string[]) => {
    setData({ ...data, tags });
  };

  const emitSelectedBanner = (banner: number) => {
    setData({
      ...data,
      banner: `https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_${banner}.jpg`,
    });
  };

  const EmitChangeDate = (date: Date) => {
    setData({
      ...data,
      startAt: new Date(date).toISOString(),
    });
  };

  const handleCreateEvent = async () => {
    try {
      const config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          capacity: +data.capacity,
          price: +data.price,
        }),
      };
      const response = await fetch(
        "https://1p8s3jhf8j.execute-api.us-east-1.amazonaws.com/Supermomos/interview/social",
        config
      );

      if (response.status === 200) {
        const responseJson = await response.json();
        console.log(responseJson);
        Router.push({
          pathname: "/event-detail",
          query: data,
        });
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Head>
        <title>Create Social</title>
        <meta name="description" content="Creaete Social" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main>
        <Content
          data={data}
          handleOnChange={handleOnChange}
          EmitChangeDate={EmitChangeDate}
        />
        <Settings
          data={data}
          handleOnChange={handleOnChange}
          emitSelectedTag={emitSelectedTag}
        />
        <div className="flex flex-col w-[50%]">
          <button
            onClick={handleCreateEvent}
            className="mt-8 py-3 px-5 bg-[#FEF452] border border-solid border-[#FEF452] rounded-lg shadow-[0_1px_2px_rgba(16,24,40,0.05)] font-medium text-base text-[#942F70]"
          >
            CREATE SOCIAL
          </button>
        </div>
      </main>

      <Modal emitSelectedBanner={emitSelectedBanner} />
    </div>
  );
}
