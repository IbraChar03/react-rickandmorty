import { useEffect, useState } from "react";
import Card from './Card.js'
import axios from 'axios'
function Main() {
    const [Data, setData] = useState([])
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
                <div className="number">

                </div>
            </div>
            <section className="main">
                <div className="container">

                    <div className="cont-cards">
                        {Data.map((card, index) => (

                            <Card card={card} key={index} />
                        ))}

                    </div>

                </div>
            </section>
        </>
    );
}

export default Main;
