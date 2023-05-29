import { useContext, createContext, useState, useEffect } from "react";
const AppContext = createContext()
import {shortList, longList, list} from '../data'
const AppProvider = ({children}) => {
    const [people, setPeople] = useState(list)
    const [activeIndex, setActiveIndex] = useState(0)

    const prevSlide = () => {
        const newActiveIndex = activeIndex === 0 ? people.length - 1 : activeIndex - 1
        setActiveIndex(newActiveIndex)
    }
    const nextSlide = () => {
        const newActiveIndex = activeIndex === people.length - 1  ? 0 : activeIndex + 1
        setActiveIndex(newActiveIndex)
    }
    useEffect(()=>{
       const sliderID =  setInterval(()=>{
            nextSlide()
        }, 2000)
        return () => clearInterval(sliderID)
    }, [activeIndex])

    return (
        <AppContext.Provider value={{people, prevSlide, nextSlide, activeIndex}}>
            {children}
        </AppContext.Provider>
    )    
}

const useGlobalContext = () => {
    return useContext(AppContext)    
}

export {AppProvider, useGlobalContext}