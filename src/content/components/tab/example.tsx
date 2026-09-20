import { Tab } from "@/components/ds/Tab";

export default function TabExample() {
  return (
    <div className="flex items-center gap-4" role="tablist" aria-label="Course type">
      <Tab selected>兒童課程</Tab>
      <Tab>成人課程</Tab>
    </div>
  );
}
