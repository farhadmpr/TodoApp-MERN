import React from 'react'

import './Toto.css'

const Todo = props => {
    return(
        <div className="todo">
            <form>
                <input 
                    type="text"
                    placeholder="Todo..."
                />
                <button className="btn">Add</button>
            </form>
        </div>
    )
}

export default Todo