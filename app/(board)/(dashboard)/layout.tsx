import { Navbar } from "./_components/navbar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full h-full">
      <Navbar />
      {children}
    </section>
  );
}

export default DashboardLayout;
