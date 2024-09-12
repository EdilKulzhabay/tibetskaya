import clsx from "clsx";

export default function FranshizaCard({
    subtitle,
    children,
    price,
    image,
    list,
    id,
    onclick,
}) {
    return (
        <div className="relative z-10">
            <div className="relative mt-10 lg:mt-[90px]">
                <div
                    className={clsx(
                        "absolute h-8 lg:h-12 w-[85%] lg:w-[55%] xl:w-1/2 bg-[#EF4130]",
                        id % 2 !== 0 && "lg:right-0"
                    )}
                >
                    <div
                        className={clsx(
                            "absolute max-w-max",
                            id % 2 === 0 && image === "./images/1l.png"
                                ? "lg:-right-[55px]"
                                : "",
                            id % 2 === 1 && image === "./images/1l.png"
                                ? "lg:-left-[55px]"
                                : "",
                            id % 2 === 0 && image === "./images/19l.png"
                                ? "lg:-right-[90px]"
                                : "",
                            id % 2 === 1 && image === "./images/19l.png"
                                ? "lg:-left-[90px]"
                                : "",

                            image === "./images/1l.png"
                                ? "-top-[45px] -right-[40px] lg:-top-[90px]"
                                : "-top-[40px] -right-[50px] lg:-top-[100px]"
                        )}
                    >
                        <img
                            src={image}
                            alt={image}
                            className={clsx(
                                "",
                                image === "./images/19l.png"
                                    ? "w-[92px] h-[92px] lg:w-[180px] lg:h-[180px]"
                                    : "w-[52px] h-[92px] lg:w-[102px] lg:h-[180px]"
                            )}
                        />
                    </div>
                </div>

                <div
                    className={clsx(
                        "relative z-20 container pt-[6px] sm:pt-1 mx-auto px-5 lg:px-10 xl:px-24 text-white text-[14px] sm:text-[15px] lg:text-[24px] lg:font-medium",
                        id % 2 !== 0 && "lg:text-right"
                    )}
                >
                    {subtitle}
                </div>
            </div>

            <div
                className={clsx(
                    "container mt-10 mx-auto px-5 lg:px-10 xl:px-24 text-[#EF4130] text-[32px] md:text-[40px] font-semibold xl:text-[60px]",
                    id % 2 !== 0 ? "lg:text-right" : "text-left"
                )}
            >
                {children}
            </div>

            <div className="container mx-auto px-5 lg:px-10 xl:px-24 mt-6 lg:mt-10 grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-x-[107px] lg:items-start">
                <div
                    className={clsx(
                        "",
                        id % 2 === 1 ? "lg:order-last" : "lg:order-first"
                    )}
                >
                    <ul className="list-disc list-outside space-y-3 lg:space-y-4">
                        {list.map((item) => (
                            <li
                                key={item}
                                className="text-[15px] lg:text-[24px] ml-4"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={() => onclick()}
                        className="hidden bg-[#EF4130] py-[14px] px-[60px] rounded-full text-white font-semibold text-center lg:mt-10 lg:block"
                    >
                        Начать
                    </button>
                </div>

                <div
                    className={clsx(
                        "bg-[#EF4130] rounded-[20px]",
                        id % 2 === 0 ? "lg:order-last" : "lg:order-first",
                        image === "./images/1l.png" ? "lg:-mt-16" : ""
                    )}
                >
                    <div className="text-center text-white pt-5 lg:pt-10 font-bold">
                        <div className="text-[21px] lg:text-[40px]">Цена</div>
                        <div className="text-[43px] lg:text-[80px]">
                            {price} ₸
                        </div>
                    </div>

                    <div className="h-[1px] bg-white my-4 lg:mt-8 lg:mb-4"></div>

                    <div className="pb-4 lg:pb-7 text-[26px] lg:text-[50px] font-medium text-center text-[#ffffff80]">
                        Роялти 0 ₸
                    </div>
                </div>

                <div className="lg:hidden text-center">
                    <button
                        onClick={() => onclick()}
                        className="mt-5 mb-8 bg-[#EF4130] py-[14px] px-[60px] rounded-full text-white font-semibold text-center"
                    >
                        Начать
                    </button>
                </div>
            </div>
        </div>
    );
}
