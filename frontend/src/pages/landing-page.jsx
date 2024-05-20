import { Link } from "react-router-dom";
import Hero from "../components/hero";
import FeaturesRecipe from "../components/features-recipe";
import StreamlineCooking from "../components/streamline-cooking";
import Community from "../components/community";
import Footer from "../components/footer";

const LandingPage = () => {
    return (
        <>
            <Hero />
            <FeaturesRecipe />
            <StreamlineCooking />
            <Community />
            <Footer />
        </>
    );
};

export default LandingPage;
