import "../src/style/App.scss";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import MainTitle from "./components/MainTitle";
import Nav from "./components/Nav";

import Galery from "./components/Galery";
import Faq from "./components/Faq";

import Contact from "./components/Contact";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 250 },
  animate: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.3,
      delay: 0.3,
    },
  },
};

const zoomOutAnimationVariants = {
  initial: { transform: "scale(1.7)" },
  animate: {
    transform: "scale(1)",
    transition: { duration: 0.3, delay: 0.6 },
  },
};

const heightUpAnimation = {
  initial: { position: "relative", top: "80%" },
  animate: (index) => ({
    position: "relative",
    top: "0%",
    transition: {
      duration: 0.5,
      delay: 0.1 * index,
      ease: [0.5, 0.08, 0.33, 0.95],
    },
  }),
};

function App() {
  return (
    <>
      <Nav />
      <main>
        <MainTitle fadeInAnimationVariants={fadeInAnimationVariants} />
        <Carousel />
        <About
          fadeInAnimationVariants={fadeInAnimationVariants}
          zoomOutAnimationVariants={zoomOutAnimationVariants}
        />
        <Galery
          fadeInAnimationVariants={fadeInAnimationVariants}
          heightUpAnimation={heightUpAnimation}
        />
        <Faq fadeInAnimationVariants={fadeInAnimationVariants} />
        <Contact fadeInAnimationVariants={fadeInAnimationVariants} />
      </main>
      <Footer />
    </>
  );
}

export default App;
