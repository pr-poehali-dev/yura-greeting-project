import Hero from "@/components/Hero";
import RoomShowcase from "@/components/RoomShowcase";
import Amenities from "@/components/Amenities";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <RoomShowcase />
      <Amenities />
      <Contact />
    </div>
  );
};

export default Index;
