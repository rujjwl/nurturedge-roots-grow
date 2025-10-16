import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Objectives from "@/components/Objectives";
import Impact from "@/components/Impact";
import Team from "@/components/Team";
import CallToAction from "@/components/CallToAction";
import Partners from "@/components/Partners";

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <Hero />
      <Vision />
      <Objectives />
      <Impact />
      <Team />
      <CallToAction />
      <Partners />
    </div>
  );
};

export default Index;
