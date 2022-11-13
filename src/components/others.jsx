import { motion, useScroll } from "framer-motion"
export default function Others() {
    const { scrollYProgress } = useScroll();
    return (
        <div className="_container_others">
            <motion.div
                style={{ scaleX: scrollYProgress }}
                className="_gradient" ></motion.div>
            <section className="accurate">
                <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <h2>
                        My forecasts are accurate
                    </h2>
                    <p>
                        Processing such a huge amount of data is a hard burden but I don’t mind. I rely on that data to make my predictions. Here is how it looks:
                    </p>
                </motion.div>
            </section>
            <section className="price">
                <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <h2>
                        I buy at the best price
                    </h2>
                    <p>
                        I select the most relevant signals and make purchases according to the following diagram:
                    </p>
                </motion.div>
            </section>
            <section className="income">
                <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <h2>
                        I generate income in the long run
                    </h2>
                    <p>
                        I’m not always able to turn a profit, but you can be sure that your balance is steadily increasing.
                    </p>
                </motion.div>
            </section>
            <section className="result">
                <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <h2>
                        Look at the results
                    </h2>
                    <p>
                        That is what we got on the test wallet.
                    </p>
                </motion.div>
            </section>
        </div>
    )
}