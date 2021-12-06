import Link from "next/link";
import tw, { css } from "twin.macro";
import { motion } from "framer-motion";
import { usePalette } from "react-palette";

const reverseImage = css`
  ${tw`order-1 md:order-2`}
`;

const reverseCaption = css`
  ${tw`order-2 md:order-1`}
`;

export const FeaturedContainer = tw.div`grid grid-cols-1 md:grid-cols-2 relative`;

export const FeaturedImage = ({ image, title, secondFeature }) => (
  <div css={[tw`bg-black h-128 md:max-h-128`, secondFeature && reverseImage]}>
    <img
      tw="object-cover object-center bg-top w-full h-full"
      src={image}
      alt={title}
    />
  </div>
);

export const FeaturedOverlay = ({ image, title }) => {
  const { data } = usePalette(image);

  return (
    <motion.div
      css={[
        tw`relative absolute inset-0 bg-gray-800 w-full h-full md:h-auto flex flex-col justify-center text-white`
      ]}
      initial={{
        opacity: 0
      }}
      transition={{ ease: "easeIn", duration: 0.2 }}
      whileHover={{
        opacity: 1
      }}
    >
      <a
        href="#"
        css={[
          tw`absolute inset-0 bg-gray-800 opacity-90 w-full h-full md:h-auto flex flex-col justify-center items-center md:items-start text-white pb-4 px-6 md:px-8 lg:px-10 z-10`,
          css`
            background-image: linear-gradient(
              to left,
              ${data.muted},
              transparent
            );
          `
        ]}
      >
        <h1 tw="text-gray-200 uppercase text-5xl opacity-100">{title}</h1>
      </a>
      <img
        tw="absolute inset-0 w-full h-full object-center object-cover object-center bg-top"
        src={image}
        alt={title}
      />
    </motion.div>
  );
};

export const ShowMore = () => (
  <div tw="w-full bg-red-600 py-20 flex justify-center items-center">
    <Link href="https://klavenjones.com" passHref={true}>
      <a tw="inline-block text-white hover:text-gray-300 transition duration-200 text-xl cursor-pointer md:text-2xl lg:text-4xl">
        Show More
      </a>
    </Link>
  </div>
);

export const FeaturedCaption = ({ image, brand, caption, secondFeature }) => {
  const { data } = usePalette(image);

  return (
    <>
      <div
        css={[
          tw`bg-gray-800 h-128 md:h-auto flex flex-col justify-end text-white pb-4 px-6 md:px-8 lg:px-10`,
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
            <FeaturedOverlay image={feature.image} title={feature.brand} />
          </FeaturedContainer>
        </>
      ))}
      <ShowMore />
    </>
  );
};
