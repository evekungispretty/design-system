import { VideoCard } from "@/components/ds/VideoCard";

function Thumb() {
  return <div className="size-full bg-[var(--ds-color-neutral-300)]" />;
}

export default function VideoCardExample() {
  return (
    <div className="w-full max-w-[346px]">
      <VideoCard href="https://example.com/video" description="影片簡述文字" thumbnail={<Thumb />} />
    </div>
  );
}
