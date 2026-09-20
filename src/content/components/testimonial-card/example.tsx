import { TestimonialCard } from "@/components/ds/TestimonialCard";

export default function TestimonialCardExample() {
  return (
    <div className="w-full max-w-[317px]">
      <TestimonialCard
        name="蘇靖棻"
        position="政大外文中心副教授"
        quote="如果你是曾經放棄英文、或正為孩子學習掙扎的家長，蕭博士 SoR 師資班將是你的救贖。如果你跟我一樣是專業人士，想讓英語發音更上一層樓，這套系統是我的首選推薦。"
        linkHref="https://example.com/video"
      />
    </div>
  );
}
