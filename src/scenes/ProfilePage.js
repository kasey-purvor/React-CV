import React from 'react';
import './ProfilePage.css';


class ProfilePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render () {
        return (
            <div className='page-container'>

                <div className='profile-container'>
                    <h1 className='section-title'>
                        Kasey Purvor
                    </h1>
                    <h2 className='profile-role'>
                        Software Developer 
                    </h2>
                    <div className='flex-container'>
                        <div className='image-details-container'>
                            <img src='/images/dp2.png' className='dp' alt='Me' />
                            <ul className='details'>
                                <span className='title'> About Me</span>
                                <li className='detail-item'>
                                 Name: Kasey Purvor  
                                </li>
                                <li className='detail-item'>
                                  Age: 26   
                                </li>
                                <li className='detail-item'>
                                    Location: London
                                </li>
                            </ul>
                        </div>
                        <p className='bio'>
                            <span className='title'> Hi I'm Kasey!</span>
                            
                            A mechanical engineer of 3 years turned developer, with a passion for technology. I recently graduated from Makers Academy bootcamp and am now looking for my first junior web developer role. 
                            <br></br>
                            <br></br>
                            I like to be involved in all project aspects so want to stay full-stack. Through my experience I have a diverse range of skills and knowledge including agile development, lean delivery, teamworking and much more. 
                            <br></br>
                            <br></br>
                            My coding education focused heavily on testing and best practices, using TDD/BDD to make full stack web apps in Ruby and Javascript. I have exposure to technologies including Ruby-on-Rails, NodeJS, React, MongoDB, Sinatra, SQL, CSS and REST-APIs.
                        </p>  
                    </div>
                </div>
                <div className='work-experience-container'>
                    <h1 className='section-title'>Work Experience</h1>
                    <h2 className='profile-role'>Mechanical Design Engineer</h2>
                    <div className='width-restrictor'>
                        <div className='flex-container'>
                            <div className='experience-entry'>
                                <div className='employer-duration'>
                                    <h3>Servotest Testing Systems LTD</h3>
                                    <span>(Hydraulic Equipment)</span>
                                    <br></br>
                                    <br></br>
                                    <span>March 2020 - January 2021</span>
                                </div>
                                <div className='description'>
                                    <ul>
                                        <li>
                                            Led a design project to build screens to protect personnel from ballistic debris. Worked with multiple <span className='bold'>stakeholders</span> and carried out a large amount of <span className='bold'>research</span>.  With no internal support a <span className='bold'>self-starter</span> & <span className='bold'>resilient</span> attitude was necessary. <a href='https://github.com/kasey-purvor/CV-Software-Developer/blob/main/engineering_portfolio.md#ballistic-screens'>See Here</a>.
                                        </li> 
                                        <br></br>
                                        <li>
                                            Identified the source of a mysterious contaminant in hydraulic oil. Employed my <span className='bold'>adaptability</span> and <span className='bold'>problem selving</span>, learning many unfamiliar concepts – finally hiring an electron microscope at Surrey University. Through my <span className='bold'>analysis</span> I identified the contaminant to be Aluminium Oxide, a common manufacturing grit. <a href='https://github.com/kasey-purvor/CV-Software-Developer/blob/main/engineering_portfolio.md#contamination-study'>See Here</a>
                                        </li>
                                        <br></br>
                                        <li>
                                            Worked as part of a <span className='bold'>team designing</span> the geared safety mechanism for a building sized product. With my <span className='bold'>eye for detail</span> I employed <span className='bold'>experimentation</span>, performing thousands of <span className='bold'>simulations</span> over several months to optimise the gear shape to within 1/1000th of a millimetre. < a href='https://github.com/kasey-purvor/CV-Software-Developer/blob/main/engineering_portfolio.md#safety-mechanism' >See Here</a>.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='experience-entry'>
                                <div className='employer-duration'>
                                    <h3>Overview LTD</h3>
                                    <span>(Electric Motors)</span>
                                    <br></br>
                                    <br></br>
                                    <span>March 2020 - January 2021</span>
                                </div>
                                <div className='description'>
                                    <ul>
                                        <li>
                                            Led the business case for the acquisition of a 3D printer, for rapid prototypes, to aid in <span className='bold'>agile design</span>. Once trained I used my <span className='bold'>creativity</span> to design hundreds of components for use throughout the businesses different departments. <a href='https://github.com/kasey-purvor/CV-Software-Developer/blob/main/engineering_portfolio.md#motor-test-rig'>See Here</a> 
                                        </li>
                                        <br></br> 
                                        <li>
                                            Performed <span className='bold'>product management</span> throughout the design lifecycle of multiple products. With product components in the thousands with frequent design revisions, managing product data was a daily requirement. I also assisted in the implementation of the new product data management software, < a href='https://www.priority-software.com/gb/'>priority</a>.
                                        </li>
                                        <br></br>
                                        <li>
                                            Frequently used <span className='bold'>Matlab</span> to analyse and manipulate product performance data. 
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='education-container'>
                    <h1 className='section-title'>
                        Education
                    </h1>
                </div>
            </div>

           
        )
    }
}

export default ProfilePage;