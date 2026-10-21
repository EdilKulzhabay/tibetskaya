import React, { useRef } from "react";
import Footer from "../../components/Footer";

const OPERATOR_PHONE = "+7 701 531 55 58";
const OPERATOR_MAIL = "info@tibetskaya.kz";

/**
 * Правовой документ приложения «Тибетская Партнер» (оферта, политика конфиденциальности).
 * Страницу открывает приложение партнёра из раздела «Документы», поэтому вёрстка рассчитана на телефон.
 * @param {{ doc: { title: string, edition: string, intro: string[], sections: { heading: string, paragraphs: string[] }[] } }} props
 */
export default function LegalDocumentPage({ doc }) {
    const footerRef = useRef(null);

    return (
        <div className="flex flex-col min-h-screen justify-between">
            <main className="pt-5 px-5 pb-10 max-w-3xl mx-auto w-full space-y-3">
                <h1 className="text-lg font-bold uppercase">{doc.title}</h1>
                <p className="text-sm opacity-70">{doc.edition}</p>
                {doc.intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
                {doc.sections.map((section) => (
                    <section key={section.heading} className="space-y-2 pt-2">
                        <h2 className="font-bold">{section.heading}</h2>
                        {section.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </section>
                ))}
            </main>

            <Footer ref={footerRef} phone={OPERATOR_PHONE} mail={OPERATOR_MAIL} />
        </div>
    );
}
