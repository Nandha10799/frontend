import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import Input from "../components/common/input";
import Button from "../components/common/button";
import { Link } from "react-router-dom";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterForm = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Partial<RegisterFormData>>({});
  const { mutate: signup, isPending } = useSignup();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors: Partial<RegisterFormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const { confirmPassword:_ ,...exceptConfirmPassword} = formData; 

    signup(exceptConfirmPassword);
  };

  return (
    <form onSubmit={handleSubmit} className="p-2 space-y-4 text-[#000]">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-2xl font-bold">Sign up to your account</h1>
        <p className="text-sm">Already have an account? 
            <Link to={"/auth/login"} className="text-blue-800 underline cursor-pointer ml-1">
              sign in
            </Link>
          </p>
      </div>

      <Input
        label="Name"
        name="name"
        placeholder="John Doe"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />

      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="mailid@example.com"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />

      <Input
        label="Password"
        name="password"
        type="password"
        placeholder="••••••••"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />

      <Input
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder="••••••••"
        value={formData.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
      />

      <Button type="submit" isLoading={isPending}>
        <span>Register</span>
      </Button>
    </form>
  );
};
