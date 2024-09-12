export default function Advantages({ title, text }) {
    return (
        <>
            <p className="mt-5 text-[#EF4130] text-[15px] font-semibold lg:text-[24px]">
                {title}
            </p>
            <p className="text-[15px] lg:text-[24px]">{text}</p>
        </>
    );
}
