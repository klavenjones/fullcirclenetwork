import tw from "twin.macro";

export const AboutHeroImage = ({ image }) => (
  <section tw="py-10">
    <div tw="container px-4 mx-auto">
      <div tw="h-128">
        <img tw="w-full h-full object-cover rounded-lg" src={image} alt="" />
      </div>
    </div>
  </section>
);

export const AboutSection = () => (
  <section tw="py-20">
    <div tw="container px-4 mx-auto">
      <div tw="max-w-2xl mx-auto">
        <h2 tw="mb-4 text-3xl font-bold ">
          Full Circle Network is about exposing dope brands.
        </h2>
        <p tw="mb-6 text-lg text-gray-500 leading-loose">
          Building websites from wireframes that I had received. Some of those
          questions were:
        </p>
        <p tw="mb-6 text-lg text-gray-500 leading-loose">
          These types of questions led me to miss numerous deadlines, and I
          wasted time and energy in back-and-forth communication. Sadly, this
          situation could have been avoided if the wireframes had provided
          enough detail.
        </p>
        <p tw="mb-6 text-lg text-gray-500 leading-loose">
          Now that I am a UX designer, I notice that some designers tend to
          forget that wireframes are equally creative and technical. We are
          responsible for designing great ideas, but we are also responsible for
          creating product specifications. I admit that there can be so many
          details to remember that it’s easy to lose track. To save time and
          energy for myself, I gathered all of my years of wireframing knowledge
          into a single checklist that I refer to throughout the process. And
          now I am sharing this knowledge with you, so that you can get back to
          being creative.
        </p>
      </div>
    </div>
  </section>
);
