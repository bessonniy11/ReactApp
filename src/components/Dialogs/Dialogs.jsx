import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map(d => <DialogItem img={d.img} name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message img={m.img} textMessage={m.textMessage}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        props.addMessage(text);
        newMessageElement.current.value = '';
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessageElement} className={s.messageInput} id="" cols="30" rows="5"></textarea>
                    <button onClick={addMessage} className={s.sendMessage}>Отправить сообщение</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;