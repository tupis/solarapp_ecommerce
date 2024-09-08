export const productsInfoComplete = [
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

export const productsHomePage = Array.from({ length: 50 }, (_, index) => ({
  id: index + 2,
  name: `Produto ${index + 1}`,
  price: Math.floor(Math.random() * 1000) + 500,
  discount: Math.floor(Math.random() * 20),
  image: `https://placehold.co/400x30${index}`,
  type: ["Inversores", "Módulos", "Estruturas", "Elétricos"][index % 4],
  brand: ["Marca A", "Marca B", "Marca C"][index % 3],
  sold: Math.floor(Math.random() * 1000),
  power: Math.floor(Math.random() * 500) + 100,
}));

export const relatedProducts = [
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
