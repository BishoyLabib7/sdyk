import React, { useState } from "react";
import useAuthUser from "../../hooks/useAuthUser";

export default function Payment() {
  const [zip, setZip] = useState("");
  const [error, setError] = useState(false);
  const { authUser } = useAuthUser();
  const [billingCycle, setBillingCycle] = useState("سنوي");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[0-9]{4,6}$/.test(zip)) {
      setError(true);
    } else {
      setError(false);
      alert("تم إرسال الدفع!");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-6" dir="rtl">
      {/* قسم الدفع */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-4">الدفع</h2>

        {/* رقم البطاقة */}
        <div className="flex items-center border rounded-lg p-3 mb-4">
          <input
            type="text"
            placeholder="1234 1234 1234 1234"
            className="flex-1 outline-none text-gray-700 text-right"
          />
          <div className="flex gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="Visa"
              className="h-5"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              className="h-5"
            />
          </div>
        </div>

        {/* تاريخ الانتهاء و CVC */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="شهر / سنة"
            className="border rounded-lg p-3 outline-none text-gray-700 text-right"
          />
          <input
            type="text"
            placeholder="رمز الأمان"
            className="border rounded-lg p-3 outline-none text-gray-700 text-right"
          />
        </div>

        {/* خيار باي بال */}
        <button className="w-full border rounded-lg p-3 mb-6 flex items-center justify-center gap-2 hover:bg-gray-50">
          <img
            src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
            alt="PayPal"
            className="h-6"
          />
          <span className="font-medium text-gray-700">PayPal</span>
        </button>

        {/* تفاصيل الفاتورة */}
        <h3 className="text-lg font-bold mb-3">تفاصيل الفاتورة</h3>
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          className="w-full border rounded-lg p-3 mb-4 outline-none text-gray-700 text-right"
          defaultValue={authUser.email}
        />

        {/* الرمز البريدي */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="الرمز البريدي"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className={`w-full border rounded-lg p-3 outline-none text-gray-700 text-right ${
              error ? "border-red-500" : ""
            }`}
          />
          {error && (
            <p className="text-red-500 text-sm mt-1">
              من فضلك أدخل رمز بريدي صالح
            </p>
          )}
        </div>

        {/* الدولة */}
        <select className="w-full border rounded-lg p-3 outline-none text-gray-700 mb-6 text-right">
          <option>مصر</option>
          <option>أمريكا</option>
          <option>بريطانيا</option>
          <option>ألمانيا</option>
        </select>

        {/* زر الدفع */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700"
        >
          ادفع الآن
        </button>
      </div>

      {/* قسم الخطة التجريبية */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-4">خطتك التجريبية</h2>

        {/* دورة الفوترة */}
        <div className="mb-6">
          <p className="font-medium mb-2">دورة الفوترة</p>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="billing"
                checked={billingCycle === "سنوي"}
                onChange={() => setBillingCycle("سنوي")}
              />
              <span>سنوي</span>
              <span className="bg-green-400 text-white text-xs px-2 py-1 rounded-full">
                وفر 19%
              </span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="billing"
                checked={billingCycle === "شهري"}
                onChange={() => setBillingCycle("شهري")}
              />
              <span>شهري</span>
            </label>
          </div>
        </div>

        <hr className="my-4" />

        {/* تفاصيل الباقة */}
        <div className="flex justify-between mb-2">
          <p className="font-medium">لينكتري بريميوم</p>
          <p className="line-through text-gray-400">$234</p>
        </div>
        <p className="text-green-600 mb-4">مجاناً لمدة 7 أيام</p>

        <button className="text-purple-600 hover:underline mb-6">
          أضف كود خصم
        </button>

        <hr className="my-4" />

        {/* الأسعار */}
        <div className="flex justify-between mb-2">
          <p>مستحق في 18 سبتمبر 2025</p>
          <p>$234 / السنة</p>
        </div>
        <div className="flex justify-between font-bold mb-4">
          <p>المستحق اليوم</p>
          <p className="text-black">$0</p>
        </div>

        {/* زر البدء */}
        <button
          disabled
          className="w-full bg-gray-200 text-gray-500 py-3 rounded-lg font-medium cursor-not-allowed flex items-center justify-center gap-2"
        >
          ⚡ ابدأ تجربتك المجانية
        </button>

        <p className="text-sm text-gray-500 text-center mt-4">
          ستبدأ خطتك في 18 سبتمبر، ما لم تلغِ. يمكنك الإلغاء في أي وقت.
        </p>
      </div>
    </div>
  );
}
