import LoginForm from "./LoginForm";

export default function LoginSection() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-60px)]">
      {/* <div className="flex justify-center items-center"> */}
        <div className="text-center">
          <p className="text-xl font-bold">Welcome Back!</p>
          <p>Sign in to get the most out of nuntium.</p>
          <LoginForm />
        </div>
      {/* </div> */}
    </div>
  );
}
