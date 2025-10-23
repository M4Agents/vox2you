
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import TransformationSection from './components/TransformationSection';
import AuthoritySection from './components/AuthoritySection';
import MethodSection from './components/MethodSection';
import SolutionsSection from './components/SolutionsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <TransformationSection />
        <AuthoritySection />
        <MethodSection />
        <SolutionsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactForm />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}