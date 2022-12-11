import React, { useState } from "react";
import Image from "next/image";
import { EventType } from "../pages";

type SettingProp = {
  data: EventType;
  handleOnChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  emitSelectedTag: (tag: string[]) => void;
};

function Settings({ data, handleOnChange, emitSelectedTag }: SettingProp) {
  const [tags, setTags] = useState<string[]>([
    "Product",
    "Marketing",
    "Design",
    "Engineering",
  ]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleSelectedTag = (tag: string) => {
    const selectTag = [...selectedTags, tag];
    setSelectedTags(selectTag);
    emitSelectedTag(selectTag);
    setTags(tags.filter((item) => item !== tag));
  };

  const handleRemoveSelectedTag = (tag: string) => {
    const selectTag = selectedTags.filter((item) => item !== tag);
    setSelectedTags(selectTag);
    emitSelectedTag(selectTag);
    setTags([...tags, tag]);
  };

  return (
    <div className="flex flex-col w-[50%]">
      <div className="p-8 bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
        {/* Title */}
        <label className="px-3 py-0 bg-[#FEF452] text-[32px] font-bold text-[#942F70]">
          Settings
        </label>
        {/* Approve */}
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            className="w-5 h-5 rounded-md border  border-solid border-[#D0D5DD] mr-3"
            name="isManualApprove"
            checked={data.isManualApprove}
            onChange={handleOnChange}
          />
          <label className="text-[#344054] font-medium text-sm">
            I want to approve attendees
          </label>
        </div>
        {/* Privacy */}
        <div className="mt-6">
          <label className="text-[#344054] font-medium text-base">
            Privacy
          </label>
          <div className="flex mt-2" onChange={(e: any) => handleOnChange(e)}>
            <div className="flex items-center mr-8">
              <input
                type="radio"
                id="public"
                name="privacy"
                value="public"
                className="w-5 h-5 rounded-[10px] border border-solid border-[#D0D5DD] mr-3"
              />
              <label
                htmlFor="public"
                className="font-normal text-sm text-[#475467]"
              >
                Public
              </label>
            </div>
            <div className="flex items-center mr-8">
              <input
                type="radio"
                id="audience"
                name="privacy"
                value="audience"
                className="w-5 h-5 rounded-[10px] border border-solid border-[#D0D5DD] mr-3"
              />
              <label
                htmlFor="audience"
                className="font-normal text-sm text-[#475467]"
              >
                Curated Audience
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="community"
                name="privacy"
                value="community"
                className="w-5 h-5 rounded-[10px] border border-solid border-[#D0D5DD] mr-3"
              />
              <label
                htmlFor="community"
                className="font-normal text-sm text-[#475467]"
              >
                Community Only
              </label>
            </div>
          </div>
        </div>
        {/* Social */}
        <div className="mt-6">
          <label className="font-medium text-base text-[#344054]">
            Tag your social
          </label>
          <br />
          <label className="font-normal text-base text-[#475467]">
            Pick tags for our curation engine to work its magin
          </label>
          <div className="mt-6">
            <div className="flex items-center">
              {/* Item Selected */}
              {selectedTags.map((tag, index) => (
                <div
                  key={tag}
                  className="flex py-1 px-3 bg-[#F9F5FF] rounded-2xl font-medium text-sm text-[#942F70] text-center cursor-pointer mr-2"
                >
                  <label className="mr-2">{tag}</label>
                  <Image
                    src="/x-close.svg"
                    alt="close"
                    width={12}
                    height={12}
                    onClick={() => handleRemoveSelectedTag(tag)}
                  />
                </div>
              ))}
            </div>

            <div className="flex mt-4">
              {/* Item */}
              {tags.map((tag, index) => (
                <div
                  key={tag}
                  className="py-[2px] px-[10px] bg-[#F2F4F7] rounded-2xl font-medium text-sm text-[#344054] cursor-pointer mr-2"
                  onClick={() => handleSelectedTag(tag)}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
