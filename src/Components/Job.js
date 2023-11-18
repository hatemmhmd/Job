import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

function Job() {

    const navigate = useNavigate();

    const [countdown, setCountdown] = useState({
        hours: 1,
        minutes: 30,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            if (countdown.hours > 0 || countdown.minutes > 0) {
                if (countdown.minutes === 0) {
                    setCountdown({
                        hours: countdown.hours - 1,
                        minutes: 59,
                    });
                } else {
                    setCountdown({
                        ...countdown,
                        minutes: countdown.minutes - 1,
                    });
                }
            } else {
                clearInterval(interval);
                sendEmail();
            }
        }, 60000);
        return () => clearInterval(interval);
    }, [countdown]);


    const sendEmail = () => {
        const serviceId = 'service_l19j15r';
        const templateId = 'template_aefvbjv';
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
            <div className='content'>
                <div className='question'>
                    <p>are you interested in this jobs?</p>
                </div>
                <div className='btn'>
                    <p><i class="fa-regular fa-hourglass-half"></i><span>{countdown.hours}H:{countdown.minutes}M</span></p>
                    <button onClick={() => navigate('userdata')}> accept the invitation </button>
                    <button> pass it to friend </button>
                </div>
            </div>
        </>
    )
}

export default Job;

