import iconWhite from "@/src/assets/events-icon-white.png";
import Image from "next/image";

export default function EventType({
                                      name,
                                      isSelected,
                                      onEventTypeClick,

    children
}:{
    name: string,
    isSelected: boolean,
    onEventTypeClick: () => void,
    children: React.ReactNode
}) {
    function handleClick() {
        onEventTypeClick();
    }
    let style;
    if (name == 'Music') {
        style = 'text-blue-400 font-bold text-2xl md:text-4xl'
    }
    else if (name == 'Art') {
        style = 'text-red-400 font-bold text-2xl md:text-4xl'
    }
    else if (name == 'Community') {
        style = 'text-amber-400 font-bold text-2xl md:text-4xl'
    }
    else {
        style = 'font-bold text-2xl md:text-4xl'
    }

    return (
        <div>
            <button onClick={handleClick}>
                {isSelected ? (
                    <div className={style}>
                        {children}
                    </div>
                ) : (
                    <div className={"hover:text-zinc-600 text-2xl md:text-4xl"}>
                        {children}
                    </div>
                )}
            </button>
        </div>
    )
}