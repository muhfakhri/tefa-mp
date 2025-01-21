import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
    useEffect(() => {
        // Any additional side effects can be added here
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="sm:flex items-center max-w-screen-xl"
        >
            <div className="sm:w-1/2 p-10">
                <div className="image object-center text-center">
                    <img src="about.jpeg" alt="about" className="rounded-lg" />
                </div>
            </div>
            <div className="sm:w-1/2 p-5">
                <div className="text">
                    <span className="text-gray-500 border-b-2 border-purple-600 uppercase">Tentang Kami</span>
                    <h2 className="my-4 font-bold text-3xl sm:text-4xl">
                        Tentang <span className="text-purple-700">Menejemen Perkantoran</span>
                    </h2>
                    <p className="text-gray-700">
                        Program keahlian Manajemen Perkantoran dan Layanan Bisnis di SMK Negeri 1 Bantul dirancang untuk membekali siswa dengan keterampilan dan pengetahuan yang dibutuhkan untuk bekerja secara profesional dalam lingkungan perkantoran dan bisnis modern. Program ini memberikan pemahaman yang mendalam tentang manajemen administrasi perkantoran, pengelolaan informasi, serta layanan bisnis yang efisien dan efektif.
                        <br /> <br />Siswa di jurusan ini akan diajarkan berbagai aspek penting dalam dunia perkantoran, mulai dari administrasi dokumen, manajemen waktu, pengelolaan data, pelayanan pelanggan, hingga penguasaan perangkat lunak perkantoran dan teknologi digital yang semakin berkembang. Keterampilan komunikasi, pengelolaan agenda, serta kemampuan bekerja sama dalam tim juga menjadi fokus penting dalam pembelajaran.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default About;