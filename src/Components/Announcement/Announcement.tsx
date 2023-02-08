import React from 'react';
import s from './Announcement.module.css'

type AnnouncementPropsType = {

    error:string
}

const Announcement = (props:AnnouncementPropsType) => {
    return (
        <div>
            {/*{props.error ?  <span className={s.red}>{props.announcement}</span> :  <span className={s.announcement}>{props.announcement}</span>}*/}
             {/*<span className={s.announcement}>{props.announcement}</span>*/}
        </div>
    );
};

export default Announcement;