import React from 'react';
import { tabHeaderProps } from '../Tab';

type MapProps = {
  children: any,
} & tabHeaderProps;

export const MapPage = (props: MapProps) => {
  return (
    <div>
      {props.children}
    </div>
  )
}
