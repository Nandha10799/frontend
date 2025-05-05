import { useMutation } from "@tanstack/react-query";
import { RegisterPayload, RegisterResponse, registerUser } from "../service/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const useSignup = () => {
    const navigate = useNavigate();
    const mutation = useMutation<RegisterResponse, Error, RegisterPayload>({
        mutationFn: registerUser,
        onSuccess: () => {
            toast.success("Registration successful!", { theme: "colored" });
            navigate("/auth/login", { replace: true });
        },
        onError: (error: any) => {
            console.error("Registration failed:", error?.response?.data?.message);
            toast.error(error?.response?.data?.message || "Registration failed, please try again", { theme: "colored" });
        },
    });

    return mutation;
};

