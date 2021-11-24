import tw, { css } from "twin.macro";

const reversedOrder = css`
  ${tw`order-last lg:order-first`}
`;

export const BrandListContainer = ({ children }) => (
  <section class="py-20">
    <div class="container px-4 mx-auto">{children}</div>
  </section>
);

export const BrandListHeadline = () => (
  <div tw="max-w-3xl mb-16">
    <span tw="inline-block mb-2 text-sm uppercase text-red-500">
      Lorem ipsum
    </span>
    <h2 tw="mb-4 text-4xl lg:text-5xl font-bold">FEATURED BRANDS</h2>
    <p tw="mb-6 lg:mb-12 text-lg text-gray-600 leading-loose">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
      massa nibh, pulvinar vitae aliquet nec, accumsan aliquet orci.
    </p>
  </div>
);

export const BrandListItem = ({ brand, reversed }) => (
  <div tw="grid grid-cols-1 md:grid-cols-2">
    <div tw="w-full px-4">
      <div tw="text-left lg:max-w-xs">
        <span tw="text-xs px-2 py-1 rounded uppercase text-red-500 font-semibold bg-red-50 text-red-500">
          {brand.name}
        </span>
        <h2 tw="mt-2 mb-4 text-3xl font-bold ">{brand.caption}</h2>
        <span tw="inline-block mb-4 text-xs font-bold text-gray-600">
          {brand.date}
        </span>
        <p tw="text-lg text-gray-600 leading-loose">{brand.snippet}</p>
      </div>
    </div>
    <div
      css={[
        `w-full px-4 mb-8 lg:mb-0`,
        `${reversed ? reversedOrder : `order-first lg:order-last`}`
      ]}
    >
      <div tw="h-96">
        <img
          class="w-full h-full object-cover rounded-lg"
          src={brand.image}
          alt=""
        />
      </div>
    </div>
  </div>
);

export const BrandsList = ({ brands }) => (
  <BrandListContainer>
    <BrandListHeadline />
    {brands.map((brand, index) => (
      <BrandListItem brand={brand} reversed={(index + 1) % 2 === 0} />
    ))}
  </BrandListContainer>
);
