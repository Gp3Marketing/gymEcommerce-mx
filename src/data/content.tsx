import { BsBoxFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";
import { IoChatboxOutline } from "react-icons/io5";
import { MdOutlineCameraAlt } from "react-icons/md";
import { PiPercentFill } from "react-icons/pi";
import { branch } from "@/data/filterByProduct";

import type { NavItemType } from "@/components/NavItem";
import type { BlogType } from "./types";

/* new */
import psychotic from "@/images/psychotic/psychotic-3.webp";
import psychotic1 from "@/images/psychotic/psychotic-0.png";
import psychotic2 from "@/images/psychotic/psychotic-2.webp";
import psychotic3 from "@/images/psychotic/psychotic-1.png";
import psychotic4 from "@/images/psychotic/psychotic.webp";
import psychotic5 from "@/images/psychotic/psychotic-5.jpg";

import iso from "@/images/iso100/Iso-100-0.avif";
import iso1 from "@/images/iso100/iso-1.jpg";
import iso2 from "@/images/iso100/iso-2.jpg";
import iso3 from "@/images/iso100/iso-3.jpg";
import iso4 from "@/images/iso100/iso-4.jpg";

import CBUM from "@/images/cbum/Bum.webp";
import CBUM1 from "@/images/cbum/BUM2.png";
import CBUM2 from "@/images/cbum/BUM1.png";
import CBUM3 from "@/images/cbum/Bum.jpg";
import CBUM4 from "@/images/cbum/811JAuF2ryL.jpg";

import Cake from "@/images/cbum-cake/cbum-bday-cake.webp";
import Cake1 from "@/images/cbum-cake/BUM1.png";
import Cake2 from "@/images/cbum-cake/BUM2.png";
import Cake3 from "@/images/cbum-cake/81Cd2quHXyL._AC_UF1000,1000_QL80_.jpg";
import Cake4 from "@/images/cbum-cake/2_39e2e94c-a850-482a-80ad-bda793c229f4.webp";

import cream from "@/images/cbum-cream/cbum-bday-cake.webp";
import cream1 from "@/images/cbum-cream/BUM1.jpg";
import cream2 from "@/images/cbum-cream/Bum2.webp";
import cream3 from "@/images/cbum-cream/81Cd2quHXyL._AC_UF1000,1000_QL80_.jpg";
import cream4 from "@/images/cbum-cream/81UBADFP5jL._AC_SX679_.jpg";
import cream5 from "@/images/cbum-cream/2_39e2e94c-a850-482a-80ad-bda793c229f4.webp";

import gold from "@/images/isolate-gold/gold.jpg";
import gold1 from "@/images/isolate-gold/gold1.png";
import gold2 from "@/images/isolate-gold/gold2.png";
import gold3 from "@/images/isolate-gold/gold3.jpg";

import whey from "@/images/whey/whey.jpg";
import whey1 from "@/images/whey/whey0.jpg";
import whey2 from "@/images/whey/whey1.jpg";
import whey3 from "@/images/whey/whey2.jpg";
import whey4 from "@/images/whey/whey3.jpg";

import cbum5peat from "@/images/cbum5peat/cbum5peat.jpg";
import cbum5peat1 from "@/images/cbum5peat/cbum5peat-1.jpg";
import cbum5peat2 from "@/images/cbum5peat/cbum5peat-2.jpg";
import cbum5peat3 from "@/images/cbum5peat/cbum5peat-3.jpg";
import cbum5peat4 from "@/images/cbum5peat/cbum5peat-4.jpg";

import peachbum from "@/images/peachbum/peachbum.jpg";
import peachbum1 from "@/images/peachbum/creatine-1.jpg";
import peachbum2 from "@/images/peachbum/creatine-2.jpg";
import peachbum3 from "@/images/peachbum/creatine-3.jpg";

import preentreno from "@/images/preentreno/preentrenovenom.jpg";
import Venom from "@/images/preentreno/vemon1.jpg";
import Venom1 from "@/images/preentreno/vemon2.jpg";

import creatine from "@/images/creatine/creatine.jpg";
import creatine2 from "@/images/creatine/creatine-2.jpg";
import creatine3 from "@/images/creatine/creatine-3.jpg";
import creatine4 from "@/images/creatine/creatine-4.jpg";

import aminox from "@/images/aminox/aminox.jpg";
import aminox1 from "@/images/aminox/aminox-1.jpg";
import aminox2 from "@/images/aminox/aminox-2.jpg";
import aminox3 from "@/images/aminox/aminox-3.jpg";
import aminox4 from "@/images/aminox/aminox-4.jpg";
import aminox5 from "@/images/aminox/aminox-5.jpg";

import omega3 from "@/images/omega3/Omega3.jpg";
import modernEaa from "@/images/modern-eaa/EAA.webp";
import glutamina from "@/images/glutamina/GLUTAMINA.png";
import creatinaBirdman from "@/images/birdman/creatina.webp";
import dragonCreatine from "@/images/dragoncreatine/creatina-Dragon.webp";
import { title } from "process";

export const topNavLinks: NavItemType[] = [
  {
    id: "ee46t",
    name: "Inicio",
    href: "/",
  },
  {
    id: "eexct",
    name: "colecciones",
    href: "/products",
  },
  {
    id: "h678ty",
    name: "FAQs",
    href: "/faqs",
  },
  {
    id: "h6ii8g",
    name: "Contacto",
    href: "/contact",
  },
];

export const NavLinks: NavItemType[] = [
  {
    id: "ee46t",
    name: "Inicio",
    href: "/",
  },
  {
    id: "eexct",
    name: "colecciones",
    href: "/products",
  },
  {
    id: "h678ty",
    name: "FAQ",
    href: "/faqs",
  },
  {
    id: "h6ii8g",
    name: "Contacto",
    href: "/contact",
  },
];

export const headerSection = {
  title: "🔥 LLEGÓ LA BESTIA 🔥",
  heading: "PSYCHOTIC – POTENCIA AL LÍMITE",
  description:
    "No es un simple pre-entreno. PSYCHOTIC desata una energía brutal, foco extremo y resistencia imparable. ¡Prepárate para entrenar como nunca antes!",
};

export const promotionTag = {
  title: "¡Descubre Descuentos Irresistibles!",
};

export const shoes = [
  {
    slug: "cbum5peat",
    shoeName: "cbum5peat",
    coverImage: cbum5peat,
    currentPrice: 10000,
    previousPrice: 2000,
    shoeCategory: "Pre-entrenamiento",
    rating: 4.9,
    reviews: 10500,
    pieces_sold: 85000,
    justIn: true,
    shots: [cbum5peat1, cbum5peat4, cbum5peat3, cbum5peat2],
    overview:
      "El pre-entreno CBUM Thavage, creado por el campeón mundial Chris Bumstead, está diseñado para quienes entrenan con intensidad. Su fórmula incluye ingredientes como L-Citrulina, Beta-Alanina y Alpha-GPC para mayor bombeo muscular, concentración mental y resistencia. Con un sabor delicioso y rendimiento comprobado, es ideal para elevar tus sesiones al siguiente nivel.",
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: "Descuento",
        description: "15% en compras superiores a $180.000 COP",
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: "Tiempo de entrega",
        description: "2 - 5 días hábiles",
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: "Presentación",
        description: "Envase con 20 servicios",
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: "Llegada estimada",
        description: "13 - 16 Junio 2025",
      },
    ],
  },
  {
    slug: "peachbum",
    shoeName: "PEACHBUM",
    coverImage: peachbum,
    currentPrice: 10000,
    previousPrice: 2000,
    shoeCategory: "Pre-entrenamiento",
    rating: 4.9,
    reviews: 8700,
    pieces_sold: 68000,
    justIn: true,
    shots: [peachbum1, peachbum2, peachbum3],
    overview:
      "Thavage Pre-Workout en sabor Peach Bum ofrece energía explosiva, concentración mental y bombeo muscular intenso. Con 40 servicios, esta fórmula incluye Beta-Alanina, L-Citrulina y Alpha-GPC para entrenamientos de alto rendimiento. Su sabor a durazno dulce te encantará desde el primer scoop.",
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: "Descuento",
        description: "10% en compras desde $180.000 COP",
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: "Tiempo de entrega",
        description: "2 - 5 días hábiles",
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: "Presentación",
        description: "Envase con 40 servicios sabor Peach Bum",
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: "Llegada estimada",
        description: "13 - 16 Junio 2025",
      },
    ],
  },
  {
    slug: "Vemon",
    shoeName: "VEMON",
    coverImage: preentreno,
    currentPrice: 199,
    previousPrice: 250,
    shoeCategory: "Pre-entrenamiento",
    rating: 4.9,
    reviews: 310,
    pieces_sold: 2400,
    justIn: true,
    shots: [preentreno, Venom, Venom1],
    overview:
      "Venom® es un pre-entrenamiento extremadamente potente formulado para atletas que desean niveles extremos de energía, enfoque y rendimiento. Con ingredientes como Beta-Alanina, Alpha-GPC y Caffeine Anhydrous, Venom® te lleva al siguiente nivel para que puedas aplastar cada entrenamiento con intensidad y concentración máximas.",
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: "Discount",
        description: "> $100 Disc 10%",
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: "Delivery Time",
        description: "4 - 8 Working days",
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: "Package",
        description: "Dragon Pharma Secure Bottle",
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: "Estimated Arrival",
        description: "14 - 18 June 2025",
      },
    ],
  },
  {
    slug: "psychotic-orange",
    shoeName: "PSYCHOTIC",
    coverImage: psychotic,
    currentPrice: 280,
    previousPrice: 350,
    shoeCategory: "Pre-Entrenamiento",
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    justIn: true,
    shots: [
      psychotic,
      psychotic1,
      psychotic2,
      psychotic3,
      psychotic4,
      psychotic5,
    ],
    overview:
      "Psychotic Pre Workout Orange, es un suplemento de pre entrenamiento extremo con 35 servicios por envase. Está formulado con Ampiberry®, un ingrediente que prolonga el efecto de los estimulantes por más de 3 horas. Contiene de 3 a 4 veces más potencia que otros pre entrenos del mercado. Sometido a pruebas microbiológicas estrictas, cuenta con certificación cGMP que garantiza su calidad.",
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: "Descuento",
        description: "10% en compras mayores a $100 MXN",
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: "Tiempo de entrega",
        description: "6 - 12 días hábiles",
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: "Empaque",
        description: "Bote de 200g / 35 servicios",
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: "Presentación",
        description: "Sabor Natural y a Naranja",
      },
    ],
  },
  {
    slug: "dymatize-iso100-vainilla",
    shoeName: "ISO 100",
    coverImage: iso,
    currentPrice: 950,
    previousPrice: 1150,
    shoeCategory: "Proteína",
    rating: 5,
    reviews: 76,
    pieces_sold: 600,
    justIn: true,
    shots: [iso1, iso2, iso3, iso4],
    overview:
      "Aislado de proteína de suero de leche 100% hidrolizado, científicamente probado y de digestión rápida. Cada porción proporciona 25 g de proteína, 5.5 g de BCAA y 2.7 g de leucina, con solo 120 calorías, menos de 1 g de azúcar, lactosa y grasa. Libre de gluten. Se mezcla fácilmente incluso solo con cuchara. Cada envase contiene 2.27 kg con 76 servicios aproximados. Ideal para apoyar la recuperación muscular y el desarrollo de masa magra.",
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: "Descuento",
        description: "Descuento del 17%",
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: "Empaque",
        description: "76 porciones | 2.27 kg | ~$12.50 MXN por porción",
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: "Calorias",
        description: "120 calorías, menos de 0.04 oz de azúcar",
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: "Sabor",
        description: "Vainilla / FRUITY PEBBLES",
      },
    ],
  },
  {
    slug: "cbum-itholate",
    shoeName: "CBUM Itholate Protein",
    coverImage: CBUM,
    currentPrice: 1250,
    previousPrice: 1450,
    shoeCategory: "Proteína",
    rating: 4.5,
    reviews: 194,
    pieces_sold: 700,
    justIn: false,
    shots: [CBUM, CBUM1, CBUM2, CBUM3, CBUM4],
    overview:
      "Proteína de suero aislada de alta calidad con 25 g por porción, sabor a avena con vainilla. Bajo en grasas, con solo 1 g de carbohidratos, y derivada 100 % de vacas alimentadas con pasto. Ideal para apoyar el desarrollo muscular magro, la recuperación post-entrenamiento y mejorar el rendimiento físico. Fácil de digerir gracias a su proceso de microfiltración, sin molestias estomacales.",
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: "Descuento",
        description: "¡10% en compras mayores a $1000 MXN!",
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: "Empaque",
        description: "Sabor avena con vainilla - 2 lbs (25 servicios)",
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: "Presentación",
        description: "Proteína en polvo, envase de 2 libras",
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: "Envío estimado",
        description: "6 - 12 días hábiles",
      },
    ],
  },
  {
    slug: "cbum-itholate-cake",
    shoeName: "CBUM Itholate Protein Cake",
    coverImage: Cake,
    currentPrice: 1250,
    previousPrice: 1450,
    shoeCategory: "Proteína",
    rating: 4.5,
    reviews: 194,
    pieces_sold: 700,
    justIn: false,
    shots: [Cake, Cake1, Cake2, Cake3, Cake4],
    overview:
      "Proteína de suero aislada de alta calidad con 25 g por porción, sabor a avena con vainilla. Bajo en grasas, con solo 1 g de carbohidratos, y derivada 100 % de vacas alimentadas con pasto. Ideal para apoyar el desarrollo muscular magro, la recuperación post-entrenamiento y mejorar el rendimiento físico. Fácil de digerir gracias a su proceso de microfiltración, sin molestias estomacales.",
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: "Descuento",
        description: "¡10% en compras mayores a $1000 MXN!",
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: "Empaque",
        description: "Sabor de pastel de cumpleaños - 2.25 lbs (25 porciones)",
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: "Presentación",
        description: "Proteína en polvo, envase de 2.25 libras",
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: "Envío estimado",
        description: "6 - 12 días hábiles",
      },
    ],
  },
  {
    slug: "raw-mint-chip",
    shoeName: "RAW Itholate - Menta Chispas",
    coverImage: cream,
    currentPrice: 900,
    previousPrice: 1050,
    shoeCategory: "Proteína",
    rating: 4.3,
    reviews: 1676,
    pieces_sold: 1200,
    justIn: false,
    shots: [cream, cream1, cream2, cream3, cream4, cream5],
    overview:
      "Proteína aislada tipo Itholate de RAW Nutrition, formulada por Chris Bumstead, con sabor a helado de chispas de menta. Contiene 25 g de proteína por servicio, sin rellenos ni hormonas, microfiltrada y libre de ingredientes artificiales. Perfecta para apoyar el crecimiento muscular magro y la recuperación rápida post-entreno. Presentación de 2.2 lbs (25 porciones).",
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: "Descuento",
        description: "¡10% en compras mayores a $1000 MXN!",
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: "Sabor",
        description: "Helado de chips de menta",
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: "Empaque",
        description: "2.2 lbs (25 porciones)",
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: "Envío estimado",
        description: "6 - 12 días hábiles",
      },
    ],
  },
  {
    slug: "gold-standard-chocolate",
    shoeName: "Gold Standard Chocolate",
    coverImage: gold,
    currentPrice: 1949,
    previousPrice: 2359,
    shoeCategory: "Suplementos",
    rating: 4.1,
    reviews: 157,
    pieces_sold: 50,
    justIn: true,
    shots: [gold, gold1, gold2, gold3, gold3],
    overview:
      "Optimum Nutrition Gold Standard 100% Isolate sabor Chocolate es una proteína de suero aislada, diseñada para apoyar el desarrollo muscular y la recuperación después del entrenamiento. Con 5 libras de producto, es ideal para adultos que buscan calidad y pureza en cada porción. Su fórmula se obtiene mediante microfiltración, eliminando grasas y carbohidratos, y ofreciendo una proteína de alta concentración y rápida absorción.",
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: "Descuento",
        description: "17% de ahorro aplicado",
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: "Tiempo de entrega",
        description: "4 - 8 días hábiles",
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: "Empaque",
        description: "Bolsa o bote premium con sello de seguridad",
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: "Envío estimado",
        description: "Enviado por Amazon México",
      },
    ],
  },
  {
    slug: "gold-standard-whey",
    shoeName: "Gold Standard - Whey Protein",
    coverImage: whey,
    currentPrice: 20000,
    previousPrice: 19000,
    shoeCategory: "Proteína",
    rating: 4.8,
    reviews: 22500,
    pieces_sold: 150000,
    justIn: false,
    shots: [whey2, whey1, whey3, whey4],
    overview:
      "Optimum Nutrition Gold Standard 100% Whey es la fórmula de proteína más vendida en el mundo. Elaborada con aislado de proteína de suero como ingrediente principal, ofrece 24 g de proteína de alta calidad por porción para apoyar el crecimiento y mantenimiento muscular. Sabor: Extreme Milk Chocolate.",
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: "Descuento",
        description: "10% en compras superiores a $150.000 COP",
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: "Tiempo de entrega",
        description: "3 - 5 días hábiles",
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: "Presentación",
        description: "Tarro de 2 lb (907 g)",
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: "Llegada estimada",
        description: "Entre 14 - 17 Junio 2025",
      },
    ],
  },

  {
    slug: "creatine",
    shoeName: "Creatine micronized ",
    coverImage: creatine,
    currentPrice: 165,
    previousPrice: 210,
    shoeCategory: "Suplementos",
    rating: 4.9,
    reviews: 124,
    pieces_sold: 3200,
    justIn: true,
    shots: [creatine, creatine2, creatine3, creatine4],
    overview:
      "La Creatine Powder de Optimum Nutrition te ayuda a mejorar tu rendimiento físico durante ejercicios de alta intensidad. Cada porción contiene 5g de monohidrato de creatina micronizada para una mejor absorción y resultados comprobados. Ideal para deportistas que buscan aumentar su fuerza y resistencia.",
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: "Discount",
        description: "Compra > $100 y obtén 10% OFF",
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: "Delivery Time",
        description: "4 - 8 días hábiles",
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: "Package",
        description: "Envase plástico resistente ON®",
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: "Estimated Arrival",
        description: "14 - 18 de junio 2025",
      },
    ],
  },
  {
    slug: "aminox",
    shoeName: "ANINOX",
    coverImage: aminox,
    currentPrice: 145,
    previousPrice: 180,
    shoeCategory: "Suplementos",
    rating: 4.7,
    reviews: 89,
    pieces_sold: 2300,
    justIn: true,
    shots: [aminox1, aminox2, aminox3, aminox4, aminox5],
    overview:
      "AMINOx de BSN es un suplemento efervescente que combina BCAA’s y aminoácidos esenciales para favorecer la recuperación muscular y mejorar el rendimiento deportivo. Con sabor a sandía, no contiene cafeína y es ideal para cualquier hora del día. Aporta 10g de aminoácidos por porción y ayuda a combatir la fatiga post-entrenamiento.",
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: "Discount",
        description: "10% OFF por compras > $100",
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: "Delivery Time",
        description: "4 - 7 días hábiles",
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: "Package",
        description: "Envase de plástico sellado BSN®",
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: "Estimated Arrival",
        description: "14 - 17 de junio 2025",
      },
    ],
  },
  {
    slug: "modern-eaa-plus",
    shoeName: "Modern EAA+",
    coverImage: modernEaa,
    currentPrice: 699,
    previousPrice: 799,
    shoeCategory: "Aminoácidos",
    rating: 4.8,
    reviews: 154,
    pieces_sold: 3150,
    justIn: false,
    shots: [modernEaa],
    overview:
      "Modern EAA+ de USP Labs combina aminoácidos esenciales (EAA) con electrolitos para optimizar la hidratación, recuperación y crecimiento muscular. Ideal para consumir antes, durante o después del entrenamiento. Su fórmula avanzada ayuda a prevenir la degradación muscular y acelerar la síntesis proteica. Libre de estimulantes y con delicioso sabor a ponche de frutas.",
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: "Descuento",
        description: "10% OFF por compras mayores a $1,000 MXN",
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: "Tiempo de entrega",
        description: "3 - 6 días hábiles",
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: "Empaque",
        description: "Bote sellado USP Labs® 450g",
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: "Entrega estimada",
        description: "25 - 28 de junio 2025",
      },
    ],
  },
  {
    slug: "omega-3-90-softgels",
    shoeName: "Omega-3 90 Softgels",
    coverImage: omega3,
    currentPrice: 299,
    previousPrice: 349,
    shoeCategory: "Omega 3",
    rating: 4.6,
    reviews: 78,
    pieces_sold: 1820,
    justIn: false,
    shots: [omega3],
    overview:
      "Omega-3 90 Softgels es un suplemento de ácidos grasos esenciales que apoya la salud cardiovascular, cerebral y articular. Cada cápsula blanda contiene una alta concentración de EPA y DHA de calidad premium. Ideal para uso diario, mejora la circulación, reduce la inflamación y favorece el bienestar general. Sin sabor a pescado ni aditivos artificiales.",
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: "Descuento",
        description: "5% OFF por compras mayores a $500 MXN",
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: "Tiempo de entrega",
        description: "2 - 5 días hábiles",
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: "Empaque",
        description: "Frasco sellado con 90 cápsulas blandas",
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: "Entrega estimada",
        description: "22 - 25 de junio 2025",
      },
    ],
  },
  {
    slug: "creatina-monohidratada-birdman-450g",
    shoeName: "Creatina Monohidratada Birdman 450g",
    coverImage: creatinaBirdman,
    currentPrice: 499,
    previousPrice: 599,
    shoeCategory: "Creatina",
    rating: 4.8,
    reviews: 132,
    pieces_sold: 3200,
    justIn: false,
    shots: [creatinaBirdman],
    overview:
      "La Creatina Monohidratada Birdman 450g es un suplemento vegano de alta pureza que mejora el rendimiento físico, la fuerza muscular y acelera la recuperación post-entrenamiento. Apta para atletas y deportistas exigentes, esta creatina es 100% micronizada, sin saborizantes, colorantes ni aditivos artificiales. Perfecta para consumo diario.",
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: "Descuento",
        description: "15% OFF por compras mayores a $800 MXN",
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: "Tiempo de entrega",
        description: "3 - 6 días hábiles",
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: "Empaque",
        description: "Bolsa resellable ecológica Birdman® 450g",
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: "Entrega estimada",
        description: "23 - 27 de junio 2025",
      },
    ],
  },
  {
    slug: "creatina-dragon-pharma-1kg",
    shoeName: "Creatina Dragon",
    coverImage: dragonCreatine,
    currentPrice: 749,
    previousPrice: 899,
    shoeCategory: "Creatina",
    rating: 4.9,
    reviews: 176,
    pieces_sold: 4100,
    justIn: false,
    shots: [dragonCreatine],
    overview:
      "La Creatina Monohidratada Dragon Pharma 1 kg proporciona 200 porciones de alta pureza, ideal para aumentar la fuerza, resistencia y volumen muscular. Formulada para atletas de alto rendimiento, esta creatina no contiene saborizantes ni aditivos. Perfecta para ciclos de carga y mantenimiento.",
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: "Descuento",
        description: "10% OFF por compras mayores a $1,000 MXN",
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: "Tiempo de entrega",
        description: "4 - 7 días hábiles",
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: "Empaque",
        description: "Envase plástico hermético Dragon Pharma® 1 kg",
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: "Entrega estimada",
        description: "24 - 28 de junio 2025",
      },
    ],
  },
  {
    slug: "glutamina-creatina",
    shoeName: "Glutamina + Creatina 600g",
    coverImage: glutamina,
    currentPrice: 579,
    previousPrice: 699,
    shoeCategory: "Glutamina",
    rating: 4.6,
    reviews: 98,
    pieces_sold: 2650,
    justIn: true,
    shots: [glutamina],
    overview:
      "El suplemento Glutamina + Creatina combina dos potentes ingredientes para mejorar la recuperación muscular, aumentar la energía y reducir el catabolismo tras entrenamientos intensos. Ideal para quienes buscan fortalecer masa muscular y acelerar el tiempo de recuperación. Fórmula sin sabor, fácil de mezclar.",
    shipment_details: [
      {
        icon: <PiPercentFill className="text-xl text-secondary" />,
        title: "Descuento",
        description: "10% OFF por compras mayores a $700 MXN",
      },
      {
        icon: <FaCalendarAlt className="text-xl text-secondary" />,
        title: "Tiempo de entrega",
        description: "3 - 6 días hábiles",
      },
      {
        icon: <BsBoxFill className="text-xl text-secondary" />,
        title: "Empaque",
        description: "Bote plástico sellado de 600g",
      },
      {
        icon: <FaTruckFast className="text-xl text-secondary" />,
        title: "Entrega estimada",
        description: "24 - 27 de junio 2025",
      },
    ],
  },
];

// Parte del filtro del Home
export const productsSection = {
  heading: "Haz tu compra ahora, tu progreso empieza hoy.",
  description:
    "¡Tenemos una gran variedad de colecciones para ti! Explora y encuentra los zapatos de tus sueños, ¡hazlo realidad!",
};

export const shoeTypes = ["Tipo", ...branch.map((b) => b.name)];

export const priceRanges = [
  "Precios",
  "Menos de 100",
  "100 - 500",
  "500 - 1000",
  "Más de 1000",
];

export const discountOptions = ["Descuento", "Con descuento", "Sin descuento"];

export const filterShoes = (
  shoes,
  {
    brand = "Productos",
    type = "Tipo",
    priceRange = [0, Infinity],
    discount = "Descuento",
  }
) => {
  return shoes.filter((shoe) => {
    const matchBrand =
      brand === "Productos" || shoe.shoeName.trim() === brand.trim();
    let matchType = true;
    if (type !== "Tipo") {
      const branchObj = branch.find((b) => b.name === type);
      matchType = branchObj
        ? branchObj.categorias.includes(shoe.shoeCategory.trim())
        : false;
    }

    const matchPrice =
      shoe.currentPrice >= priceRange[0] && shoe.currentPrice <= priceRange[1];
    let matchDiscount = true;
    if (discount === "Con descuento") matchDiscount = shoe.justIn === true;
    if (discount === "Sin descuento") matchDiscount = shoe.justIn === false;

    return matchBrand && matchType && matchPrice && matchDiscount;
  });
};

export const filters = [shoeTypes, discountOptions, priceRanges];

// ____________________________________________________________________________

export const footerBannerData = {
  heading: "Ponte al día con los mejores suplementos",
  description:
    "Descubre todas las marcas de nuestra colección en HotSupps. Tenemos otra línea brutal que tienes que ver, en serio bro, ¡échale un vistazo ya!",
};

export const footerData = {
  description:
    "HotKicks was designed and founded in 2023 by Person. The theme is about sneakers ecommerce thet use for shoes selling around the world.",
  footerLinks: [
    {
      title: "Páginas principales",
      links: [
        { href: "/products", name: "Collections" },
        { href: "/News", name: "Novedades" },
        /*
        { href: '/cart', name: 'Cart' },
        { href: '/checkout', name: 'Checkout' }, 
        */
      ],
    },
    {
      title: "Promociones",
      links: [
        { href: "/product/yellowLow", name: "Productos en descuentos" },
        /* {
          href: '/blog/the-evolution-of-sneaker-culture-a-historical-perspective',
          name: 'Blog Single',
        }, */
      ],
    },
    {
      title: "",
      links: [{ href: "", name: "" }],
    },
    {
      title: "Utility Pages",
      links: [
        { href: "/faq", name: "FAQS" },
        { href: "/contact", name: "Contact" },
        { href: "/forgot-pass", name: "Forgot Password" },
        { href: "/login", name: "Login" },
        { href: "/signup", name: "Signup" },
      ],
    },
  ],
};

export const newsletter = {
  heading: "¿No quieres perderte nuestras ofertas?",
  description:
    "Deja tu correo electrónico a continuación y comienza a recibir las mejores ofertas de FITMEX STORE",
};

export const shoeSizes = [
  "EU36",
  "EU37",
  "EU38",
  "EU39",
  "EU40",
  "EU41",
  "EU42",
  "EU43",
  "EU44",
];

export const contactSection = {
  heading: "Contacto",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis quis phasellus eleifend tellus orci ornare.",
  directContactInfoHeader: {
    heading: "Prefer to reach out directly?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh magna sit diam pharetra.",
  },
  directContactInfo: [
    {
      icon: <FiBox className="text-5xl" />,
      title: "Sales",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit blandit velit semper aliquam.",
      contactLink: {
        href: "mailto:sales@hotkicks.com",
        title: "sales@hotkicks.com",
      },
    },
    {
      icon: <IoChatboxOutline className="text-5xl" />,
      title: "Support",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit blandit velit semper aliquam.",
      contactLink: {
        href: "mailto:support@hotckicks.com",
        title: "support@hotckicks.com",
      },
    },
    {
      icon: <MdOutlineCameraAlt className="text-5xl" />,
      title: "Influencers",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit blandit velit semper aliquam.",
      contactLink: {
        href: "mailto:influencers@hotckicks.com",
        title: "influencers@hotckicks.com",
      },
    },
  ],
  instagramPhotos: [
    "/images/products/WhatsApp Image 2025-05-28 at 4.18.34 PM.jpeg",
    "/images/products/WhatsApp Image 2025-05-28 at 4.18.09 PM(2).jpeg",
    "/images/products/BUM.jpeg",
    "/images/products/WhatsApp Image 2025-05-28 at 4.18.10 PM.jpeg",
    "/images/products/ISO-100-DYMATIZE.jpeg",
  ],
};

export const faqsData = {
  heading: "Frequently Asked Questions",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget adipiscing nibh nunc. Velit rhoncus arcu velesaed.",
  faqs: [
    {
      category: "Shipping",
      data: [
        {
          question: "¿Cómo puedo rastrear mi pedido?",
          answer:
            "Puedes rastrear tu pedido iniciando sesión en tu cuenta y verificando el estado del pedido. Además, se te proporcionará un número de seguimiento en el correo de confirmación de envío.",
        },
        {
          question: "¿Cuál es el tiempo estimado de entrega de mi pedido?",
          answer:
            "Los tiempos de entrega varían según tu ubicación. Normalmente, los pedidos nacionales tardan de 3 a 5 días hábiles, mientras que los pedidos internacionales pueden tardar de 7 a 14 días hábiles.",
        },
        {
          question:
            "¿Puedo cambiar mi dirección de envío después de realizar un pedido?",
          answer:
            "Desafortunadamente, no podemos cambiar la dirección de envío una vez realizado el pedido. Por favor, verifica bien tu información antes de completar la compra.",
        },
        {
          question: "¿Ofrecen opciones de envío exprés?",
          answer:
            "Sí, ofrecemos envío exprés por un costo adicional. Puedes elegir tu método de envío preferido durante el proceso de pago.",
        },
        {
          question: "¿Qué debo hacer si mi pedido se retrasa o se pierde?",
          answer:
            "Si tu pedido se retrasa significativamente o se pierde, por favor contacta a nuestro equipo de soporte al cliente y revisaremos el problema.",
        },
      ],
    },
    {
      category: "Products",
      data: [
        {
          question: "How do I determine the right size for my sneakers?",
          answer:
            "Refer to our size chart available on the product page. It provides measurements and guidelines to help you choose the correct size.",
        },
        {
          question: "Are your sneakers authentic?",
          answer:
            "Yes, we guarantee the authenticity of all our sneakers. We source them directly from authorized retailers and reputable suppliers.",
        },
        {
          question: "Can I return or exchange my sneakers if they don't fit?",
          answer:
            "Yes, we have a hassle-free return policy. You can return or exchange unworn sneakers within 30 days of receiving your order.",
        },
        {
          question: "Are the colors of the sneakers accurate in the photos?",
          answer:
            "We strive to provide accurate color representation, but slight variations may occur due to monitor settings. Refer to product descriptions for additional details.",
        },
        {
          question: "Do you restock sold-out sneakers?",
          answer:
            "We restock popular styles based on demand. You can sign up for notifications to be informed when a specific product is back in stock.",
        },
      ],
    },
    {
      category: "Payments",
      data: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept major credit cards, PayPal, and other secure payment methods. You can view the full list during the checkout process.",
        },
        {
          question: "How can I apply a discount code to my order?",
          answer:
            "Enter your discount code in the designated field during checkout. The discount will be applied to your total before payment.",
        },
        {
          question: "Can I modify or cancel my order after payment?",
          answer:
            "Once an order is placed, it cannot be modified or canceled. Please review your order carefully before completing the purchase.",
        },
        {
          question: "Is my payment information secure?",
          answer:
            "Yes, we use industry-standard encryption to secure your payment information. Your data is protected and never stored on our servers.",
        },
        {
          question: "Do you offer gift cards?",
          answer:
            "Yes, we offer gift cards of various denominations. They make great presents for sneaker enthusiasts!",
        },
      ],
    },
    {
      category: "Returns",
      data: [
        {
          question: "How do I initiate a return or exchange?",
          answer:
            'Visit the "Returns & Exchanges" page on our website, follow the instructions, and submit a request. Our team will guide you through the process.',
        },
        {
          question: "What is your return policy for defective products?",
          answer:
            "If you receive a defective product, please contact our customer support within 7 days of receiving the order. We will arrange a replacement or refund.",
        },
        {
          question: "Are there any restocking fees for returns?",
          answer:
            "We do not charge restocking fees for returns. However, please review our return policy for specific details.",
        },
        {
          question: "How long does it take to process a refund?",
          answer:
            "Refunds are typically processed within 5-7 business days after we receive the returned items and verify their condition.",
        },
        {
          question: "Can I return sneakers if I've worn them?",
          answer:
            "We only accept returns for unworn sneakers. Please try them on in a clean, indoor environment to ensure they are the right fit before wearing them outside.",
        },
      ],
    },
  ],
};

const demoBlogData = {
  sectionOne: {
    title: "What cleaning products are safe for different sneaker materials?",
    paragraph1:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    points: [
      "Pretium nibh ipsum consequat nisl vel pretium. Sed vulputate mi sit",
      "Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam id diam maer  dolore eu fugiat nulla pariatur",
      "Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac",
      "Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis",
    ],
    paragraph2:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  sectionTwo: {
    title: "Can you provide a step-by-step guide to cleaning sneakers?",
    description:
      "Augue lacus viverra vitae congue eu consequat ac felis donec. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Morbi tristique senectus et netus et malesuada fames ac turpis. Iaculis eu non diam phasellus vestibulum lorem sed.",
    midImage:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  sectionThree: {
    title: "How do I prevent and remove stains from my sneakers?",
    description:
      "Augue lacus viverra vitae congue eu consequat ac felis donec. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Morbi tristique senectus et netus et malesuada fames ac turpis. Iaculis eu non diam phasellus vestibulum lorem sed.",
  },
  sectionFour: {
    title:
      "What are the best practices for drying sneakers without causing damage?",
    description:
      "Bibendum at varius vel pharetra vel turpis nunc. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Volutpat est velit egestas dui id ornare.",
    points: [
      "Pretium nibh ipsum consequat nisl vel pretium. Sed vulputate mi sit",
      "Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam id diam maer  dolore eu fugiat nulla pariatur",
      "Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac",
      "Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis",
    ],
  },
  quote:
    "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor porta rhoncus, viverra sit et auctor. Augue in volutpat sed eget in etiam.”",
  sectionFive: [
    {
      title: "How should I store my sneakers to maintain their quality?",
      description:
        "Tincidunt nunc pulvinar sapien et ligula. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Aliquet bibendum enim facilisis gravida neque convallis a cras. Molestie nunc non blandit massa enim nec dui nunc.",
    },
    {
      title:
        "What special care should be taken to extend the lifespan of sneakers?",
      description:
        "Tincidunt nunc pulvinar sapien et ligula. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Aliquet bibendum enim facilisis gravida neque convallis a cras. Molestie nunc non blandit massa enim nec dui nunc.",
    },
  ],
};

export const blogs: BlogType[] = [
  {
    title: "The Evolution of Sneaker Culture: A Historical Perspective",
    brief:
      "Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.",
    date: "October 2, 2022",
    coverImage:
      "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blogData: demoBlogData,
    tag: "Style",
    slug: "the-evolution-of-sneaker-culture-a-historical-perspective",
  },
  {
    title: "Top 10 Sneaker Trends to Watch in 2023",
    brief:
      "Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.",
    date: "October 2, 2022",
    coverImage:
      "https://images.unsplash.com/photo-1448387473223-5c37445527e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blogData: demoBlogData,
    tag: "Fitting",
    slug: "top-10-sneaker-trends-to-watch-in-2023",
  },
  {
    title: "How to Clean and Maintain Your Sneaker Collection",
    brief:
      "Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.",
    date: "October 2, 2022",
    coverImage:
      "https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blogData: demoBlogData,
    tag: "Style",
    slug: "how-to-clean-and-maintain-your-sneaker-collection",
  },
  {
    title:
      "The Influence of Sneaker Collaborations: From Athletes to Designers",
    brief:
      "Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.",
    date: "October 2, 2022",
    coverImage:
      "https://images.unsplash.com/photo-1659614404055-670edff49a1b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blogData: demoBlogData,
    tag: "General",
    slug: "the-influence-of-sneaker-collaborations-from-athletes-to-designers",
  },
  {
    title: "Sneaker Sizing Guide: Finding the Perfect Fit",
    brief:
      "Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.",
    date: "October 2, 2022",
    coverImage:
      "https://images.unsplash.com/photo-1515396800500-75d7b90b3b94?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blogData: demoBlogData,
    tag: "Style",
    slug: "sneaker-sizing-guide-finding-the-perfect-fit",
  },
  {
    title:
      "Sneaker Collecting 101: Building and Organizing Your Sneaker Collection",
    brief:
      "Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.",
    date: "October 2, 2022",
    coverImage:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blogData: demoBlogData,
    tag: "Fitting",
    slug: "sneaker-collecting-101-building-and-organizing-your-sneaker-collection",
  },
  {
    title: "Behind the Design: Sneaker Production Process Unveiled",
    brief:
      "Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.",
    date: "October 2, 2022",
    coverImage:
      "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blogData: demoBlogData,
    tag: "General",
    slug: "behind-the-design-sneaker-production-process-unveiled",
  },
  {
    title:
      "Exploring Limited Edition Sneaker Drops: How to Cop Exclusive Releases",
    brief:
      "Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.",
    date: "October 2, 2022",
    coverImage:
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blogData: demoBlogData,
    tag: "General",
    slug: "exploring-limited-edition-sneaker-drops-how-to-cop-exclusive-releases",
  },
  {
    title: "Sneaker Spotlight: Nike Review and Styling Tips",
    brief:
      "Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.",
    date: "October 2, 2022",
    coverImage:
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blogData: demoBlogData,
    tag: "Style",
    slug: "sneaker-spotlight-nike-review-and-styling-tips",
  },
  {
    title: "Sustainable Sneaker Choices: Eco-Friendly Options in the Market",
    brief:
      "Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.",
    date: "October 2, 2022",
    coverImage:
      "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blogData: demoBlogData,
    tag: "Style",
    slug: "sustainable-sneaker-choices-eco-friendly-options-in-the-market",
  },
];

export const productsCollection = {
  heading: "Shoes Collection",
  description:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit facilisi pellentesque cursus eget morbi sagittis sagittis.",
};
