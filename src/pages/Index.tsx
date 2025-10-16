import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Objectives from "@/components/Objectives";
import Impact from "@/components/Impact";
import CallToAction from "@/components/CallToAction";
import Partners from "@/components/Partners";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Vision />
      <Objectives />
      <Impact />
      <CallToAction />
      <Partners />
    </div>
  );
};

export default Index;
