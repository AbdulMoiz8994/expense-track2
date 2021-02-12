import React from 'react'

export const History = () => {
    return (
        <div>
            <h2 className="history">History</h2>
            <hr/>
            <ul className="list">
                <li className="minus">
                    Cash <span>$400 <button className="list-del-btn">X</button></span>
                </li>
                <li className="plus">
                    Cash <span>$400 <button className="list-del-btn">X</button></span>
                </li>
            </ul>
        </div>
    )
}
