import React from "react";
import { CheckCircle } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-500/10 to-blue-600/10 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-2xl mx-auto py-6 px-4">
        <div className="flex items-center gap-3">
          <CheckCircle className="w-8 h-8 text-blue-500" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            To-Do App
          </h1>
        </div>
        <p className="mt-2 text-gray-600 text-sm">
          Stay organized, get things done.
        </p>
      </div>
    </div>
  );
};

export default Header;