import { useState } from "react";
import useAuthUser from "../hooks/useAuthUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { completeOnboarding } from "../lib/api";
import {
  CameraIcon,
  LoaderIcon,
  MapPinIcon,
  ShipWheelIcon,
} from "lucide-react";
import { LANGUAGES, Specializations } from "../constants";

const OnboardingPage = () => {
  const { authUser } = useAuthUser();
  const queryClient = useQueryClient();

  const [formState, setFormState] = useState({
    fullName: authUser?.fullName || "",
    bio: authUser?.bio || "",
    nativeLanguage: authUser?.nativeLanguage || "english",
    learningLanguage: "english",
    location: authUser?.location || "",
    profilePic: authUser?.profilePic || "",
    price: 0,
    yearsOfExperience: 0,
    specialization: "",
  });

  const { mutate: onboardingMutation, isPending } = useMutation({
    mutationFn: completeOnboarding,
    onSuccess: () => {
      toast.success("Profile onboarded successfully");
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const [buttonText, setButtonText] = useState("ارفع صورة لك");
  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setButtonText("تغيير الصورة");
    } else {
      setButtonText("ارفع صورة لك");
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      setFormState({ ...formState, profilePic: reader.result });
    };
    reader.onerror = () => {
      toast.error("هناك مشكلة فى الصورة");
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onboardingMutation(formState);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-sadykBg"
      data-theme="forest"
    >
      <div className="card w-full max-w-3xl shadow-xl bg-base-200">
        <div className="card-body p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            أكمل ملفك الشخصي
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* PROFILE PIC CONTAINER */}
            <div className="flex flex-col items-center justify-center space-y-4">
              {/* IMAGE PREVIEW */}
              <div className="size-32 rounded-full bg-base-300 overflow-hidden">
                {formState.profilePic ? (
                  <img
                    src={formState.profilePic}
                    alt="Profile Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <CameraIcon className="size-12 text-base-content opacity-40" />
                  </div>
                )}
              </div>

              {/* Generate Random Avatar BTN */}
              <div className="flex items-center gap-2 btn btn-accent">
                <label htmlFor="file-upload" className="custom-file-upload">
                  {buttonText}
                </label>

                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            {/* FULL NAME */}
            <div className="form-control">
              <label className="label w-full text-right flex justify-end mb-2">
                <span className="label-text text-right">الاسم</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formState.fullName}
                onChange={(e) =>
                  setFormState({ ...formState, fullName: e.target.value })
                }
                className="input input-bordered w-full text-right"
                placeholder="ادخل اسمك بكامل"
              />
            </div>

            {/* BIO */}
            <div
              dir="rtl"
              className="form-control w-full flex justify-content-end gap-2 "
            >
              <label className="label flex justify-end mb-2 text-right">
                <span className="label-text">السيرة الذاتية</span>
              </label>
              <textarea
                name="bio"
                value={formState.bio}
                onChange={(e) =>
                  setFormState({ ...formState, bio: e.target.value })
                }
                className="textarea textarea-bordered h-24 text-right w-full"
                placeholder="شاركنا قصتك: من أنت؟ ما هي خلفيتك؟ ما الذي دفعك لاختيار هذا المسار؟ وما هي أهم المهارات والخبرات التي اكتسبتها؟"
              />
            </div>
            {authUser.type === "Provider" && (
              <>
                <div
                  dir="rtl"
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {/* NATIVE LANGUAGE */}
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">اللغة الأم</span>
                    </label>
                    <select
                      name="nativeLanguage"
                      value={formState.nativeLanguage}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          nativeLanguage: e.target.value,
                        })
                      }
                      className="select select-bordered w-full"
                    >
                      <option value="">اختر لغتك الأم</option>
                      {LANGUAGES.map((lang) => (
                        <option
                          key={`native-${lang}`}
                          value={lang.toLowerCase()}
                        >
                          {lang}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">تخصصك</span>
                    </label>
                    <select
                      name="specialization"
                      value={formState.specialization}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          specialization: e.target.value,
                        })
                      }
                      className="select select-bordered w-full"
                    >
                      <option value="">اختار تخصصك</option>
                      {Specializations.map((lang) => (
                        <option
                          key={`learning-${lang}`}
                          value={lang.toLowerCase()}
                        >
                          {lang}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div
                  dir="rtl"
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {/* experience */}
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">عدد سنين الخبرة</span>
                    </label>
                    <input
                      type="number"
                      name="experience"
                      value={formState.yearsOfExperience}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          yearsOfExperience: e.target.value,
                        })
                      }
                      className="input input-bordered w-full pl-10"
                      placeholder="5 سنوات"
                    />
                  </div>

                  {/* price*/}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        سعر الاستشارة فى الساعة
                      </span>
                    </label>
                    <input
                      type="number"
                      name="price"
                      value={formState.price}
                      onChange={(e) =>
                        setFormState({ ...formState, price: e.target.value })
                      }
                      className="input input-bordered w-full pl-10"
                      placeholder="200 جنيه"
                    />
                  </div>
                </div>
              </>
            )}
            {/* LOCATION */}
            <div className="form-control">
              <label className="label  flex justify-end mb-2 text-right ">
                <span className="label-text ">العنوان</span>
              </label>
              <div className="relative">
                <MapPinIcon className="absolute top-1/2 transform -translate-y-1/2 left-3 size-5 text-base-content opacity-70" />
                <input
                  type="text"
                  name="location"
                  value={formState.location}
                  onChange={(e) =>
                    setFormState({ ...formState, location: e.target.value })
                  }
                  className="input input-bordered w-full pl-10 text-right"
                  placeholder="المدينة، الدولة"
                />
              </div>
            </div>

            {/* SUBMIT BUTTON */}

            <button
              className="btn btn-primary w-full"
              disabled={isPending}
              type="submit"
            >
              {!isPending ? (
                <>
                  <ShipWheelIcon className="size-5 mr-2" />
                  Complete Onboarding
                </>
              ) : (
                <>
                  <LoaderIcon className="animate-spin size-5 mr-2" />
                  Onboarding...
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default OnboardingPage;
