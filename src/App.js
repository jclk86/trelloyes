import React from "react";
import List from "./composition/List";
import "./App.css";

// issue: You had a problem with the data and where it all came from.
// this showed you that in the index.js file, on the most global level, store=STORE (from STORE.js)
// this exposes the STORE object to app.js. In turn, you have to set the THIS variable ( i think "props" if not class )
// to to equal store (STORE), so now it exposes its data to all the other components. We work from exposing the base data
// and the highest level (lists - > items). (STORE.js --> index.js --> App.js --> List.js -- Card.js)
// the React.render() renders everything on indexjs, so no need for explicit
// appending or anything. store is created so that it can literally be reference in indexjs and hold the value of STORE
// and be used as a default property.

class App extends React.Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {}
    }
  };

  render() {
    const { store } = this.props; // this is important
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {store.lists.map((
            list //from STORE.js = STORE.lists (nested lists object in STORE.js)
          ) => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
