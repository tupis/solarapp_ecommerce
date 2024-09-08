"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    id: 1,
    name: "Inversor Solar XYZ 5000W",
    price: 2000,
    discount: 15,
    description:
      "O Inversor Solar XYZ de 5000W é perfeito para sistemas de energia solar de médio a grande porte. Este inversor inteligente converte a energia solar captada em eletricidade de alta qualidade, permitindo uma conexão fácil com a rede elétrica ou uso em modo isolado (off-grid).",
    images: [
      "https://placehold.co/600x400",
      "https://placehold.co/600x401",
      "https://placehold.co/600x402",
      "https://placehold.co/600x403",
    ],
    technicalDetails: {
      efficiency: "98.5%",
      warranty: "10 anos",
      weight: "25kg",
      dimensions: "45 x 35 x 15 cm",
      voltageRange: "100V - 500V",
      compatiblePanels: "Monocristalino, Policristalino, Filme Fino",
      operatingTemperature: "-20°C a 60°C",
      ipRating: "IP65",
      maxInputCurrent: "15A",
      maxOutputCurrent: "25A",
      gridCompatibility: "Monofásico, Bifásico, Trifásico",
      connectivity: "Wi-Fi, RS485, Bluetooth",
      certifications: "CE, TUV, IEC 62109",
      noiseLevel: "Menor que 25dB",
    },
    ecoImpact: {
      co2Savings: "Aproximadamente 1,5 tonelada/ano",
      energySavings: "Até 70% de economia na conta de luz",
      recyclableMaterials: "80% dos componentes são recicláveis",
    },
    installation: {
      included: "Manual de instalação, kit de montagem e suporte técnico",
      recommendedProfessionals: "Instaladores certificados em energia solar",
    },
  },
];

const relatedProducts = [
  {
    id: 2,
    name: "Painel Solar 330W Monocristalino",
    price: 850,
    discount: 10,
    image: "https://placehold.co/400x300",
  },
  {
    id: 3,
    name: "Controlador de Carga Solar MPPT",
    price: 650,
    discount: 5,
    image: "https://placehold.co/400x301",
  },
  {
    id: 4,
    name: "Bateria Solar 12V 150Ah",
    price: 1200,
    discount: 20,
    image: "https://placehold.co/400x302",
  },
];

const reviews = [
  {
    name: "João P.",
    content:
      "Excelente produto, fácil de instalar e funciona perfeitamente com meu sistema de painéis solares. A eficiência é ótima!",
  },
  {
    name: "Maria S.",
    content:
      "Estou usando este inversor há 6 meses e até agora estou muito satisfeita. Recomendo!",
  },
  {
    name: "Carlos M.",
    content:
      "Ótima relação custo-benefício, o suporte técnico é muito prestativo!",
  },
];

const getDiscountedPrice = (price: number, discount: number) => {
  return price - (price * discount) / 100;
};

const ProductDetails = () => {
  const { addToCart } = useCart();
  const router = useRouter();
  const product = products.find((p) => p.id === 1);

  const [selectedImage, setSelectedImage] = useState(product?.images[0]);

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => router.back()}
          className="mb-4 flex items-center text-teal-500 hover:text-teal-700 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Voltar
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-full h-64 sm:h-96">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 hover:rotate-1"
              />
            </div>

            <div className="flex space-x-4 mt-4">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Imagem ${index + 1}`}
                  onClick={() => setSelectedImage(image)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-110 ${
                    selectedImage === image
                      ? "border-4 border-teal-500"
                      : "border-2 border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
              {product.name}
            </h2>
            <p className="mt-4 text-gray-700">{product.description}</p>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Detalhes Técnicos:
              </h3>
              <ul className="mt-2 space-y-2">
                <li className="text-gray-600">
                  <strong>Eficiência:</strong>{" "}
                  {product.technicalDetails.efficiency}
                </li>
                <li className="text-gray-600">
                  <strong>Garantia:</strong> {product.technicalDetails.warranty}
                </li>
                <li className="text-gray-600">
                  <strong>Peso:</strong> {product.technicalDetails.weight}
                </li>
                <li className="text-gray-600">
                  <strong>Dimensões:</strong>{" "}
                  {product.technicalDetails.dimensions}
                </li>
                <li className="text-gray-600">
                  <strong>Faixa de Voltagem:</strong>{" "}
                  {product.technicalDetails.voltageRange}
                </li>
                <li className="text-gray-600">
                  <strong>Painéis Compatíveis:</strong>{" "}
                  {product.technicalDetails.compatiblePanels}
                </li>
                <li className="text-gray-600">
                  <strong>Temperatura de Operação:</strong>{" "}
                  {product.technicalDetails.operatingTemperature}
                </li>
                <li className="text-gray-600">
                  <strong>Corrente Máxima de Entrada:</strong>{" "}
                  {product.technicalDetails.maxInputCurrent}
                </li>
                <li className="text-gray-600">
                  <strong>Corrente Máxima de Saída:</strong>{" "}
                  {product.technicalDetails.maxOutputCurrent}
                </li>
                <li className="text-gray-600">
                  <strong>Compatibilidade com Rede:</strong>{" "}
                  {product.technicalDetails.gridCompatibility}
                </li>
                <li className="text-gray-600">
                  <strong>Conectividade:</strong>{" "}
                  {product.technicalDetails.connectivity}
                </li>
                <li className="text-gray-600">
                  <strong>Certificações:</strong>{" "}
                  {product.technicalDetails.certifications}
                </li>
                <li className="text-gray-600">
                  <strong>Nível de Ruído:</strong>{" "}
                  {product.technicalDetails.noiseLevel}
                </li>
              </ul>
            </div>

            <div className="mt-6 text-3xl text-teal-500 font-bold">
              R${getDiscountedPrice(product.price, product.discount).toFixed(2)}
              {product.discount > 0 && (
                <span className="text-lg line-through text-gray-400 ml-2">
                  R${product.price.toFixed(2)}
                </span>
              )}
            </div>

            <button
              onClick={() =>
                addToCart({
                  id: product.id,
                  image: product.images[0],
                  name: product.name,
                  price: getDiscountedPrice(product.price, product.discount),
                  quantity: 1,
                })
              }
              className="mt-6 w-full py-3 bg-teal-500 text-white font-medium rounded-lg shadow hover:bg-teal-600 transition-colors duration-300 transform hover:scale-105"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900">
            Impacto Ambiental
          </h3>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>
              <strong>Economia de CO2:</strong> {product.ecoImpact.co2Savings}{" "}
              por ano
            </li>
            <li>
              <strong>Economia de Energia:</strong>{" "}
              {product.ecoImpact.energySavings} na conta de luz
            </li>
            <li>
              <strong>Materiais Recicláveis:</strong>{" "}
              {product.ecoImpact.recyclableMaterials} dos componentes são
              recicláveis
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900">Instalação</h3>
          <p className="mt-4 text-gray-700">
            {product.installation.included}. Recomendamos profissionais{" "}
            {product.installation.recommendedProfessionals} para garantir a
            melhor instalação e performance do produto.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900">
            Produtos Relacionados
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="border border-gray-200 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h4 className="text-lg font-semibold text-gray-900">
                  {relatedProduct.name}
                </h4>
                <p className="mt-2 text-teal-500 font-bold">
                  R$
                  {getDiscountedPrice(
                    relatedProduct.price,
                    relatedProduct.discount
                  ).toFixed(2)}
                  {relatedProduct.discount > 0 && (
                    <span className="text-sm line-through text-gray-400 ml-2">
                      R${relatedProduct.price.toFixed(2)}
                    </span>
                  )}
                </p>
                <button
                  onClick={() =>
                    addToCart({
                      id: relatedProduct.id,
                      name: relatedProduct.name,
                      price: getDiscountedPrice(
                        relatedProduct.price,
                        relatedProduct.discount
                      ),
                      quantity: 1,
                      image: relatedProduct.image,
                    })
                  }
                  className="mt-4 w-full py-2 bg-teal-500 text-white font-medium rounded-lg shadow hover:bg-teal-600 transition-colors duration-300"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900">
            Avaliações dos Clientes
          </h3>
          <div className="mt-4">
            <Slider {...carouselSettings}>
              {reviews.map((review, index) => (
                <div key={index} className="p-4">
                  <p className="text-gray-700 italic">"{review.content}"</p>
                  <p className="mt-2 text-gray-900 font-semibold">
                    - {review.name}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
