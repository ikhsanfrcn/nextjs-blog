"use client";

import { useState } from "react";
import { FaLink } from "react-icons/fa6";

export const LinkCopyButton = ({ url }: { url: string }) => {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset setelah 2 detik
    }).catch(err => {
      console.error("Failed to copy link", err);
    });
  };

  return (
   
      <button
        onClick={copyLink}
        className="cursor-pointer"
      >
        {copied ? <FaLink className="text-gray-200"/> : <FaLink />}
      </button>
  );
};
