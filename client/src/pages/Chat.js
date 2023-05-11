import React from 'react'
import Header from '../components/Header'

const Chat = () => {
  return (
    <>
    <Header/>
    <section class="slider-area slider-area2">
        <div class="slider-active">
            <div class="single-slider slider-height2">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-8 col-lg-11 col-md-12">
                            <div class="hero__caption hero__caption2">
                                <h1 data-animation="bounceIn" data-delay="0.2s">Chat with Mentors</h1>
                                
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item"><a href="#">Chat with Mentors</a></li> 
                                    </ol>
                                </nav>
                               
                            </div>
                        </div>
                    </div>
                </div>          
            </div>
        </div>
    </section>
    </>
  )
}

export default Chat