import React from "react";
import Card from "../../components/Card";

export default function Bannar() {
  return (
    <div className="w-full flex justify-around mt-20">
      <Card
        title={"شركة صديق للمساعدات"}
        description={`

          خبرة سنوات في تقديم الدعم والخدمات التي تحتاجها في أي وقت    
          `}
        image="/hero.png"
        num="0128525645"
        type="news"
      />
      <Card
        title={"محتاج مساعدة؟ 👋"}
        description={"شركة صديق للمساعدات هنا علشان تكون معاك في كل خطوة! "}
        image="/hero.png"
        num="0128525645"
        type="news"
      />
    </div>
  );
}
