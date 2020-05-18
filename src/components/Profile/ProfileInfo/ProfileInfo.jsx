import React from "react";
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.profileImg}>
                <img
                    src="https://storage.googleapis.com/replit/images/1575910179162_be44cb648579f3e5693290578cf90ad6.jpeg"
                    alt=""/>
            </div>
            <div className={s.infOfMan}>
                <div>
                    <div className={s.avatar}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4N8MmlTqVNcvF69NxZxA8-IAuIM-dBFgdnik-ZK3hKWCK-mg&s"
                            alt=""/>
                    </div>
                    <p className={s.nameProfile}>Bessonniy11</p>
                </div>

                <div className={s.infBirthAndCity}>
                    <p>Date of Birth: 30 dec</p>
                    <p>City: Moscow</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;