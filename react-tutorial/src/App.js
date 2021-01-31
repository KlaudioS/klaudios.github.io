import React, { Component } from "react";
import Table from "./Table";
import TableProps from "./TableProps";
import Form from "./Form";

const batatas = [
  {
    name: "Charlie",
    job: "Janitor",
  },
  {
    name: "Mac",
    job: "Bouncer",
  },
  {
    name: "Dee",
    job: "Aspiring actress",
  },
  {
    name: "Dennis",
    job: "Bartender",
  },
  ,
];

class App extends Component {
  state = {
    characters: [],
    //Hard coded data
    /*characters: [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dee",
        job: "Aspiring actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      },
    ],*/
    //Hard coded data
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        if (i !== index) {
          console.log("value i:" + i + "value index" + index);
        }
        return i !== index;
      }),
    });
  };

  handleSubmit = (character) => {
    /*console.log("character: " + character);
    if (typeof this.state.characters != "undefined") {
      this.setState({ characters: this.state.characters.concat(character) });
    } else {
      this.setState({ characters: character });
    }*/
    this.setState({ characters: this.state.characters.concat(character) });
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        {/* <h1>Tables without Props</h1>
        <Table />
        <h1>Table with props</h1>
       */}
        <TableProps
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
