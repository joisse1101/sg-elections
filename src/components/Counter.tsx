import "./components.css"

interface ICounter {
    content: string | number,
    label: string
}

function Counter(contents: ICounter[]) {
    const cards: JSX.Element[] = []
    contents.forEach(content => {
        cards.push(CounterCard(content))
    });

    return (
        <div>
            {cards}
        </div>
    )
}

function CounterCard(content: ICounter) {
    return (
        <div className="counter">
            <h1>{content.content}</h1>
            <p>{content.label}</p>
        </div >
    )
}
export default Counter