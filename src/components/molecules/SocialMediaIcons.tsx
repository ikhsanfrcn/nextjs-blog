import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Icon } from "../atoms/Icon";

export const SocialMediaIcons: React.FC = () => {
  return (
    <div className="flex gap-4">
      <Icon
        Component={FaTwitter}
        link="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      />
      <Icon
        Component={FaInstagram}
        link="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      />
      <Icon
        Component={FaLinkedin}
        link="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  );
};
