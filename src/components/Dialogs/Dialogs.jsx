import React from "react";
import s from './Dialogs.module.css'


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Ivan
                </div>
                <div className={s.dialog}>
                    Nikolay
                </div>
                <div className={s.dialog}>
                    Tatyana
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
                <div className={s.dialog}>
                    igor'
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hello
                </div>
                <div className={s.message}>
                    World
                </div>
                <div className={s.message}>
                    People
                </div>

            </div>

        </div>
    );
}

export default Dialogs;