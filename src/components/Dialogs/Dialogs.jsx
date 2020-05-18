import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Nikolay'},
        {id: 3, name: 'Tatyana'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Oleg'},
    ]
    let messages = [
        {id: 1, textMessage: 'Hello'},
        {id: 2, textMessage: 'World'},
        {id: 3, textMessage: 'People'},
        {id: 4, textMessage: 'Yo'},
        {id: 5, textMessage: 'Yo'},
        {id: 6, textMessage: 'Yo'}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message textMessage={m.textMessage}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;