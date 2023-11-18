import React from 'react'

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='why'>
                    <p>why am i reciving this ivitation </p>
                </div>

                <div className='unsubscribe'>
                    <p>This invitation is automatically sent to you, once job opportunity match your public profile
                        to invite you for job hiring process.
                        To stop receiving these emails, please Send <strong>"unsubscribe" email to
                        jobtalents@talentspace.ai</strong></p>
                </div>

                <div className='footerImg'>
                    <img src={require('../Images/Footer.png')} alt='Logo' />
                </div>
            </div>
        </>
    )
}

export default Footer
