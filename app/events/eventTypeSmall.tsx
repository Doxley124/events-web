export default function EventTypeSmall({type}:{type: string}) {
    let style;
    if (type == 'music') {
        style = 'text-xs md:text-sm italic font-extrabold md:font-black uppercase text-blue-400'
    }
    if (type == 'art') {
        style = 'text-xs md:text-sm italic font-extrabold md:font-black uppercase text-red-400'
    }
    if (type == 'community') {
        style = 'text-xs md:text-sm italic font-extrabold md:font-black uppercase text-amber-400'
    }
    return (
        <div className={style}>{type}</div>
    )
}