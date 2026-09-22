import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Menu from "./components/Menu";
import Procedures from "./components/Procedures";
import FeaturedWork from "./components/FeaturedWork";
import BeforeAfter from "./components/BeforeAfter";
import Surgeon from "./components/Surgeon";
import Testimonials from "./components/Testimonials";

function App() {
    return (
        <main>
            <Menu />
            <Hero />
            <Intro />
            <Procedures />
            <FeaturedWork />
            <BeforeAfter />
            <Surgeon />
            <Testimonials />
        </main>
    );
}

export default App;