type Post = {
  id: string;
  title: string;
};

export default async function Page() {
  const res = await fetch('https://api.vercel.app/blog');

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  const posts: Post[] = await res.json();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}