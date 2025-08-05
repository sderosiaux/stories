import HeroSection from '@/components/HeroSection';
import PersonaShowcase from '@/components/PersonaShowcase';
import PlatformSetup from '@/components/PlatformSetup';
import BobJourney from '@/components/BobJourney';
import GovernanceSection from '@/components/GovernanceSection';
import OperationsSection from '@/components/OperationsSection';
import FederatedAccess from '@/components/FederatedAccess';
import ProductPhilosophy from '@/components/ProductPhilosophy';
import BigPicture from '@/components/BigPicture';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <PersonaShowcase />
      <PlatformSetup />
      <BobJourney />
      <GovernanceSection />
      <OperationsSection />
      <FederatedAccess />
      <ProductPhilosophy />
      <BigPicture />
      <CallToAction />
    </main>
  );
}