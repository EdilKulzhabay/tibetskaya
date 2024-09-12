import { useLocation } from "react-router-dom";
import Header from "./Header";
import FranshizaHeader from "./FranshizaHeader";

export default function Head({ onScrollToRef, refs, phone, callPhone }) {
    const url = useLocation();

    return (
        <>
            <div className="your-element-class bg-cover bg-bottom md:bg-top w-full relative bg-no-repeat after:content-[''] after:block after:w-full after:pb-[145%] md:after:hidden">
                <div className="container mx-auto px-5 pt-4 lg:pb-[100px] lg:px-10 xl:px-24 2xl:pb-[200px]">
                    {url.pathname === "/Franchise" ? (
                        <FranshizaHeader
                            onScrollToRef={onScrollToRef}
                            refs={refs}
                            phone={phone}
                        />
                    ) : (
                        <Header
                            onScrollToRef={onScrollToRef}
                            refs={refs}
                            phone={phone}
                            callPhone={callPhone}
                        />
                    )}

                    <section className="mt-[151px] text-[#EF4130] text-[45px] leading-[50px] sm:text-[60px] md:text-[70px] lg:leading-[70px] xl:mt-[180px] xl:text-[85px] 2xl:text-[95px] 2xl:mt-[270px]">
                        <p className=" font-bold">Доверие</p>
                        <p className="whitespace-nowrap">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в
                            каждом
                        </p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;глотке</p>
                    </section>
                    <div
                        className="hidden md:block w-[50%] mt-[140px] xl:mt-[180px]"
                        ref={refs.aboutWaterRef}
                    >
                        <div className="bg-[#EF4130] w-10 h-1"></div>
                        <p className="text-[32px] font-semibold xl:text-[60px]">
                            О воде
                        </p>
                        <p className="mt-8 text-[15px] xl:text-[20px]">
                            «Тибетская» - один из первых брендов воды в
                            Казахстане, который завоевал сердца многих
                            потребителей благодаря своему безукоризненному
                            качеству и уникальности. История этой воды
                            насчитывает почти тридцать лет, и за это время она
                            зарекомендовала себя, как одна из самых уникальных и
                            качественных водных брендов на рынке.
                            <br />
                            <br />
                            Вода «Тибетская» разливается из высокогорных
                            источников, расположенных в живописном районе
                            Алматы. Вода проходит через несколько стадий
                            фильтрации и очистки, чтобы удалить излишки
                            минералов и примесей, оставив только свежий и чистый
                            вкус.
                        </p>
                        <p className="mt-8 text-[22px]  font-medium">
                            Основной состав воды (мг/дм³)
                        </p>
                        <div className="grid grid-cols-5 mt-4 border border-black rounded-md text-[15px] lg:max-w-max">
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

                        <p className="mt-5 text-[15px]">
                            Общая минерализация, г/дм³: 0,100-0,127
                        </p>
                        <div className="mt-8">
                            <img src="./images/Circles.svg" alt="hz" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
