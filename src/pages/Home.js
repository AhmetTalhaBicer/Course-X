import React from "react";
import Footer from "./Footer";
import Gallery from "../components/Gallery";

function Home() {
  return (
    <div className="bg-gray-100 mt-20">
      <div
        className="bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/Category/h1_hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          height: "790px",
          width: "100%",
          opacity: "0.9",
          filter: "sepia(0.1) blur(0.3)",
          color: "white",
        }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            data-animation="fadeInLeft"
            data-delay="0.2s"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight font-poppins text-gray text-left"
            style={{
              animationDelay: "0.2s",
              fontSize: "4.5rem",
              fontFamily: "sans-serif",
              fontWeight: "bold",
              lineHeight: "1.2",
              paddingTop: "14rem",
            }}
          >
            Online Learning Platform
          </h1>

          <p
            data-animation="fadeInLeft"
            data-delay="0.4s"
            className="text-lg text-white mt-4"
            style={{
              animationDelay: "0.4s",
              fontSize: "1.25rem",
              fontFamily: "Mulish",
              lineHeight: "1.5",
              paddingTop: "1rem",
            }}
          >
            Build skills with courses, certificates, and degrees online from
            world-class universities and companies.
          </p>
          <div className="mt-12">
            <a
              href="/courses"
              className="btn hero-btn transform hover:scale-105 duration-300 px-6 py-4 text-lg font-semibold text-white bg-gray-600 rounded-md shadow-md transition-transform"
              data-animation="fadeInLeft"
              data-delay="0.7s"
              tabIndex="0"
              style={{
                animationDelay: "0.7s",
                fontSize: "1.25rem",
                fontFamily: "Josefin Sans",
                borderRadius: "0.25rem",
                backgroundColor: "#FF9F67",
              }}
            >
              Join for Free
            </a>
          </div>
          <div className="grid grid-cols-1 mt-52 md:grid-cols-3 gap-8">
            <InfoBox
              title="40+ UX courses"
              content="Discover a wide range of UX courses to enhance your skills."
              icon="icon1.svg"
            />
            <InfoBox
              title="Expert instructors"
              content="Learn from industry experts with real-world experience."
              icon="icon2.svg"
            />
            <InfoBox
              title="Lifetime access"
              content="Access course materials for a lifetime to learn at your own pace."
              icon="icon3.svg"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-4 px-4 sm:px-6 lg:px-8">
        <div className="mt-10 mb-20">
          <h2 className="section-title text-center mb-10 text-sky-700 text-4xl font-extrabold font-sans">
            Explore Top Subjects
          </h2>
          <Gallery />
        </div>
        <div className="text-center">
          <a
            href="/courses"
            className="btn hero-btn transform hover:scale-105 duration-300 mb-8 px-6 py-4 text-lg font-semibold text-white bg-gray-600 rounded-md shadow-md transition-transform inline-block"
            data-animation="fadeInLeft"
            data-delay="0.7s"
            tabIndex="0"
            style={{
              animationDelay: "0.7s",
              fontSize: "1.25rem",
              fontFamily: "Josefin Sans",
              borderRadius: "0.25rem",
              backgroundColor: "#FF9F67",
            }}
          >
            View More Subjects
          </a>
          <section class="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24 tails-selected-element">
    <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
        <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img src="https://cdn.devdojo.com/images/december2020/productivity.png" class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20"/>
        </div>
        <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">Discover New Skills with Top Instructors</h2>
            <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">Join a global community of learners and gain access to high-quality courses.</p>
            <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
                <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400"><span class="text-sm font-bold">✓</span></span> Maximize productivity and growth
                </li>
                <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400"><span class="text-sm font-bold">✓</span></span> Speed past your competition
                </li>
                <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400"><span class="text-sm font-bold">✓</span></span> Learn the top techniques
                </li>
            </ul>
        </div>
    </div>
    <div class="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
        <div class="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">Join a Global Learning Revolution</h2>
            <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">Connect with a vibrant, global community of learners</p>
            <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
                <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400"><span class="text-sm font-bold">✓</span></span> Automated task management workflow
                </li>
                <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400"><span class="text-sm font-bold">✓</span></span> Detailed analytics for your data
                </li>
                <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400"><span class="text-sm font-bold">✓</span></span> Some awesome integrations
                </li>
            </ul>
        </div>
        <div class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <img src="https://cdn.devdojo.com/images/december2020/settings.png" class="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"/>
        </div>
    </div>
</section>
<section class="py-20 bg-white tails-selected-element">
    <div class="container max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold tracking-tight text-center">Our Features</h2>
        <p class="mt-2 text-lg text-center text-gray-600">Check out our list of awesome features below.</p>
        <div class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">

            <div class="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                <div class="p-3 text-white bg-blue-500 rounded-full" data-primary="blue-500" data-rounded="rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5" class=""></path><circle cx="6" cy="14" r="3"></circle><path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"></path></svg>
                </div>
                <h4 class="text-xl font-medium text-gray-700">Certifications</h4>
                <p class="text-base text-center text-gray-500">Each of our plan will provide you and your team with certifications.</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                <div class="p-3 text-white bg-blue-500 rounded-full" data-primary="blue-500" data-rounded="rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 8a3 3 0 0 1 0 6"></path><path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5"></path><path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8"></path></svg>
                </div>
                <h4 class="text-xl font-medium text-gray-700">Notifications</h4>
                <p class="text-base text-center text-gray-500">Send out notifications to all your customers to keep them engaged.</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                <div class="p-3 text-white bg-blue-500 rounded-full" data-primary="blue-500" data-rounded="rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" class=""></polyline><line x1="12" y1="12" x2="20" y2="7.5"></line><line x1="12" y1="12" x2="12" y2="21" class=""></line><line x1="12" y1="12" x2="4" y2="7.5"></line><line x1="16" y1="5.25" x2="8" y2="9.75"></line></svg>
                </div>
                <h4 class="text-xl font-medium text-gray-700">Bundles</h4>
                <p class="text-base text-center text-gray-500">High-quality bundles of awesome tools to help you out.</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                <div class="p-3 text-white bg-blue-500 rounded-full" data-primary="blue-500" data-rounded="rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 9l3 3l-3 3"></path><line x1="13" y1="15" x2="16" y2="15"></line><rect x="3" y="4" width="18" height="16" rx="2"></rect></svg>
                </div>
                <h4 class="text-xl font-medium text-gray-700">Developer Tools</h4>
                <p class="text-base text-center text-gray-500">Developer tools to help grow your application and keep it up-to-date.</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                <div class="p-3 text-white bg-blue-500 rounded-full" data-primary="blue-500" data-rounded="rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="9.5" y1="11" x2="9.51" y2="11"></line><line x1="14.5" y1="11" x2="14.51" y2="11"></line><path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path><path d="M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3"></path></svg>
                </div>
                <h4 class="text-xl font-medium text-gray-700">Building Blocks</h4>
                <p class="text-base text-center text-gray-500">The right kind of building blocks to take your company to the next level.</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl" data-rounded="rounded-xl" data-rounded-max="rounded-full">
                <div class="p-3 text-white bg-blue-500 rounded-full" data-primary="blue-500" data-rounded="rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="15" y1="5" x2="15" y2="7"></line><line x1="15" y1="11" x2="15" y2="13"></line><line x1="15" y1="17" x2="15" y2="19"></line><path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" class=""></path></svg>
                </div>
                <h4 class="text-xl font-medium text-gray-700">Coupons</h4>
                <p class="text-base text-center text-gray-500">Coupons system to provide special offers and discounts for your app.</p>
            </div>

        </div>
    </div>
</section> <section class="relative py-20 overflow-hidden bg-white tails-selected-element">
    <span class="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
        <span class="container hidden w-screen h-32 max-w-xs mt-20 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-blue-50"></span>
    </span>

    <span class="absolute bottom-0 left-0"> </span>

    <div class="relative px-16 mx-auto max-w-7xl">
        <p class="font-medium text-3xl tracking-wide text-blue-500 uppercase">OUR TEAM</p>
        <h2 class="relative max-w-lg mt-5 mb-10 text-4xl font-semibold leading-tight lg:text-5xl">An incredible team of</h2>
        <div class="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
            <div class="flex flex-col items-center justify-center col-span-1">
                <div class="relative p-5">
                    <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
                    <img class="relative z-20 w-full rounded-full" src="https://cdn.devdojo.com/images/june2021/avt-03.jpg"/>
                </div>
                <div class="mt-3 space-y-2 text-center">
                    <div class="space-y-1 text-lg font-medium leading-6">
                        <h3 class="">Ahmet Talha Biçer</h3>
                        <p class="text-blue-600">CEO and Founder</p>
                    </div>

                </div>
            </div>

            <div class="flex flex-col items-center justify-center col-span-1">
                <div class="relative p-5">
                    <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50"></div>
                    <img class="relative z-20 w-full rounded-full" src="https://cdn.devdojo.com/images/june2021/avt-07.jpg"/>
                </div>
                <div class="mt-3 space-y-2 text-center">
                    <div class="space-y-1 text-lg font-medium leading-6">
                        <h3 class="">Carl Jones</h3>
                        <p class="text-blue-600">Software Developer</p>
                    </div>
                    
                </div>
            </div>

            <div class="flex flex-col items-center justify-center col-span-1">
                <div class="relative p-5">
                    <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-pink-50"></div>
                    <img class="relative z-20 w-full rounded-full" src="https://cdn.devdojo.com/images/june2021/avt-20.jpg"/>
                </div>
                <div class="mt-3 space-y-2 text-center">
                    <div class="space-y-1 text-lg font-medium leading-6">
                        <h3 class="">Susan Peterson</h3>
                        <p class="text-blue-600">Web Developer</p>
                    </div>
                    
                </div>
            </div>

            <div class="flex flex-col items-center justify-center col-span-1">
                <div class="relative p-5">
                    <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50"></div>
                    <img class="relative z-20 w-full rounded-full" src="https://cdn.devdojo.com/images/june2021/avt-09.jpg"/>
                </div>
                <div class="mt-3 space-y-2 text-center">
                    <div class="space-y-1 text-lg font-medium leading-6">
                        <h3>Tommy Barnes</h3>
                        <p class="text-blue-600">Mobile Developer</p>
                    </div>
                    
                </div>
            </div>

            <div class="flex flex-col items-center justify-center col-span-1">
                <div class="relative p-5">
                    <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50"></div>
                    <img class="relative z-20 w-full rounded-full" src="https://cdn.devdojo.com/images/june2021/avt-14.jpg"/>
                </div>
                <div class="mt-3 space-y-2 text-center">
                    <div class="space-y-1 text-lg font-medium leading-6">
                        <h3>Ron Jenson</h3>
                        <p class="text-blue-600">Data Scientist</p>
                    </div>
                   
                </div>
            </div>

            <div class="flex flex-col items-center justify-center col-span-1">
                <div class="relative p-5">
                    <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-pink-50"></div>
                    <img class="relative z-20 w-full rounded-full" src="https://cdn.devdojo.com/images/june2021/avt-13.jpg"/>
                </div>
                <div class="mt-3 space-y-2 text-center">
                    <div class="space-y-1 text-lg font-medium leading-6">
                        <h3 class="">Pete Tompkins</h3>
                        <p class="text-blue-600">Database Specialist</p>
                    </div>
                    
                </div>
            </div>

            <div class="flex flex-col items-center justify-center col-span-1">
                <div class="relative p-5">
                    <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50"></div>
                    <img class="relative z-20 w-full rounded-full" src="https://cdn.devdojo.com/images/june2021/avt-16.jpg"/>
                </div>
                <div class="mt-3 space-y-2 text-center">
                    <div class="space-y-1 text-lg font-medium leading-6">
                        <h3 class="">Kelly Richards</h3>
                        <p class="text-blue-600">Cloud Technologies Expert</p>
                    </div>
                    
                </div>
            </div>

            <div class="flex flex-col items-center justify-center col-span-1">
                <div class="relative p-5">
                    <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
                    <img class="relative z-20 w-full rounded-full" src="https://cdn.devdojo.com/images/june2021/avt-08.jpg"/>
                </div>
                <div class="mt-3 space-y-2 text-center">
                    <div class="space-y-1 text-lg font-medium leading-6">
                        <h3 class="">Alexis Jordan</h3>
                        <p class="text-blue-600">Game Developer</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</section><section class="flex items-center justify-center py-20 bg-white min-w-screen tails-selected-element">
    <div class="px-16 bg-white">
        <div class="container flex flex-col items-start mx-auto lg:items-center">
            <p class="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center" data-primary="purple-500">Don't just take our word for it</p>


            <h2 class="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" class="">
                </path>
            </svg>
                See what others are saying</h2>
                <div class="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full" data-primary="purple-600"></div>

            <div class="items-center justify-center w-full mt-12 mb-4 lg:flex">
                <div class="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
                    <div class="flex items-center justify-center">
                        <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1700&amp;q=80" class="object-cover w-full h-full"/>
                        </div>
                        <div class="flex flex-col items-start justify-center">
                            <h4 class="font-bold text-gray-800">John Doe</h4>
                            <p class="text-gray-600">CEO of Something</p>
                        </div>
                    </div>
                    <blockquote class="mt-8 text-lg text-gray-500">"This is a no-brainer if you want to take your business to the next level. If you are looking for the ultimate toolset, this is it!"</blockquote>
                </div>
                <div class="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
                    <div class="flex items-center justify-center">
                        <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                            <img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2547&amp;q=80" class="object-cover w-full h-full"/>
                        </div>
                        <div class="flex flex-col items-start justify-center">
                            <h4 class="font-bold text-gray-800">Jane Doe</h4>
                            <p class="text-gray-600">CTO of Business</p>
                        </div>
                    </div>
                    <blockquote class="mt-8 text-lg text-gray-500">"Thanks for creating this service. My life is so much
                        easier.
                        Thanks for making such a great product."</blockquote>
                </div>
                <div class="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
                    <div class="flex items-center justify-center">
                        <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                            <img src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1256&amp;q=80" class="object-cover w-full h-full"/>
                        </div>
                        <div class="flex flex-col items-start justify-center">
                            <h4 class="font-bold text-gray-800">John Smith</h4>
                            <p class="text-gray-600">Creator of Stuff</p>
                        </div>
                    </div>
                    <blockquote class="mt-8 text-lg text-gray-500">"Packed with awesome content and exactly what I was
                        looking
                        for. I would highly recommend this to anyone."</blockquote>
                </div>
            </div>
        </div>
    </div>
</section><section class="py-8 leading-7 text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24 tails-selected-element">
    <div class="max-w-6xl px-4 px-10 mx-auto border-solid lg:px-12">
        <div class="flex flex-col items-start leading-7 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row">
            <div class="box-border flex-1 text-center border-solid sm:text-left">
                <h2 class="m-0 text-4xl font-semibold leading-tight tracking-tight text-left text-black border-0 border-gray-200 sm:text-5xl">
                    Boost Your Productivity
                </h2>
                <p class="mt-2 text-xl text-left text-gray-900 border-0 border-gray-200 sm:text-2xl">
                    Our service will help you maximize and boost your productivity.
                </p>
            </div>
            <a href="/courses" class="inline-flex items-center justify-center w-full px-5 py-4 mt-6 ml-0 font-sans text-base leading-none text-white no-underline bg-indigo-600 border border-indigo-600 border-solid rounded cursor-pointer md:w-auto lg:mt-0 hover:bg-indigo-700 hover:border-indigo-700 hover:text-white focus-within:bg-indigo-700 focus-within:border-indigo-700 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl" data-primary="indigo-600" data-rounded="rounded">
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
    </div>
</section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function InfoBox({ title, content, icon }) {
  const iconPath = `/icon/${icon}`;
  return (
    <div className="bg-white rounded-lg p-6 shadow-md flex items-center">
      <img src={iconPath} alt={title} className="w-16 h-16" />
      <div className="ml-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{content}</p>
      </div>
    </div>
  );
}

export default Home;
