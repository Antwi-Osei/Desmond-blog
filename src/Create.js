import { useState } from "react";
import {useHistory} from 'react-router-dom'
const Create = () => {
    const [title, setTitle] =useState ('')
    const [body, setBody] = useState ('')
    const [author, setAuthor] = useState ('')
    return ( 
        <div className = "create">
        <h2 > Add a New Blog </h2> 
        <form>
            <label> Blog Title </label>
            <input
            type="text"
            required 
            value = {title}
            onChange = {(e) => setBody (e.target.value)}
            >
                <option value="Desmond"> Desmond </option>
                <option value="Solomon"> Solomon </option>

                <select></select>
            </input>
        </form>
        </div >
    );
}

export default Create;