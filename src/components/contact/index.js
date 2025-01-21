import React from "react";

const Contact = () => {
    return (
        <div>
          <section class="bg-purple-700 text-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-extrabold text-white">Kunjungi lokasi kami</h2>
            <p class="mt-4 text-lg text-gray-200">informasi lebih detail mengenai kami, Menejemen Perkantoran SMK N 1 BANTUL</p>
        </div>
        <div class="mt-16 lg:mt-20">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d740.1727965640968!2d110.35531597992325!3d-7.889979822997899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7b00889ad8f84d%3A0x2e0009ca7815eaf0!2sSMK%20Negeri%201%20Bantul!5e0!3m2!1sid!2sid!4v1737171443714!5m2!1sid!2si"
                        width="100%" height="480" style={{border: 0}} allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div>
                    <div class="max-w-full mx-auto rounded-lg overflow-hidden">
                        <div class="px-6 py-4">
                            <h3 class="text-lg font-medium text-gray-50">Alamat</h3>
                            <p class="mt-1 text-white">Jl. Parangtritis No.KM.11, Dukuh, Sabdodadi, Kec. Bantul, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55715</p>
                        </div>
                        <div class="border-t border-purple-400 px-6 py-4">
                            <h3 class="text-lg font-medium text-gray-50">Jam Oprasional</h3>
                            <p class="mt-1 text-white">07:00 WIB - 17:00 WIB</p>
                 
                        </div>
                        <div class="border-t border-purple-400 px-6 py-4">
                            <h3 class="text-lg font-medium text-gray-50">Contact</h3>
                            <p class="mt-1 text-white">Email: -</p>
                            <p class="mt-1 text-white">Phone: +6281733505</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>
    )
    };


export default Contact;
