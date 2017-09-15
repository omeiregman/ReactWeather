var React = require ('react');
/*
var WeatherMessage = React.createClass ({
  render: function() {
    var {temp, location} =  this.props;
    return (
      <h4>The temp is {temp} in {location}</h4>

    );
  }
});*/

var WeatherMessage = (props) => {
  var {temp, location} =  props;
  return (
    <h4>The temp is {temp} in {location}</h4>
  );
};

module.exports = WeatherMessage
