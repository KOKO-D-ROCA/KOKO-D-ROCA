/**
 * Seção de galeria mostrando o criatório e as galinhas
 * Inclui as imagens reais fornecidas pelo cliente
 */

import React from 'react';

export default function GallerySection() {
  const galleryImages = [
    {
      src: "https://pub-cdn.sider.ai/u/U0O9H2YXYNL/web-coder/6880dedba51c7347d08a8f0a/resource/47d0e5ad-df26-4c44-b312-dca6e97f7693.jpeg",
      alt: "Nosso criatório com galinhas livres",
      title: "Ambiente Natural",
      description: "Espaço amplo onde nossas galinhas vivem livremente"
    },
    {
      src: "https://pub-cdn.sider.ai/u/U0O9H2YXYNL/web-coder/6880dedba51c7347d08a8f0a/resource/39bc3080-2555-4647-a03c-7e4b9b6111c2.jpeg",
      alt: "Galinhas caipiras saudáveis",
      title: "Galinhas Felizes",
      description: "Aves bem cuidadas e saudáveis"
    },
    {
      src: "https://pub-cdn.sider.ai/u/U0O9H2YXYNL/web-coder/6880dedba51c7347d08a8f0a/resource/bca30001-a1a6-4263-bdc4-484c44c2f374.jpg",
      alt: "Instalações do criatório",
      title: "Instalações Modernas",
      description: "Estrutura adequada para o bem-estar animal"
    },
    {
      src: "https://pub-cdn.sider.ai/u/U0O9H2YXYNL/web-coder/6880dedba51c7347d08a8f0a/resource/3df3dc19-066b-4836-b9fc-3344067932b3.jpg",
      alt: "Ovos frescos coletados",
      title: "Produto Final",
      description: "Ovos frescos direto do ninho"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Conheça Nossa Granja
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transparência total! Veja como cuidamos das nossas galinhas com carinho 
            e dedicação para produzir ovos da mais alta qualidade.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://pub-cdn.sider.ai/u/U0O9H2YXYNL/web-coder/6880dedba51c7347d08a8f0a/resource/47d0e5ad-df26-4c44-b312-dca6e97f7693.jpeg"
              alt="Vista geral do nosso criatório KO-KO D'ROÇA"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent">
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Nossa Granja na Região de Fortaleza</h3>
                <p className="text-lg opacity-90">Ambiente natural e cuidado especial para cada ave</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold text-sm mb-1">{image.title}</h4>
                    <p className="text-xs opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
            <div className="text-gray-600 text-sm">Galinhas Felizes</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-600 text-sm">Livre de Hormônios</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">24h</div>
            <div className="text-gray-600 text-sm">Ovos Frescos</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
            <div className="text-gray-600 text-sm">Anos de Experiência</div>
          </div>
        </div>
      </div>
    </section>
  );
}
