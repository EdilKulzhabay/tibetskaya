import React from "react";
import { Helmet } from "react-helmet";
import bottle from "../assets/images/appLanding/bottle.webp";
import logoWhite from "../assets/images/appLanding/logo-white.png";
import logoRed from "../assets/images/appLanding/logo-red.png";

const ANDROID_URL =
    "https://play.google.com/store/apps/details?id=com.tibetskayaclientapp";
const IOS_URL = "https://apps.apple.com/kz/app/tibetskaya-client/id6752863490";

const STEPS = [
    {
        number: "01",
        title: "Скачай приложение и пополни баланс",
        text: "Платишь один раз, дальше просто заказываешь без ввода карты каждый раз",
    },
    {
        number: "02",
        title: "Минимальный заказ — 2 бутыля",
        text: "Тару покупаешь один раз (подходит даже от другой компании), дальше только меняешь",
    },
    {
        number: "03",
        title: "Доставка в течение 4 часов",
        text: "Отслеживаешь курьера прямо в приложении",
    },
];

const STATS = [
    { value: "4 ч", label: "доставка" },
    { value: "2", label: "бутыля минимум" },
    { value: "3000 ₸", label: "от заказа" },
];

function DownloadButtons({ className = "" }) {
    return (
        <div className={`flex gap-2.5 lg:gap-3.5 ${className}`}>
            <a
                href={ANDROID_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 lg:flex-none lg:min-w-[230px] flex items-center justify-center min-h-[56px] lg:min-h-[64px] px-6 rounded-2xl lg:rounded-[18px] bg-white text-[#E32219] font-extrabold text-[15px] lg:text-[17px] tracking-[-0.2px] transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-px"
            >
                Скачать для Android
            </a>
            <a
                href={IOS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 lg:flex-none lg:min-w-[230px] flex items-center justify-center min-h-[56px] lg:min-h-[64px] px-6 rounded-2xl lg:rounded-[18px] border-[1.5px] border-white/75 bg-transparent text-white font-extrabold text-[15px] lg:text-[17px] tracking-[-0.2px] transition-colors duration-150 hover:bg-white/[0.14] active:translate-y-px"
            >
                Скачать для iOS
            </a>
        </div>
    );
}

export default function AppLanding() {
    return (
        <>
            <Helmet>
                <title>Тибетская — вода за 4 часа в приложении</title>
                <meta
                    name="description"
                    content="Закажи воду 'Тибетская' в пару кликов в приложении. Доставка за 4 часа, от 2 бутылей за 3000 ₸, без звонков и оптовых закупок."
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
            </Helmet>

            <div style={{ fontFamily: "Manrope, system-ui, sans-serif" }}>
                {/* Hero */}
                <section className="relative overflow-hidden bg-[#E32219] text-white px-5 pt-7 pb-[34px] lg:px-20 lg:pt-7 lg:pb-20">
                    <div className="pointer-events-none absolute -right-[70px] -top-[70px] w-[230px] h-[230px] lg:-right-40 lg:-top-[220px] lg:w-[620px] lg:h-[620px] rounded-full bg-white/[0.08] lg:bg-white/[0.07]" />
                    <div className="pointer-events-none absolute hidden lg:block right-[180px] -bottom-[260px] w-[420px] h-[420px] rounded-full bg-white/5" />

                    <div className="relative flex items-center justify-between mb-11 lg:mb-[84px]">
                        <img
                            src={logoWhite}
                            alt="Тибетская since 1996"
                            className="w-[140px] h-[50px] lg:w-[168px] lg:h-[60px] object-cover"
                        />
                        <div className="flex items-center gap-3 lg:gap-8">
                            <span className="hidden lg:inline text-[13px] font-bold uppercase tracking-[0.7px] text-white/80">
                                Алматы
                            </span>
                            <span className="lg:hidden text-[11px] font-bold uppercase tracking-[0.6px] text-white/80">
                                Алматы
                            </span>
                            <span className="hidden lg:inline-block text-[15px] font-bold text-white bg-white/[0.16] px-5 py-[11px] rounded-full">
                                Доставка за 4 часа
                            </span>
                        </div>
                    </div>

                    <div className="relative lg:grid lg:grid-cols-[minmax(0,640px)_minmax(0,1fr)] lg:gap-20 lg:items-center">
                        <div>
                            <h1 className="m-0 mb-4 text-[36px] leading-[1.05] lg:text-[64px] lg:leading-[1.02] font-extrabold tracking-[-1.4px] lg:tracking-[-2.8px] text-balance">
                                Вода в течение 4&nbsp;часов — закажи в пару
                                кликов в приложении
                            </h1>
                            <p className="m-0 mb-[30px] lg:mb-10 text-base lg:text-xl leading-[1.45] lg:leading-[1.4] font-semibold text-white/[0.88] lg:max-w-[520px] text-balance">
                                Без звонков и оптовых закупок — от 2 бутылей
                                за 3000&nbsp;₸
                            </p>

                            <DownloadButtons />

                            <div className="flex gap-[22px] lg:gap-14 mt-8 lg:mt-14 pt-[22px] lg:pt-8 border-t border-white/25">
                                {STATS.map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="flex flex-col gap-0.5 lg:gap-1"
                                    >
                                        <span className="text-[22px] lg:text-[34px] font-extrabold leading-none tracking-[-0.6px] lg:tracking-[-1.2px]">
                                            {stat.value}
                                        </span>
                                        <span className="text-xs lg:text-sm font-semibold text-white/75">
                                            {stat.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="hidden lg:flex items-center justify-center">
                            <img
                                src={bottle}
                                alt="Бутыль Тибетская 18,9 л"
                                className="h-[520px] w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
                            />
                        </div>
                    </div>
                </section>

                {/* Как это работает */}
                <section className="px-5 pt-9 pb-2 lg:px-20 lg:py-[100px] bg-white">
                    <div className="lg:grid lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-20 lg:items-start">
                        <div className="lg:sticky lg:top-[60px]">
                            <h2 className="m-0 mb-1 lg:mb-4 text-[26px] lg:text-[44px] leading-[1.15] lg:leading-[1.08] font-extrabold tracking-[-0.7px] lg:tracking-[-1.6px] text-[#111]">
                                Как это работает
                            </h2>
                            <p className="hidden lg:block m-0 text-[17px] leading-[1.5] font-medium text-[#6f6f74]">
                                Три шага от установки до бутыли у двери.
                            </p>
                        </div>

                        <div className="flex flex-col">
                            {STEPS.map((step, index) => (
                                <article
                                    key={step.number}
                                    className={`flex gap-[18px] py-[26px] lg:grid lg:grid-cols-[96px_minmax(0,1fr)] lg:gap-8 lg:py-[38px] lg:items-start ${
                                        index < STEPS.length - 1
                                            ? "border-b border-[#ECECEC]"
                                            : ""
                                    }`}
                                >
                                    <span className="flex-none w-10 text-[34px] lg:text-[56px] font-extrabold leading-none text-[#E32219] tracking-[-2px] lg:tracking-[-3px]">
                                        {step.number}
                                    </span>
                                    <div>
                                        <h3 className="m-0 mb-1.5 lg:mb-2.5 text-[18px] lg:text-[26px] leading-[1.25] lg:leading-[1.2] font-extrabold text-[#111] tracking-[-0.4px] lg:tracking-[-0.8px]">
                                            {step.title}
                                        </h3>
                                        <p className="m-0 text-[14.5px] lg:text-[17px] leading-[1.5] lg:leading-[1.55] font-medium text-[#6f6f74] lg:max-w-[640px] text-balance">
                                            {step.text}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="lg:hidden rounded-3xl bg-[#FAFAFA] px-5 pt-5 flex items-end justify-center mb-2">
                        <img
                            src={bottle}
                            alt="Бутыль Тибетская 18,9 л"
                            className="h-[260px] w-auto object-contain"
                        />
                    </div>
                </section>

                {/* CTA */}
                <section className="px-5 pt-[26px] pb-10 lg:px-20 lg:pb-[90px] lg:pt-0 bg-white">
                    <div className="relative overflow-hidden rounded-[28px] lg:rounded-[36px] bg-[#E32219] text-white p-[30px_24px] lg:p-[72px_80px] lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 lg:items-center">
                        <div className="pointer-events-none absolute hidden lg:block -left-[120px] -bottom-[200px] w-[420px] h-[420px] rounded-full bg-white/[0.07]" />

                        <div className="relative">
                            <h2 className="m-0 mb-3 lg:mb-4 text-[28px] lg:text-[48px] leading-[1.1] lg:leading-[1.05] font-extrabold tracking-[-1px] lg:tracking-[-2px] lg:max-w-[620px] text-balance">
                                Установи и закажи воду уже сегодня
                            </h2>
                            <p className="m-0 mb-6 lg:mb-0 text-[15px] lg:text-[19px] leading-[1.45] font-semibold text-white/[0.88] lg:max-w-[560px] text-balance">
                                Оплата с баланса — один раз пополнил, дальше
                                без лишних шагов
                            </p>
                        </div>

                        <div className="relative flex flex-col gap-2.5 lg:gap-3.5 lg:min-w-[280px]">
                            <DownloadButtons className="flex-col" />
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="px-5 pb-9 lg:px-20 lg:pb-14 bg-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1.5 lg:gap-10">
                    <img
                        src={logoRed}
                        alt="Тибетская"
                        className="w-[112px] h-10 lg:w-[134px] lg:h-12 object-cover self-start"
                    />
                    <span className="text-xs lg:text-sm leading-[1.5] text-[#9a9aa0]">
                        Доставка воды с 1996 года.
                    </span>
                </footer>
            </div>
        </>
    );
}
