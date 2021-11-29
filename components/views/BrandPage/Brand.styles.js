import tw from "twin.macro";

export const BrandSectionContainer = ({ children }) => (
  <section tw="py-20">
    <div tw="container px-4 mx-auto">{children}</div>
  </section>
);

export const BreadCrumbs = ({ name }) => (
  <div tw="flex mb-2 items-center justify-center">
    <a tw="text-xs text-gray-400" href="#">
      Home
    </a>
    <svg
      tw="w-3 h-3 mx-1 text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewbox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 5l7 7-7 7"
      ></path>
    </svg>
    <a tw="text-xs text-gray-400" href="#">
      Brands
    </a>
    <svg
      tw="w-3 h-3 mx-1 text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewbox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 5l7 7-7 7"
      ></path>
    </svg>
    <a tw="text-xs text-gray-400" href="#">
      {name}
    </a>
  </div>
);

export const BrandInfo = ({ brand }) => (
  <div tw="max-w-2xl mx-auto text-center mb-16">
    <BreadCrumbs name={brand.name} />
    <h2 tw="mb-6 text-4xl lg:text-5xl font-bold">{brand.name}</h2>
    <div tw="flex items-center justify-center">
      <div tw="mr-6">
        <img
          tw="w-16 h-16 object-cover rounded-full"
          src={brand.avatar}
          alt=""
        />
      </div>
      <div>
        <h3 tw="text-2xl font-bold">CEO: {brand.owner}</h3>
        <p tw="text-lg text-gray-500">{brand.date}</p>
      </div>
    </div>
  </div>
);

export const BrandImage = ({ image }) => (
  <div tw="h-112">
    <img tw="w-full h-full object-cover" src={image} alt="" />
  </div>
);

export const BrandMissionStatement = ({ brand }) => (
  <div tw="max-w-2xl mx-auto">
    <h2 tw="mb-4 text-3xl font-bold">Mission Statement</h2>
    <p tw="mb-6 text-lg text-gray-500 leading-loose">
      Building websites from wireframes that I had received. Some of those
      questions were:
    </p>
    <p tw="mb-6 text-lg text-gray-500 leading-loose">
      These types of questions led me to miss numerous deadlines, and I wasted
      time and energy in back-and-forth communication. Sadly, this situation
      could have been avoided if the wireframes had provided enough detail.
    </p>
    <p tw="mb-6 text-lg text-gray-500 leading-loose">
      Now that I am a UX designer, I notice that some designers tend to forget
      that wireframes are equally creative and technical. We are responsible for
      designing great ideas, but we are also responsible for creating product
      specifications. I admit that there can be so many details to remember that
      it’s easy to lose track. To save time and energy for myself, I gathered
      all of my years of wireframing knowledge into a single checklist that I
      refer to throughout the process. And now I am sharing this knowledge with
      you, so that you can get back to being creative.
    </p>
  </div>
);

export const BrandIntro = ({ brand }) => (
  <>
    <BrandSectionContainer>
      <BrandInfo brand={brand} />
    </BrandSectionContainer>
    <BrandImage image={brand.image} />
  </>
);

export const BrandContent = ({ brand }) => (
  <>
    <BrandIntro brand={brand} />
    <BrandSectionContainer>
      <BrandMissionStatement brand={brand} />
    </BrandSectionContainer>
  </>
);
