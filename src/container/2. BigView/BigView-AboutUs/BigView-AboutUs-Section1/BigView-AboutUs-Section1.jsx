import React, { Component } from "react";
import "./BigView-AboutUs-Section1.css";

class BigviewAboutusSection1 extends Component {
    render() {
        return (
            <div id="BigViewAboutUs-Section1">
                <div className="BigViewAboutUs-Section1-Content-Container">
                    <img className="BigViewAboutUs-Section1-Background" src={require("../../../../src/Big-View/BigView-AboutUs/Section1-Background.png")} alt="" />
                    <h1 className="BigViewAboutUs-Section1-Title">About Us</h1>
                    <p className="BigViewAboutUs-Section1-Desc1">
                        Big View adalah sebuah sistem yang berfungsi untuk meng-Integrasikan Data dari berbagai aplikasi vertikal ke dalam sebuah platform horisontal sehingga seluruh data tersebut terintegrasi dalam satu database menuju
                        terwujudnya SATU DATA dan menjadi cikal bakal <span> BIG DATA</span>
                    </p>
                    <p className="BigViewAboutUs-Section1-Desc2">
                        Integrasi data akan memudahkan Pemerintah dalam melakukan Monitoring Performansi dan Kinerja tiap SKPD berdasarkan parameter Indikator Kinerja Utama <span> (IKU)</span>. Performansi kinerja dan berbagai informasi
                        dapat ditampilkan dalam bentuk Executive Dashboard yang bisa ditempatkan dalam sebuah Command Center
                    </p>
                </div>
            </div>
        );
    }
}

export default BigviewAboutusSection1;
