import React from "react";

const Kerjasama = () => {
    return (
        <div className="bg-purple-700 py-20 ">
            <div className="max-w-2xl lg:max-w-4xl mx-auto text-center ">
                <h2 className="text-4xl font-extrabold  p-5 text-white border-b-2 border-purple-500 uppercase">Kerjasama</h2>
                <br />
                <br />
              
            </div>
            <div className="flex flex-wrap justify-center gap-10  p-5">
                <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow items-center justify-between flex flex-col overflow-hidden">
                    <a href="#">
                        <img className="rounded-t-lg w-32 h-32 object-cover" src="images/smkn.png" alt="Kerjasama" />
                    </a>
                </div>
                <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow items-center justify-between flex flex-col overflow-hidden">
                    <a href="#">
                        <img className="rounded-t-lg w-32 h-32 object-cover" src="images/pos.png" alt="Kerjasama" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Kerjasama;
