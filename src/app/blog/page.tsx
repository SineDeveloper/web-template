type Post = {
  id: number;
  title: {
    rendered: string;
  };
};

export default async function Page() {
  const res = await fetch(
    "https://serverless-wp-ashy.vercel.app/wp-json/wp/v2/posts/"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts: Post[] = await res.json();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title.rendered}</li>
      ))}
    </ul>
  );
}