import React from "react";
import "../header/header.css"

function Header(){
    return (
      <body className="sm:font-poppins sm:bg-white relative">
        <div
          id="container"
          className="p-20 w-auto flex px-24 justify-center relative"
        >
          <div
            id="container"
            className="p-20 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative"
          >
            <div className="mr-10 sm:w-16 md:w-20 lg:w-24 xl:w-20">
              {/* <img
                   className="rounded-lg min-w-[100px] w-full h-auto md:w-auto md:h-auto"
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMwjitFKJGaGoMmOhT8TxWhH4ML9v5yvojog&s"
                   alt="image of myself"
                 /> */}
            </div>
            <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
              <h1 className="text-white font-bold text-3xl mt-6 mb-8">
                Hi there, welcome to Zaka
              </h1>

              <p className="text-black w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
                Welcome to our Tithe and Offering page, where giving is made
                simple, secure, and meaningful. 
                By giving your tithes and offerings, you actively participate in
                God’s mission, fulfilling His call to stewardship and
                generosity. <br />The Bible reminds us in Malachi 3:10 (NIV): <br /><span className="italic">
                "Bring
                the whole tithe into the storehouse, that there may be food in
                my house. Test me in this,” says the Lord Almighty, “and see if
                I will not throw open the floodgates of heaven and pour out so
                much blessing that there will not be room enough to store it."
                </span><br />
                
              </p>

              <div
                id="offering"
                className="block md:flex flex-wrap justify-start items-center gap-4 "
              >
                <a
                  rel="noopener"
                  target="_blank"
                  href="/offertory"
                  className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
                >
                  <img
                    className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                    src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg"
                    width="20px"
                    height="20px"
                    alt="Github"
                  />
                  <span>Visit my Github</span>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </body>
    );

}

export default Header;