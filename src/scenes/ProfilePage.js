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
                            I like to be involved in all project aspects and therefore want to stay full-stack. With my past experience I have a diverse range of skills and knowledge including agile development, lean delivery, teamworking and much more. 
                            <br></br>
                            <br></br>
                            My coding experience is predominantly using TDD/BDD to make full stack web apps in Ruby and Javascript. I have exposure to technologies including  Ruby-on-Rails, NodeJS, React, MongoDB, Sinatra, SQL, CSS and REST-APIs.
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
                                    <br></br>
                                    <span>March 2020 - January 2021</span>
                                </div>
                                <div className='description'>
                                    This is the description of the work whcih involved doping lots of random stuff for random people This is the description of the work whcih involved doping lots of random stuff for random people This is the description of the work whcih involved doping lots of random stuff for random people This is the description of the work whcih involved doping lots of random stuff for random people This is the description of the work whcih involved doping lots of random stuff for random people This is the description of the work whcih involved doping lots of random stuff for random people This is the description of the work whcih involved doping lots of random stuff for random people EN END END END END 
                                </div>
                            </div>
                            <div className='experience-entry'>
                                <div className='employer-duration'>
                                    <h3>Servotest Testing Systems LTD</h3>
                                    <span>March 2020 - January 2021</span>
                                </div>
                                <div className='description'>
                                    This is the description of the work whcih involved doping lots of random stuff for random people This is the description of the work whcih involved doping lots of random stuff for random people This is the description of the work whcih involved doping lots of random stuff for random people This is the description of the work whcih involved doping lots of random stuff for random people This is the description of the work whcih involved doping lots of random stuff for random people This is the description of the work whcih involved doping lots of random stuff for random people This is the description of the work whcih involved doping lots of random stuff for random people EN END END END END 
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

           
        )
    }
}

export default ProfilePage;