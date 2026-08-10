import type { PropDef } from "@/components/site/PropTable";

export interface ComponentMeta {
  title: string;
  description: string;
  propTable: PropDef[];
  dos: string[];
  donts: string[];
}
