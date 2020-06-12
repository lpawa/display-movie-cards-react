import React from 'react';
import './App.css';
import data from './movieData';
import Card from './Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: []
    };
  }
  componentDidMount() {
      this.setState({
          data: data
      })
  }
  render() {
      return (
          <div className="App">
              <header className="App-header">
                  <p>
                      Movies in Bangalore
                  </p>
                  {
                      this.state.data && this.state.data.length ? <div className={"card-container"}>
                          {
                              this.state.data.map(function (movie, index) {
                                  return <Card movie={movie} index={index} key={index}/>
                              })
                          }
                      </div> : null
                  }
              </header>

          </div>
      );
  }
}

export default App;
