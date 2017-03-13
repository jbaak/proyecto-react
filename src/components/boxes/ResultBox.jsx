var React = require('react');
var ResultsItem =require('../items/ResultsItem.jsx');

var ResultBox = React.createClass({
    render: function(){
        return(
            <div className="row">
                <ResultsItem/>
            </div>
            );
    }
});

module.exports = ResultBox;