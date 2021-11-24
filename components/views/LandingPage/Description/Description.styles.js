import tw, { css } from "twin.macro";

export const DescriptionHeadline = () => (
  <div tw="flex items-center justify-center py-16">
    <h3 tw="text-2xl md:text-4xl mt-2 mb-6 leading-tight">
      What is Full Circle Network?
    </h3>
  </div>
);

export const DescriptionContainer = tw.div`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 border-t border-b py-10`;

export const DescriptionTagline = () => (
  <div tw="flex flex-col items-center py-0 text-center md:items-start md:text-left md:py-20 md:px-6">
    <p tw="text-red-600 text-xl md:pt-1 lg:text-2xl max-w-xs leading-8">
      Just a quick tagline you can write for your company mission.
    </p>
  </div>
);

export const DescriptionText = () => (
  <div tw="px-4 py-10 items-center text-center md:text-left md:py-20 md:px-4">
    <p tw="text-xl lg:text-2xl max-w-lg md:leading-10 lg:leading-10">
      Here is a bunch of filler text, you just replace this text with a brief
      description about your company. Subscribe to newsletters, marketing or
      promotional materials and other information we may send. However, you may
      opt out of receiving any, or all, of these communications from us by
      following the unsubscribe link or instructions provided in any email we
      send.
    </p>
  </div>
);
