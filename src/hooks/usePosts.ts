import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

export const usePosts = () => {
    return useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            return axios
              .get("https://jsonplaceholder.typicode.com/posts")
              .then((res) => {
                toast.success("Posts Fetched successfully", { theme: "colored" });
                return res.data;
              })
              .catch((err) => {
                toast.error("Failed to load posts", { theme: "colored" });
                throw err;
              });
          },
    });
};
