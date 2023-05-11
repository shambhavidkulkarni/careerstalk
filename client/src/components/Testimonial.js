import React from 'react'
import Slider from 'react-slick'

const settings={
    dots:true,
    infinite:true,
    autoplay:true,
    speed:1000,
    swipeToSlide:true,
    autoplaySpeed :2000,
    slidesToShow:3,
    responsive:[
      {
        breakpoint:992,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
          infinite:true,
          dots:true,
        },
      },
      {
        breakpoint:576,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
        },
      },
    ]
  }


const Testimonial = () => {
  return (
    <Slider {...settings}>
    <div className="testimonial py-4 px-3 ">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nesciunt fugiat inventore? Voluptate, laudantium voluptatum cupiditate dolores eaque officiis adipisci nesciunt, ratione magni tempora natus eum reprehenderit ea ad quasi.</p>

      <div className="d-flex align-items-center gap-4 mt-3">
        <img src="assets/img/gallery/team1.png" className='w-25 h-25  rounded-2' alt=''></img>
        <div>
            <h6 className='mb-0 mt-3'>
                John Doe
            </h6>
            <p>Customer </p>
        </div>
        
      </div>
    </div>

    <div className="testimonial py-4 px-3 ">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nesciunt fugiat inventore? Voluptate, laudantium voluptatum cupiditate dolores eaque officiis adipisci nesciunt, ratione magni tempora natus eum reprehenderit ea ad quasi.</p>

      <div className="d-flex align-items-center gap-4 mt-3">
        <img src="assets/img/gallery/team1.png" className='w-25 h-25  rounded-2' alt=''></img>
        <div>
            <h6 className='mb-0 mt-3'>
                Lia Frank
            </h6>
            <p>Customer </p>
        </div>
        
      </div>
    </div>
    <div className="testimonial py-4 px-3 ">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nesciunt fugiat inventore? Voluptate, laudantium voluptatum cupiditate dolores eaque officiis adipisci nesciunt, ratione magni tempora natus eum reprehenderit ea ad quasi.</p>

      <div className="d-flex align-items-center gap-4 mt-3">
        <img src="assets/img/gallery/team1.png" className='w-25 h-25  rounded-2' alt=''></img>
        <div>
            <h6 className='mb-0 mt-3'>
                John Doe
            </h6>
            <p>Customer </p>
        </div>
        
      </div>
    </div>

    <div className="testimonial py-4 px-3 ">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nesciunt fugiat inventore? Voluptate, laudantium voluptatum cupiditate dolores eaque officiis adipisci nesciunt, ratione magni tempora natus eum reprehenderit ea ad quasi.</p>

      <div className="d-flex align-items-center gap-4 mt-3">
        <img src="assets/img/gallery/team1.png" className='w-25 h-25  rounded-2' alt=''></img>
        <div>
            <h6 className='mb-0 mt-3'>
                John Doe
            </h6>
            <p>Customer </p>
        </div>
        
      </div>
    </div>

    
    
   </Slider>

  )
}

export default Testimonial