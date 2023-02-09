import React from 'react';
import s from './Announcement.module.css'

type AnnouncementPropsType = {
    showError:string
}

const Announcement = (props:AnnouncementPropsType) => {
    return (
        <div>
            {/*{props.error ?  <span className={s.red}>{props.announcement}</span> :  <span className={s.announcement}>{props.announcement}</span>}*/}
             {/*<span className={s.announcement}>{props.announcement}</span>*/}
            {props.showError != 'set amount' ? <span className={s.red}>{props.showError}</span> :<span className={s.announcement}>{props.showError}</span>}
        </div>
    );
};

export default Announcement;