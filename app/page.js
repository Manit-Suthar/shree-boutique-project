// app/page.js
import Hero from "../components/Hero";
import Services from "../components/Services";
import MapSection from "../components/MapSection";
import Testimonials from "../components/Testimonials";
import EthicalCollection from "../components/EthicalCollection";
import { getReviews } from "../sanity/queries";

export default async function Home() {
  const reviews = await getReviews();

  return (
    <>
      <Hero />
      <Services />
      <Testimonials fetchedReviews={reviews} />
      <EthicalCollection />
      <MapSection
        embedSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14686.681889808508!2d72.49635628170209!3d23.035868476906593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b0011dc06bd%3A0xde8a76ab105da1c9!2sSHYAMKRUPA%20APPARTMENT!5e0!3m2!1sen!2sin!4v1764433719304!5m2!1sen!2sin"
      />
    </>
  );
}
