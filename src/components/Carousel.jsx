import { useGlobalContext } from "../context/AppProvider"
import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'
const Carousel = () => {
    const {people, prevSlide, nextSlide, activeIndex} = useGlobalContext()
    return (
        <section className="slider-container">
            {people.map(({id, name, image, title, quote}, index) => {
                
                return  (
                    <article className="slide" style={{
                        transform: `translateX(${100 * (index - activeIndex )}%)`,
                        opacity: activeIndex === index ? 1 : 0,
                        visibility: activeIndex === index ? "visible" : "hidden"
                        }} key={id}>
                        <img className="person-img" src={image} alt={name} />
                        <h5 className="person-name">{name}</h5>
                        <span className="person-title text_small">{title}</span>
                        <p className="person-quote">{quote}</p>
                    </article>
                )
            })}
            <button onClick={prevSlide} className="slide-btn btn-left">
                <BsArrowLeftCircle />
            </button>
            <button onClick={nextSlide} className="slide-btn btn-right">
                <BsArrowRightCircle />
            </button>
        </section>
    )
}

export default Carousel