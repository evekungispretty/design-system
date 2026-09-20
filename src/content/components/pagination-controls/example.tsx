"use client";

import { useState } from "react";
import { PaginationControls } from "@/components/ds/PaginationControls";

export default function PaginationControlsExample() {
  const [dotsPage, setDotsPage] = useState(2);
  const [numbersPage, setNumbersPage] = useState(3);

  return (
    <div className="flex flex-col gap-6">
      <PaginationControls variant="dots" page={dotsPage} pageCount={5} onPageChange={setDotsPage} />
      <PaginationControls variant="numbers" page={numbersPage} pageCount={5} onPageChange={setNumbersPage} />
    </div>
  );
}
