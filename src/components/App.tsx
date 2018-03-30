import * as React from "react";
import bindAll from "../lib/bindall";
import SearchField from "./SearchField";
import UnitList from "./UnitList";

interface AppState {
  search: string
}

export default class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      search: ''
    };
    bindAll(this, ['onSearch']);
  }

  onSearch(search: string) {
    this.setState({search});
  }

  render() {
    return (
      <div className="app">
        <h1>LotteryCalc</h1>
        <SearchField onSearch={this.onSearch} search={this.state.search} />
        <UnitList search={this.state.search} />
      </div>
    );
  }
}
