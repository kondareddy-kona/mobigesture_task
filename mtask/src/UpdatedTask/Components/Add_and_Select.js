import React, { Component } from 'react';

export class Add_and_Select extends Component {
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
    update() {
        fetch("http://localhost:3000/libraries").then((data) => {
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
                            <div style={{
                                display: "flex",
                                justifyContent: "spaceBetween"
                            }}>
                                <input style={{
                                    border: "1px solid "

                                }} type="text" className="dropdown-item" placeholder="Search Country" onChange={(event) => this.search(event.target.value)} />
                                <button style={{
                                    border: "1px solid "
                                }} className="dropdown-item" onClick={() => { this.update() }} >ADD&Select</button>
                            </div>
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

export default Add_and_Select;

