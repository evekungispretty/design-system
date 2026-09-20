import { Checkbox } from "@/components/ds/Checkbox";

export default function CheckboxExample() {
  return (
    <div className="flex flex-col gap-3">
      <label className="flex cursor-pointer items-center gap-1">
        <Checkbox name="terms" />
        <span>I agree to the terms</span>
      </label>
      <label className="flex cursor-pointer items-center gap-1">
        <Checkbox name="newsletter" defaultChecked />
        <span>Send me course updates</span>
      </label>
      <label className="flex cursor-pointer items-center gap-1">
        <Checkbox name="consent" invalid />
        <span>Consent is required</span>
      </label>
    </div>
  );
}
