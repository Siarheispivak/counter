import React from 'react';
import s from './Announcement.module.css'

type AnnouncementPropsType = {
    announcement:string
}

const Announcement = (props:AnnouncementPropsType) => {
    return (
        <div>
            <span className={s.announcement}>{props.announcement}</span>
        </div>
    );
};

export default Announcement;