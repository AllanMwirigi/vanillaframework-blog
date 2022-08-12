import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Content from './components/Content';
import './App.scss';

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="l-application">
        <main className="l-main u-vertically-center">
          <Content />
        </main>
      </div>
    </QueryClientProvider>
  );
}
export default App;
