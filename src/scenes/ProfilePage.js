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
                <p className='bio'>
                    This is the short paragraph about me which nobody cares about.aaaaa aaaa aaaaaa aaaaa aaaaaaaaa aaaaaa aaaaa aaaaaaaaa aaaaaa aaaaaaaa aaaaaaaa aaaaaaa aaaaaaaaaaa aaaaaaaa aaaaaaaaaaa aaaaaaa aaaaaaaaaa a aaaaa aaaaa aaaaa aaaaaaa aaaaaaaa aaaaaaaaaaa aaaaaaaaaaaaaa aaa aaaaa aa aaaaaa aaaaaaaa aaaaa aaaa aaaa aaaaa
                </p>
            </div>
        )
    }
}

export default ProfilePage;