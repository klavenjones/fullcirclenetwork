import tw, { css } from "twin.macro";
import { usePalette } from "react-palette";

const reverseImage = css`
  ${tw`order-1 md:order-2`}
`;

const reverseCaption = css`
  ${tw`order-2 md:order-1`}
`;

export const FeaturedContainer = tw.div`grid grid-cols-1 md:grid-cols-2`;

export const FeaturedImage = ({ image, title, secondFeature }) => (
  <div css={[tw`bg-black h-96 md:max-h-100`, secondFeature && reverseImage]}>
    <img tw="object-cover w-full h-full" src={image} alt={title} />
  </div>
);

export const FeaturedCaption = ({ image, brand, caption, secondFeature }) => {
  const { data, loading, error } = usePalette(image);
  
  return (
    <>
      <div
        css={[
          tw`bg-gray-800 h-96 md:h-auto flex flex-col justify-end text-white pb-4 px-6 md:px-8 lg:px-10`,
          css`
            background: ${data && data.muted};
          `,
          secondFeature && reverseCaption
        ]}
      >
        <div tw="max-w-md text-left">
          <span tw="text-gray-200 uppercase text-lg">{brand}</span>
          <h3 tw="mt-2 mb-4 text-2xl lg:text-3xl font-semibold">{caption}</h3>
        </div>
      </div>
    </>
  );
};

export const FeaturedSection = ({ featured }) => {
  return (
    <>
      {featured.map((feature, index) => (
        <>
          <FeaturedContainer>
            <FeaturedImage
              image={feature.image}
              title={feature.brand}
              secondFeature={(index + 1) % 2 === 0}
            />
            <FeaturedCaption
              caption={feature.caption}
              brand={feature.brand}
              image={feature.image}
              secondFeature={(index + 1) % 2 === 0}
            />
          </FeaturedContainer>
        </>
      ))}
    </>
  );
};
