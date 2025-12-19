import { forwardRef } from "react";
import apple from "../assets/images/apple.png";
import android from "../assets/images/android.png";

const AboutWater = forwardRef((porps, ref) => {
    return (
        <>
            <section className="container mx-auto px-5 mt-3" ref={ref}>
                {/* Кнопки скачивания приложения */}
                <div className="mt-10 mb-10 flex flex-col sm:flex-row gap-4 items-stretch justify-center">
                    {/* Кнопка App Store */}
                    <a
                        href="https://apps.apple.com/kz/app/tibetskaya-client/id6752863490"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                    >
                        <img src={apple} alt="app store" className="w-6 h-6" />
                        <div className="flex flex-col">
                            <span className="text-[10px] leading-tight">
                                Download on
                            </span>
                            <span className="text-sm font-semibold leading-tight">
                                App Store
                            </span>
                        </div>
                    </a>

                    {/* Кнопка Скачать APK */}
                    <button
                        onClick={() => {
                            const link = document.createElement("a");
                            link.href = "/app.apk";
                            link.download = "tibetskaya.apk";
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}
                        className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity hover:cursor-pointer"
                    >
                        <img src={android} alt="android" className="w-6 h-6" />
                        <span className="text-sm font-semibold">
                            СКАЧАТЬ APK
                        </span>
                    </button>
                </div>
                <div className="bg-[#EF4130] w-10 h-1"></div>
                <p className="text-[32px] md:text-[40px] font-semibold">
                    О воде
                </p>
                <p className="mt-8 text-[15px] md:text-xl">
                    «Тибетская» - один из первых брендов воды в Казахстане,
                    который завоевал сердца многих потребителей благодаря своему
                    безукоризненному качеству и уникальности. История этой воды
                    насчитывает почти тридцать лет, и за это время она
                    зарекомендовала себя, как одна из самых уникальных и
                    качественных водных брендов на рынке.
                    <br />
                    <br />
                    Вода «Тибетская» разливается из высокогорных источников,
                    расположенных в живописном районе Алматы. Вода проходит
                    через несколько стадий фильтрации и очистки, чтобы удалить
                    излишки минералов и примесей, оставив только свежий и чистый
                    вкус.
                </p>
                <p className="mt-8 text-[22px] md:text-[28px] font-medium">
                    Основной состав воды (мг/дм³)
                </p>
                <div className="grid grid-cols-5 mt-4 border border-black rounded-md text-[15px] md:text-lg lg:max-w-max">
                    <div className="py-1 px-2 text-center border-r border-black">
                        HCO³
                    </div>
                    <div className="py-1 px-2 text-center border-r border-black">
                        Ca²
                    </div>
                    <div className="py-1 px-2 text-center border-r border-black">
                        Mg²
                    </div>
                    <div className="py-1 px-2 text-center border-r border-black">
                        SO²4
                    </div>
                    <div className="py-1 px-2 text-center">Cl²</div>
                    <div className="py-1  text-center border-t border-r border-black">
                        50-85,4
                    </div>
                    <div className="py-1 text-center border-t border-r border-black">
                        10-14
                    </div>
                    <div className="py-1 text-center border-t border-r border-black">
                        3,5-5,5
                    </div>
                    <div className="py-1 text-center border-t border-r border-black">
                        4,5-7,0
                    </div>
                    <div className="py-1 text-center border-t border-black">
                        10-16,5
                    </div>
                </div>

                <p className="mt-5 text-[15px] md:text-xl">
                    Общая минерализация, г/дм³: 0,100-0,127
                </p>
                <div className="mt-8">
                    <img src="./images/Circles.png" alt="hz" />
                </div>

                
            </section>
        </>
    );
});

export default AboutWater;
