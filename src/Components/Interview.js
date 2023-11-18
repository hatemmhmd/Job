import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Interview = () => {

    const click = useNavigate();
    const Go = useNavigate();
    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        Go('/');
    };

    return (
        <>
            <div className='interview'>
                <div className='navInter'>
                    <p><i class="fa-solid fa-arrow-left" onClick={() => click('/')}></i> Screening Interview </p>
                </div>

                <div className='meeting'>
                    <div className='meetingImg'>
                        <img src={require('../Images/Meeting.jpg')} alt='Meeting'></img>
                    </div>

                    <div className='meetingSart'>
                            <button onClick={handleButtonClick}>Start Video Screening</button>
                            {showPopup && (
                                <div className="popup">
                                    <p>Video screening is starting a copy of the recording information will be sent to you.</p>
                                    <button onClick={handleClosePopup}>Close</button>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Interview;

