import { useEffect, useState } from "react";
import Card from './Card.js'
import axios from 'axios'
function Main() {
    const [query, setQuery] = useState("")

    const [data, setData] = useState([])

    // let arrayCards = []
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then((res) =>
                setData(res.data.results)

            )
    }, [])
    return (
        <>
            <div className="characters">
                <input type="text" onChange={(e) => setQuery(e.target.value)} />
            </div>
            <section className="main">
                <div className="container">

                    <div className="cont-cards">
                        {data.filter(card => card.name.toLowerCase().includes(query)).map((card, index) => (
                            <Card card={card} key={index} />
                        ))}

                    </div>

                </div>
            </section>
        </>
    );
}

export default Main;
