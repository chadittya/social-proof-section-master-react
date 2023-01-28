import React from "react";

export default function CommentCard(props) {
  return (
    <div>
      {/* comment cards */}
      <div className="bg-c-veryDarkMagenta w-full flex flex-col rounded-lg px-7 py-5 text-[17px]">
        <div className="flex flex-row relative -left-5">
          <div className="rounded-full scale-50 overflow-hidden">
            <img src={props.avatar} alt={`Profil ${props.name}`} />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <h2 className="text-white">{props.name}</h2>
            </div>
            <div>
              <h2 className="text-c-softPink">Verified Buyer</h2>
            </div>
          </div>
        </div>
        <div className="text-start text-white">
          <p>{props.comment}</p>
        </div>
      </div>
    </div>
  );
}
