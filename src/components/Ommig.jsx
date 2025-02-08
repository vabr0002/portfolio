import React from "react";

const Ommig = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center px-6">
      <section className="max-w-7xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Om mig</h1>
        <p className="mb-6">
          Mere beskrivende tekst Lorem, ipsum dolor sit amet consectetur
          adipisicing elit...
        </p>
        <div className="flex flex-row gap-4 h-[50vh] mx-4">
          <img
            src="/matthew-henry-VviFtDJakYk-unsplash.jpg"
            alt=""
            className="w-[calc(33.33%-15px)] h-full object-cover rounded-lg"
          />
          <img
            src="/parrish-freeman-P6OPPjvx4tk-unsplash.jpg"
            alt=""
            className="w-[calc(33.33%-15px)] h-full object-cover rounded-lg"
          />
          <img
            src="/ricardo-gomez-angel-opFPVxMRpP8-unsplash.jpg"
            alt=""
            className="w-[calc(33.33%-15px)] h-full object-cover rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Ommig;
