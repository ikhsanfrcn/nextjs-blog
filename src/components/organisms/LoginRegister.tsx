"use client";

import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Avatar from "../molecules/avatar";

export default function LoginRegister() {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      {user.objectId ? (
        <Avatar user={user} />
      ) : (
        <div className="flex gap-2 items-center justify-center">
          <button
            onClick={() => router.push("/register")}
            className="inline-flex items-center border px-3 py-2 text-sm font-medium text-center text-black rounded-lg hover:bg-gray-100"
          >
            Register
          </button>
          <button
            onClick={() => router.push("/login")}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-300 hover:text-black"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}
