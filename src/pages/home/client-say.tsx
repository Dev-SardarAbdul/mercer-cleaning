const ClientSay = () => {
  return (
    <div className="py-10 bg-[#EFF4F3] lg:py-20 my-10 ">
      <div className="px-4 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#040D11]  text-center">
          What Our Clients Say
        </h1>

        <div className="flex flex-col items-end justify-center gap-4 mt-8 lg:mt-20 xl:flex-row">
          <div className="px-5 max-2xl:py-4 py-4 flex flex-col items-start  justify-center  max-xl:min-h-0 max-2xl:min-h-[440px] 2xl:!h-[390px] bg-white rounded-2xl">
            <h2 className="text-xl font-medium text-black">Jordan S.</h2>

            <p className="text-[#0B3B4D] font-light italic max-2xl:leading-[26px] leading-[28px]  pt-2">
              Mercer Cleaning Company is awesome! They came to clean my house,
              and it seriously looks so much better now. The people were super
              nice and got everything done way faster than I thought. They even
              cleaned the hard-to-reach places, which was great because I
              definitely wasn’t going to do it myself. Now my room is spotless,
              and even the kitchen looks brand new. I’d totally recommend them
              if you need someone to clean your house. They really know what
              they’re doing!
            </p>
          </div>

          <div className="px-5 max-2xl:py-4 py-4 flex flex-col items-start  justify-center max-xl:min-h-0 max-2xl:min-h-[300px] 2xl:!h-[370px] bg-white rounded-2xl">
            <h2 className="text-xl font-medium text-black">Imani J.</h2>

            <p className="text-[#0B3B4D] font-light italic max-2xl:leading-[26px] leading-[28px]  pt-2">
              Mercer Cleaning Company did a fantastic job with my home. As a
              busy mom, I don't always have the time to keep everything as clean
              as l'd like, but their team made the entire process hassle-free.
              They arrived on time, worked efficiently, and left my house
              looking amazing. What stood out to me was their professionalism
              and how easy it was to communicate with them throughout the
              process. From booking to the final clean, everything was seamless.
              I would highly recommend them to anyone looking for a reliable
              cleaning service that gets the job done right.
            </p>
          </div>

          <div className="px-5 max-2xl:py-4 py-4 flex flex-col items-start  justify-center max-xl:min-h-0 max-2xl:min-h-[420px] 2xl:!h-[420px] bg-white rounded-2xl">
            <h2 className="text-xl font-medium text-black">Mateo R.</h2>

            <p className="text-[#0B3B4D] font-light italic max-2xl:leading-[26px] leading-[28px]  pt-2">
              Mercer Cleaning Company exceeded my expectations. They were
              punctual and very professional, but what really stood out was
              their thoroughness. Every surface was not only cleaned but
              polished to perfection. I was also impressed by how they respected
              my space, working quietly and efficiently without disrupting my
              day. They even went the extra mile by taking care of small details
              I hadn't even mentioned. The pricing was transparent with no
              surprises, and the overall experience left me confident that I'll
              be using their services regularly. If you're looking for top-notch
              cleaning, this is the company to go with.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSay;
