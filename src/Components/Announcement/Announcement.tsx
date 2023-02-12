import React from 'react';
import s from './Announcement.module.css'

type AnnouncementPropsType = {
    showError:string
}

const Announcement = (props:AnnouncementPropsType) => {
    return (
        <div className={s.announcement_wrapper}>
            {props.showError != 'set amount' ? <span className={s.red}>{props.showError}</span> :<span className={s.announcement}>{props.showError}</span>}
        </div>
    );
};

export default Announcement;