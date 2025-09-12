import ActiveExperts from "../feathers/experiences/ActiveExperts";
import Filtration from "../feathers/experiences/Filtration";
import Categories from "../feathers/experiences/Categories";
import ExpertCard from "../components/ExpertCard";
import useProviders from "../hooks/useProviders";
import { useState } from "react";
import useAuthUser from "../hooks/useAuthUser";
import NoData from "../components/NoData";
import useFriends from "../hooks/useFriends";

export default function Experiences() {
  const [openFilter, setOpenFilter] = useState(false);
  const { authUser } = useAuthUser();
  const isAuthenticated = Boolean(authUser);
  const { friend } = useFriends();
  const friends = friend?.friends?.friends;
  const { provider } = useProviders();

  return (
    <div className="w-full md:py-30 py-20 ">
      {isAuthenticated && friends?.length !== 0 && (
        <ActiveExperts friends={friends} />
      )}
      <div className="lg:w-[90%] w-full flex lg:flex-row-reverse flex-col justify-center gap-10 lg:mx-10">
        <div className="lg:w-[30%]  lg:bg-white rounded-xl lg:p-3 lg:row-span-2">
          <Filtration open={openFilter} setOpen={setOpenFilter} />
        </div>

        <div className="w-full flex flex-col">
          <Categories handleOpen={setOpenFilter} />
          {provider && provider.length !== 0 ? (
            <div className="mt-5 px-5">
              {provider?.map(
                (expert) =>
                  expert.specialization && (
                    <ExpertCard
                      key={expert._id}
                      id={provider?.[0]?._id}
                      img={expert.profilePicture}
                      name={expert.fullName}
                      jop={expert.specialization}
                      experiences={expert.yearsOfExpirence}
                      price={expert.price}
                    />
                  )
              )}
            </div>
          ) : (
            <NoData text="لا يوجد خبراء حالياً" />
          )}
        </div>
      </div>
    </div>
  );
}
