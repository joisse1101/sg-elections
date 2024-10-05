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
        <div className="counter" key={'counter_' + content.label}>
            <h1>{content.content}</h1>
            <h3>{content.label}</h3>
        </div >
    )
}
export default Counter