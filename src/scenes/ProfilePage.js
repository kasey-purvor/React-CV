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
            <div className='profile-container'>
                <h1 className='profile-title'>
                    Kasey Purvor
                </h1>
                <h2 className='profile-role'>
                    Software Developer 
                </h2>
                <ul className='profile-details'>
                    <span className='title'> About Me</span>
                    <li className='detail-item'>
                         Name: Kasey Purvor    |    
                    </li>
                    <li className='detail-item'>
                        Age: 26    |    
                    </li>
                    <li className='detail-item'>
                        Location: London
                    </li>
                </ul>
                <p className='bio'>
                    <span className='title'> Hi I'm Kasey</span>
                    A mechanical engineer turned developer with a love of all things technical. I recently graduated from Makers Academy bootcamp and am now looking for my first junior web developer role. 
                    <br></br>
                    <br></br>
                    I like to own full projects and therefore want to perform full-stack development. With my past experience I have a diverse range of skills and knowledge including agile development, lean delivery, teamworking and much more. 
                    
                </p>
            </div>
        )
    }
}

export default ProfilePage;