import React from "react";
import './Wrapper.scss';
import FormDialog from "./FormDialog";
import EmailUs from "./EmailUs";

const Wrapper = () => {


    return (
        <div className="wrapper">
            <ul>
                <li>
                    <FormDialog/>
                </li>
                <li><EmailUs/>

                </li>
                <li>
                    123-456-7890
                </li>
            </ul>
        </div>

    );

}

export default Wrapper;