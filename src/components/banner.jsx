import { gsap } from "gsap";
import React, { useLayoutEffect, useRef } from "react"
import { motion } from "framer-motion"
export default function Banner() {
    var headerRef = useRef()
    let heading = "Hello! I’m Crypton"
    let subHeading = "A cryptocurrency trading bot based on machine learning."
    heading = heading.split("")
    subHeading = subHeading.split("")

    useLayoutEffect(() => {
        let text = gsap.context(() => {
            let i = setInterval(() => {
                talk()
            }, 100);
            gsap.timeline().to(".heading", {
                color: "#fff", display: "inline", stagger: 0.05
            }).to(".subHeading", {
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
        <div className="banner" ref={headerRef}>
            <motion.div
                initial={{ x: "20%", y: "40%" }}
                whileInView={{ x: "-100%" }}
                transition={{ duration: 1 }}
                className="__anim_elements">
            </motion.div>
            <h1 className="_head">{heading.map((value, key) => {
                return (<span key={key} className='heading'>{value}</span>)
            })} <motion.span
                className="__cursor">
                </motion.span></h1>
            <p>{subHeading.map((value, key) => {
                return <span key={key} className='subHeading'>{value}</span>
            })}</p>
        </div>
    )
}