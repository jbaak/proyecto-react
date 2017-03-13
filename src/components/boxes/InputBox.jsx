var React = require('react');
var InputItem =require('../items/InputItem.jsx');

var InputBox = React.createClass({
    render: function(){
        return(
            <div className="row">
                <InputItem/>
                <button type="button"></button>
            </div>
            );
    }
});

module.exports = InputBox;