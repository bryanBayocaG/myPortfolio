"use client";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { useSearchParams } from "next/navigation";

function Page() {
  const router = useSearchParams();
  return (
    <AnimatePresence mode="wait">
      <div>
        <h1>hello</h1>
        <p>hshdkaksdhjfkljahsdljh ahsdkjfhajsdhl</p>
      </div>
    </AnimatePresence>
  );
}

export default Page;
