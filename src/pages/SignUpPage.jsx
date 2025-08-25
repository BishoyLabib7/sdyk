import { useState } from "react";
import { ShipWheelIcon } from "lucide-react";
import { Link } from "react-router";

import useSignUp from "../hooks/useSignUp";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { isPending, error, signupMutation } = useSignUp();

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData);
  };

  return (
    <div
      className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 bg-sadykBg"
      data-theme="forest"
    >
      <div className="border border-primary/25 flex flex-col lg:flex-row-reverse w-full max-w-5xl mx-auto bg-base-200 rounded-xl shadow-lg overflow-hidden">
        {/* SIGNUP FORM - LEFT SIDE */}
        <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col">
          {/* LOGO */}
          <div className="mb-4 flex items-center justify-end gap-2">
            <img className="size-20" src="logo.png" alt="صديق" />
          </div>

          {/* ERROR MESSAGE IF ANY */}
          {error && (
            <div className="alert alert-error mb-4">
              <span>{error.message}</span>
            </div>
          )}

          <div className="w-full text-right">
            <form onSubmit={handleSignup}>
              <div className="space-y-4">
                <div className="text-center">
                  <h2 className="text-xl font-semibold">إنشاء حساب</h2>
                  <p className="text-sm opacity-70">
                    انضم إلى صديق وابدأ مغامرة استكشاف خبرات جديدة!
                  </p>
                </div>

                <div className="space-y-3">
                  {/* FULLNAME */}
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">الاسم الكامل</span>
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="input input-bordered w-full"
                      value={signupData.fullName}
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          fullName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  {/* EMAIL */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">بريد إلكتروني</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@gmail.com"
                      className="input input-bordered w-full"
                      value={signupData.email}
                      onChange={(e) =>
                        setSignupData({ ...signupData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  {/* PASSWORD */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">كلمة المرور</span>
                    </label>
                    <input
                      type="password"
                      placeholder="********"
                      className="input input-bordered w-full"
                      value={signupData.password}
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          password: e.target.value,
                        })
                      }
                      required
                    />
                    <p className="text-xs opacity-70 mt-1">
                      يجب أن تكون كلمة المرور مكونة من 6 أحرف على الأقل
                    </p>
                  </div>

                  <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                      <span className="text-xs leading-tight">
                        انا أوافق على{" "}
                        <span className="text-primary hover:underline">
                          شروط الخدمة
                        </span>{" "}
                        و{" "}
                        <span className="text-primary hover:underline">
                          سياسة الخصوصية
                        </span>
                      </span>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm"
                        required
                      />
                    </label>
                  </div>
                </div>

                <button className="btn btn-primary w-full" type="submit">
                  {isPending ? (
                    <>
                      <span className="loading loading-spinner loading-xs"></span>
                      تحميل...
                    </>
                  ) : (
                    "إنشاء حساب"
                  )}
                </button>

                <div className="text-center mt-4">
                  <p className="text-sm">
                    هل لديك حساب بالفعل؟{" "}
                    <Link to="/login" className="text-primary hover:underline">
                      تسجيل الدخول
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* SIGNUP FORM - RIGHT SIDE */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center ">
          <div className="max-w-md p-8">
            {/* Illustration */}
            <div className="relative aspect-square max-w-sm mx-auto">
              <img
                src="/i.png"
                alt="Language connection illustration"
                className="w-full h-full"
              />
            </div>

            <div className="text-center space-y-3 mt-6">
              <h2 className="text-xl font-semibold">
                التواصل مع خبراء في جميع أنحاء العالم
              </h2>
              <p className="opacity-70">
                تدربوا على المحادثات، يكونوا صداقات، واكتسبوا مهاراتهم وخبرات
                معًا
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
