import tw from "twin.macro";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactContainer = ({ children }) => (
  <section class="relative py-20">{children}</section>
);

const ContactImage = ({ src }) => (
  <div class="w-full lg:absolute lg:top-0 lg:mt-20 lg:left-0">
    <img
      tw="h-112 w-full lg:w-3/5 lg:pr-8 object-cover lg:rounded-r-xl"
      src="https://images.unsplash.com/photo-1494178270175-e96de2971df9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hcmtldGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
      alt=""
    />
  </div>
);

const ContactInfo = () => (
  <div tw="container px-4 mx-auto mb-10 lg:mb-0">
    <div class="w-full lg:w-1/2 ml-auto">
      <div class="flex flex-wrap lg:h-112 sm:max-w-md lg:ml-auto">
        <div>
          <h2 class="mb-4 text-5xl font-bold">Get questions?</h2>
          <p class="text-gray-500 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
            aliquet orci.
          </p>
        </div>

        <div class="mt-5 lg:mt-auto w-full flex flex-wrap -mx-4">
          <div class="w-full md:w-1/2 px-4 mb-12 lg:mb-0">
            {/* <svg
              class="mb-2"
              width="48"
              height="48"
              viewbox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z"
                fill="#67798E"
              ></path>
              <circle cx="24" cy="24" r="23.5" stroke="#C2C9D2"></circle>
            </svg> */}
            <p tw="text-2xl font-semibold text-gray-800">Follow Us</p>
            <div tw="flex text-gray-500 mt-2">
              <FaInstagram tw="h-5 w-5 mr-4" />
              <FaFacebook tw="h-5 w-5 mr-4" />
              <FaTwitter tw="h-5 w-5" />
            </div>
          </div>
          <div class="w-full md:w-1/2 px-4">
            <svg
              class="mb-2"
              width="48"
              height="48"
              viewbox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z"
                fill="#67798E"
              ></path>
              <circle cx="24" cy="24" r="23.5" stroke="#C2C9D2"></circle>
            </svg>
            <p class="text-2xl font-semibold text-gray-800">Contact Us</p>
            <p class="text-lg text-gray-500 leading-loose">
              hello@wireframes.org
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ContactOG = () => (
  <section class="py-20">
    <div class="px-10 mx-auto mb-20">
      {/* <div class="grid grid-cols-1 gap-6 md:grid-cols-1"> */}
      {/* <div class="w-full">
          <img
            tw="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1494178270175-e96de2971df9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hcmtldGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div> */}
      <div class="grid gap-10 grid-cols-1 justify-items-center border-red-300">
        <div class="w-full px-4 mb-8 lg:mb-0">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl text-center lg:text-5xl font-bold leading-relaxed lg:leading-relaxed">
              Know of any brands you'd like us to highlight? Feel free to hit us
              up!
            </h2>
          </div>
        </div>

        <div class="max-w-lg grid grid-cols-1 gap-1 justify-items-center text-centerß">
          <div>
            {/* <h3 class="mb-4 text-3xl font-bold">Contacts</h3>
            <p class="text-xl text-gray-500">hello@fullcirclenetwork.com</p> */}
            <button class="bg-red-500 text-lg text-white text-bold p-6 rounded-full">
              hello@fullcirclenetwork.com
            </button>
          </div>
          <div class="mt-20">
            <h3 class="mb-8 text-center text-2xl font-bold">Follow Us</h3>
            <div class="flex justify-between w-56 mb-8 text-gray-800">
              <FaInstagram tw="h-10 w-10 mr-6" />
              <FaFacebookF tw="h-10 w-10 mr-6" />
              <FaTwitter tw="h-10 w-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* </div> */}
  </section>
);

export const ContactSection = () => (
  <>
    {/* <ContactContainer>
      <ContactInfo />
      <ContactImage />
    </ContactContainer> */}
    <ContactOG />
  </>
);
