import React from "react";
import Stars from "./Stars";
import avaColton from "../assets/images/image-colton.jpg";
import avaIrene from "../assets/images/image-irene.jpg";
import avaAnne from "../assets/images/image-anne.jpg";

export default function SocialProof() {
  return (
    <div>
      {/* container */}
      <div className="flex h-[1530px] w-[375px] justify-center items-center">
        {/* wrapper */}
        <div className="flex flex-col text-center px-7 gap-5">
          <div className="mb-5">
            <article>
              <h1 className="font-cf-700 text-c-veryDarkMagenta text-5xl mb-5">
                10,000+ of our users love our products.
              </h1>
              <p className="text-c-darkGrayishMagenta font-cf-500 text-[17px]">
                We only provide great products combined with excellent customer
                service. See what our satisfied customers are saying about our
                services.
              </p>
            </article>
          </div>
          {/* rating wrapper */}
          <div className="flex flex-col gap-5">
            <div className="bg-c-lighGrayishMagenta rounded-lg">
              <div className="py-4">
                <div className="flex justify-center">
                  <Stars qty="5" />
                </div>
                <div className="mt-2">
                  <h2 className="font-cf-700 text-c-veryDarkMagenta text-base">
                    Rated 5 Stars in Reviews
                  </h2>
                </div>
              </div>
            </div>
            <div className="bg-c-lighGrayishMagenta rounded-lg">
              <div className="py-4">
                <div className="flex justify-center">
                  <Stars qty="5" />
                </div>
                <div className="mt-2">
                  <h2 className="font-cf-700 text-c-veryDarkMagenta text-base">
                    Rated 5 Stars in Report Guru
                  </h2>
                </div>
              </div>
            </div>
            <div className="bg-c-lighGrayishMagenta rounded-lg">
              <div className="py-4">
                <div className="flex justify-center">
                  <Stars qty="5" />
                </div>
                <div className="mt-2">
                  <h2 className="font-cf-700 text-c-veryDarkMagenta text-base">
                    Rated 5 Stars in BestTech
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* comments wrapper */}
          <div>
            {/* comment cards */}
            <div className="bg-c-veryDarkMagenta w-full flex flex-col rounded-lg px-7 py-5 justify-start text-[17px]">
              <div className="flex flex-row relative -left-5">
                <div className="rounded-full scale-50 overflow-hidden">
                  <img src={avaColton} alt="profile colton" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div>Colton Smith</div>
                  <div>Verified Buyer</div>
                </div>
              </div>
              <div className="text-start">
                <p>
                  " We needed the same printed design as the one we had ordered
                  a week prior. Not only did thet find the original order, but
                  we also received it in time. Excellent! "
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
