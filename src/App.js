import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from "./components/search-box/search-box.component";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {
        this.setState({ monsters: users });
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className='app'>
        <h1 className={'app__title'}>Monsters rolodex</h1>
        <SearchBox
          handleChange={this.handleChange}
          placeholder={'Search monsters'}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
