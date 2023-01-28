import React from "react";
import Stars from "./Stars";
import avaColton from "../assets/images/image-colton.jpg";
import avaIrene from "../assets/images/image-irene.jpg";
import avaAnne from "../assets/images/image-anne.jpg";
import CommentCard from "./CommentCard";

export default function SocialProof() {
  return (
    <div>
      {/* container */}
      <div className="flex h-[1530px] w-[375px] justify-center items-center sm:w-full lg:h-screen">
        {/* wrapper */}
        <div className="flex flex-col px-7 gap-5 lg:mx-40">
          <div className="flex flex-col text-center lg:flex-row lg:text-start">
            <div className="flex flex-col lg:flex-row">
              <div className="mb-5 flex flex-col lg:w-[50%] lg:pr-28">
                <article>
                  <h1 className="font-cf-700 text-c-veryDarkMagenta text-5xl mb-5 lg:text-[4rem]">
                    10,000+ of our users love our products.
                  </h1>
                  <p className="text-c-darkGrayishMagenta font-cf-500 text-[17px]">
                    We only provide great products combined with excellent
                    customer service. See what our satisfied customers are
                    saying about our services.
                  </p>
                </article>
              </div>
              {/* rating wrapper */}
              <div className="flex flex-col gap-5 text-center lg:w-[50%] lg:justify-center lg:items-center">
                <div className="bg-c-lighGrayishMagenta rounded-lg lg:w-[445px] lg:self-start">
                  <div className="py-4 lg:flex lg:flex-row lg:justify-center lg:gap-7 lg:items-center lg:py-5">
                    <div className="flex justify-center">
                      <Stars qty="5" />
                    </div>
                    <div className="mt-2 lg:mt-0">
                      <h2 className="font-cf-700 text-c-veryDarkMagenta text-[17px]">
                        Rated 5 Stars in Reviews
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="bg-c-lighGrayishMagenta rounded-lg lg:w-[445px]">
                  <div className="py-4 lg:flex lg:flex-row lg:justify-center lg:gap-7 lg:items-center lg:py-5">
                    <div className="flex justify-center">
                      <Stars qty="5" />
                    </div>
                    <div className="mt-2 lg:mt-0">
                      <h2 className="font-cf-700 text-c-veryDarkMagenta text-[17px]">
                        Rated 5 Stars in Report Guru
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="bg-c-lighGrayishMagenta rounded-lg lg:w-[445px] lg:self-end">
                  <div className="py-4 lg:flex lg:flex-row lg:justify-center lg:gap-7 lg:items-center lg:py-5">
                    <div className="flex justify-center">
                      <Stars qty="5" />
                    </div>
                    <div className="mt-2">
                      <h2 className="font-cf-700 text-c-veryDarkMagenta text-[17px]">
                        Rated 5 Stars in BestTech
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* comments wrapper */}
          <div className="flex flex-col gap-5 mt-9 lg:flex-row lg:justify-center lg:items-center lg:h-[265px]">
            <div className="lg:self-start">
              <CommentCard
                avatar={avaColton}
                name="Colton Smith"
                comment='
            " We needed the same printed design as the one we had ordered
                  a week prior. Not only did thet find the original order, but
                  we also received it in time. Excellent! "
            '
              />
            </div>
            <div>
              <CommentCard
                avatar={avaIrene}
                name="Irene Roberts"
                comment='
            " Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery. "
            '
              />
            </div>
            <div className="lg:self-end">
              <CommentCard
                avatar={avaAnne}
                name="Anne Wallace"
                comment='
            " Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! "
            '
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
