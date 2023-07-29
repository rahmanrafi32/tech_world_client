import Image from "next/image";

const Banner = () => {
    return (
        <div className="carousel w-4/5">
            <div className="carousel-item relative w-full h-4/5">
                <Image
                    src="https://www.startech.com.bd/image/cache/catalog/home/banner/express-delivery-home-banner-june-982x500.webp"
                    alt={'image'} width={982} height={500} className="w-full"/>
            </div>
            <div className="carousel-item relative w-full h-4/5">
                <Image
                    src="https://www.startech.com.bd/image/cache/catalog/home/banner/free-delivery-on-app-may-home-banner-982x500.webp"
                    alt={'image'} width={982} height={500} className="w-full"/>
            </div>
            <div className="carousel-item relative w-full h-4/5">
                <Image
                    src="https://www.startech.com.bd/image/cache/catalog/home/banner/desktop-deal/desktop-deal-live-now-home-banner-982x500.webp"
                    alt={'image'} width={982} height={500} className="w-full"/>
            </div>
        </div>
    );
};

export default Banner;
