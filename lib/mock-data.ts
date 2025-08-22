import type { Product } from "./types";

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "3M Speedglas Welding Helmet 9100XXi",
    description:
      "Advanced auto-darkening welding helmet with crystal clear optics and reliable arc detection.",
    category: "Personal Protective Equipment",
    subCategory: "Head Protection",
    businessType: "Supplier",
    price: 299.99,
    stock: 45,
    status: "active",
    imageUrl: "/yellow-hard-hat-construction.png",
    // imageUrl: "/placeholder-dvmp6.png",
    isNew: true,
    safetyRating: "CE Certified",
    supplier: "3M Safety",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "2",
    name: "MSA V-Guard Fast Delivery Hard Hat",
    description:
      "Lightweight, durable hard hat with superior impact protection and comfort.",
    category: "Personal Protective Equipment",
    subCategory: "Head Protection",
    businessType: "Manufacturer",
    price: 24.99,
    stock: 120,
    status: "active",
    imageUrl: "/public/yellow-hard-hat-construction.png",
    // imageUrl: "/yellow-hard-hat-construction.png",
    safetyRating: "ANSI Z89.1",
    supplier: "MSA Safety",
    createdAt: "2024-01-14T09:30:00Z",
    updatedAt: "2024-01-14T09:30:00Z",
  },
  {
    id: "3",
    name: "3M 6200 Respirator Half Face",
    description:
      "Durable construction half face respirator ensuring durable and long-lasting product.",
    category: "Personal Protective Equipment",
    subCategory: "Respiratory Protection",
    businessType: "Supplier",
    price: 89.99,
    stock: 78,
    status: "active",
    imageUrl: "/public/yellow-hard-hat-construction.png",
    // imageUrl: "/gray-respirator-mask.png",
    safetyRating: "NIOSH Approved",
    supplier: "3M Safety",
    createdAt: "2024-01-13T14:20:00Z",
    updatedAt: "2024-01-13T14:20:00Z",
  },
  {
    id: "4",
    name: "Free Sample XL Size Cut-Resistant Gloves",
    description:
      "High-performance cut-resistant gloves offering excellent dexterity and protection.",
    category: "Personal Protective Equipment",
    subCategory: "Hand Protection",
    businessType: "Service Provider",
    price: 0,
    stock: 200,
    status: "active",
    // imageUrl: "/white-work-gloves.png",
    imageUrl: "/public/yellow-hard-hat-construction.png",
    safetyRating: "ANSI A4",
    supplier: "SafetyFirst Inc",
    createdAt: "2024-01-12T11:45:00Z",
    updatedAt: "2024-01-12T11:45:00Z",
  },
  {
    id: "5",
    name: "Honeywell Safety Goggles Clear Lens",
    description:
      "Crystal clear safety goggles with anti-fog coating and comfortable fit.",
    category: "Personal Protective Equipment",
    subCategory: "Eye Protection",
    businessType: "Distributor",
    price: 15.99,
    stock: 95,
    status: "active",
    imageUrl: "/clear-safety-goggles.png",
    safetyRating: "ANSI Z87.1",
    supplier: "Honeywell Safety",
    createdAt: "2024-01-11T16:10:00Z",
    updatedAt: "2024-01-11T16:10:00Z",
  },
  {
    id: "6",
    name: "High-Vis Reflective Safety Vest",
    description:
      "Bright orange high-visibility vest with reflective strips for maximum visibility.",
    category: "Personal Protective Equipment",
    subCategory: "Body Protection",
    businessType: "Manufacturer",
    price: 19.99,
    stock: 150,
    status: "active",
    imageUrl: "/orange-reflective-vest.png",
    safetyRating: "ANSI 107 Class 2",
    supplier: "VizWear Safety",
    createdAt: "2024-01-10T08:30:00Z",
    updatedAt: "2024-01-10T08:30:00Z",
  },
  {
    id: "7",
    name: "Steel Toe Work Boots Waterproof",
    description:
      "Durable waterproof work boots with steel toe protection and slip-resistant sole.",
    category: "Personal Protective Equipment",
    subCategory: "Foot Protection",
    businessType: "Supplier",
    price: 129.99,
    stock: 60,
    status: "active",
    imageUrl: "/placeholder-z2iph.png",
    safetyRating: "ASTM F2413",
    supplier: "WorkSafe Footwear",
    createdAt: "2024-01-09T13:15:00Z",
    updatedAt: "2024-01-09T13:15:00Z",
  },
  {
    id: "8",
    name: "Emergency Eye Wash Station Portable",
    description:
      "Portable emergency eye wash station for immediate treatment of eye injuries.",
    category: "Emergency Equipment",
    subCategory: "First Aid",
    businessType: "Manufacturer",
    price: 199.99,
    stock: 25,
    status: "active",
    imageUrl: "/placeholder-301gs.png",
    safetyRating: "ANSI Z358.1",
    supplier: "EmergencyCare Pro",
    createdAt: "2024-01-08T10:45:00Z",
    updatedAt: "2024-01-08T10:45:00Z",
  },
  {
    id: "9",
    name: "Fire Extinguisher ABC Dry Chemical",
    description:
      "Multi-purpose dry chemical fire extinguisher suitable for Class A, B, and C fires.",
    category: "Fire Safety Equipment",
    subCategory: "Fire Extinguishers",
    businessType: "Distributor",
    price: 49.99,
    stock: 80,
    status: "active",
    imageUrl: "/red-fire-extinguisher.png",
    safetyRating: "UL Listed",
    supplier: "FireSafe Solutions",
    createdAt: "2024-01-07T15:20:00Z",
    updatedAt: "2024-01-07T15:20:00Z",
  },
  {
    id: "10",
    name: "LED Emergency Exit Sign Battery Backup",
    description:
      "Energy-efficient LED exit sign with battery backup for emergency situations.",
    category: "Emergency Equipment",
    subCategory: "Emergency Lighting",
    businessType: "Supplier",
    price: 39.99,
    stock: 110,
    status: "active",
    imageUrl: "/green-led-exit-sign.png",
    safetyRating: "UL 924",
    supplier: "LightSafe Systems",
    createdAt: "2024-01-06T12:00:00Z",
    updatedAt: "2024-01-06T12:00:00Z",
  },
];

// Generate additional mock products to reach ~50 items
// const additionalProducts: Product[] = Array.from({ length: 40 }, (_, index) => {
//   const categories = [
//     "Personal Protective Equipment",
//     "Emergency Equipment",
//     "Fire Safety Equipment",
//     "Industrial Tools",
//     "Safety Signage",
//   ];
//   const subCategories = [
//     "Head Protection",
//     "Eye Protection",
//     "Hand Protection",
//     "Respiratory Protection",
//     "Body Protection",
//     "Foot Protection",
//     "First Aid",
//     "Emergency Lighting",
//     "Fire Extinguishers",
//     "Power Tools",
//     "Warning Signs",
//   ];
//   const businessTypes = [
//     "Supplier",
//     "Manufacturer",
//     "Distributor",
//     "Service Provider",
//   ];
//   const statuses: Product["status"][] = [
//     "active",
//     "active",
//     "active",
//     "inactive",
//     "out-of-stock",
//   ]; // Weighted towards active

//   const category = categories[index % categories.length];
//   const subCategory = subCategories[index % subCategories.length];
//   const businessType = businessTypes[index % businessTypes.length];
//   const status = statuses[index % statuses.length];

//   return {
//     id: (index + 11).toString(),
//     name: `Safety Product ${index + 11}`,
//     description: `Professional grade safety equipment designed for industrial use. Product ${
//       index + 11
//     } offers reliable protection and durability.`,
//     category,
//     subCategory,
//     businessType,
//     price: Math.round((Math.random() * 200 + 10) * 100) / 100,
//     stock: Math.floor(Math.random() * 200),
//     status,
//     imageUrl: `/placeholder.svg?height=200&width=200&query=safety equipment ${category.toLowerCase()}`,
//     isNew: Math.random() > 0.8,
//     safetyRating: [
//       "CE Certified",
//       "ANSI Approved",
//       "OSHA Compliant",
//       "ISO Certified",
//     ][index % 4],
//     supplier: `Supplier ${Math.floor(index / 5) + 1}`,
//     createdAt: new Date(
//       Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000
//     ).toISOString(),
//     updatedAt: new Date(
//       Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000
//     ).toISOString(),
//   };
// });

export const allMockProducts = [
  ...mockProducts,
  // ...additionalProducts
];
