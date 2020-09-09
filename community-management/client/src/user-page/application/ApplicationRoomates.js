
import React from 'react';


const ApplicationRoommates = (props) => {

    const f0 = (event) => {
        const newApply = {...props.apply};
        newApply.specificroommates = event.target.value;
        props.setApply(newApply);
    };


    const f1 = (event) => {
        const newApply = {...props.apply};
        newApply.applicantgender = event.target.value;
        props.setApply(newApply);
    };

    const f2 = (event) => {
        const newApply = {...props.apply};
        newApply.roommategender = event.target.value;
        props.setApply(newApply);
    };

    const f3 = (event) => {
        const newApply = {...props.apply};
        newApply.applicantsmoke = event.target.value;
        props.setApply(newApply);
    };

    const f4 = (event) => {
        const newApply = {...props.apply};
        newApply.applicantdrink = event.target.value;
        props.setApply(newApply);
    };

    const f5 = (event) => {
        const newApply = {...props.apply};
        newApply.roommatepet = event.target.value;
        props.setApply(newApply);
    };

    const f6 = (event) => {
        const newApply = {...props.apply};
        newApply.neat = event.target.value;
        props.setApply(newApply);
    };

    const f7 = (event) => {
        const newApply = {...props.apply};
        newApply.quite = event.target.value;
        props.setApply(newApply);
    };


    const f9 = (event) => {
        const newApply = {...props.apply};
        newApply.roommatedrink = event.target.value;
        props.setApply(newApply);
    };

    const f10 = (event) => {
        const newApply = {...props.apply};
        newApply.applicantpet = event.target.value;
        props.setApply(newApply);
    };



    return (
        <div>
            <h2 className="form section header">
                <span>
                    Roommate
                </span>
            </h2>

            <h3 className="form section header">
                <span>
                    INVITE ROOMMATES
                </span>
            </h3>

            <p>Do you have any roommates that you want to live with?</p>
            <input type="text" onChange={f0}/>
            
            
            <h3 className="form section header">
                <span>
                    INTERESTS
                </span>
            </h3>
            <p>The following questions will help us find your ideal room placement.</p>

            <h4>General</h4>

            <p>What is your gender? *</p>
            <select
                value={props.gender}
                onChange={f1}
            >
                <option value=""></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>


            <p>Do you smoke? *</p>
            <select
                value={props.applicantsmoke}
                onChange={f3}
            >
                <option value=""></option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>


            <p>Do you have a pet? *</p>
            <select
                value={props.applicantpet}
                onChange={f10}
            >
                <option value=""></option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>

            <p>Do you drink? *</p>
            <select
                value={props.applicantdrink}
                onChange={f4}
            >
                <option value=""></option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>



            <h4>Personality</h4>
            <p>What gender of roommate (s) do you want to live with?</p>
            <select
                value={props.roommategender}
                onChange={f2}
            >
                <option value=""></option>
                <option value="dont mind">I don't mind</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>


            <p>Do you mind your roommate drinking? *</p>
            <select
                value={props.roommatedrink}
                onChange={f9}
            >
                <option value=""></option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>

            <p>Do you mind your roommate having a pet? *</p>
            <select
                value={props.roommatepet}
                onChange={f5}
            >
                <option value=""></option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>

            <p>Do you consider yourself neat? *</p>
            <select
                value={props.neat}
                onChange={f6}
            >
                <option value=""></option>
                <option value="Very neat">Very neat</option>
                <option value="Average neat">Average neat</option>
                <option value="Messy">Messy</option>
            </select>

            <p>Do you consider yourself quite? *</p>
            <select
                value={props.quite}
                onChange={f7}
            >
                <option value=""></option>
                <option value="Very quite">Very quite</option>
                <option value="Average quite">Average quite</option>
                <option value="Noisy">Noisy</option>
            </select>
            
        </div>

    )

}
export default ApplicationRoommates;