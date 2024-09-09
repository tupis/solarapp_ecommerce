"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import Slider from "react-slick";
import ProductCard from "@/components/ProdutCard";
import { formatCurrencyNumber } from "@/utils/formatCurrency";
import { productsInfoComplete, relatedProducts } from "@/app/mocks/product";
import { reviews } from "@/app/mocks/reviews";

const getDiscountedPrice = (price: number, discount: number) => {
  return price - (price * discount) / 100;
};

const ProductDetails = () => {
  const { addToCart } = useCart();
  const router = useRouter();
  const product = productsInfoComplete.find((p) => p.id === 1);

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
              {formatCurrencyNumber(
                getDiscountedPrice(product.price, product.discount)
              )}
              {product.discount > 0 && (
                <span className="text-lg line-through text-gray-400 ml-2">
                  {formatCurrencyNumber(product.price)}
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
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
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
                  <p className="text-gray-700 italic">
                    &quot;{review.content}&quot;
                  </p>
                  <p className="mt-2 text-gray-900 font-semibold">
                    - {review.name}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
