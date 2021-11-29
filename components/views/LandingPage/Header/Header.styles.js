import tw from "twin.macro";

export const HeaderSection = ({ children }) => (
  <section tw="py-20">
    <div className="container px-4 ml-auto">{children}</div>
  </section>
);

export const HeaderHeadline = ({ subtitle, headline }) => (
  <div tw="max-w-xl mx-auto text-center md:text-right md:max-w-2xl lg:max-w-3xl">
    <span tw="uppercase text-xl text-red-600">{subtitle}</span>
    <h1 tw="mt-2 mb-4 text-4xl lg:text-5xl font-bold leading-tight">
      {headline}
    </h1>
  </div>
);
