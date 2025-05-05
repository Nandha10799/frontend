import axios from "axios";

export interface LoginPayload {
    email: string;
    password: string;
}

export interface LoginResponse {
    data: {
        id: string;
        name: string;
        email: string;
        token: string;
    };
}

export interface RegisterPayload {
    name: string;
    email: string;
    password: string;
}

export interface RegisterResponse {
    name: string;
    email: string;
}

export const loginUser = async (payload: LoginPayload): Promise<LoginResponse> => {
    const response = await axios.post("https://backend-production-0f62.up.railway.app/api/login", payload);
    // const response = await axios.post("http://localhost:8080/api/login", payload);
    return response.data;
};

export const registerUser = async (payload: RegisterPayload): Promise<RegisterResponse> => {
    const response = await axios.post("https://backend-production-0f62.up.railway.app/api/register", payload);
    // const response = await axios.post("http://localhost:8080/api/register", payload);
    return response.data;
};
