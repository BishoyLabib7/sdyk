import React, { useState } from "react";
import ActiveExperts from "../feathers/experiences/ActiveExperts";
import Categories from "../feathers/experiences/Categories";
import ExpertCard from "../components/ExpertCard";

import { useLocation } from "react-router";

import IncomingFriends from "../feathers/experiences/IncomingFriends";
import useFriends from "../hooks/useFriends";
import useUserFriendRequests from "../hooks/useUserFriendRequests";
import NoData from "../components/NoData";

export default function Experiences() {
  const [openFilter, setOpenFilter] = useState(false);
  const location = useLocation().pathname;

  const { friend } = useFriends();
  const { friendRequests } = useUserFriendRequests();
  const friends = friend?.friends?.friends;

  return (
    <div className="w-full md:py-30 py-20 ">
      <div className="lg:w-[90%] w-full flex xl:flex-row-reverse flex-col justify-center gap-10 lg:mx-10">
        <div className="lg:w-[40%] xl:bg-white rounded-xl lg:p-5 lg:row-span-2">
          {friends && (
            <IncomingFriends
              requests={friendRequests?.incomingRequests}
              open={openFilter}
              setOpen={setOpenFilter}
            />
          )}
        </div>

        <div className="w-full flex flex-col">
          <Categories handleOpen={setOpenFilter} type={location} />

          <div className="mt-5 px-5">
            {friends?.length !== 0 ? (
              friends?.map((provider) => (
                <ExpertCard
                  key={provider?._id}
                  id={provider?._id}
                  img={provider?.profilePicture}
                  name={provider?.fullName}
                  type={location}
                />
              ))
            ) : (
              <NoData />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
