import React from 'react';

export type tabHeaderProps = {
  label: string,
}

export type TabProps = {
  isActive: boolean,
  onClick: (label: string) => any,
  children?: any,
} & tabHeaderProps;

export const Tab = (props: TabProps) => {
  const onClick = () => {
    props.onClick(props.label);
  }

  let className = 'tab-list-item';
  if (props.isActive) {
    className += ' tab-list-active';
  };

  return (
    <li onClick={onClick} className={className}>
      {props.label}
    </li>
  );
}
