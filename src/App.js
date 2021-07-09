import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Heading from './components/Heading';
import SpecifyContents from './components/SpecifyContents';
import Button from './components/Buttons';
import DayCard from './components/DayCard';
import DisplayLocation from './components/DisplayLocation';
import API from './utils/API';
var moment = require('moment');
moment().format();

class App extends Component {

  state = {
    search: '59937',
    result: [],
    displaying: ''
  };

  componentDidMount() {
    this.searchZip(this.state.search);
  }

  searchZip = zip => {
    API.getGeocode(zip)
      .then((res) => {
        let { lat, lng } = res.data.results[0].geometry.location;
        this.setState({ displaying: res.data.results[0].formatted_address })
        // console.log(lat,lng);
        API.oneCall(lng, lat)
          .then((res) => {
            res.data.list.map(el => {
              return (
                // console.log(moment.unix(el.dt).format('D'));
                // let d = moment.unix(el.dt).format('D');
                this.setState({ result: res.data.list })
                // console.log(this.state.result.length);
              )
            })

          })
          .catch(err => console.log(err))
      })
  }

  handleInputChange = event => {
    let value = event.target.value;
    this.setState({
      search: value
    });
  };

  handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.searchZip(this.state.search);
    }
  }

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.search)
    this.searchZip(this.state.search);
  };  

  render() {
    
    return (

      <Paper elevation={3}>
        <Heading>

          <SpecifyContents
            handleKeyDown={this.handleKeyDown}
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit} />
          <Button
            handleFormSubmit={this.handleFormSubmit} />

          <DisplayLocation
            location={this.state.displaying}
          />

        </Heading>
        {this.state.result.map((el, i) => {
          return (
            <DayCard
              key={i}
              date={moment.unix(el.dt).format('D')}
              displayDate={moment.unix(el.dt).format('dddd, MMMM Do -- h:mm A')}
              high={el.main.temp_max}
              low={el.main.temp_min}
              condition={el.weather[0].main}
            />
          )
        })}

      </Paper>

    );
  }
}
export default App;
