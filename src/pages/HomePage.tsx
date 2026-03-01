import { HeroSection } from '../components/Home/HeroSection'
import { OwnersSection } from '../components/Home/OwnersSection'
import { ProductSlider } from '../components/Home/ProductSlider'
import { VisionMissionSection } from '../components/Home/VisionMissionSection'
import { WhyChooseUsSection } from '../components/Home/WhyChooseUsSection'
import { ContactTeaserSection } from '../components/Home/ContactTeaserSection'

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <OwnersSection />
      <ProductSlider />
      <VisionMissionSection />
      <WhyChooseUsSection />
      <ContactTeaserSection />
    </>
  )
}

