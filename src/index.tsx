import React from 'react';
import { createRoot } from 'react-dom/client';
import Hello from './Hello';

const root = document.getElementById('#root');
if (!root) {
  throw new Error('Missing "#root" element');
}
createRoot(root).render(<Hello />);
