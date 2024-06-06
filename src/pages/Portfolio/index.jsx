import { useState } from 'react'

import './portfolio.css'

import { useEffect } from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Project from './project'

import Felieppe from '../../assets/felieppe.com_cover.png'
import Naval from '../../assets/naval_cover.png'
import Minepy from '../../assets/minepy_cover.png'
import Conways from '../../assets/conways_cover.png'
import Challenge from '../../assets/challenge_cover.png'
import Autosharp from '../../assets/autosharp_cover.png'
import LocuraPropiedades from '../../assets/locurapropiedades_cover.png'

function Portfolio() {
    useEffect(() => {
        document.title = "Portfolio | Felipe Cabrera"
    }, [])

    const [ selectedTag, setSelectedTag ] = useState('ALL')

    const projects = [
        { imageSrc: Felieppe, imageBoxColor: "#2d2d2d", infoBoxColor: "#e3e3e3", tags: ["WEBSITE", "REACT.JS", "FRONTEND"], gotoLink: "https://felieppe.com", githubUrl: "https://github.com/felieppe/felieppe.com", name: "Felieppe.com" },
        { imageSrc: Naval, imageBoxColor: "#1e3c72", infoBoxColor: "#e3e3e3", tags: ["MOBILE", "TELEGRAM", "BOTCHAT"], githubUrl: "https://github.com/felieppe/NavalBattle", name: "Naval Battle" },
        { imageSrc: Minepy, imageBoxColor: "#b93d46", infoBoxColor: "#e3e3e3", tags: ["CONSOLE", "PYTHON", "GAME"], githubUrl: "https://github.com/felieppe/Minepy", name: "Minepy" },
        { imageSrc: Conways, imageBoxColor: "#18a86b", infoBoxColor: "#e3e3e3", tags: ["CONSOLE", ".NET", "GAME"], githubUrl: "https://github.com/felieppe/ConwaysLife", name: "Conways Life" },
        { imageSrc: Challenge, imageBoxColor: "#052d66", infoBoxColor: "#e3e3e3", tags: ["MOBILE", "MOCKUP", "ECOLOGICAL"], ytUrl: "https://www.youtube.com/watch?v=7di4GbpxrWM", name: "Desafío Ingeniería" },
        { imageSrc: Autosharp, imageBoxColor: "#055d66", infoBoxColor: "#e3e3e3", tags: ["DESKTOP", ".NET", "AUTOMATION"], githubUrl: "https://github.com/felieppe/Autosharp", name: "Autosharp" },
        { imageSrc: LocuraPropiedades, imageBoxColor: "#2d2322", infoBoxColor: "#e3e3e3", tags: ["WEBSITE", "NEXT.JS", "STARTUP"], gotoLink: "https://locurapropiedades.com", name: "Locura Propiedades" }
    ]

    const handleTagClick = (tag) => {
        setSelectedTag(tag)
    }

    const filteredProjects = selectedTag === 'ALL' ? projects : projects.filter(project => project.tags.includes(selectedTag));

    return (
        <>
            <Header actual={"PORTFOLIO"}/>

            <div className='portfolio'>
                <div className='portfolio-title'>
                    <h1>MY WORK</h1>
                </div>

                <div className='portfolio-tags-selector'>
                    <ul>
                        <li><button className={selectedTag === 'ALL' ? 'portfolio-tag-active' : ''} onClick={() => handleTagClick('ALL')}>ALL</button></li>
                        <li><button className={selectedTag === 'DESKTOP' ? 'portfolio-tag-active' : ''} onClick={() => handleTagClick('DESKTOP')}>DESKTOP</button></li>
                        <li><button className={selectedTag === 'MOBILE' ? 'portfolio-tag-active' : ''} onClick={() => handleTagClick('MOBILE')}>MOBILE</button></li>
                        <li><button className={selectedTag === 'CONSOLE' ? 'portfolio-tag-active' : ''} onClick={() => handleTagClick('CONSOLE')}>CONSOLE</button></li>
                        <li><button className={selectedTag === 'WEBSITE' ? 'portfolio-tag-active' : ''} onClick={() => handleTagClick('WEBSITE')}>WEBSITE</button></li>
                    </ul>
                </div>

                <div className='portfolio-content'>
                    {filteredProjects.map((project, index) => {
                        return (
                            <Project key={index} {...project} />
                        )
                    })}

                    { filteredProjects == 0 ?
                        <div className='portfolio-empty'>
                            <p>Oops... I have not worked with anything related about {selectedTag}!</p>
                        </div>
                    : null }
                </div>       
            </div>

            <Footer />
        </>
    )
}

export default Portfolio