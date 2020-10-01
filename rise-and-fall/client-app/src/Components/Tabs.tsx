import React from 'react';
import { Tab, TabProps } from './Tab';

type TabListState = {
  activeTab: string,
};

type TabListProps = {
  children: React.ReactElement<TabProps>[],
}

export class Tabs extends React.Component<TabListProps, TabListState> {
  state = {
    activeTab: 'map',
  } as TabListState;

  constructor(props: TabListProps) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }
  
  onClickItem = (tab: string) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const { children } = this.props;
    const { activeTab } = this.state;
    
    return (
      <div className="tabs">
        <ol className="tabList">
          {children.map((child: any) => {
            const tabIsActive = this.state.activeTab === child.props.label;

            return (
              <Tab
                isActive={tabIsActive}
                label={child.props.label}
                onClick={this.onClickItem}
              />
            );
          })}
        </ol>
        <div>
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }

}
