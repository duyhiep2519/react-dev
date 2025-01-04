import { ReactNode } from 'react';
import { ErrorBoundary as Boundary, FallbackProps } from 'react-error-boundary';

interface Props {
    children: ReactNode;
}

export function ErrorBoundary({ children }: Props) {
    return (
        <Boundary
            FallbackComponent={fallbackRender}
            onReset={() => {
                // reset the state of your app so the error doesn't happen again
            }}>
            {children}
        </Boundary>
    );
}

function fallbackRender({ error }: FallbackProps) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre style={{ color: 'red' }}>{error.message}</pre>
        </div>
    );
}
