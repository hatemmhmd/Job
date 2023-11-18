import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const click = useNavigate();

    const [lookingForJob, setLookingForJob] = useState(false);
    const [nextContactDate, setNextContactDate] = useState('');
    const [showButton, setShowButton] = useState(false);

    const handleLookingForJobChange = (event) => {
        setLookingForJob(event.target.value === 'yes');
        setNextContactDate('');
        setShowButton(event.target.value === 'yes');
    };

    const handleNextContactDateChange = (event) => {
        setNextContactDate(event.target.value);
        Sweet(event);
    };

    const Sweet = (e) => {
        Swal.fire({
            background:"#0f001e",
            position: "center",
            icon: "success",
            title: "Thank you , We'll Reach Out To You Again On " + e.target.value,
            showConfirmButton: true,
            timer: 999999,
            width: 750,
        });
    }


    return (
        <div className='home'>
            <div className='companyImg'>
                <img src={require('../Images/Company.jpg')} alt='Company' />
            </div>
            <div className='all'>
                <div className='Yes-or-No'>
                    <div className='question'>
                        <p>Are you actively looking for a job?</p>
                    </div>

                    <div>
                        <label>
                            <input type="radio" value="yes" checked={lookingForJob} onChange={handleLookingForJobChange} />
                            Yes
                        </label>

                        <label>
                            <input type="radio" value="no" checked={!lookingForJob} onChange={handleLookingForJobChange} />
                            No
                        </label>
                    </div>
                </div>

                {!lookingForJob && (
                    <div className='No'>
                        <p>When can we reach out to you again?</p>
                        <input type="date" value={nextContactDate} onChange={handleNextContactDateChange} />
                    </div>
                )}

                {lookingForJob && (
                    <div className='Yes'>
                        <button onClick={() => click('/acceptJob')}> Submit </button>
                    </div>
                )}
            </div>
        </div>
    );
};



export default Home;
