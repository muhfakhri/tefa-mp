import React, { useState } from "react";

const Product = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent("");
    };

    return (
        <div>
            <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-gray-800">Layanan Kami</h2>
                <br />
                <br />
                <br /> <br /> <br />
            </div>
            <div className="flex flex-wrap justify-center gap-10">
                {[1, 2, 3].map((item, index) => (
                    <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow items-center justify-between flex flex-col overflow-hidden">
                        <a href="#">
                            <img className="rounded-t-lg" src="product-test.svg" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <button onClick={() => openModal("Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.")} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600 focus:ring-4 focus:outline-none">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded-lg shadow-lg max-w-md w-full">
                        <h3 className="text-xl font-bold mb-4">More Information</h3>
                        <p className="mb-4">{modalContent}</p>
                        <button onClick={closeModal} className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Product;
