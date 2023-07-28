export type FeaturedProduct = {
    image: string;
    productName: string;
    category: string;
    price: string;
    status: 'In Stock' | 'Out of Stock';
    rating: number;
}

export const featuredProducts: FeaturedProduct[] = [
    {
        image: 'https://www.startech.com.bd/image/cache/catalog/monitor/msi/mp223/mp223-06-200x200.webp',
        productName: 'MSI PRO MP223 21.45" Full HD Business Monitor',
        category: 'Monitor',
        price: '9,800৳',
        status: 'In Stock',
        rating: 4.5,
    },
    {
        image: 'https://www.startech.com.bd/image/cache/catalog/graphics-card/colorful/geforce-rtx-4080-16gb-nb-ex-v/geforce-rtx-4080-16gb-nb-ex-v-01-200x200.webp',
        productName: 'Colorful GeForce RTX 4080 16GB NB EX-V GDDR6X Graphics Card',
        category: 'Graphics Card',
        price: '167,999৳',
        status: 'Out of Stock',
        rating: 3.8,
    },
    {
        image: 'https://www.startech.com.bd/image/cache/catalog/motherboard/asrock/a520m-hvs/a520m-hvs-01-228x228.webp',
        productName: 'ASRock A520M-HVS AMD AM4 Micro ATX Motherboard',
        category: 'Motherboard',
        price: '9,000৳',
        status: 'In Stock',
        rating: 4.2,
    },
    {
        image: 'https://www.startech.com.bd/image/cache/catalog/component/motherboard/msi-ryzan/b450m-a-pro-max/b450m-a-pro-max-1-228x228.jpg',
        productName: 'MSI B450M-A PRO MAX AMD AM4 Motherboard',
        category: 'Motherboard',
        price: '9,800৳',
        status: 'In Stock',
        rating: 4.7,
    },
    {
        image: 'https://www.startech.com.bd/image/cache/catalog/ram/transcend/jetram-4gb/jetram-4gb-01-228x228.webp',
        productName: 'Transcend JetRam 4GB DDR4 3200MHz U-DIMM Desktop RAM',
        category: 'RAM',
        price: '1,450৳',
        status: 'In Stock',
        rating: 4.0,
    },
    {
        image: 'https://www.startech.com.bd/image/cache/catalog/processor/amd/Athlon/athlon-228x228.jpg',
        productName: 'AMD Athlon 200GE AM4 Socket Desktop Processor with Radeon Vega 3 Graphics',
        category: 'Cpu',
        price: '7,000৳',
        status: 'Out of Stock',
        rating: 4.9,
    },
    {
        image: 'https://www.startech.com.bd/image/cache/catalog/power-supply/power-train/pt-p200b/pt-p200b-01-228x228.webp',
        productName: 'Power Train PT-P200B 200W Power Supply',
        category: 'Power Supply Unit',
        price: '1,500৳',
        status: 'Out of Stock',
        rating: 4.9,
    },
    {
        image: 'https://www.startech.com.bd/image/cache/catalog/ssd/netac/ls-ne-sa500/ls-ne-sa500-01-228x228.webp',
        productName: 'Netac SA500 120GB 2.5-inch SATAIII SSD',
        category: 'Storage Device',
        price: '1,375৳',
        status: 'Out of Stock',
        rating: 4.9,
    },
];

export const featuredCategories = [
    'CPU / Processor', 'Motherboard', 'RAM', 'Power Supply Unit', 'Storage Device', 'Monitor', 'Others (GPU, Mouse, Keyboard, etc…)'
]
