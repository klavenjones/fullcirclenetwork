import tw, { css } from "twin.macro";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export const LatestBrands = () => (
  <div tw="max-w-6xl w-full flex mx-auto justify-center items-center py-16 md:justify-start md:px-6">
    <h3 tw="text-2xl md:text-3xl lg:text-4xl text-center mt-2 mb-6 leading-tight">
      Latest Brands
    </h3>
  </div>
);

export const LatestContainer = ({ children }) => (
  <section tw="pb-20 pt-8 mx-auto max-w-6xl">
    <div tw="container mx-auto">
      <div tw="grid grid-cols-1 gap-2 lg:grid-cols-3">{children}</div>
    </div>
  </section>
);

export const BrandItem = ({ brand }) => (
  <div tw="w-full px-4 mb-12">
    <div tw="flex h-96 mb-6">
      <img
        tw="w-full h-full object-cover rounded-lg"
        src={brand.image}
        alt={brand.name}
      />
    </div>
    <span tw="text-xs font-bold text-gray-500">10 jun 2020 19:40</span>
    <h2 tw="mb-2 text-3xl font-bold">{brand.name}</h2>
    <p tw="mb-4 text-lg text-gray-500 leading-loose">{brand.caption}</p>
    <Link href="/brand">
      <a tw="flex items-center text-lg font-bold text-gray-700 transition-all duration-200 cursor-pointer hover:text-red-500">
        <span>Read More</span>
        <span>
          <FaChevronRight tw="ml-1 w-5 h-4" />
        </span>
      </a>
    </Link>
  </div>
);

export const BrandSection = ({ brands }) => (
  <>
    <LatestBrands />
    <LatestContainer>
      {brands.map((brand) => (
        <BrandItem key={brand.name} brand={brand} />
      ))}
    </LatestContainer>
  </>
);
