import React, { Component } from 'react';

export class FilterData extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
            searchData: null
        }
    }
    search(key) {
        fetch("http://localhost:3000/libraries?q=" + key).then((data) => {
            data.json().then((resp) => {
                // console.warn("resp", resp)
                this.setState({ searchData: resp })
            })
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Search Country
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <input type="text" style={{border: "1px solid "}} placeholder="Search Country" className="dropdown-item" onChange={(event) => this.search(event.target.value)} />
                            {
                                this.state.searchData ?
                                    <div>

                                        {
                                            this.state.searchData.map((item, i) => (
                                                <a className="dropdown-item" value={item.name}> {item.name}</a>


                                            ))
                                        }
                                    </div>
                                    : <p>please wait...</p>
                            }
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default FilterData;

