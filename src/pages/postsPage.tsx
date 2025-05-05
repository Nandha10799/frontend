import { usePosts } from "../hooks/usePosts";

interface Post {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export const PostsPage = () => {
    const { data, isPending, error } = usePosts();
    
    return (
        <div className="h-full w-full text-[#000] p-5 xl:p-10 overflow-y-scroll space-y-5">
            <h1 className="text-2xl font-semibold italic">Posts List:-</h1>
            {isPending && <div className="h-full w-full flex items-center justify-center text-[#000]">Photos Loading...</div>}
            {error && <p>Error loading posts</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {data?.map((post: Post) => (
                <div
                    key={post.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                    <div className="p-4">
                        <p className="text-sm text-gray-800">ID: {post.id}</p>
                        <p className="text-sm text-gray-800">User Id: {post.userId}</p>
                        <h2 className="w-full text-sm font-semibold text-gray-800 truncate overflow-hidden whitespace-nowrap">
                            Title: {post.title}
                        </h2>
                        <p className="text-sm text-gray-800 truncate overflow-hidden whitespace-nowrap">Body: {post.body}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};