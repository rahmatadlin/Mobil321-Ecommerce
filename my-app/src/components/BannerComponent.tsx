import React from "react";

const BannerComponent = () => {
  return (
    <>
      {/* Banner Start */}
      <div className="flex flex-row w-[100%] h-[10%] rounded-2xl relative shadow-lg">
        <img
          src="https://www.topgear.com/sites/default/files/2021/08/ROW02302.jpg"
          className="object-cover w-[100%] h-[30%] rounded-2xl"
        />
        <div className="absolute flex-col flex justify-center w-[100%] items-start px-12 h-full bg-gradient-to-r from-[#000000c0] to-[#00000030] rounded-2xl">
          <p className="font-bold text-[40px]">Dapatkan Penawaran dengan Harga Terbaik</p>
          {/* Text Input */}
         <br />
          <p className="w-[30%] text-xxl text-gray-300 leading-5 ">
            Tentukan Mobil Impian Anda Mulai Hari Ini. Mobil 321 Tetap Terus Mempertahankan Harga yang Terbaik.
          </p>
        </div>
      </div>
    </>
  );
};

export default BannerComponent;
