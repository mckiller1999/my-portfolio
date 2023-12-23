import { useRef } from "react";
import "./Profolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "react commerce",
    img: "https://i.pravatar.cc?u=1",
    desc: "abc",
  },
  {
    id: 2,
    title: "next.js commerce",
    img: "https://i.pravatar.cc?u=2",
    desc: "abc",
  },
  {
    id: 3,
    title: "vanilla js app",
    img: "https://i.pravatar.cc?u=3",
    desc: "abc",
  },
  {
    id: 4,
    title: "Music app",
    img: "https://i.pravatar.cc?u=4",
    desc: "abc",
  },
];

const Single = ({ items }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    //offset: ["end end", "start start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <img src={items.img} alt="" ref={ref} />
          <motion.div style={{ y }} className="textContainer">
            <h2>{items.title}</h2>
            <p>{items.desc}</p>
            <button type="">See demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Profolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="profolio" ref={ref}>
      <div className="progress">
        <h1>Feature works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single items={item} key={item.id} />
      ))}
    </div>
  );
};

export default Profolio;
