import Image from "next/image";
import image_1 from "@/assets/home/hero/hero-image-1.webp"
import image_2 from "@/assets/home/hero/dance_nylon_01_0e5db116-e42c-4ee5-8721-315766763804.webp"
import image_3 from "@/assets/home/hero/hero-image-3.webp"
import image_4 from "@/assets/home/hero/hero-image-4.webp"
const HeroSection = () => {
    return (
        <section className="my-8 jm_container ">
            <div className="grid grid-cols-4 grid-rows-2 gap-8 max-h-screen">
                <div className="col-span-2 row-span-2 overflow-hidden relative">
                    <Image src={image_1} alt="hero image" className="hover:scale-110 duration-500 w-full h-full object-cover"/>
                    <button className="hero_btn absolute bottom-5 left-1/2 -translate-x-1/2">Women</button>
                </div>
                <div className=" overflow-hidden relative">
                    <Image src={image_2} alt="hero image" className="hover:scale-110 duration-500 w-full h-full object-cover"/>
                    <button className="hero_btn absolute bottom-5 left-1/2 -translate-x-1/2">Accessories</button>
                </div>
                <div className="row-span-2 overflow-hidden relative">
                    <Image src={image_4} alt="hero image" className="hover:scale-110 duration-500 w-full h-full object-cover"/>
                    <button className="hero_btn absolute bottom-5 left-1/2 -translate-x-1/2">Footwear</button>
                </div>
                <div className="overflow-hidden relative">
                    <Image src={image_3} alt="hero image" className="hover:scale-110 duration-500 w-full h-full object-cover"/>
                    <button className="hero_btn absolute bottom-5 left-1/2 -translate-x-1/2">Watches</button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;