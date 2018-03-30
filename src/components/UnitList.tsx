import * as React from "react";

interface UnitListProps {
  search: string;
};

export default class UnitList extends React.Component<UnitListProps, {}> {
  constructor(props: UnitListProps) {
    super(props);
  }

  render() {
    return (
      <div id="unit-list">
        {this.props.search}
      </div>
    );
  }
}


