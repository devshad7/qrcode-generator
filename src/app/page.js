import QrGenerator from "@/components/QrGenerator";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <QrGenerator />
      </div>
    </>
  );
}
