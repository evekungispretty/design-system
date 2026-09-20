import { CourseCard } from "@/components/ds/CourseCard";

function Thumb() {
  return <div className="size-full bg-[var(--ds-color-neutral-300)]" />;
}

export default function CourseCardExample() {
  return (
    <div className="grid w-full max-w-[720px] gap-6 sm:grid-cols-2">
      <CourseCard
        audience="kid"
        title="拼讀小達人"
        description="專利技術破解發音不準、死背單字的噩夢，建立母語者的直覺聲音連結。"
        caption="擊破"
        tags={["發音", "拼讀"]}
        thumbnail={<Thumb />}
      />
      <CourseCard
        audience="adult"
        title="拼讀小達人"
        description="專利技術破解發音不準、死背單字的噩夢，建立母語者的直覺聲音連結。"
        caption="擊破"
        tags={["發音", "拼讀"]}
        thumbnail={<Thumb />}
      />
    </div>
  );
}
