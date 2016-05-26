var React = require('react');
var Tones = require('../constants/Tones');
var OrganKey = require('./OrganKey');

var Organ = React.createClass({
    render: function () {
      var tones = [];
      for (var tone in Tones.TONES) {
        tones.push(tone);
      }

      return (
        <ul>
            {
              tones.map(function (tone, index) {
                return <OrganKey noteName={tone} key={index}/>;
              })
            }
        </ul>
      );
    }
});


module.exports = Organ;
