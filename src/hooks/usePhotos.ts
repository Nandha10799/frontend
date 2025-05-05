import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

export const usePhotos = () => {
    return useQuery({
        queryKey: ["photos"],
        queryFn: async () => {
            return axios
              .get("https://jsonplaceholder.typicode.com/photos")
              .then((res) => {
                toast.success("Photos Fetched successfully", { theme: "colored" });
                return res.data;
              })
              .catch((err) => {
                toast.error("Failed to load photos", { theme: "colored" });
                throw err;
              });
          },
    });
};
