import React from "react";

export default function ProductCard(props) {
    return (
        <div className="w-full flex flex-col justify-between pt-1.5 px-8 pb-10 rounded-2xl my-2 bg-white text-center">
            <div className="flex items-center justify-center h-[380px] ">
                <img
                    className="object-cover max-h-[300px]"
                    //src={`http://localhost:5000${props.product.imageUrl}`}
                    src={`https://api.tibetskaya.kz${props.product.imageUrl}`}
                    alt={props.product.name}
                />
            </div>
            <div className="text-[22px] md:text-[28px] ">
                <p className="">{props.product.name}</p>
                <p className="mt-1">{props.product.description}</p>
                <p className="mt-1 font-bold">{props.product.price} ₸</p>
            </div>
            <a
                target="_blank"
                rel="noreferrer"
                href={props.whatsapp}
                className="mt-5 mx-auto max-w-max bg-[#EF4130] hover:bg-[#ef4030e2] py-3 px-14 text-white font-semibold rounded-3xl md:text-xl"
            >
                Заказать
            </a>
        </div>
    );
}
