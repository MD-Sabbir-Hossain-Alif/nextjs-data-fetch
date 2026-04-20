// const getPosts = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     return res.json();
// };

// const getPosts = async () => {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/js");
//         return res.json();
//     } catch (err) {
//         throw new Error("Failed to fetch posts");
//     }
// };

const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
        throw new Error("Failed to fetch posts from url");
    }
    return res.json();
};

const PostsPage = async () => {
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const data = await res.json();
    const data = await getPosts();
    // console.log(data);
    return (
        <div className="container mx-auto bg-sky-800 h-screen text-white ">
            <h1 className="text-center text-5xl pt-10 underline">
                Hello Im from Posts: {data.length}
            </h1>
        </div>
    );
};

export default PostsPage;
