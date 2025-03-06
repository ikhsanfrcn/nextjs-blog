import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import { LinkCopyButton } from "../atoms/LinkCopyButton";

interface ShareButtonsProps {
  shareLinks: {
    whatsapp: string;
    facebook: string;
    twitter: string;
    linkedin: string;
  };
  currentUrl: string;
}

export const ShareButtons = ({ shareLinks, currentUrl }: ShareButtonsProps) => (
  <div className="flex justify-center space-x-4 pt-10 text-3xl">
    <Link href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-green-500">
      <FaWhatsapp />
    </Link>
    <Link href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600">
      <FaFacebook />
    </Link>
    <Link href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500">
      <FaTwitter />
    </Link>
    <Link href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700">
      <FaLinkedin />
    </Link>
    <LinkCopyButton url={currentUrl} />
  </div>
);
