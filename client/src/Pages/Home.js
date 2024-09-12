import React, { useRef, useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import api from "../api";
import { Helmet } from "react-helmet";

import AboutWater from "../components/AboutWater";
import Footer from "../components/Footer";
import Delivery from "../components/Delivery";
import Head from "../components/Head";
import { useParams } from "react-router-dom";

export default function Home() {
    const { id } = useParams();

    const tel = id || "87475315558";

    const [phone, setPhone] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [mail, setMail] = useState("");
    const [products, setProducts] = useState("");
    const [callPhone, setCallPhone] = useState("");

    useEffect(() => {
        const formData = new FormData();
        formData.append("phone", tel);

        api.post("/getFranchiseeByPhone", formData, {
            headers: { "Content-Type": "application/json" },
        })
            .then(({ data }) => {
                setPhone(
                    `+7 ${data.phone.substring(1, 4)} ${data.phone.substring(
                        4,
                        7
                    )} ${data.phone.substring(7, 9)} ${data.phone.substring(9)}`
                );
                setCallPhone(
                    `+7${data.phone.substring(1, 4)}${data.phone.substring(
                        4,
                        7
                    )}${data.phone.substring(7, 9)}${data.phone.substring(9)}`
                );
                setWhatsapp(data.whatsapp);
                setMail(data.mail);

                return api.post("/getProducts", { franchisee: data._id });
            })
            .then(({ data }) => {
                setProducts(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [tel]);

    const aboutWaterRef = useRef(null);
    const aboutWaterMobRef = useRef(null);
    const pricesRef = useRef(null);
    const deliveryRef = useRef(null);
    const footerRef = useRef(null);

    const scrollToRef = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Helmet>
                <title>Тибетская - Качественная Вода</title>
                <meta
                    name="description"
                    content="Узнайте больше о компании 'Тибетская', нашей воде и продукции, включая 19-литровые бутыли и помпы."
                />
            </Helmet>
            <div className="min-h-screen bg-[#A7D1EC]">
                <Head
                    phone={phone}
                    callPhone={callPhone}
                    onScrollToRef={scrollToRef}
                    refs={{
                        aboutWaterRef,
                        aboutWaterMobRef,
                        pricesRef,
                        deliveryRef,
                        footerRef,
                    }}
                />
                <div className="md:hidden">
                    <AboutWater ref={aboutWaterMobRef} />
                </div>

                <section
                    className="container mx-auto px-5 mt-20 lg:px-10 xl:px-24"
                    ref={pricesRef}
                >
                    <div className="bg-[#EF4130] w-10 h-1"></div>
                    <p className="text-[32px] md:text-[40px] font-semibold xl:text-[60px]">
                        ЦЕНЫ
                    </p>

                    <div className="flex flex-col items-center gap-y-8 mt-8 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 md:place-items-stretch">
                        {products.length > 0 &&
                            products.map((item) => (
                                <ProductCard
                                    product={item}
                                    key={item._id}
                                    whatsapp={whatsapp}
                                />
                            ))}
                    </div>
                </section>

                <Delivery ref={deliveryRef} whatsapp={whatsapp} />

                <Footer ref={footerRef} phone={phone} mail={mail} />
            </div>
        </>
    );
}
