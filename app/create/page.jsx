const Create = () => {
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form>
        <label htmlFor="title">Blog Title</label>
        <input type="text" id="title" placeholder="Title..." />
        <label htmlFor="title">Blog Body</label>
        <textarea id="title" cols="20" rows="2" placeholder="Body..." />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Create