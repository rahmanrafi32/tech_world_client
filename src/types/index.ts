type Features = {
    brand: string,
    model: string,
    Specification: string,
    Type: string
}
export type FeaturedProduct = {
    _id: string;
    image: string;
    productName: string;
    category: string;
    price: string;
    status: 'In Stock' | 'Out of Stock';
    rating: number;
    description: string
    reviews: string[]
    features: Features
    individualRating: string
    avgRating: string
}

export const featuredCategories = [
    'Cpu', 'Motherboard', 'RAM', 'Power Supply Unit', 'Storage Device', 'Monitor'
]
