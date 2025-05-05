import { usePhotos } from "../hooks/usePhotos";
import natureImg from "../../assets/nature.jpg";

interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export const PhotosPage = () => {
    const { data, isPending, error } = usePhotos();
    
    return (
        <div className="h-full w-full text-[#000] p-5 xl:p-10 overflow-y-scroll space-y-5">
            <h1 className="text-2xl font-semibold italic">Photos List:-</h1>
            {isPending && <div className="h-full w-full flex items-center justify-center text-[#000]">Photos Loading...</div>}
            {error && <p>Error loading posts</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {data?.map((photo: Photo) => (
                <div
                    key={photo.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                    <img
                    src={natureImg}
                    alt={photo.title}
                    className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <p className="text-sm text-gray-800">
                            <span className="font-semibold">ID:</span> <span>{photo.id}</span>
                        </p>
                        <p className="text-sm text-gray-800">
                            <span className="font-semibold">Album ID:</span> <span>{photo.albumId}</span>
                        </p>
                        <p className="w-full text-sm text-gray-800 truncate overflow-hidden whitespace-nowrap">
                            <span className="font-semibold">Title:</span> <span>{photo.title}</span>
                        </p>
                        <p className="text-sm text-gray-800 truncate overflow-hidden whitespace-nowrap">
                            <span className="font-semibold">URL:</span> <span className="text-blue-600 underline">{photo.url}</span>
                        </p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};