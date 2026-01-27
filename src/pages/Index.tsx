import Hero from "@/components/Hero";
import AboutTour from "@/components/AboutTour";
import StudentProfile from "@/components/StudentProfile";
import Itinerary from "@/components/Itinerary";
import Leaderboard from "@/components/Leaderboard";
import DonateSection from "@/components/DonateSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutTour />
      <StudentProfile />
      <Itinerary />
      <Leaderboard />
      <DonateSection />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
