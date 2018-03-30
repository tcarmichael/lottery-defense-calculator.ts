import * as React from "react";
import bindAll from "../lib/bindall";

interface SearchProps {
  search: string;
  onSearch: (search: string) => void;
};

export default class SearchField extends React.Component<SearchProps, {}> {
  constructor(props: SearchProps) {
    super(props);
    bindAll(this, ['changeSearch']);
  }

  changeSearch(e: {target: HTMLInputElement}) {
    this.props.onSearch(e.target.value);
  }

  render() {
    return (
      <input
        id="search-field"
        value={this.props.search}
        onChange={this.changeSearch}
        />
    );
  }
}
