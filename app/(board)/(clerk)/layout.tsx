export default function ClerkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full flex items-center justify-center h-[100dvh]">
      {children}
    </section>
  );
}
