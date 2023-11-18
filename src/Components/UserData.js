import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

function UserData() {

    const back = useNavigate();
    const goInterview = useNavigate();

    const [formData, setFormData] = useState({
        name: 'Mohannad Alsouqi',
        email: 'm.alsouqi@gmail.com',
        url: 'https://linkedin.com/in/mohmmadsouqi',
        phone_number: '+962 795885661'
    });

    const [accepted, setAccepted] = useState(false);

    const handleAccept = () => {
        setAccepted(true);
        goInterview('/interview');
        sendEmail();
    };



    const sendEmail = () => {
        const serviceId = 'service_l19j15r';
        const templateId = 'template_tz5288h';
        const PublicKey = 'ss0pAHqdaUt6ya2Wt';

        const emailParams = {
            to_email: 'hatem.mhmd01234@gmail.com',
            subject: 'Countdown Timer Reached Zero',
            message: 'The countdown timer has reached zero. It is time to send your message!',
        };

        emailjs.send(serviceId, templateId, emailParams, PublicKey)
            .then(response => {
                console.log('Email sent successfully:', response);
            })
            .catch(error => {
                console.error('Error sending email:', error);
            });
    };


    return (
        <>
            <div className='contentInfo'>
                <div className='confirmInfo'>
                    <p><i class="fa-solid fa-arrow-left" onClick={() => back('/')}></i> Confirm Your Information</p>
                </div>

                <div className='validate'>
                    <div className='one'>
                        <p>please validate & update all the following information carefully</p>
                    </div>

                    <div className='two'>
                        <form>
                            <div className='input'>
                                <p>Name:</p>
                                <input type='text' defaultValue={formData.name} />
                            </div>

                            <div className='input'>
                                <p>Email:</p>
                                <input Email='text' defaultValue={formData.email} />
                            </div>

                            <div className='input'>
                                <p>Linkedin URL:</p>
                                <input type='text' defaultValue={formData.url} />
                            </div>

                            <div className='input'>
                                <p>Phone Number:</p>
                                <input type='text' defaultValue={formData.phone_number} />
                            </div>
                        </form>
                    </div>

                    <div className='resume'>
                        <p>Update Resume</p>
                        <div className='para'>
                            <i class="fa-regular fa-note-sticky"></i>
                            <div>
                                <p>Browse your file to <br /> upload your resume</p>
                            </div>
                        </div>
                    </div>
                    <div className='contect-privacy'>
                        <div className='privacy'>
                            <input type="checkbox" checked={accepted} onChange={() => setAccepted(!accepted)} />
                            <p>by updating yout information you confirm the privacy policy argeement</p>
                        </div>
                        <div className='btn'>
                            <button onClick={handleAccept} disabled={!accepted}> Start Recording </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserData
