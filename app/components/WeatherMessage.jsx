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
    <h3 className ="text-center">The Temperature is {temp} Degree Celcius in {location}</h3>
  );
};

module.exports = WeatherMessage
