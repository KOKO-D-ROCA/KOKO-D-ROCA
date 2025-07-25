/**
 * Seção de contato com informações de entrega e WhatsApp
 * Destaca a área de atendimento em Fortaleza
 */

import React from 'react';
import { Phone, MapPin, Clock, Truck, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export default function ContactSection() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/558581563205?text=Olá! Gostaria de saber mais sobre os ovos caipira da KO-KO D\'ROÇA', '_blank');
  };

  const deliveryAreas = [
    "Fortaleza Centro",
    "Aldeota", 
    "Meireles",
    "Cocó",
    "Papicu",
    "Água Fria",
    "Montese",
    "Benfica"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-red-600 to-orange-600 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Faça Seu Pedido Agora
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Entregamos ovos frescos na região de Fortaleza. Entre em contato 
            e leve para sua casa o sabor autêntico dos ovos caipira.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold">(85) 8156-3205</div>
                    <div className="opacity-80 text-sm">WhatsApp disponível</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold">Região de Fortaleza</div>
                    <div className="opacity-80 text-sm">Entregas rápidas</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold">Segunda a Sábado</div>
                    <div className="opacity-80 text-sm">7h às 18h</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Truck className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold">Entrega no Mesmo Dia</div>
                    <div className="opacity-80 text-sm">Para pedidos até 14h</div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-white/20 backdrop-blur p-6 rounded-xl">
              <div className="flex items-center space-x-4 mb-4">
                <MessageCircle className="h-8 w-8 text-green-300" />
                <div>
                  <div className="font-bold text-lg">Peça pelo WhatsApp</div>
                  <div className="opacity-80 text-sm">Resposta rápida garantida</div>
                </div>
              </div>
              
              <Button 
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Chamar no WhatsApp
              </Button>
            </div>
          </div>

          {/* Delivery Areas */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Áreas de Entrega</h3>
            <p className="opacity-90 mb-6">
              Atendemos diversas regiões de Fortaleza com entrega rápida e segura:
            </p>
            
            <div className="grid grid-cols-2 gap-3 mb-8">
              {deliveryAreas.map((area, index) => (
                <div key={index} className="bg-white/20 backdrop-blur p-3 rounded-lg text-center">
                  <div className="font-medium">{area}</div>
                </div>
              ))}
            </div>

            <div className="bg-white/20 backdrop-blur p-6 rounded-xl">
              <h4 className="font-bold text-lg mb-3">Condições de Entrega</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Pedido mínimo: 2 dúzias</li>
                <li>• Entrega gratuita acima de 5 dúzias</li>
                <li>• Pagamento: Dinheiro, PIX ou cartão</li>
                <li>• Ovos sempre frescos do dia</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-white/10 backdrop-blur rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">
            Experimente a Diferença dos Ovos Caipira
          </h3>
          <p className="opacity-90 mb-6 max-w-2xl mx-auto">
            Junte-se aos clientes satisfeitos que já escolheram a qualidade 
            e o sabor autêntico da KO-KO D'ROÇA. Seu paladar vai agradecer!
          </p>
          
          <Button 
            onClick={handleWhatsApp}
            className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Phone className="mr-3 h-6 w-6" />
            Fazer Pedido Agora
          </Button>
        </div>
      </div>
    </section>
  );
}
