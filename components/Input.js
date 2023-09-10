import e from 'cors';
import {useEffect, useState, useRef} from 'react';

export default function Input({command, onSubmit}) {
    const [_command, setCommand] = useState(command ? command:""); /* _commandをcommandか空にする */

    const handleSubmit = (e) => { /* eはイベント */
        e.preventDefault(); /* デフォルトのイベントをキャンセル */
        setCommand(""); /* _commandを空にする */
        return onSubmit(_command); /* _commandを引数にしてonSubmitを実行 */
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="command">
                <span style={{color: "orange"}}>orange</span> ::{" "}
                <span style={{color: "var(--primary)"}}>primary</span>{" "}
                <span style={{color: "white"}}>&gt:&gt</span> 
            </label>
            <input
                type='text'
                className={style.input}
                value={_command}
                onChange={(e) => setCommand(e.target.value)} /* _commandを入力された値にする */
                disabled={command ? true:false} /* commandがあればdisabledにする */
                ref={(input) => input && !command && input.focus} /* inputがあればfocusする */
                autoFocus={command === ""} /* commandが空ならfocusする */
            />
        </form>
    )
}