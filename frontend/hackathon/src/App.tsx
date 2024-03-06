import { RouterProvider, createRouter } from '@tanstack/react-router';

// Import the generated route tree
import { routeTree } from './routeTree.gen';
import './app.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

const router = createRouter({ routeTree });

const App = () => {
  return (
    <div className='app-container'>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
};

export default App;
