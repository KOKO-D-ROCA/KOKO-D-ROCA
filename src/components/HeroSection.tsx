/**
 * Seção hero principal com logo e chamada para ação
 * Destaca a marca KO-KO D'ROÇA e incentiva o contato
 */

import React from 'react';
import { Phone, MapPin, Heart } from 'lucide-react';
import { Button } from './ui/button';

export default function HeroSection() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/558581563205?text=Olá! Gostaria de saber mais sobre os ovos caipira da KO-KO D\'ROÇA', '_blank');
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://pub-cdn.sider.ai/u/U0X7H8Y50RW/web-coder/6880ed321acf42c15cb0fb90/resource/4b6a8ba7-d224-462a-aa00-c35993cdd211.jpg')`
        }}
      />
      
      {/* Overlay para melhorar legibilidade */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Background Pattern adicional para textura */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20S-10 18.954-10 30s8.954 20 20 20 20-8.954 20-20zM10 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="https://pub-cdn.sider.ai/u/U0O9H2YXYNL/web-coder/6880dedba51c7347d08a8f0a/resource/975aa738-6deb-40de-960c-6c06e335f60f.jpg" 
            alt="KO-KO D'ROÇA - Ovos Caipira"
            className="mx-auto h-32 w-auto mb-6 drop-shadow-2xl bg-white/20 backdrop-blur rounded-lg p-2"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
          Ovos Caipira
          <span className="block text-3xl md:text-5xl text-yellow-400 font-semibold mt-2 drop-shadow-2xl">
            100% Naturais
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          Direto da nossa granja para sua mesa. Ovos frescos, livres de hormônios, 
          com o sabor autêntico que só a criação caipira pode oferecer.
        </p>

        {/* Key Features */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-xl">
            <Heart className="h-5 w-5 text-red-500 mr-2" />
            <span className="text-gray-700 font-medium">Livres de Hormônios</span>
          </div>
          <div className="flex items-center bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-xl">
            <MapPin className="h-5 w-5 text-green-500 mr-2" />
            <span className="text-gray-700 font-medium">Região de Fortaleza</span>
          </div>
          <div className="flex items-center bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-xl">
            <Phone className="h-5 w-5 text-blue-500 mr-2" />
            <span className="text-gray-700 font-medium">Entrega Rápida</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          onClick={handleWhatsApp}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20"
        >
          <Phone className="mr-3 h-6 w-6" />
          Peça Agora pelo WhatsApp
        </Button>

        <p className="text-white/80 mt-4 text-sm drop-shadow-lg font-medium">
          (85) 8156-3205
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}