import { motion } from "framer-motion"

export default function Contact() {
    return (
        <section className="contact">
            <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: "0" }}
                transition={{ duration: 0.5 }}
                className="__heading">
                <h2>
                    Let’s work   together
                </h2>
            </motion.div>
            <motion.div
                initial={{ x: "-150%" }}
                whileInView={{ x: "0" }}
                transition={{ duration: 1 }}
                className="mail">
                <div className="wrapper">
                    <h3>Mail me:</h3>
                    <a href="mailto:">mail@mail.com</a>
                </div>
            </motion.div>
            <motion.div
                initial={{ x: "-200%" }}
                whileInView={{ x: "0" }}
                transition={{ duration: 1.5 }}
                className="call">
                <div className="wrapper">
                    <a href="tel:+"> 999 999 999</a><br />
                    <a href="tel:+"> 999 999 999</a>
                </div>
            </motion.div>
            <motion.div
                initial={{ x: "-250%" }}
                whileInView={{ x: "0" }}
                transition={{ duration: 2 }}
                className="meet">
                <p>
                    44 st india
                </p>
                <iframe className="__map" width="425" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=77.20703914761543%2C28.631932242989983%2C77.20799669623375%2C28.63298928150844&amp;layer=transportmap"></iframe><br />
            </motion.div>
        </section>
    )
}