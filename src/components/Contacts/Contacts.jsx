import React from 'react'

function Contacts() {
    return (
        <div className="container text-white d-flex flex-column vh-100 my-auto justify-content-center align-items">
            <div className="row ">
                <div className="col-md-12 ml-md-auto text-center">
                    <h2 className="heading">Signup For Newsletter</h2>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-12">
                    <div className="col-md-12 text-center">
                        <form action="#">
                            <div className="form-control-lg">
                                <input type="email" name="email" className='form-control' />
                                <span className="input-group-btn">
                                    <a href="#" className="button btn-default font-yellow" data-toggle="modal" data-target="#exampleModal5">Subscribe</a>
                                </span>
                            </div>
                        </form>
                        <div className='d-flex flex-row justify-content-around '>
                            <a href='#'><i className="fa-brands fa-facebook-f icon-border me-3 p-3 font-yellow h1"></i></a>
                            <a href='#'><i className="fa-brands fa-x-twitter icon-border me-3 p-3 font-yellow h1"></i></a>
                            <a href='#'><i className="fa-brands fa-dribbble icon-border me-3 p-3 font-yellow h1"></i></a>
                            <a href='#'><i className="fa-brands fa-behance icon-border me-3 p-3 font-yellow h1"></i></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts