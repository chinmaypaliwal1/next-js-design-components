// src/app/page.tsx
import React from 'react';
import Image from 'next/image';

export default function Hero() {
    const DubaiGuid = () =>(
        <section className="m-auto pt-24 max-w-6xl">
          <div className='flex justify-between border-2	'>
            <div className='left-img'>
              <Image 
                src="/images/gir-office.avif"  
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
                      src="/images/img.avif "  
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
     
        <div className='flex justify-between border-2 mt-6 mb-6	'>
            <div className='left-img'>
              <Image 
                src="/images/gir-office.avif" 
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
                      src="/images/img.avif "  
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
    );
    const StoryOfPartnership = () => (
    <section>
        <div>
            <div className="relative min-h-fit p-60 w-screen flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/images/background.jpg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className='relative z-10 text-center text-white'>
                    <span className='bg-lime-300 text-black text-xs p-3'>
                        The First Partner
                    </span>
                    <h1 className='text-4xl pt-4'>
                        A Story of Partnership,<br></br> Expertise, and Growth
                    </h1>
                </div>
            </div>
            <div className="relative min-h-fit p-40 w-screen flex items-center justify-center bg-zinc-800	">
                <div className='relative z-10 text-center text-white'>
                    <span className='text-s p-1'>
                        Every business has a story,and at The First Partner,<br></br>Our story is Rooted in one simple idea
                    </span>
                    <h1 className='text-4xl pt-7 text-lime-300'>
                        Your success is <br></br>Our success.
                    </h1>
                </div>
            </div>
        </div>
    </section>
    );
    const YourJourney = () => (
        <section>
            <div>
          
                <div className=" p-40 w-screen flex items-center justify-center bg-zinc-800	">
                    <div className='text-center text-white bg-zinc-600 py-20 px-36  rounded-3xl'>
                        <div className='max-w-2xl'>
                            <h2 className='text-5xl p-1'>
                                Understanding Your Journey
                            </h2>
                            <p className='text-s pt-7 '>
                                simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 
                            </p>
                            <p className='text-s pt-10 pb-10 '>
                                simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 
                            </p>
                            <button className='bg-white	text-black text-xs p-3'>
                                Explore our services
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
        const ContentBox = ({ imageSrc, title, description }) => (
           
                <div className='bg-zinc-600 p-8 max-w-80 rounded-3xl '>
                    <Image 
                        src={imageSrc}  
                        alt={title} 
                        width={30} 
                        height={30} 
                        className='' 
                    />
                    <h3 className='text-xl max-w-48'>
                        {title}
                    </h3>
                    <p className='text-sm pt-40 text-gray-300 pb-4'>
                        {description}
                    </p>
                </div>
                  
          );

        const SetsUpApart = () => (
            <section>
                <div>
                    <div className=" p-40 w-screen bg-zinc-800	">
                        <div className=' text-white '>
                            <div className='max-w-full	  ' >
                                <h2 className='text-5xl p-1 text-center'>
                                    What Sets Us Apart
                                </h2>
                                <div className='flex justify-evenly mt-40'>
                                    <div className='mt-28'>
                                      <ContentBox 
                                          imageSrc="/images/suitcase.png"  
                                          title="Expertise and Experience"
                                          description="Simply dummy text of the printing and typesetting industry."
                                      />
                                    </div>
            
                                    <div className=''>
                                      <ContentBox 
                                          imageSrc="/images/suitcase.png"  
                                          title="Personalized Approach"
                                          description="We provide innovative solutions for modern challenges."
                                      />
                                    </div>
            
                                    <div className='mt-28'>
                                      <ContentBox 
                                          imageSrc="/images/suitcase.png"  
                                          title="Speed & Efficiency"
                                          description="Our clients' satisfaction is our top priority."
                                      />
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            );
            const NewHeight = () => (
              <section>
                  <div>
                
                      <div className=" p-40 w-screen flex items-center justify-center bg-zinc-800	">
                          <div className='text-center text-white'>
                              <div className=''>
                                  <h2 className='text-5xl p-1'>
                                       Climbing <span className='text-lime-300'>new heights together.</span>
                                  </h2>
                                  <p className='text-xl pt-7 pb-10 '>
                                     Isn't just a tagline--it's our mission. We help you reach the top,side by side.
                                  </p>
                                  <button className='bg-white	text-black text-xs p-4'>
                                      Explore our services
                                  </button>
                                  <p className='text-xl pt-12'>
                                     Our team is here for you 24/7.<br></br>
                                     Ready to tackel challenges and celebrate milestones together.
                                  </p>
                                  
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              );

    return (
        <main>
            <DubaiGuid />
            <StoryOfPartnership />
            <YourJourney />
            <SetsUpApart />
            <NewHeight />
            
        </main>
    );
}
