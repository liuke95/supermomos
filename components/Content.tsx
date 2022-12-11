import Image from "next/image";
import React, { useState } from "react";
import { useEffect } from "react";
import DatePicker from "react-datepicker";
import { EventType } from "../pages";

type ContentProp = {
  data: EventType;
  handleOnChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  EmitChangeDate: (date: Date) => void;
};

function Content({ data, handleOnChange, EmitChangeDate }: ContentProp) {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<Date>();

  useEffect(() => {
    if (date && time) {
      EmitChangeDate(
        new Date(date.setHours(time.getHours(), time.getMinutes()))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, time]);

  return (
    <>
      <div className="flex">
        <div className="flex-1">
          {/* Title */}
          <input
            className="outline-none bg-[#942F70] text-white font-bold text-5xl px-1 py-3 mb-7"
            placeholder="Title"
            name="title"
            value={data.title}
            onChange={handleOnChange}
          />
          {/* Date & Time*/}
          <div className="flex mb-7">
            <div className="flex mr-6">
              <Image
                className="mr-4"
                src="/date.svg"
                alt="date"
                width={34}
                height={34}
              />
              <DatePicker
                selected={date}
                onChange={(date: Date) => setDate(date)}
                className="outline-none py-0 px-[3px] rounded-lg h-10 font-semibold text-xl max-w-[210px]"
                placeholder="Date"
              />
            </div>
            <div className="flex">
              <Image
                className="mr-4"
                src="/time.svg"
                alt="time"
                width={34}
                height={34}
              />
              <DatePicker
                selected={time}
                onChange={(date: Date) => setTime(date)}
                className="outline-none py-0 px-[3px] rounded-lg h-10 font-semibold text-xl max-w-[210px]"
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                placeholder="Time"
              />
            </div>
          </div>
          {/* Location */}
          <div className="flex mb-3">
            <Image
              className="mr-4"
              src="/location.svg"
              alt="location"
              width={14}
              height={17}
            />
            <input
              className="outline-none py-0 px-3 rounded h-10 font-semibold text-base w-full"
              placeholder="Location"
              name="venue"
              value={data.venue}
              onChange={handleOnChange}
            />
          </div>
          {/* Capacity & Cost */}
          <div className="flex">
            <div className="flex mr-9">
              <Image
                className="mr-4"
                src="/people.svg"
                alt="people"
                width={14}
                height={17}
              />
              <input
                className="outline-none py-0 px-3 rounded h-10 font-semibold text-base max-w-[155px]"
                placeholder="Max capacity"
                type="number"
                min={0}
                name="capacity"
                value={data.capacity}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex">
              <Image
                className="mr-4"
                src="/dola.svg"
                alt="Cost Per Person"
                width={14}
                height={17}
              />
              <input
                className="outline-none py-0 px-3 rounded h-10 font-semibold text-base max-w-[155px]"
                placeholder="Cost Per Person"
                name="price"
                type="number"
                min={0}
                value={data.price}
                onChange={handleOnChange}
              />
            </div>
          </div>
        </div>
        {/* Banner */}
        <button className="flex-[2_2_0%]" data-modal-toggle="bannerModal">
          <div
            className={`${
              data.banner ? "border-none" : "border"
            } ml-5 h-[450px] border border-dashed border-[#F2F2F2] rounded-tr-[64px] rounded-bl-[64px] cursor-pointer`}
          >
            <div className="flex justify-center items-center w-full h-full relative">
              {data.banner ? (
                <Image
                  src={data.banner}
                  alt="banner"
                  fill={true}
                  className="rounded-tr-[64px] rounded-bl-[64px]"
                />
              ) : (
                <>
                  <Image
                    className="mr-4"
                    src="/banner.svg"
                    alt="banner"
                    width={24}
                    height={22}
                  />
                  <span className="text-[#14597A] font-semibold text-xl">
                    Add a banner
                  </span>
                </>
              )}
            </div>
          </div>
        </button>
      </div>

      <div className="flex flex-col w-[50%]">
        {/* Description */}
        <div className="flex flex-col">
          <label className="font-medium text-sm text-[#333333]">
            Description
          </label>
          <textarea
            className="outline-none py-3 px-[14px] h-[210px] rounded-lg border border-solid border-[#D0D5DD] shadow-[0_1px_2px_rgba(16,24,40,0.05)] mb-8"
            placeholder="Description of your event.."
            name="description"
            value={data.description}
            onChange={handleOnChange}
          />
        </div>
      </div>
    </>
  );
}

export default Content;
