import Navbar from "@/components/NavbarComponent";
// Import ServerProtectedComponents
import ServerProtectedComponents from "@/components/ServerProtectedComponents";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // Whole Screen
    // Gunakan ServerProtectedComponents sebagai parent
    <ServerProtectedComponents>
      <section>
        {/* Left Side */}
        <Navbar />

        {/* Right Side */}
        <main>
          {/* Content */}
          {children}
        </main>
      </section>
    </ServerProtectedComponents>
  );
};

export default DashboardLayout;
