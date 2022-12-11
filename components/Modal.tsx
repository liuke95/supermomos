import React, { useState } from "react";
import Image from "next/image";

type ModalProp = {
  emitSelectedBanner: (banner: number) => void;
};

function Modal({ emitSelectedBanner }: ModalProp) {
  const [selectedBanner, setSelectedBanner] = useState<number>();

  const handleSelectedBanner = (bannerNumber: number) => {
    setSelectedBanner(bannerNumber);
  };

  const handleSaveBanner = () => {
    if (selectedBanner) {
      emitSelectedBanner(selectedBanner);
    }
  };

  return (
    <div
      id="bannerModal"
      data-modal-backdrop="static"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-black/[.54]"
    >
      <div className="relative w-full h-full max-w-4xl md:h-auto">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow ">
          {/* Modal header */}
          <div className="flex items-start justify-between p-4 border-b rounded-t ">
            <h3 className="text-xl font-semibold text-gray-900 ">
              Choose a banner
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
              data-modal-toggle="bannerModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-4 gap-2">
              {Array.from(Array(10).keys()).map((value) => (
                <Image
                  className={
                    selectedBanner === value + 1
                      ? "border-orange-500 border-4 border-solid"
                      : ""
                  }
                  key={value}
                  src={`https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_${
                    value + 1
                  }.jpg`}
                  onClick={() => handleSelectedBanner(value + 1)}
                  alt="banner 1"
                  width={200}
                  height={200}
                />
              ))}
            </div>
          </div>
          {/* Modal footer */}
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b  justify-end">
            <button
              data-modal-toggle="bannerModal"
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 "
            >
              Close
            </button>
            <button
              onClick={handleSaveBanner}
              data-modal-toggle="bannerModal"
              type="button"
              className="text-[#942F70] bg-[#FEF452] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
