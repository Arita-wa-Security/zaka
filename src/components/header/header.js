import React from "react";

function Header(){
    return(
<<<<<<< HEAD
        <header>
        {/* <!-- Navigation bar --> */}
        <nav
          classNameName="relative flex w-full items-center justify-between bg-white py-2 shadow-dark-mild dark:bg-body-dark lg:flex-wrap lg:justify-start lg:py-4"
          data-twe-navbar-ref>
          <div classNameName="flex w-full flex-wrap items-center justify-between px-3">
            <div classNameName="flex items-center">
              {/* <!-- Hamburger menu button --> */}
              <button
                classNameName="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
                type="button"
                data-twe-collapse-init
                data-twe-target="#navbarSupportedContentX"
                aria-controls="navbarSupportedContentX"
                aria-expanded="false"
                aria-label="Toggle navigation">
                {/* <!-- Hamburger menu icon --> */}
                <span
                  classNameName="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </span>
              </button>
            </div>
      
            {/* <!-- Navigation links --> */}
            <div
              className="!visible hidden grow basis-[100%] items-center text-center lg:!flex lg:basis-auto lg:text-left"
              id="navbarSupportedContentX"
              data-twe-collapse-item>
              <ul
                className="me-auto flex flex-col lg:flex-row"
                data-twe-navbar-nav-ref>
                {/* <li classNameName="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                  <a
                    className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                    href="#!"
                    data-twe-nav-link-ref
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    >Home</a
                  >
                </li> */}
                {/* <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                  <a
                    className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                    href="#!"
                    data-twe-nav-link-ref
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    >Features</a
                  >
                </li> */}
                {/* <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                  <a
                    className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                    href="#!"
                    data-twe-nav-link-ref
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    >Pricing</a
                  >
                </li> */}
                {/* <li className="mb-2 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                  <a
                    className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                    href="#!"
                    data-twe-nav-link-ref
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    >About</a
                  >
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      
        {/* <!-- Hero section with background image, heading, subheading and button --> */}
        <div
          className="relative h-[350px] overflow-hidden bg-[url('https://tecdn.b-cdn.net/img/new/slides/041.webp')] bg-cover bg-[50%] bg-no-repeat">
          <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
            <div className="flex h-full items-center justify-center">
              <div className="px-6 text-center text-white md:px-12">
                <h1 className="mb-6 text-5xl font-bold">Zaka</h1>
                <h3 className="mb-8 text-3xl font-bold">Subeading</h3>
                <button
                  type="button"
                  className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
                  data-twe-ripple-init
                  data-twe-ripple-color="light">
                  Submit your offering
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>  
   
  )
=======
      <body className="font-poppins bg-black relative">
      <div id="container" className="p-20 w-auto flex px-24 justify-center relative">
        
          <div id="container" className="p-20 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative">
              <div className="mr-10">
                 <img
                   className="rounded-lg min-w-[100px] w-full h-auto md:w-auto md:h-auto"
                   src="https://ucarecdn.com/833d0fe1-c3b5-4843-b62c-fed9467aceeb/imageOfMyself.jpeg"
                   alt="image of myself"
                 />
              </div>
              <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
          <h1 className="text-white font-bold text-3xl mt-6 mb-8">
            Hey it's me, Aydin Vesali Moghaddam
          </h1>
    
          <p className="text-white w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
            I'm Aydin, a 18-year-old high schooler with a passion for web
            development. My tech journey started with HTML, CSS, and JavaScript,
            and I was hooked by the thrill of crafting dynamic, interactive
            websites. As I grew, Node.js and ReactJS became my go-to tools for
            building scalable applications. Feel free
            to connect if you have questions, collaboration ideas, or just want to
            discuss the latest in web development!
          </p>
    
          <div id="social" className="flex flex-wrap justify-start items-center gap-4">
            <a rel="noopener" target="_blank" href="https://github.com/iam-aydin" className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
                <img className="mr-2 hover:scale-105 transition duration-300 ease-in-out" src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg" width="20px" height="20px" alt="Github" />
                <span>Visit my Github</span>
            </a>
            <a rel="noopener" target="_blank" href="https://www.linkedin.com/in/aydin-vesali-moghaddam-82a860275/" className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
                <img className="mr-2 hover:scale-105 transition duration-300 ease-in-out" src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg" width="20px" height="20px" alt="LinkedIn" />
                <span>Follow me on Linkedin</span>
            </a>
            <a rel="noopener" target="_blank" href="https://twitter.com/ichbinaydin" className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
                <img className="mr-2 hover:scale-105 transition duration-300 ease-in-out" src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/" width="20px" height="20px" alt="Twitter" />
                <span>Follow me on Twitter</span>
            </a>
        </div>
        
             
             </div>
        </div>
      </div>
    </body>
    
    )
>>>>>>> 7d684135ba08f2a05b8b9bb44c53ef0157024f84

}

export default Header;