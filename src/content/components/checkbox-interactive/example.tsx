import { CheckboxInteractive } from "@/components/ds/Checkbox";

export default function CheckboxInteractiveExample() {
  return (
    <div className="flex w-full max-w-[472px] flex-col gap-3">
      <CheckboxInteractive name="worry" value="english" label="自己的英文不好，幫不了孩子。" />
      <CheckboxInteractive name="worry" value="motivation" label="Second option (checked)" defaultChecked />
      <CheckboxInteractive name="worry" value="time" label="Third option" />
    </div>
  );
}
