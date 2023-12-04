import { ClerkProvider } from "@clerk/nextjs";

function BoardLayout({ children }: { children: React.ReactNode }) {
  return <ClerkProvider>{children}</ClerkProvider>;
}

export default BoardLayout;
