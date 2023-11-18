import data from '../Data/DataJob'

function JobDescription() {

    return (
        <>
            <div className='job-desc-content'>
                <div className='jobinvitation'>
                    <p>Job Invitation <i class="fa-solid fa-spinner"></i></p>
                </div>

                <div className='descriptipn'>
                    <div className='img'>
                        <img src={require('../Images/Logo.jpg')} alt='Logo' />
                        <div>
                            <p>Lead product design <i class="fa-regular fa-clock"></i></p>
                            <p>Adobe XD •JIRA • Figma • Leadership-UX/CX • Prototyping</p>
                            <p>Full Time (Hybrid) • Amman, Jordan • Telecom industry</p>
                        </div>
                    </div>

                    <div className='uxJob'>
                        <p>
                            Your job as a UX Designer is to give a world-class experience for tiket.com users.
                            You have main responsibilities to conduct the user and/or evaluation research, do a lot of sketching,
                            and create wireframes that have high usability.</p>
                    </div>


                    <div className='job-question'>
                        {
                            data.map((item) => (
                                <div key={item.id} className='title'>
                                    <p className='question'>{item.question}</p>
                                    <ul>
                                        {item.answers.map((answer) => (
                                            <li key={answer.id} className='list'> {answer.text}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default JobDescription
