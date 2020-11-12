import React from 'react';
class DataFilter extends React.Component {

    state = { searchString: '' }
    handleChange = (e) => {
        this.setState({ searchString: e.target.value });
    }
    handleAdd = (e) => {

    }
    render() {
        var libraries = this.props.items,
            searchString = this.state.searchString.trim();
        if (searchString.length) {
            libraries = libraries.filter(function (i) {
                return i.name.match(searchString);
            });
        }

        let options = libraries.map(function (i) {

            return <h3>{i.name}</h3>;
        })

        return (
            <div>
                Select Names: <input type="text" placeholder="Search.." value={this.state.searchString} onChange={this.handleChange} placeholder="Type here..." />
                <button style={{ float: "right" }} onClick={this.handleAdd}>ADD</button>
                {options}
            </div>
        );
    }
}

export default DataFilter;