const proteinProducts = [
    {
        id: "prot_1",
        name: "WHEY GOLD STANDARD 5 LB",
        description: "Recuperación muscular y crecimiento",
        price: 360000,
        image: "https://suplementos.b-cdn.net/proteinas/whey-gold-5lb-vainilla-ice-cream-600x800.webp",
        nutritionImage: "https://suplementos.b-cdn.net/tablas%20nutricionales%20600x800/whey-gold-5lbs-vainilla-tabla-600x800.webp",
        category: "proteinas",
        benefits: [
            "Alta concentración de proteína",
            "Rápida absorción",
            "Ideal post-entrenamiento"
        ],
        flavors: ["CHOCOLATE", "VAINILLA", "FRESA", "COOKIES & CREAM"]
    },
    {
        id: "prot_2",
        name: "NITRO TECHE WHEY GOLD 4 LB",
        description: "Liberación lenta para recuperación nocturna",
        price: 340000,
        image: "https://suplementos.b-cdn.net/proteinas/nitro-tech-4lbs-vainilla-cream-600x800.webp",
        nutritionImage: "https://suplementos.b-cdn.net/tablas%20nutricionales%20600x800/nitro-tech-4lbs-vanilla-cream-tabla-600x800.webp",
        category: "proteinas",
        benefits: [
            "Liberación prolongada",
            "Previene el catabolismo nocturno",
            "Alta pureza"
        ],
        flavors: ["CHOCOLATE", "VAINILLA", "FRESA"]
    },
    {
        id: "prot_3",
        name: "ISO 100 5 LB",
        description: "Recuperación muscular y crecimiento",
        price: 430000,
        image: "https://suplementos.b-cdn.net/proteinas/iso-100-5lbs-vainilla-600x800.webp",
        nutritionImage: "https://suplementos.b-cdn.net/tablas%20nutricionales%20600x800/iso-100-5lbs-vainilla-tabla-600x800.webp",
        category: "proteinas",
        benefits: [
            "Alta concentración de proteína",
            "Rápida absorción",
            "Ideal post-entrenamiento"
        ],
        flavors: ["CHOCOLATE", "VAINILLA", "FRESA", "COOKIES & CREAM"]
    },
    {
        id: "prot_4",
        name: "WHEY BASIC 5 LB",
        description: "Recuperación muscular y crecimiento",
        price: 275000,
        image: "https://suplementos.b-cdn.net/proteinas/Whey-Protein-basic-5lbs-vainilla-600x800.webp",
        nutritionImage: "https://suplementos.b-cdn.net/tablas%20nutricionales%20600x800/whey-basic-protein-vainilla-tabla-600x800.webp",
        category: "proteinas",
        benefits: [
            "Alta concentración de proteína",
            "Rápida absorción",
            "Ideal post-entrenamiento"
        ],
        flavors: ["CHOCOLATE", "VAINILLA", "FRESA", "COOKIES & CREAM"]
    },
    {
        id: "prot_5",
        name: "BI-PRO CLASSIC 2 LB",
        description: "Recuperación muscular y crecimiento",
        price: 155000,
        image: "https://suplementos.b-cdn.net/proteinas/bi-pro-classic-2lbs-vainilla-600x800.webp",
        nutritionImage: "https://suplementos.b-cdn.net/tablas%20nutricionales%20600x800/bi-pro-2lbs-vainilla-tabla-600x800.webp",
        category: "proteinas",
        benefits: [
            "Alta concentración de proteína",
            "Rápida absorción",
            "Ideal post-entrenamiento"
        ],
        flavors: ["CHOCOLATE", "VAINILLA", "NATURAL"]
    },
    {
        id: "prot_6",
        name: "BEST PROTEIN 2 LB",
        description: "Recuperación muscular y crecimiento",
        price: 180000,
        image: "https://suplementos.b-cdn.net/proteinas/best-2lb-vainilla-600x800.webp",
        nutritionImage: "https://evolutionfitness.co/wp-content/uploads/2022/08/BEST-PROTEIN_002.jpg",
        category: "proteinas",
        benefits: [
            "Alta concentración de proteína",
            "Rápida absorción",
            "Ideal post-entrenamiento"
        ],
        flavors: ["CHOCOLATE GOURMET", "VAINILLA", "FRESA"]
    },
    {
        id: "prot_7",
        name: "BEST WHEY 2 LB",
        description: "Recuperación muscular y crecimiento",
        price: 140000,
        image: "https://suplementos.b-cdn.net/proteinas/best-whey-vainilla-600x800.webp",
        nutritionImage: "https://suplementos.b-cdn.net/tablas%20nutricionales/best-whey-tabla-500.webp",
        category: "proteinas",
        benefits: [
            "Alta concentración de proteína",
            "Rápida absorción",
            "Ideal post-entrenamiento"
        ],
        flavors: ["AREQUIPE", "VAINILLA"]
    },
    {
        id: "prot_8",
        name: "BEST VEGAN 2 LB",
        description: "Recuperación muscular y crecimiento",
        price: 120000,
        image: "https://suplementos.b-cdn.net/proteinas/best-vegan-vainilla-600x800.webp",
        nutritionImage: "https://suplementos.b-cdn.net/tablas%20nutricionales/best-vegan-500.webp",
        category: "proteinas",
        benefits: [
            "Alta concentración de proteína",
            "Rápida absorción",
            "Ideal post-entrenamiento"
        ],
        flavors: ["CHOCOLATE", "VAINILLA"]
    },
    {
        id: "prot_9",
        name: "NITRO TECH 2 LB",
        description: "Recuperación muscular y crecimiento",
        price: 180000,
        image: "https://suplementos.b-cdn.net/proteinas/nitro-tech-2lbs-vainilla-cream-600x800.webp",
        nutritionImage: "https://suplementos.b-cdn.net/tablas%20nutricionales/nitrotech_vanilla_500.webp",
        category: "proteinas",
        benefits: [
            "Alta concentración de proteína",
            "Rápida absorción",
            "Ideal post-entrenamiento"
        ],
        flavors: ["CHOCOLATE", "VAINILLA"]
    },
    {
        id: "prot_10",
        name: "WHEY GOLD STANDARD 2 LB",
        description: "Recuperación muscular y crecimiento",
        price: 185000,
        image: "https://suplementos.b-cdn.net/proteinas/whey-gold-2lb-vainilla-ice-creme-600x800.webp",
        nutritionImage: "https://suplementos.b-cdn.net/tablas%20nutricionales/whey-gold-vainilla-tabla-500.webp",
        category: "proteinas",
        benefits: [
            "Alta concentración de proteína",
            "Rápida absorción",
            "Ideal post-entrenamiento"
        ],
        flavors: ["CHOCOLATE", "VAINILLA"]
    },
    {
        id: "prot_11",
        name: "MASS TECH 6 LB",
        description: "Recuperación muscular y crecimiento",
        price: 230000,
        image: "https://suplementos.b-cdn.net/proteinas/mass-tech-6lbs-extreme-vainilla-600x800.webp",
        nutritionImage: "https://glowell.com.co/cdn/shop/files/extreme-tabla.jpg?v=1753642226&width=990",
        category: "proteinas",
        benefits: [
            "Alta concentración de proteína",
            "Rápida absorción",
            "Ideal post-entrenamiento"
        ],
        flavors: ["VAINILLA"]
    },
    {
        id: "prot_12",
        name: "SMART PROTEIN 3 LB",
        description: "Recuperación muscular y crecimiento",
        price: 85000,
        image: "https://suplementos.b-cdn.net/proteinas/smart-3lb-vainilla-600x800.webp",
        nutritionImage: "https://suplementos.b-cdn.net/tablas%20nutricionales/smart-gainer-13lb-tabla-500.webp",
        category: "proteinas",
        benefits: [
            "Alta concentración de proteína",
            "Rápida absorción",
            "Ideal post-entrenamiento"
        ],
        flavors: ["CHOCOLATE", "VAINILLA", "FRESA"]
    },
    {
        id: "prot_13",
        name: "MEGAPLEX CREATINE 2 LB",
        description: "Recuperación muscular y crecimiento",
        price: 60000,
        image: "https://suplementos.b-cdn.net/proteinas/megaplex-creatine-2lbs-600x800.webp",
        nutritionImage: "https://suplementos.b-cdn.net/tablas%20nutricionales/megaplex-creatine-power-2lbs-tabla-500.webp",
        category: "proteinas",
        benefits: [
            "Alta concentración de proteína",
            "Rápida absorción",
            "Ideal post-entrenamiento"
        ],
        flavors: ["VAINILLA"]
    },
    {
        id: "prot_14",
        name: "BI-PRO CLASSIC 3 LB",
        description: "Recuperación muscular y crecimiento",
        price: 198000,
        image: "https://suplementos.b-cdn.net/proteinas/bi-pro-3lbs-600x800.webp",
        nutritionImage: "https://suplementos.b-cdn.net/tablas%20nutricionales%20600x800/bi-pro-2lbs-vainilla-tabla-600x800.webp",
        category: "proteinas",
        benefits: [
            "Alta concentración de proteína",
            "Rápida absorción",
            "Ideal post-entrenamiento"
        ],
        flavors: ["VAINILLA"]
    },
    {
        id: "prot_15",
        name: "PANCAKE DORADO TRADICIONAL",
        description: "Recuperación muscular y crecimiento",
        price: 45000,
        image: "https://suplementos.b-cdn.net/snacks/pancake-dorado-tradicional-600x800.webp",
        nutritionImage: "https://suplementos.b-cdn.net/tablas%20nutricionales/pancake-upn-tradicional-tabla-500.webp",
        category: "proteinas",
        benefits: [
            "Alta concentración de proteína",
            "Rápida absorción",
            "Ideal post-entrenamiento"
        ],
        flavors: ["TRADICIONAL"]
    },
    {
        id: "prot_16",
        name: "PANCAKE DORADO CHOCOLATE",
        description: "Recuperación muscular y crecimiento",
        price: 55000,
        image: "https://suplementos.b-cdn.net/snacks/pancake-rojo-600x800.webp",
        nutritionImage: "https://suplementos.b-cdn.net/tablas%20nutricionales/pancake-upn-500.webp",
        category: "proteinas",
        benefits: [
            "Alta concentración de proteína",
            "Rápida absorción",
            "Ideal post-entrenamiento"
        ],
        flavors: ["TRADICIONAL"]
    },
    {
        id: "prot_17",
        name: "SERIOUS MASS 6 LB",
        description: "Recuperación muscular y crecimiento",
        price: 200000,
        image: "https://suplementos.b-cdn.net/proteinas/serious-mass-6lbs-vainilla-600x800.webp",
        nutritionImage: "https://suplementos.b-cdn.net/tablas%20nutricionales%20600x800/serious-mass-12lbs-vainilla-tabla-600x800.webp",
        category: "proteinas",
        benefits: [
            "Alta concentración de proteína",
            "Rápida absorción",
            "Ideal post-entrenamiento"
        ],
        flavors: ["VAINILLA"]
    },
    {
        id: "prot_18",
        name: "ISOLATE BASIC 2 LB",
        description: "Recuperación muscular y crecimiento",
        price: 170000,
        image: "https://suplementos.b-cdn.net/proteinas/Isolate-basic-2lbs-vainilla-600x800.webp",
        nutritionImage: "https://suplementos.b-cdn.net/tablas%20nutricionales%20600x800/whey-basic-protein-vainilla-tabla-600x800.webp",
        category: "proteinas",
        benefits: [
            "Alta concentración de proteína",
            "Rápida absorción",
            "Ideal post-entrenamiento"
        ],
    flavors: ["CHOCOLATE", "SALTED CARAMEL"]
    },
    {
        id: "prot_19",
        name: "CARNIVOR 2 LB",
        description: "Recuperación muscular y crecimiento",
        price: 170000,
        image: "https://suplementos.b-cdn.net/proteinas/carnivor-2lbs-chocolate-600x800.webp",
        nutritionImage: "https://suplementos.b-cdn.net/tablas%20nutricionales/carnivor-2lbs-chocolate-tabla-500.webp",
        category: "proteinas",
        benefits: [
            "Alta concentración de proteína",
            "Rápida absorción",
            "Ideal post-entrenamiento"
        ],
        flavors: ["VAINILLA"]
    },
    {
        id: "prot_20",
        name: "WHEY PURE 5 LB",
        description: "Recuperación muscular y crecimiento",
        price: 250000,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_855944-MCO89680761662_082025-F.webp",
        nutritionImage: "https://www.smartnutritioncolombia.com/cdn/shop/files/smart_nutrition_linea-whey_wheypure5lb_fresa-tablanutricional.jpg?v=1754404169&width=713",
        category: "proteinas",
        benefits: [
            "Alta concentración de proteína",
            "Rápida absorción",
            "Ideal post-entrenamiento"
        ],
    flavors: ["CHOCOLATE", "VAINILLA"]
    },
];
