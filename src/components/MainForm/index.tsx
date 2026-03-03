import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm() {
    return(
        <form className='form' action=''>
            <div className='form-row'>
                <DefaultInput labelText='task' id='meu-input' type='text' placeholder='digite algo' />
            </div>
            <div className='form-row'>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='form-row'>
                <Cycles />
            </div>
            <div className='form-row'>
                <DefaultButton icon={<PlayCircleIcon />} />
            </div>
        </form>
    )
}
