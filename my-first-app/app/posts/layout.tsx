export default function PostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header><h1>Блог</h1></header>
      {children}
    </div>
  );
}