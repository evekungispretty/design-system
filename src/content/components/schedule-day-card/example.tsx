import { ScheduleDayCard } from "@/components/ds/ScheduleDayCard";

export default function ScheduleDayCardExample() {
  return (
    <div className="grid w-full max-w-[720px] grid-cols-2 gap-4 pt-6 sm:grid-cols-4">
      <ScheduleDayCard type="video" weekday="週一" title="看影片" subtitle="上課囉" href="https://example.com/demo" />
      <ScheduleDayCard type="video" weekday="週二" title="看影片" subtitle="上課囉" duration="25 分鐘" />
      <ScheduleDayCard type="liveClass" weekday="週三" title="看影片" subtitle="上課囉" duration="25 分鐘" reviewed />
      <ScheduleDayCard type="feedback" weekday="週四" title="看影片" subtitle="上課囉" duration="25 分鐘" />
    </div>
  );
}
