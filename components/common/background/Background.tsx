"use client";
import dynamic from "next/dynamic";

const RetroBackground = dynamic(
  () => import("@/components/common/background/RetroBackground"),
  {
    ssr: false,
  }
);

export default function Background() {
  return <RetroBackground />;
}
