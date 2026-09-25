export default function EventType({
                                      name,
                                      isSelected,
                                      onEventTypeClick
}:{
    name: string,
    isSelected: boolean,
    onEventTypeClick: () => void
}) {
    function handleClick() {
        onEventTypeClick();
    }
    return (
        <div>
            <button onClick={handleClick}>
                {isSelected ? (
                    <div className={"font-bold text-2xl md:text-4xl"}>
                        {name}
                    </div>
                ) : (
                    <div className={"hover:text-zinc-600 text-2xl md:text-4xl"}>
                        {name}
                    </div>
                )}
            </button>
        </div>
    )
}