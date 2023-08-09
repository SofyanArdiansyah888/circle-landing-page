import React from "react";
import SectionHero from "../components/SectionHero";
import SectionJoin from "../components/SectionJoin";
import SectionService from "../components/SectionService";
import Footer from "../components/Footer";
import SectionTestimony from "../components/SectionTestimony";
import SectionTeam from "../components/SectionTeam";

const Index = () => {

    return <>
        <SectionHero/>
        <SectionJoin/>
        <SectionService />
        <SectionTeam />
        {/*<SectionTestimony />*/}
        <Footer />
    </>
}
export default Index;