import React from 'react';
class Data extends React.Component {

    render() {

        return (
            <div>
                Select Names:<input type="text" placeholder="Search.." />

                <b>
                    {this.props.items.map(function (i) {

                        return <h3>{i.name}</h3>;
                    })}
                </b>
            </div>
        );
    }
}

export default Data;