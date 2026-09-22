import Link from "next/link";

const posts = [
  { id: "1", title: "Первый пост" },
  { id: "2", title: "Второй пост" },
  { id: "3", title: "Третий пост" },
];
 
export default function PostsPage() {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>
      ))}
    </ul>
  );
}