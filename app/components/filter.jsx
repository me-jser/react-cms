import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import TextFilter from 'react-text-filter';


const Item = React.createClass({
    propTypes: {
        item: React.PropTypes.string.isRequired
    },


    render() {
        return <li>{this.props.item}</li>;
    }
});



const List = React.createClass({
    propTypes: {
        items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
    },


    render() {
        const Items = this.props.items.map(item => <Item key={item} item={item} />);

        return <ul>{Items}</ul>;
    }
});

const fruits = [
    'apple',
    'orange',
    'banana',
    'kiwi',
    'pineapple',
    'golden kiwi',
    'green apple'
];


const fruitFilter = filter => fruit => fruit.toLowerCase().indexOf(filter.toLowerCase()) !== -1;


const Customizable = React.createClass({
    getInitialState() {
        return {
            filter: '',
            minLength: 2,
            debounceTimeout: 300
        };
    },



    onFilter({target: {value: filter}}) {
        this.setState({filter});
    },


    render() {
        const {minLength, indefinite, debounceTimeout, filter} = this.state;

        const filteredFruits = filter ?
            fruits.filter(fruitFilter(filter)) :
            fruits.slice(0);

        return (
            <div>
                <h2>Customizable</h2>


                <h3>Test</h3>
                <TextFilter
                    filter={filter}
                    minLength={minLength}
                    debounceTimeout={debounceTimeout}
                    onFilter={this.onFilter} />

                <List items={filteredFruits} />
            </div>
        );
    }
});



const section = {marginBottom: 40};

const Filter = React.createClass({
    render() {
        return (
            <div>
                <h1>TextFilter</h1>

                <section style={section}>
                    <Customizable />
                </section>

            </div>
        );
    }
});


export {Filter as Filter}
