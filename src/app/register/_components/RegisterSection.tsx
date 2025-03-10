"use client";

import RegisterForm from "./RegisterForm";

export default function RegisterSection() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-60px)]">
      <div className="text-center">
        <p className="text-xl font-bold">Welcome to Lorem Ipsum!</p>
        <p>Create an account to get the most out of Lorem Ipsum.</p>
        <RegisterForm />
      </div>
    </div>
  );
}
