var React = require('react');

/*var About = React.createClass({
  render: function () {
    return(
      <h3>About Component</h3>
    );
  }
});*/

var About =  (props) => {
  return(
<div className="row">
    <h1 className="text-center">About</h1>
    <div>
        <p className="text-justify">This is a Weather Application built on react.
        I built this as a React Project Demo.
        </p>
        <p> Here are a list of the tools I used</p>
        <ul>
          <li>
            <a href="http://facebook.github.io/react">React</a> - This was the JavaScript framework used
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weathe Map</a> - I used Open Weather Map's API to search for weather data by city name.
          </li>
        </ul>
    </div>
</div>
  );
};

module.exports = About;
