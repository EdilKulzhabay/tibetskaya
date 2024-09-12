import React, { forwardRef } from "react";
import { ReactComponent as Whatsapp } from "../assets/icons/Whatsapp.svg";

const Delivery = forwardRef((props, ref) => {
    return (
        <>
            <section
                className="pb-10 container mx-auto  px-5 mt-20 lg:px-10 xl:px-24"
                ref={ref}
            >
                <div className="bg-[#EF4130] w-10 h-1"></div>
                <p className="text-[32px] md:text-[40px] font-semibold xl:text-[60px]">
                    ДОСТАВКА
                </p>
                <div className="mt-8 flex items-center justify-center md:hidden">
                    <img
                        src="./images/Delivery.svg"
                        alt="Delivery"
                        className="w-[80%] md:w-[65%]"
                    />
                </div>
                <div className="mt-8 hidden items-center justify-center md:flex">
                    <img
                        src="./images/DesktopDelivery.svg"
                        alt="Delivery"
                        className=""
                    />
                </div>

                <a
                    target="_blank"
                    rel="noreferrer"
                    href={props.whatsapp}
                    className="flex items-center justify-center mt-5 mx-auto max-w-max bg-[#EF4130] hover:bg-[#ef4030e2] py-3 px-14 text-white font-semibold rounded-3xl lg:mt-3"
                >
                    <Whatsapp className="lg:w-8 lg:h-8" />
                    <p className="ml-2 lg:text-xl">Оставить запрос</p>
                </a>
            </section>
        </>
    );
});

export default Delivery;
