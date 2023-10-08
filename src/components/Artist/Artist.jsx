import React, {useState} from 'react'
import './Artist.css'
import ArtistCard from '../Artist-Card/ArtistCard'

function Artist() {

    const [cards, setCards] = useState([
        {
            id: 1,
            title: "DJ Remerson Huke",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
            img: "http://ingenioushubs.com/Allhallows/images/artist-image.png"
        },
        {
            id: 2,
            title: "DJ Remerson Huke",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
            img: "http://ingenioushubs.com/Allhallows/images/artist-image.png"
        },
    ])

    return (
        <div className='container text-white w-100 vh-100 mx-auto d-flex flex-column justify-content-center overflow-hidden'>
            <h1 className='font-yellow text-center mb-3'>Our Halloween's Artist</h1>
            <div className='row justif-content-between gx-3'>
                {cards.map(card => {
                    return (
                        <ArtistCard
                            key={card.id}
                            title={card.title}
                            description={card.description}
                            img={card.img}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Artist