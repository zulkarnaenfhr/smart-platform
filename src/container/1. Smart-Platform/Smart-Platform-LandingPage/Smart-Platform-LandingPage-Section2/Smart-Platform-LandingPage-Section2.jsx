import React, { Component } from "react";
import Cardspllandingpage from "../../../../components/Card/SPL Landing Page/CardSPLLandingPage";
import "./Smart-Platform-LandingPage-Section2.css";

class SmartPlatformLandingpageSection2 extends Component {
    render() {
        return (
            <div id="SPL-LandingPage-Section2">
                <div className="SPL-LandingPage-Section2-Container container">
                    <div className="SPL-LandingPage-Section2-Text-Container">
                        <p data-aos="fade-up" data-aos-offset="200" className="SPL-LandingPage-Section2-Text1">
                            What We're Offering <br /> Services We're Providing To Our Client
                        </p>
                        <h2 data-aos="fade-up" data-aos-offset="200" className="SPL-LandingPage-Section2-Text2">
                            EXPLORE OUR PRODUCT
                        </h2>
                    </div>
                    <div className="SPL-LandingPage-Section2-Card-Container row" data-aos="fade-up" data-aos-offset="200">
                        <div className="col-4">
                            <Cardspllandingpage
                                logoImg={`https://i.ibb.co/gvxh6zL/Section-2-Legal-Analytic.png`}
                                productName={`Legal Analytics `}
                                productDesc={`Merupakan aplikasi berbasis Big Data yang menghimpun seluruh peraturan perundang-undangan tersistem yang akurat, valid, dan up-to-date sehingga memudahkan pengguna`}
                                linkProduct={`notSet`}
                            />
                        </div>
                        <div className="col-4">
                            <Cardspllandingpage
                                logoImg={`https://i.ibb.co/N3R5p16/Section-2-Big-View.png`}
                                productName={`Big View `}
                                productDesc={`Layanan integrated dashboard smart government sistem yang berfungsi untuk menggabungkan data dari berbagai aplikasi vertikal ke dalam sebuah platform yang terintegrasi.`}
                                linkProduct={`notSet`}
                            />{" "}
                        </div>

                        <div className="col-4">
                            <Cardspllandingpage
                                logoImg={`https://i.ibb.co/9gVjVR5/Section-2-Picaso.png`}
                                productName={`Picaso `}
                                productDesc={`Merupakan layanan API membantu para developer dan perusahaan dalam implementasi teknologi AI. Tiga fitur sesuai dengan kebutuhan Anda seperti Optical Character Recognition, Face Recognition, dan Object Detection.`}
                                linkProduct={`notSet`}
                            />{" "}
                        </div>
                    </div>
                    <div className="SPL-LandingPage-Section2-Card-Container row" data-aos="fade-up" data-aos-offset="200">
                        <div className="col-4">
                            <Cardspllandingpage
                                logoImg={`https://i.ibb.co/4ZKX2SL/Section-2-Big-Score.png`}
                                productName={`Telco Risk Scoring `}
                                productDesc={`adalah angka yang memberikan informasi atau kategori Profil Risiko Telkom pelanggan yang mencerminkan seberapa baik atau buruk risiko kredit yang menurut pemberi pinjaman tertentu Anda.`}
                                linkProduct={`notSet`}
                            />
                        </div>
                        <div className="col-4">
                            <Cardspllandingpage logoImg={`https://i.ibb.co/ZJWNHsp/Section-2-Big-Box.png`} productName={`Big Box `} productDesc={`lorem40`} linkProduct={`notSet`} />{" "}
                        </div>
                        <div className="col-4">
                            <Cardspllandingpage
                                logoImg={`https://i.ibb.co/wR4kQDX/Section-2-Smart-Eye.png`}
                                productName={`Smarteye.id `}
                                productDesc={`wujudkan imajinasi anda menjadi kenyataan bersama kami, dengan teknologi virtual dan augmented reality. Beragam produk dan layanan VR dan AR untuk berbagai kebutuhan anda.`}
                                linkProduct={`notSet`}
                            />{" "}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SmartPlatformLandingpageSection2;
