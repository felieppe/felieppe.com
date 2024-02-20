import './about.css'

import Header from '../../components/Header' 
import Footer from '../../components/Footer'

function About() {
    function calculateAge() {
        var today = new Date();
        var birth = new Date("2004-07-24")

        var age = today.getFullYear() - birth.getFullYear()
        var m = today.getMonth() - birth.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
            age--;
        }

        return age;
    }

    return (
        <>
            <Header actual="about"/>

            <div className='about'>
                <div className='about-title'>
                    <h1>ABOUT ME</h1>
                </div>

                <div className='about-content'>
                    <div className='about-content-iam'>
                        <div className='about-content-title'>
                            <h2>Hey,</h2>
                        </div>

                        <div className='about-content-text'>
                            <p>
                                I am Felipe Cabrera, I have {calculateAge()} years old and I am currently studying a bachelor degree in Computer Engineering at <a href="https://www.ucu.edu.uy/" target='_blank'>UCU</a>, Uruguay. <br />
                                I have been coding since a child, I started like seven or eight years ago, very interested about game development I started taking lessons in a home town coding school. <br />
                                Nowadays, I have been part of many cool projects involving different state-of-art technologies and I won't stop looking for more challenges.
                            </p>
                        </div>
                    </div>

                    <div className='about-content-hobbies'>
                        <div className='about-content-title'>
                            <h2>My Hobbies</h2>
                        </div>

                        <div className='about-content-text'>
                            <p>
                                Beyond the code and the pixels, there is a whole world of hobbies that define who I am. Hobbies are not just activities; they're passions that fuel my creativity, drive my curiosity, and provide moments of pure joy and relaxation. From exploring virtual realms to crafting lines of code, each hobby adds a unique dimension to my life, shaping my experiences and perspectives in ways both profound and delightful.
                            </p>
                        </div>

                        <div className='about-content-subtitle'>
                            <h3>Videogames</h3>
                        </div>

                        <div className='about-content-text'>
                            <p>
                                Ever since I was young, videogames have been an integral part of my life. From the captivating narratives to the adrenaline-pumping action, videogames offer a diverse range of experiences that continually push the boundaries of imagination and innovation. <br />
                                You can find me in:
                                <div className='about-content-socials'>
                                    <ul>
                                        <li id='social-steam'><a href="https://steamcommunity.com/id/felieppe" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="#000000" d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.8 52.8 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3 .1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"/></svg></a></li>
                                        <li id='social-psn'><a href="https://psnprofiles.com/felicabrera/" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#006fcd" d="M570.9 372.3c-11.3 14.2-38.8 24.3-38.8 24.3L327 470.2v-54.3l150.9-53.8c17.1-6.1 19.8-14.8 5.8-19.4-13.9-4.6-39.1-3.3-56.2 2.9L327 381.1v-56.4c23.2-7.8 47.1-13.6 75.7-16.8 40.9-4.5 90.9 .6 130.2 15.5 44.2 14 49.2 34.7 38 48.9zm-224.4-92.5v-139c0-16.3-3-31.3-18.3-35.6-11.7-3.8-19 7.1-19 23.4v347.9l-93.8-29.8V32c39.9 7.4 98 24.9 129.2 35.4C424.1 94.7 451 128.7 451 205.2c0 74.5-46 102.8-104.5 74.6zM43.2 410.2c-45.4-12.8-53-39.5-32.3-54.8 19.1-14.2 51.7-24.9 51.7-24.9l134.5-47.8v54.5l-96.8 34.6c-17.1 6.1-19.7 14.8-5.8 19.4 13.9 4.6 39.1 3.3 56.2-2.9l46.4-16.9v48.8c-51.6 9.3-101.4 7.3-153.9-10z"/></svg></a></li>
                                        <li id='social-xbox'><a href="https://account.xbox.com/en-us/profile?gamertag=felieppe" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#107c10" d="M369.9 318.2c44.3 54.3 64.7 98.8 54.4 118.7-7.9 15.1-56.7 44.6-92.6 55.9-29.6 9.3-68.4 13.3-100.4 10.2-38.2-3.7-76.9-17.4-110.1-39C93.3 445.8 87 438.3 87 423.4c0-29.9 32.9-82.3 89.2-142.1 32-33.9 76.5-73.7 81.4-72.6 9.4 2.1 84.3 75.1 112.3 109.5zM188.6 143.8c-29.7-26.9-58.1-53.9-86.4-63.4-15.2-5.1-16.3-4.8-28.7 8.1-29.2 30.4-53.5 79.7-60.3 122.4-5.4 34.2-6.1 43.8-4.2 60.5 5.6 50.5 17.3 85.4 40.5 120.9 9.5 14.6 12.1 17.3 9.3 9.9-4.2-11-.3-37.5 9.5-64 14.3-39 53.9-112.9 120.3-194.4zm311.6 63.5C483.3 127.3 432.7 77 425.6 77c-7.3 0-24.2 6.5-36 13.9-23.3 14.5-41 31.4-64.3 52.8C367.7 197 427.5 283.1 448.2 346c6.8 20.7 9.7 41.1 7.4 52.3-1.7 8.5-1.7 8.5 1.4 4.6 6.1-7.7 19.9-31.3 25.4-43.5 7.4-16.2 15-40.2 18.6-58.7 4.3-22.5 3.9-70.8-.8-93.4zM141.3 43C189 40.5 251 77.5 255.6 78.4c.7 .1 10.4-4.2 21.6-9.7 63.9-31.1 94-25.8 107.4-25.2-63.9-39.3-152.7-50-233.9-11.7-23.4 11.1-24 11.9-9.4 11.2z"/></svg></a></li>
                                    </ul>
                                </div>
                            </p>
                        </div>

                        <div className='about-content-subtitle'>
                            <h3>Music</h3>
                        </div>

                        <div className='about-content-text'>
                            <p>
                                Another realm where my creativity flourishes is in the realm of music production. Music has always been a powerful force in my life, serving as a source of inspiration, expression, and solace during both the highs and lows. <br />
                                By the way, I will not disclose where I upload my music for now, you can try to find it though.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default About