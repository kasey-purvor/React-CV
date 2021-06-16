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
                            <span className='title'> Hi I'm Kasey</span>
                            
                            A mechanical engineer turned developer with a passion for technology. I recently graduated from Makers Academy bootcamp and am now looking for my first junior web developer role. 
                            <br></br>
                            <br></br>
                            I like to own full projects and therefore want to perform full-stack development. With my past experience I have a diverse range of skills and knowledge including agile development, lean delivery, teamworking and much more. 
                        </p>  
                    </div>
                </div>
                <div className='work-experience-container'>
                    
                    <div className='work-experience-content-container'>
                        <h1 className='section-title'>Work Experience</h1>
                        this is only a test
                    </div>
                </div>
            </div>

           
        )
    }
}

export default ProfilePage;