// src/pages/InProgress.tsx
import { Construction } from "lucide-react";
import React from "react";

const InProgress: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-100 px-4">
      <Construction className="w-16 h-16 text-[#F75495] mb-4" />
      <h1 className="text-3xl font-bold text-[#F75495] mb-2">Still in Progress</h1>
      <p className="text-gray-700 max-w-md">
        This project is currently under development. Please check back later or contact me for updates.
      </p>
    </div>
  );
};

export default InProgress;
