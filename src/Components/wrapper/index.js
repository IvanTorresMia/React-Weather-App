import React from 'react' 
import Search from '../Search'
import History from '../History'

function Wrapper() {

    return (
        <div className="conatiner">
            <div className="row">
                <div className="col">
                    < Search/>
                    < History/>
                </div>
                <div className="col">

                </div>
            </div>
        </div>
    )
}