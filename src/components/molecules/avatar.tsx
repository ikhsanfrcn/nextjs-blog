import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { UserState } from "@/type";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/userSlice";
import { useRouter } from "next/navigation";
import { GoBell } from "react-icons/go";
import Link from "next/link";

const Avatar = ({ user }: { user: UserState | null }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const onLogout = async () => {
    await axios.get("/api/auth/logout");
    dispatch(logout());
    router.push("/login");
  };

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="flex items-center gap-4 text-xl">
      <GoBell />
      <div ref={dropdownRef} className="relative">
        <div
          onClick={toggleDropdown}
          className="flex items-center cursor-pointer"
        >
          <div className="w-10 h-10 relative">
            <Image
              className="rounded-full object-cover"
              src={
                "https://res.cloudinary.com/dn6uglajh/image/upload/v1733990935/blank-image_yfczs3.jpg"
              }
              alt={user?.name || "author"}
              fill
              priority
            />
          </div>
        </div>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white rounded-2xl shadow-lg border border-gray-200">
            <div className="px-5 py-2 border-b border-gray-200">
              <p className="text-md font-bold text-gray-900 truncate ">
                {user?.name}
              </p>
              <p className="text-sm text-gray-500 truncate">
                {user?.email}
              </p>
            </div>
            <ul className="px-5 py-2 space-y-1">
              <li>
                <Link
                href={"/dashboard"}
                  className="block
                text-sm text-gray-700 hover:text-black"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                href={`/dashboard/createpost`}
                  className="block
                text-sm text-gray-700 hover:text-black cursor-pointer"
                >
                  Write a Post
                </Link>
              </li>
              <li>
                <button
                  onClick={onLogout}
                  className="block text-sm text-red-600 cursor-pointer"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Avatar;
