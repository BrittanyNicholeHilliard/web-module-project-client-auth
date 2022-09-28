import React, {useState} from "react"
import axios from "axios"


    const initialFormValues = {
        username: '',
        password: ''
    }

export default function LoginForm(props) {

    const [values, setValues] = useState(initialFormValues);
    const { login } = props;

    const onChange = evt => {
        const {name, value} = evt.target
        setValues({...values, [name]: value})
    }

    const onSubmit = evt => {
        evt.preventDefault();
        login(values)
    }


    return (
        <div className='login-form-container'>
            <form onSubmit={onSubmit}>
                <div><h4>USERNAME:</h4>
                    <input type='text' name='username' value={values.username} onChange={onChange}/></div>
                <div><h4>PASSWORD:</h4>
                    <input type='text' name='password' value={values.password} onChange={onChange}/></div>
                <button type='submit'>Go</button>
            </form>
        </div>
    )
}