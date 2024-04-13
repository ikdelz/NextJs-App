import Link from "next/link";

const getPosts = async() => {
  const res = await fetch("https://dummyjson.com/posts");

  return res.json()
}

const Posts = async() => {
  const { posts } = await getPosts()

  return (
    <div className="posts">
      {posts.slice(0, 6).map((post) => (
        <div className="post" key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <h3>{post.title}</h3>
            <p>{post.body.split(". ")[0]}...</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Posts