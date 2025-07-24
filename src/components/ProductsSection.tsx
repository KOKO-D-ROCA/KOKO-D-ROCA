/**
 * Seção de produtos destacando os benefícios dos ovos caipira
 * Apresenta as vantagens nutricionais e diferenciais do produto
 */

import React from 'react';
import { Check, Star, Zap, Heart } from 'lucide-react';

export default function ProductsSection() {
  const benefits = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "Sabor Mais Intenso",
      description: "Gema alaranjada e sabor marcante que só o ovo caipira tem"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Mais Nutritivo",
      description: "Rico em ômega-3, vitaminas A, D, E e proteínas de alta qualidade"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Livre de Hormônios",
      description: "Produzido sem uso de hormônios, antibióticos ou químicos"
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "Casca Mais Resistente",
      description: "Maior durabilidade e frescor por mais tempo"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Por que Escolher Ovos Caipira?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubra as vantagens únicas dos nossos ovos caipira e por que eles 
            fazem toda a diferença na sua alimentação e saúde da família.
          </p>
        </div>

        {/* Main Product Showcase */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img 
              src="https://pub-cdn.sider.ai/u/U0O9H2YXYNL/web-coder/6880dedba51c7347d08a8f0a/resource/41f8caf5-8c89-4440-a24b-b4d9f3b9aa30.jpg"
              alt="Ovos caipira frescos"
              className="rounded-2xl shadow-2xl object-cover w-full h-96"
            />
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Natural</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              A Diferença que Você Sente
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Nossos ovos caipira não são apenas mais saborosos - são uma experiência 
              nutricional completa. Criados em ambiente natural, nossas galinhas 
              produzem ovos com características únicas que você não encontra em outros lugares.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Ovo Caipira vs Ovo Convencional
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-bold text-gray-800">Característica</th>
                  <th className="text-center py-4 px-6 font-bold text-green-600">Ovo Caipira KO-KO</th>
                  <th className="text-center py-4 px-6 font-bold text-gray-500">Ovo Convencional</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium">Cor da Gema</td>
                  <td className="py-4 px-6 text-center text-green-600">🟠 Alaranjada intensa</td>
                  <td className="py-4 px-6 text-center text-gray-500">🟡 Amarela pálida</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium">Ômega-3</td>
                  <td className="py-4 px-6 text-center text-green-600">✅ 3x mais</td>
                  <td className="py-4 px-6 text-center text-gray-500">❌ Menor quantidade</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium">Hormônios</td>
                  <td className="py-4 px-6 text-center text-green-600">✅ Zero</td>
                  <td className="py-4 px-6 text-center text-gray-500">❌ Presentes</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium">Sabor</td>
                  <td className="py-4 px-6 text-center text-green-600">✅ Mais intenso</td>
                  <td className="py-4 px-6 text-center text-gray-500">❌ Neutro</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Bem-estar Animal</td>
                  <td className="py-4 px-6 text-center text-green-600">✅ Criação livre</td>
                  <td className="py-4 px-6 text-center text-gray-500">❌ Confinamento</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
