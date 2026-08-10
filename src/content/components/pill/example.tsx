import { Pill } from "@/components/ds/Pill";

export default function PillExample() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Pill tone="red">拼讀</Pill>
      <Pill tone="green">Vocabulary</Pill>
      <Pill tone="blue">Comprehension</Pill>
      <Pill tone="purple">Adult</Pill>
      <Pill tone="brown">Featured</Pill>
      <Pill tone="white">Neutral</Pill>
    </div>
  );
}
