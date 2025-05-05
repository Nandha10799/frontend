import { useState } from "react";
import Button from "../components/common/button";
import Input from "../components/common/input";
import { CiLogin } from "react-icons/ci";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isPending } = useLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = { email, password };

    mutate(payload);
  };
    return (
      <form className="p-2 space-y-4 text-[#000]" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="text-2xl font-bold">Sign in to your account</h1>
          <p className="text-sm">Don't have an account? 
            <Link to={"/auth/register"} className="text-blue-800 underline cursor-pointer ml-1">
              sign up
            </Link>
          </p>
        </div>
        <Input
            label="Email Address"
            type="email"
            placeholder="mailid@example.com"
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        <Button isLoading={isPending} type="submit" variant="primary" className="flex items-center gap-2 justify-center">
          <span>Login</span>
          <CiLogin className="text-xl font-extrabold" />
        </Button>
      </form>
    );
}