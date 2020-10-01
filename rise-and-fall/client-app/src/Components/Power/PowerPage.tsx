import React from 'react';
import { tabHeaderProps } from '../Tab';

type PowerPageProps = {
  children: any,
} & tabHeaderProps;

export const PowerPage = (props: PowerPageProps) => {
  return (
    <div>
      {props.children}
    </div>
  )
}
