import React, { useState } from 'react'
import { UserList as List } from '../App'
interface Props {
    items : List['items'],
    setListUser:  React.Dispatch<React.SetStateAction<List['items']>>
}

const Form: React.FC<Props> = (props) =>  {
    const { items , setListUser } = props
    const [input , setInput ] = useState({
        name : '',
        email : '',
        position : ''
    })
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e: React.FormEvent) : void => {
        e.preventDefault();
        if(!input.name || !input.email || !input.position) {
            alert('Opp ! you have not filled in the form ')
            return
        }
        items.unshift({
            id : Math.floor((Math.random() * 500000) + 1),
            name : input.name,
            email : input.email,
            position : input.position
        })
        setListUser([...items])
        setInput({
            name : '',
            email : '',
            position : ''
        })
    }

    return (
        <div className="From" style={{ paddingBottom : "30px" }}>
            <form className="form-user" onSubmit={ handleSubmit }>
                <div className="row justify-content-end">
                    <div className="col-md-3">
                        <input 
                            type="text" 
                            name="name"
                            placeholder="name" 
                            className="form-control mb-3" 
                            onChange={handleChangeInput}
                            value={ input.name }
                        />
                    </div>
                    <div className="col-md-3">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="email" 
                            className="form-control mb-3" 
                            onChange={handleChangeInput}
                            value={ input.email }
                        />
                    </div>
                    <div className="col-md-3">
                        <input 
                            type="text" 
                            name="position" 
                            placeholder="position" 
                            className="form-control mb-3" 
                            onChange={handleChangeInput}
                            value={ input.position }
                        />
                    </div>
                    <div className="col-md-3 text-left">
                        <button type="submit" className="btn btn-success">Add User</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;
