import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {

    return (
        <div className={s.message}>
            {props.textMessage}
        </div>
    );
}

const Dialogs = (props) => {
    let dialogData = [
        {id:1, name:'Ivan'},
        {id:2, name:'Nikolay'},
        {id:3, name:'Tatyana'},
        {id:4, name:'Sveta'},
        {id:5, name:'Oleg'},
    ]
    let messagesData = [
        {id:1, textMessage:'Hello'},
        {id:2, textMessage:'World'},
        {id:3, textMessage:'People'},
        {id:4, textMessage:'Yo'},
        {id:5, textMessage:'Yo'},
        {id:6, textMessage:'Yo'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
                <DialogItem name={dialogData[3].name} id={dialogData[3].id}/>
                <DialogItem name={dialogData[4].name} id={dialogData[4].id}/>
            </div>

            <div className={s.messages}>
                <Message textMessage={messagesData[0].textMessage}/>
                <Message textMessage={messagesData[1].textMessage}/>
                <Message textMessage={messagesData[2].textMessage}/>
                <Message textMessage={messagesData[3].textMessage}/>
                <Message textMessage={messagesData[4].textMessage}/>
                <Message textMessage={messagesData[5].textMessage}/>

            </div>

        </div>
    );
}

export default Dialogs;