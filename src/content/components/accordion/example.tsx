import { Accordion, AccordionGroup } from "@/components/ds/Accordion";

export default function AccordionExample() {
  return (
    <AccordionGroup type="single" className="w-full max-w-[820px]">
      <Accordion value="video" order={1} title="影片彈性學習｜每週 4 支影片，搭配點讀教材">
        拒絕低效率的大班齊步走。金牌師資教學影片搭配點讀教材，聽懂了就快轉，不懂的能重複觀看，學習節奏完全配合孩子的個人進度。
      </Accordion>
      <Accordion value="live" order={2} title="Second section title">
        Body text for the second section.
      </Accordion>
      <Accordion value="feedback" order={3} title="Third section title">
        Body text for the third section.
      </Accordion>
    </AccordionGroup>
  );
}
