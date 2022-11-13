import gsap from "gsap"
import { useLayoutEffect, useRef } from "react"
import { motion } from 'framer-motion'
export default function Forecasts() {
    const forecastsRef = useRef()
    let heading = "I’m good at making forecasts"
    let subHeading = "I analyze thousands of trading transactions and reveal patterns using my machine learning algorithms. Then I predict changes in certain points and signal to sell or buy currency."
    heading = heading.split("")
    subHeading = subHeading.split("")
    useLayoutEffect(() => {
        let forecast = gsap.context(() => {
            let i = setInterval(() => {
                talk()
            }, 100);
            gsap.timeline().to(".heading_forecasts", {
                color: "#fff", display: "inline", stagger: 0.05
            }).to(".subHeading_forecasts", {
                color: "#fff", display: "inline", stagger: 0.05
            }).then(t => {
                clearInterval(i)
                document.querySelector('#logo>:nth-child(2)').innerHTML = "_"
            })
        })
    }, [])
    const talk = () => {
        let words = ["o", "_"]
        let n = Math.floor(Math.random() * 2)
        // console.log(words[n], n);
        document.querySelector('#logo>:nth-child(2)').innerHTML = words[n]
    }
    return (
        <section className="forecasts" ref={forecastsRef}>
            <motion.div
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
            >
                <h1 className="_head_forecasts ">
                    {heading.map((value, key) => {
                        return (<span key={key} className='heading_forecasts'>{value}</span>)
                    })}
                </h1>
                <p>{subHeading.map((value, key) => {
                    return <span key={key} className='subHeading_forecasts'>{value}</span>
                })}</p>
            </motion.div>
        </section>
    )
}