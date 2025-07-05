
import Login from "./pages/login";
import Navbar from "./components/ui/Navbar";
import HeroSection from "./pages/student/HeroSection";
 
function App() {
  return (
    <main className="min-h-screen p-4">
      <Navbar />
      <HeroSection />
      <Login />
    </main>
  );
}
 
export default App;