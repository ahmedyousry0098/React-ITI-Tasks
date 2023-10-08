import React from 'react'

function ArtistCard({title, description, img}) {
    return (
        <section className='col-lg-6 col-md-6 col-sm-12 border border-warning rounded rounded-3W'>
            <div className='row'>
                <div className='col-lg-4 col-sm-12'>
                    <img src={img} className='w-100'/>
                </div>
                <div className='col-lg-8 col-sm-12 d-flex flex-column justify-content-center'>
                    <div className="artist-info">
                        <h2>{title}</h2>
                        <h3>Lead DJ On Deadpoll</h3>
                        <p>{description}</p>
                    </div>
                    <div className='d-flex flex-row justify-content-around '>
                        <a href='#'><i className="fa-brands fa-facebook-f icon-border me-3 p-2 font-yellow h3"></i></a>
                        <a href='#'><i className="fa-brands fa-x-twitter icon-border me-3 p-2 font-yellow h3"></i></a>
                        <a href='#'><i className="fa-brands fa-dribbble icon-border me-3 p-2 font-yellow h3"></i></a>
                        <a href='#'><i className="fa-brands fa-behance icon-border me-3 p-2 font-yellow h3"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ArtistCard