import { AlertCircle } from "lucide-react";
import React from "react";

const Alertmessage = ({ msg }) => {
  return (
    <div className="p-4 bg-red-400 mt-5 text-white rounded-md flex gap-5 item-center">
      <AlertCircle />
      {msg}
    </div>
  );
};

export default Alertmessage;
