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

    const products = [
        {
            title: "Jasa mengetik",
            description: "Layanan jasa mengetik di TEFA Manajemen Perkantoran menawarkan pengetikan cepat, rapi, dan profesional",
            modalContent: "Layanan jasa mengetik di TEFA Manajemen Perkantoran menawarkan pengetikan cepat, rapi, dan profesional untuk berbagai dokumen seperti tugas, laporan, atau proposal. Dijamin aman, sesuai format, dan dilengkapi revisi agar hasil sempurna. Cocok untuk Anda yang butuh solusi praktis!",
            image: "images/mengetik.png"
        },
        {
            title: "Bayar tagihan listrik",
            description: "kami TEFA Menejemen perkantoran menyediakan layanan pembayaran tagihan listrik",
            modalContent: "Layanan bayar tagihan listrik di TEFA Manajemen Perkantoran memberikan kemudahan bagi masyarakat untuk membayar tagihan listrik secara cepat, aman, dan terpercaya. Dengan sistem yang terintegrasi, pembayaran diproses dengan akurat tanpa antre panjang. Layanan ini juga dilengkapi bukti pembayaran resmi, sehingga Anda tidak perlu khawatir soal validitas. Cocok untuk individu atau perusahaan yang menginginkan kemudahan dalam mengelola tagihan bulanan.",
            image: "images/listrik.png"
        },
        {
            title: "Top-up e-wallet",
            description: "Layanan top-up e-wallet di TEFA Manajemen Perkantoran menyediakan kemudahan isi saldo berbagai e-wallet",
            modalContent: "Layanan top-up e-wallet di TEFA Manajemen Perkantoran menyediakan kemudahan isi saldo berbagai e-wallet secara cepat, aman, dan terpercaya. Prosesnya mudah dengan konfirmasi langsung, cocok untuk kebutuhan harian tanpa ribet.",
            image: "images/topup.png"
        }
    ];

    return (
        <div>
            <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-gray-800">Layanan Kami</h2>
                <br />
                <br />
                <br /> <br /> <br />
            </div>
            <div className="flex flex-wrap justify-center gap-10">
                {products.map((product, index) => (
                    <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow items-center justify-between flex flex-col overflow-hidden">
                        <a href="#">
                            <img className="rounded-t-lg" src={product.image} alt={product.title} />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight">{product.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700">{product.description}</p>
                            <button onClick={() => openModal(product.modalContent)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600 focus:ring-4 focus:outline-none">
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
