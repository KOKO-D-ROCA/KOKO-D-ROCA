/**
 * Página principal do site KO-KO D'ROÇA
 * Apresenta o negócio de ovos caipira com storytelling e informações de contato
 */

import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <HeroSection />
      <ProductsSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}
