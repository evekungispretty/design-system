import { TabGroup } from "@/components/ds/Tab";

export default function TabGroupExample() {
  return (
    <div className="flex flex-col items-start gap-6">
      <TabGroup
        aria-label="Course type"
        tabs={[
          { value: "kids", label: "兒童課程" },
          { value: "adults", label: "成人課程" },
        ]}
      />
      <TabGroup
        aria-label="Course filter"
        defaultValue="kids"
        tabs={[
          { value: "all", label: "全部" },
          { value: "kids", label: "兒童課程" },
          { value: "adults", label: "成人課程" },
        ]}
      />
    </div>
  );
}
