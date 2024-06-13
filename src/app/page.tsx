import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import {client} from '../../sanity/lib/client'
import { urlForImage } from "../../sanity/lib/image";
import { Image as IImage } from "sanity";

 const getData = async ()=>{
  const res = await client.fetch(`*[_type=='product']{
    title,
    discription,
      image,
      price,
      category ->{
        name
      }
  }`);
return res
}

interface IProduct{
  title: string
  discription: string
  image: IImage
  price: string
}


export default async function Home() {

  const data:IProduct[] = await getData()
  console.log(data);

  return (
  
    
    <div >
        <Navbar />
        <Hero />
        <div className="grid grid-cols-[auto,auto,auto] justify-center gap-x-20 mx-5 object-cover object-top">
        {data.map((items)=>(
          <div key={items.discription}>
              <Image 
              width={400}
              height={400}
              className="max-h-[400px]"
              src={urlForImage(items.image).url()} alt="product pic"/>

              <h2 className="text-lg mt-2 font-medium">{items.title}</h2>
              <h3 className="text-lg mt-2 font-medium">${items.price}</h3>
              <button className=' text-black border border-blue-500 py-2 px-6 rounded hover:bg-gray-400  hover:text-black  bg-blue-500 font-medium'>Add to Card</button>
          </div>
          
        ))}
        </div>
      </div>

  );
}
