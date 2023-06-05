import { createRoot } from 'react-dom/client';
import { App } from './app';
import { UIProvider } from '@yamada-ui/react';

const container = document.getElementById('app');

const root = createRoot(container!);

root.render(
  <UIProvider>
    <App />
  </UIProvider>,
);
