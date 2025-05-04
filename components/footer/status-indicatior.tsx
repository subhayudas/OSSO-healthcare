// components/Footer/StatusIndicator.tsx
import React from "react";

const StatusIndicator: React.FC = () => {
  return (
    <div
      className="flex items-center space-x-2 py-2 px-4 rounded-full mb-4 md:mb-0"
      style={{
        background: "linear-gradient(145deg, #f0f0f0, #e6e6e6)",
        boxShadow: "3px 3px 6px #d1d1d1, -3px -3px 6px #ffffff",
      }}
    >
      <div className="relative">
        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
      </div>
      <span className="text-sm text-gray-600">All systems operational</span>
    </div>
  );
};

export default StatusIndicator;
