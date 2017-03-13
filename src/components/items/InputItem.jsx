var React = require('react');

var InputItem = React.createClass({
    render: function(){
        return(
            <div className="row">
                <input type="text"/>
            </div>
            );
    }
});

module.exports = InputItem;