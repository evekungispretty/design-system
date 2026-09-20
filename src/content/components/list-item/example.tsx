import { ListItem } from "@/components/ds/ListItem";

export default function ListItemExample() {
  return (
    <ul className="m-0 w-full max-w-[578px] list-none p-0">
      <li>
        <ListItem external href="https://example.com/ep-117">
          艾美講 EP 117｜臺灣雙語無法黨黨主席蕭文乾博士 Part 1：以政治為名，教育為實
        </ListItem>
      </li>
      <li>
        <ListItem external href="https://example.com/ep-118">
          Another link that opens in a new tab
        </ListItem>
      </li>
      <li>
        <ListItem href="/components/button">Button</ListItem>
      </li>
    </ul>
  );
}
