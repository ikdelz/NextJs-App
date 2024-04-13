

const getPost = async (id) => {
  const res = await fetch(`https://dummyjson.com/posts/${id}`, {
    next : {
      revalidate : 3600
    }
  });

  return res.json();
};

const Posts = async ({ params }) => {
  const { id } = params;
  const post = await getPost(id)

  return (
    <div className="app post" key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button>Delete</button>
    </div>
  );
};

export default Posts;
