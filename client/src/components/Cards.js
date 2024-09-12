import { ReactComponent as Brand1 } from "../assets/icons/Brand1.svg";
import { ReactComponent as Brand2 } from "../assets/icons/Brand2.svg";
import { ReactComponent as Brand3 } from "../assets/icons/Brand3.svg";

export default function Cards(props) {
    return (
        <div className="py-8 px-6 bg-white rounded-b-lg border-t-2 border-[#EF4130]">
            {props.kol === "1" && <Brand1 />}
            {props.kol === "2" && <Brand2 />}
            {props.kol === "3" && <Brand3 />}
            <p className="mt-6 text-[24px] font-bold">{props.title}</p>
            <p className="mt-3 ">{props.text}</p>
        </div>
    );
}
