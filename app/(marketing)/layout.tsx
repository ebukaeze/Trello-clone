import { Footer } from "./Footer";
import { Navbar } from "./_components/Navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full bg-slate-100">
      <Navbar />
      <main className="pt-20 md:pt-30 pb-10 bg-gradient-to-r from-purple-600 to-pink-500">
        {children}
      </main>
      <Footer />
    </div>
  );
}
