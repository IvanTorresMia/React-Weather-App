import React from 'react' 
import Search from '../Search'
import History from '../History'
import Cards from '../Cards'
import Weather from '../Weather'

function Wrapper() {

    return (
        <div className="conatiner">
            <div className="row">
                <div className="col">
                    < Search/>
                    < History/>
                </div>
                <div className="col">
                    < Weather/>
                    < Cards/>
                </div>
            </div>
        </div>
    )
}

export default Wrapper;