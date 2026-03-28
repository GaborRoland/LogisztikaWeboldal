import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowItWorks from '@/components/HowItWorks';
import IndustriesSection from '@/components/IndustriesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CaseStudyHighlight from '@/components/CaseStudyHighlight';
import CTASection from '@/components/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <WhyChooseUs />
      <HowItWorks />
      <IndustriesSection />
      <TestimonialsSection />
      <CaseStudyHighlight />
      <CTASection />
    </>
  );
}
