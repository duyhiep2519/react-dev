import { ErrorBoundary } from './components/ErrorBoundary';
import { BrowserRouter } from 'react-router';
import { AppRoutes } from './components/Routes';

function App() {
    return (
        <BrowserRouter>
            <ErrorBoundary>
                <AppRoutes />
            </ErrorBoundary>
        </BrowserRouter>
    );
}

export default App;
