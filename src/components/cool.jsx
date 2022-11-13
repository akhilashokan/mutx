import { motion } from "framer-motion"

export default function Cool() {
    return (
        <section className="cool">
            <motion.div
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
            >
                <h2>
                    I'm cool,<br />but I want to:
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >get investment</motion.span>
                </h2>
                <p>
                    That is what we got on the test wallet.
                </p>
            </motion.div>
        </section>
    )
}