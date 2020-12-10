import React, { useContext } from 'react'
import HistoryContext from '../../Utils/historyContext'
import './style.css'

function History({ handleButton }) {

    const history = useContext(HistoryContext)
  
    return (
        <div className="rounded mr-4 ml-4 p-4 history">
            {/* render buttons in here. */}
            {history.map((button) => (
                <div className="row">
                    <button key={button.id} className="btn" id={button.id} onClick={handleButton}>{button.name}</button>
                </div>
    ))}
        </div>
    )
}

export default History;