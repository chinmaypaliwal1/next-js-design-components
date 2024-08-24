// src/app/page.tsx
import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="pt-24 max-w-6xl m-auto p-12">
      <section>
          <div className='flex justify-between border-2	'>
            <div className='left-img'>
              <Image 
                src="/images/gir-office.avif"  // Corrected the path to your image
                alt="Descriptive text for the image" 
                width={800}
                height={80000} 
                className='min-h-full min-h-96	' 
              />
            </div>
            <div className='flex flex-col justify-between p-8 '>
              <div className='right-content'>
                <span className='text-gray-400 text-xs'>July 16, 2024</span>
                <h2 className='text-3xl '>Company Registration in Dubai-2024 Guide</h2>
                <p className='pt-2'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
              </div>
              <div className='flex flex-col'>
                <div className='flex pb-6 pt-10'>
                    <Image 
                      src="/images/img.avif "  // Corrected the path to your logo
                      alt="Chinmay Paliwal" 
                      width={50} 
                      height={50} 
                      className='rounded-e-full	rounded-s-full	rounded-t-full rounded-b-full			' 
                    />
                    <div className='flex flex-col pl-2'>
                      <h3>Chinmay Paliwal</h3>
                      <p>Senior Content Manager</p>
                    </div> 
                </div>
                  <div>
                    <button className='bg-lime-300	text-black text-xs p-2'>
                      Future of works
                    </button>
                  </div> 
              </div>
            </div>
          </div>
      </section>
      
      <section className='pt-6'>
        <div className='flex justify-between border-2	'>
            <div className='left-img'>
              <Image 
                src="/images/gir-office.avif"  // Corrected the path to your image
                alt="Descriptive text for the image" 
                width={800}
                height={80000} 
                className='min-h-full min-h-96	' 
              />
            </div>
            <div className='flex flex-col justify-between p-8 '>
              <div className='right-content'>
                <span className='text-gray-400 text-xs'>July 16, 2024</span>
                <h2 className='text-3xl '>Company Registration in Dubai-2024 Guide</h2>
                <p className='pt-2'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
              </div>
              <div className='flex flex-col'>
                <div className='flex pb-6 pt-6'>
                    <Image 
                      src="/images/img.avif "  // Corrected the path to your logo
                      alt="Chinmay Paliwal" 
                      width={50} 
                      height={50} 
                      className='rounded-e-full	rounded-s-full	rounded-t-full rounded-b-full			' 
                    />
                    <div className='flex flex-col pl-2'>
                      <h3>Chinmay Paliwal</h3>
                      <p>Senior Content Manager</p>
                    </div> 
                </div>
                  <div>
                    <button className='bg-lime-300	text-black text-xs p-2'>
                      Future of works
                    </button>
                  </div> 
              </div>
            </div>
          </div>  
      </section>
    </main>
  );
}
