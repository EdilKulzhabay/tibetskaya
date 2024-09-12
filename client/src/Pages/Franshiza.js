import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

import AboutFranshiza from "../components/AboutFranshiza";
import Head from "../components/Head";
import Big from "../components/Big";
import Footer from "../components/Footer";
import AboutWater from "../components/AboutWater";

export default function Franshiza() {
    const aboutWaterRef = useRef(null);
    const aboutWaterMobRef = useRef(null);
    const franshizaRef = useRef(null);
    const bigRef = useRef(null);
    const bigMobRef = useRef(null);
    const footerRef = useRef(null);

    const scrollToRef = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Сотрудничество с 'Тибетская' - Франшиза</title>
                <meta
                    name="description"
                    content="Информация о сотрудничестве и франшизе с компанией 'Тибетская'. Партнерство и бизнес возможности."
                />
            </Helmet>
            <div className="min-h-screen bg-[#A7D1EC]">
                <div className="pb-10 lg:pb-0">
                    <Head
                        onScrollToRef={scrollToRef}
                        refs={{
                            aboutWaterRef,
                            aboutWaterMobRef,
                            franshizaRef,
                            bigRef,
                            bigMobRef,
                            footerRef,
                        }}
                    />
                </div>

                <div className="md:hidden pb-10">
                    <AboutWater ref={aboutWaterMobRef} />
                </div>

                <AboutFranshiza ref={franshizaRef} />

                <Big refs={{ bigRef, bigMobRef }} />

                <Footer
                    ref={footerRef}
                    phone="+7 747 531 55 58"
                    whatsapp="https://wa.me/77475315558"
                    mail="info@tibetskaya.kz"
                />
            </div>
        </>
    );
}
