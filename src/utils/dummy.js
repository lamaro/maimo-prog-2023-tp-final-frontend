const products = [
  {
    id: 34254657,
    name: "Franui",
    options: [
      {
        name: "Chocolate Amargo",
        price: 2400,
        sku: "Franui-Choco-Amargo",
      },
      {
        name: "Chocolate Con Leche",
        price: 3000,
        sku: "Franui-Choco-Leche",
      },
    ],
    image: "",
    description: "El mas amargo de todos",
    type: "franui",
  },
  {
    id: 34254657,
    name: "Helado palito",
    options: [
      {
        name: "Straweberry",
        units: "8U",
        price: 5000,
        sku: "palito-stra-8u",
      },
      {
        name: "Straweberry",
        units: "12U",
        price: 7000,
        sku: "palito-stra-12u",
      },
    ],
    image: "",
    description: "Que rico",
    type: "palito",
  },
  {
    id: 23456,
    name: "Pote",
    options: [
      {
        name: "1Kg",
        price: 4000,
        maxFlavors: 4,
        sku: "Pore-1kg",
      },
      {
        name: "1/2Kg",
        price: 2000,
        maxFlavors: 3,
        sku: "Pore-1/2kg",
      },
      {
        name: "1/4Kg",
        price: 1200,
        maxFlavors: 3,
        sku: "Pore-1/4kg",
      },
    ],
    units: "20U",
    image: "",
    description: "Que rico",
    type: "pote",
  },
  {
    id: 34254657,
    name: "Cucurucho",
    options: [
      {
        name: "3 Unidades",
        price: 2400,
        sku: "Cucu-3u",
      },
      {
        name: "Bañado",
        price: 4000,
        sku: "Cucu-bañado",
      },
    ],
    image: "",
    description: "Para el heladito",
    type: "additional cucurucho",
  },
  {
    id: 34254657,
    name: "Salsa",
    options: [
      {
        name: "1 Salsita",
        price: 2400,
        sku: "Salsi-choco",
      }
    ],
    image: "",
    description: "Para el heladito",
    type: "additional slsa",
  },
  {
    id: 34254657,
    name: "Topping",
    options: [
      {
        name: "Nueces pecán",
        price: 2400,
        sku: "pecan-todos",
      }
    ],
    image: "",
    description: "Para el heladito",
    type: "additional topping",
  },
];

const categories = [
  {
    categoryName: "Franuis",
    products: [34254657, 34254658, 34254659],
  },
];

const flavors = [
  {
    name: "Limon",
    description: "Una frescura en tu paladar",
    tipo: "agua",
    apto: ["gluten-free", "vegan"],
    image: "",
  },
  {
    name: "Limon",
    description: "Casi una frescura en tu paladar",
    tipo: "crema",
    apto: ["gluten-free"],
    image: "",
  },
];

