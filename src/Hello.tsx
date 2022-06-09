import React from 'react';
import { getName, getGreeting } from './utils';

export interface HelloProps {}

const Hello: React.FC<HelloProps> = () => {
  return (
    <div>
      {getGreeting()} {getName()}!
    </div>
  );
};

export default Hello;
