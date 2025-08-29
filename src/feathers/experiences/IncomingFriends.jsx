import React from "react";
import { GoStarFill } from "react-icons/go";
import Button from "../../components/Button";
import { getTimeSinceLastUpdate } from "../../lib/utils";
import { acceptFriendRequest } from "../../lib/api";

export default function IncomingFriends({ requests, open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <>
      <div>
        {open && (
          <div className="fixed mt-20 inset-0 z-50 flex items-center justify-center bg-[#5bbb7bbf] bg-opacity-50">
            <div className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-x">
              {/* Modal Header */}
              <div className="flex flex-row-reverse items-center justify-between border-b pb-3">
                <h3 className="text-xl font-semibold text-black">
                  طلبات الصداقة
                </h3>
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Modal Body (Settings content) */}
              <div className=" flex flex-col justify-end items-end gap-5">
                <Card requests={requests} handleClose={handleClose} />
              </div>
            </div>
          </div>
        )}

        <div className="md:hidden  xl:block hidden">
          <h1 className="text-right text-2xl font-semibold text-black">
            طلبات الصداقة
          </h1>
          <Card requests={requests} />
        </div>
      </div>
    </>
  );
}

function Card({ requests, handleClose }) {
  const TimeSinceLastUpdate = getTimeSinceLastUpdate(requests?.[0]?.createdAt);
  return (
    <>
      {requests?.length === 0 ? (
        <div>
          <img src="/no data.jpg" alt="no requests" className="mx-auto w-1/2" />
          <h3 className="text-center text-xl font-semibold text-primaryBg">
            لا يوجد طلبات صداقة
          </h3>
        </div>
      ) : (
        requests?.map((requests) => (
          <div
            key={requests._id}
            className="flex flex-row-reverse justify-center items-center w-full bg-white p-5 rounded-2xl gap-5 my-5"
          >
            <div className="lg:w-[60%] md:border-l-2 border-l-green-200 flex flex-col">
              <div className="flex flex-row-reverse gap-8">
                <img
                  loading="lazy"
                  className="md:w-20 w-10 rounded-full"
                  src={requests?.sender?.profilePicture}
                  alt=""
                />
                <div className="flex flex-col text-right">
                  <h3 className="font-bold text-xl mb-3">
                    {requests?.sender?.fullName}
                  </h3>{" "}
                  <p className="mb-5 text-thirdBg">{TimeSinceLastUpdate}</p>
                </div>
              </div>
            </div>
            <div className="lg:w-[40%] ">
              <div className="flex flex-row-reverse justify-around gap-8">
                <div className="flex flex-col gap-5">
                  <Button
                    text="قبول"
                    style=" md:text-[1rem]  text-sm"
                    type="primary"
                    onClick={() => {
                      handleClose();
                      acceptFriendRequest(requests._id);
                    }}
                  />

                  <Button
                    text={"رفض"}
                    type="sec"
                    style="text-green-800 border-green-700 md:text-[1rem] text-sm"
                    // onClick={() => handleButton()}
                  />
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}
