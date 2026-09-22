const posts = [
  { id: "1", title: "Первый пост", body: "Текст первого поста" },
  { id: "2", title: "Второй пост", body: "Текст второго поста" },
  { id: "3", title: "Третий пост", body: "Текст третьего поста" },
];
 
export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);
 
  return (
    <div>
      <h2>{post?.title ?? "Пост не найден"}</h2>
      <p>{post?.body}</p>
    </div>
  );
}