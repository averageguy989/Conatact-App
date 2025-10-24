import React from "react";
import { Plus } from "lucide-react";

function AddContactButton({ onClick }) {
  return (
    <div
      className="h-16 w-16 bg-emerald-100 rounded-full flex justify-center items-center group hover:h-20 hover:w-20 transition-all duration-100"
      onClick={onClick}
    >
      <Plus
        size={35}
        className="text-emerald-500 transition-all duration-100 group-hover:scale-150"
      />
    </div>
  );
}

export default AddContactButton;
