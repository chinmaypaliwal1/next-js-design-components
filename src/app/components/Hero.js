'use client';

import React from 'react';
import Image from 'next/image';

import { useState } from 'react';

export default function Hero() {
    const DubaiGuid = () => (
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

    const UnderstandingJourney = () => (
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
            <Image src={imageSrc} alt={title} width={30} height={30} />
            <h3 className='text-xl max-w-48'>{title}</h3>
            <p className='text-sm pt-40 text-gray-300 pb-4'>{description}</p>
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

    
const OurServices = () => {
  const [visibleService, setVisibleService] = useState(null);

  const services = [
    {
      title: 'F',
      header: 'Foundation',
      description: 'Description of foundation.',
      items: [
        { icon: '/images/market-research.png', label: 'Market Research' },
        { icon: '/images/market-research.png', label: 'Feasibility Study/Business Plan' },
        { icon: '/images/market-research.png', label: 'Business Consultation' },
      ],
    },
    {
      title: 'A',
      header: 'Advancement',
      description: '5THIS ISHHD YE D.',
      items: [
        { icon: '/images/market-research.png', label: 'Market Research' },
        { icon: '/images/market-research.png', label: 'Feasibility Study/Business Plan' },
        { icon: '/images/market-research.png', label: 'Business Consultation' },
      ],
    },
  ];

  const toggleOurServicesVisibility = (index) => {
    setVisibleService(visibleService === index ? null : index);
  };

  return (
    <section>
      <div className="p-40 w-screen items-center justify-center bg-zinc-800">
        <div className="text-white">
          <div className="flex justify-between">
            <div className="max-w-3xl">
              <h2 className="text-5xl">Our Services</h2>
              <p className="text-l text-gray-400 pt-7">
                Isn't just a tagline--it's our mission. We help you reach the top, side by side. Isn't just a tagline--it's our mission. We help you reach the top, side by side.
              </p>
              <p className="text-l text-gray-400 pt-7">
                Our team is here for you 24/7. Ready to tackle challenges and celebrate milestones together.
              </p>
            </div>
            <div>
              <Image
                src="/images/office-girlicon.png"
                alt="Office Girl Icon"
                width={200}
                height={200}
                className="float-right"
              />
            </div>
          </div>
        </div>

        {/* Services */}
        {services.map((service, index) => (
          <div className="flex bg-zinc-700 mt-10" key={index}>
            <div className="bg-blue-700 p-5 flex items-center text-white">
              <h2
                className="text-center cursor-pointer"
                onClick={() => toggleOurServicesVisibility(index)}
              >
                {service.title}
              </h2>
            </div>
            <div
              className={`flex justify-between w-full text-white p-5 overflow-hidden transition-max-height duration-500 ease-in-out ${
                visibleService === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="flex flex-col mb-auto mt-auto">
                <h2
                  className="text-xl uppercase cursor-pointer"
                  onClick={() => toggleOurServicesVisibility(index)}
                >
                  {service.header}
                </h2>
                <p className="text-gray-400">{service.description}</p>
              </div>
              <div className="flex flex-col items-end">
                {service.items.map((item, itemIndex) => (
                  <div
                    className="flex flex-row p-1 bg-zinc-600 max-w-fit mb-4"
                    key={itemIndex}
                  >
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={30}
                      height={30}
                      className=""
                    />
                    <button className="">{item.label}</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

    const FaqSection = () => {
      const [visibleFaq, setVisibleFaq] = useState(null);
    
      const faqs = [
        { question: 'What services do you offer?', answer: 'We offer a wide range of services including web development, mobile app development, and digital marketing.' },
        { question: 'How can I get in touch with you?', answer: 'You can contact us via email, phone, or through our website’s contact form.' },
        { question: 'What are your business hours?', answer: 'Our business hours are Monday to Friday, 9 AM to 5 PM.' },
        { question: 'Do you offer custom services?', answer: 'Yes, we tailor our services to meet the specific needs of each client.' },
      ];
    
      const toggleFaqVisibility = (index) => {
        setVisibleFaq(visibleFaq === index ? null : index);
      };
    
      return (
        <section className="bg-lime-400 p-10 text-black">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-4xl font-normal mb-4">FAQs</h2>
              <p>Have questions? We have answered the most frequently asked ones here.</p>
            </div>
            <div className="space-y-3 p-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white">
                  <div
                    className="w-full text-left py-6 flex justify-between items-center p-8 cursor-pointer"
                    onClick={() => toggleFaqVisibility(index)}
                  >
                    <span className="text-l font-normal text-black">{faq.question}</span>
                    <Image
                      src="/images/arrow-down.png"
                      alt="Toggle FAQ visibility"
                      width={30}
                      height={30}
                      className={`transform transition-transform ${visibleFaq === index ? 'rotate-180' : ''}`}
                    />
                  </div>
                  <div
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                      visibleFaq === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="py-2 text-gray-700 p-8">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p>Have any other questions? Call us to have them answered.</p>
              <button className="bg-white text-black font-bold text-xs p-3 mt-6">
                Call The First Partner
              </button>
            </div>
          </div>
        </section>
      );
    };
    

    const StartYourJourney = () => {
      const boxes = [
        {
          title: "Mainland",
          description: "Start Your Mainland Journey ",
          imageSrc: "/images/background.jpg",
        },
        {
          title: "Mainland",
          description: "Start Your Mainland Journey ",
          imageSrc: "/images/background.jpg",
        },
        {
          title: "Mainland",
          description: "Start Your Mainland Journey ",
          imageSrc: "/images/background.jpg",
        },
      ];
    
      return (
        <section className="w-screen flex flex-col items-center bg-white p-10">
          <div className="max-w-6xl w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {boxes.map((box, index) => (
                <div
                  key={index}
                  className="relative bg-cover bg-center h-80"
                  style={{ backgroundImage: `url(${box.imageSrc})` }}
                >
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <div className="relative z-10 flex flex-row  justify-between  h-full  text-white p-6">
                    <div className='flex items-start flex-wrap flex-col justify-end'>
                    <h2 className="text-3xl font-bold">{box.title}</h2>
                      <p className="text-lg mt-4">{box.description}</p>
                    </div>
                      <div className='absolute right-3 bottom-14	'>
                      <Image 
                          src="/images/next.png"  
                          alt="Descriptive text for the image" 
                          width={30}
                          height={30} 
                          className='	' 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

      
    };
    
    const AllPage = () => {
     
    
      return (
        <section className="w-full flex flex-col items-center bg-slate-300 p-10">
        <div className="max-w-full w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className='flex flex-col'>
              <div className="relative bg-cover bg-center h-80">
                <div className="relative z-10 flex flex-col justify-between h-full text-black bg-white p-6">
                  <Image
                  src ="/images/market-research.png"
                  alt="Descriptive text for the image" 
                      width={100}
                      height={30} 
                      className='h-30 ' 

                  />
                  <div className='flex items-start flex-wrap flex-col justify-end'>
                    <h2 className="text-2xl border-b border-gray w-full py-4">About Us</h2>
                    <p className="text-lg mt-4">From start to finish , we provide end-to0end support to ensure your business succeds</p>
                  </div>
                  <div className='absolute right-3 bottom-28'>
                    <Image 
                      src="/images/next.png"  
                      alt="Descriptive text for the image" 
                      width={30}
                      height={30} 
                      className='' 
                    />
                  </div>
                </div>
              </div>
                 <div className='mt-4 relative'>
                    <div className=' bg-white p-4' >
                            <h2 className="text-2xl py-4">FAQs</h2>
                          </div>
                          <div className='absolute right-3 bottom-10'>
                            <Image 
                              src="/images/next.png"  
                              alt="Descriptive text for the image" 
                              width={30}
                              height={30} 
                              className='' 
                            />
                    </div>
                 </div>
              </div>
              <div className='flex flex-col'>
              <div className="relative bg-cover bg-center h-80">
                <div className="relative z-10 flex flex-col justify-between h-full text-black bg-white p-6">
                  <Image
                  src ="/images/market-research.png"
                  alt="Descriptive text for the image" 
                      width={100}
                      height={30} 
                      className='h-30 ' 

                  />
                  <div className='flex items-start flex-wrap flex-col justify-end'>
                    <h2 className="text-2xl border-b border-gray w-full py-4">Contact Us</h2>
                    <p className="text-lg mt-4">From start to finish , we provide end-to0end support to ensure your business succeds</p>
                  </div>
                  <div className='absolute right-3 bottom-28'>
                    <Image 
                      src="/images/next.png"  
                      alt="Descriptive text for the image" 
                      width={30}
                      height={30} 
                      className='' 
                    />
                  </div>
                </div>
              </div>
                 <div className='mt-4 relative'>
                    <div className=' bg-white p-4' >
                            <h2 className="text-2xl py-4">Testimonials</h2>
                          </div>
                          <div className='absolute right-3 bottom-10'>
                            <Image 
                              src="/images/next.png"  
                              alt="Descriptive text for the image" 
                              width={30}
                              height={30} 
                              className='' 
                            />
                    </div>
                 </div>
              </div>
              <div className='flex flex-col'>
              <div className="relative bg-cover bg-center h-80">
                <div className="relative z-10 flex flex-col justify-between h-full text-black bg-white p-6">
                  <Image
                  src ="/images/market-research.png"
                  alt="Descriptive text for the image" 
                      width={100}
                      height={30} 
                      className='h-30 ' 

                  />
                  <div className='flex items-start flex-wrap flex-col justify-end'>
                    <h2 className="text-2xl border-b border-gray w-full py-4">Blogs</h2>
                    <p className="text-lg mt-4">From start to finish , we provide end-to0end support to ensure your business succeds</p>
                  </div>
                  <div className='absolute right-3 bottom-28'>
                    <Image 
                      src="/images/next.png"  
                      alt="Descriptive text for the image" 
                      width={30}
                      height={30} 
                      className='' 
                    />
                  </div>
                </div>
              </div>
                 <div className='mt-4 relative'>
                    <div className=' bg-white p-4' >
                            <h2 className="text-2xl  py-4">Success Stories</h2>
                          </div>
                          <div className='absolute right-3 bottom-8'>
                            <Image 
                              src="/images/next.png"  
                              alt="Descriptive text for the image" 
                              width={30}
                              height={30} 
                              className='' 
                            />
                    </div>
                 </div>
              </div>
          </div>
        </div>
      </section>
      );
              }
    
     const AccountingRegistration = () => {
     
        return (
          <section className="w-full flex flex-col items-center bg-slate-300 p-10">
          <div className="max-w-full w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              {/* Grid Item 1 */}
              <div className="flex flex-col">
                <div className="relative bg-cover bg-center h-80">
                  <div className="relative z-10 flex flex-col justify-between h-full text-black bg-white p-6">
                    <Image
                      src="/images/market-research.png"
                      alt="Descriptive text for the image"
                      width={100}
                      height={30}
                      className="h-30"
                    />
                    <div className="flex items-start flex-wrap flex-col justify-end">
                      <h2 className="text-2xl border-b border-gray w-full py-4">About Us</h2>
                      <p className="text-lg mt-4">From start to finish, we provide end-to-end support to ensure your business succeeds.</p>
                    </div>
                    <div className="absolute right-3 bottom-28">
                      <Image
                        src="/images/next.png"
                        alt="Descriptive text for the image"
                        width={30}
                        height={30}
                        className=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Grid Item 2 */}
              <div className="flex flex-col">
                <div className="relative bg-cover bg-center h-80">
                  <div className="relative z-10 flex flex-col justify-between h-full text-black bg-white p-6">
                    <Image
                      src="/images/market-research.png"
                      alt="Descriptive text for the image"
                      width={100}
                      height={30}
                      className="h-30"
                    />
                    <div className="flex items-start flex-wrap flex-col justify-end">
                      <h2 className="text-2xl border-b border-gray w-full py-4">Contact Us</h2>
                      <p className="text-lg mt-4">From start to finish, we provide end-to-end support to ensure your business succeeds.</p>
                    </div>
                    <div className="absolute right-3 bottom-28">
                      <Image
                        src="/images/next.png"
                        alt="Descriptive text for the image"
                        width={30}
                        height={30}
                        className=""
                      />
                    </div>
                  </div>
                </div>
                
              </div>
        
              {/* Grid Item 3 - Last Item */}
              <div className="flex flex-col lg:col-span-1">
                <div className="relative bg-cover bg-center h-80">
                  <div className="relative z-10 flex flex-col justify-between h-full text-black bg-white p-6">
                    <Image
                      src="/images/market-research.png"
                      alt="Descriptive text for the image"
                      width={100}
                      height={30}
                      className="h-30"
                    />
                    <div className="flex items-start flex-wrap flex-col justify-end">
                      <h2 className="text-2xl border-b border-gray w-full py-4">Blogs</h2>
                      <p className="text-lg mt-4">From start to finish, we provide end-to-end support to ensure your business succeeds.</p>
                    </div>
                    <div className="absolute right-3 bottom-28">
                      <Image
                        src="/images/next.png"
                        alt="Descriptive text for the image"
                        width={30}
                        height={30}
                        className=""
                      />
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
            <div className="relative flex flex-col lg:col-span-3 mt-4 max-w-4xl ">
            
              <div className=" bg-white p-4 flex flex-row">
              <Image
                  src="/images/market-research.png"
                  alt="Descriptive text for the image"
                  width={50}
                  height={400}
                  className=""
                />
                <h2 className="text-2xl py-4 mx-10	">ESR</h2>
                <span className='border-l '></span>
                <h2 className="text-2xl py-4 mx-10	">UBO</h2>
                <span className='border-l '></span>
                <h2 className="text-2xl py-4 mx-10">AML</h2>
              </div>
              <div className="absolute right-3 bottom-8">
                <Image
                  src="/images/next.png"
                  alt="Descriptive text for the image"
                  width={30}
                  height={30}
                  className=""
                />
              </div>
            </div>
            
          </div>
        </section>
        
      ); 
    }
              
              

    return (
        <main>
            <DubaiGuid />
            <StoryOfPartnership />
            <UnderstandingJourney /> 
            <SetsUpApart />
            <NewHeight />
            <OurServices />
            <FaqSection />
            <StartYourJourney />
            <AllPage />
            <AccountingRegistration />
        </main>
    );
}
