import { useMutation } from "@tanstack/react-query";
import { LoginPayload, LoginResponse, loginUser } from "../service/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserProfile } from "../redux-store/slice/userProfileSlice";

export const useLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const mutation = useMutation<LoginResponse, Error, LoginPayload>({
        mutationFn: loginUser,
        onSuccess: async (data) => {
            localStorage.setItem("token", data.data.token);
            toast.success("Login successful!", { theme: "colored" });
            
            try {
                const res = await axios.get("http://localhost:8080/api/profile", {
                headers: {
                    Authorization: `Bearer ${data.data.token}`,
                },
                });
                dispatch(setUserProfile({
                    id: res.data.id,
                    name: res.data.name,
                    email: res.data.email
                }));
            } catch (err) {
                console.error("Profile fetch failed");
            }
            navigate("/", { replace: true });
        },
        onError: (error: any) => {
            console.error("Login failed:", error?.response?.data?.message);
            toast.error(error?.response?.data?.message || "Login failed. Please check your credentials and try again.", { theme: "colored" });
        },
    });

    return mutation;
};

