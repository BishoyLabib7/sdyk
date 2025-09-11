import { useState } from "react";
import { FolderOpen, User, Menu, X, CircleArrowLeft } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router";

import useAuthUser from "../hooks/useAuthUser";
import PageLoader from "../components/PageLoader";
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
import { useNavigate } from "react-router";

export default function Accout() {
  const { isLoading, authUser } = useAuthUser();
  const { pathname } = useLocation();

  return (
    <div>
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className="flex flex-row-reverse h-screen w-[90%] mx-auto mt-20">
          <Sidebar type={authUser.type} />
          <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
            {/* <Header /> */}
            <main className="flex-1 w-full bg-white rounded overflow-auto p-6">
              {pathname === "/account" && <UpdateInfor />}
              <Outlet />
            </main>
          </div>
        </div>
      )}
    </div>
  );
}

function Sidebar({ type }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "الاعدادات", href: "/account", icon: FolderOpen },
    { name: "طرق الدفع", href: "/account/payment", icon: User },
    { name: "اضف استشاره", href: "/account/consultation", icon: User },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden  top-4 left-4 z-50 p-2 rounded-lg  shadow-lg border border-gray-200"
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0  z-40"
          onClick={toggleMobileMenu}
        />
      )}

      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64  border-r rounded-r-lg border-gray-200 transform transition-transform duration-300 ease-in-out
        ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
      `}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-21 px-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">
                اداره الحساب
              </span>
            </div>
          </div>

          <nav className="flex-1  px-4 py-6 space-y-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex flex-row-reverse gap-5 sidebar-item `}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            ))}
            {type === "Provider" && (
              <button className="w-full text-center bg-thirdBg rounded cursor-pointer font-semibold py-2 px-4">
                شارك كمحل
              </button>
            )}
          </nav>

          <div className="px-4 py-6 border-t border-gray-200 space-y-5">
            <button className="flex items-center justify-end sidebar-item cursor-pointer w-full text-red-600 hover:bg-red-50">
              <CircleArrowLeft className="w-5 h-5 mr-3" />
              تسجيل الخروج
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function UpdateInfor() {
  const { authUser } = useAuthUser();
  const queryClient = useQueryClient();

  const [formState, setFormState] = useState({
    fullName: authUser?.fullName || "",
    bio: authUser?.bio || "",
    nativeLanguage: authUser?.nativeLanguage || "english",
    learningLanguage: "english",
    location: authUser?.location || "",
    profilePicture: authUser?.profilePicture || "",
    price: 0,
    yearsOfExperience: 0,
    specialization: "",
  });

  const {
    mutate: onboardingMutation,
    isPending,
    error,
  } = useMutation({
    mutationFn: completeOnboarding,
    onSuccess: () => {
      toast.success("Profile onboarded successfully");
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const navigate = useNavigate();

  const [buttonText, setButtonText] = useState("ارفع صورة لك");
  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setButtonText("تغيير الصورة");
    } else {
      setButtonText("ارفع صورة لك");
    }

    const file = event.target.files[0];
    const sizeKB = (file.size / 1024).toFixed(2);
    if (sizeKB > 5) {
      toast.error("error");

      setFormState({
        ...formState,
        profilePicture: authUser?.profilePicture,
      });
    } else {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        setFormState({ ...formState, profilePicture: reader.result });
      };
      reader.onerror = () => {
        toast.error("هناك مشكلة فى الصورة");
      };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onboardingMutation(formState);
    if (!error) navigate("/");
  };
  return (
    <div className="w-full flex items-center justify-center">
      <div className="card w-full shadow-xl">
        <div className="card-body p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-right mb-6">
            عدل ملفك الشخصي
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* PROFILE PIC CONTAINER */}
            <div className="flex flex-row-reverse gap-10 items-center justify-center space-y-4 ">
              {/* IMAGE PREVIEW */}
              <div className="size-32 rounded-full overflow-hidden">
                {formState.profilePicture ? (
                  <img
                    src={formState.profilePicture}
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

            <div className="w-full form-control flex flex-row-reverse justify-between gap-5">
              {/* FULL NAME */}
              <div className="form-control w-full">
                <label className="label  text-right flex justify-end mb-2">
                  <span className="label-text text-right">الاسم</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formState.fullName}
                  onChange={(e) =>
                    setFormState({ ...formState, fullName: e.target.value })
                  }
                  className="input bg-gray-200 w-full input-bordered  text-right"
                  placeholder="ادخل اسمك بكامل"
                />
              </div>
              {/* LOCATION */}
              <div className="form-control w-full">
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
                    className="input bg-gray-200  w-full xinput-bordered  pl-10 text-right"
                    placeholder="المدينة، الدولة"
                  />
                </div>
              </div>
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
                className="textarea bg-gray-200  textarea-bordered h-24 text-right w-full"
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
                      className="select bg-gray-200  select-bordered w-full"
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
                      className="select bg-gray-200  select-bordered w-full"
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
                      className="input bg-gray-200  input-bordered w-full pl-10"
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
                      className="input bg-gray-200  input-bordered w-full pl-10"
                      placeholder="200 جنيه"
                    />
                  </div>
                </div>
              </>
            )}

            {/* SUBMIT BUTTON */}

            <button
              className="btn btn-primary w-full"
              disabled={isPending}
              type="submit"
            >
              {!isPending ? (
                <>
                  <ShipWheelIcon className="size-5 mr-2" />
                  حفظ التعديلات
                </>
              ) : (
                <>
                  <LoaderIcon className="animate-spin size-5 mr-2" />
                  ... جارى الحفظ
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
