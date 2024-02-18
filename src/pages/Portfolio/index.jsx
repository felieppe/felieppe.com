import './portfolio.css'

import Header from '../../components/Header'
import Project from './project'


import Felieppe from '../../assets/felieppe.com_cover.png'
import Naval from '../../assets/naval_cover.png'
import Minepy from '../../assets/minepy_cover.png'
import Conways from '../../assets/conways_cover.png'

function Portfolio() {
    return (
        <>
            <Header />

            <div className='portfolio'>
                <div className='portfolio-title'>
                    <h1>MY WORK</h1>
                </div>

                <div className='portfolio-tags-selector'>
                    <ul>
                        <li><button className='portfolio-tag-active'>ALL</button></li>
                        <li><button>DESKTOP</button></li>
                        <li><button>MOBILE</button></li>
                        <li><button>CONSOLE</button></li>
                        <li><button>WEBSITE</button></li>
                    </ul>
                </div>

                <div className='portfolio-content'>
                    <Project imageSrc={Felieppe} imageBoxColor={"#2d2d2d"} infoBoxColor={"#cdcdcd"} tags={["WEBSITE", "REACT.JS", "FRONTEND"]} gotoLink={"https://felieppe.com"} githubUrl={"https://github.com/felieppe/felieppe.com"} name={"Felieppe.com"} />
                    <Project imageSrc={Naval} imageBoxColor={"#1e3c72"} infoBoxColor={"#3c6fc9"} tags={["MOBILE", "TELEGRAM", "BOTCHAT"]} githubUrl={"https://github.com/felieppe/NavalBattle"} name={"Naval Battle"} />
                    <Project imageSrc={Minepy} imageBoxColor={"#b93d46"} infoBoxColor={"#d95f67"} tags={["CONSOLE", "PYTHON", "GAME"]} githubUrl={"https://github.com/felieppe/Minepy"} name={"Minepy"} />
                    <Project imageSrc={Conways} imageBoxColor={"#18a86b"} infoBoxColor={"#2fb383"} tags={["CONSOLE", ".NET", "GAME"]}  githubUrl={"https://github.com/felieppe/ConwaysLife"} name={"Conways Life"} />
                </div>       
            </div>
        </>
    )
}

export default Portfolio