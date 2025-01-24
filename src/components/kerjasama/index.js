import React from "react";

const Kerjasama = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white">Kerjasama</h2>
      </div>
      <div className="mt-16 max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="flex flex-col items-center p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img className="w-24 h-24 object-contain" src="images/smkn.png" alt="SMKN 1 Bantul" />
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img className="w-24 h-24 object-contain" src="images/pos.png" alt="PT Pos Indonesia" />
          </div>
          {/* Add more partnership items as needed */}
        </div>
      </div>
    </div>
  );
};

export default Kerjasama;