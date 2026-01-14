import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TypingPreviewSection from '@/components/TypingPreviewSection';
import VoicePreviewSection from '@/components/VoicePreviewSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import WelcomeVideoModal from '@/components/WelcomeVideoModal';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <WelcomeVideoModal />
      <Navbar />
      <HeroSection />
      <FeaturesSection />

      <TypingPreviewSection />
      <VoicePreviewSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
