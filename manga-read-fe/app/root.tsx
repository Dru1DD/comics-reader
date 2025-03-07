import { subscribe, SDKProvider } from '@telegram-apps/sdk-react';

if (typeof window !== 'undefined') {
  // https://github.com/Telegram-Mini-Apps/telegram-apps/issues/418
  // Just this line of code. It creates an event listener doing nothing, but
  // also defines the window.TelegramGameProxy.receiveEvent function.
  subscribe(() => {});
}

import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';
import { toast, ToastContainer } from 'react-toastify';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import { useMemo } from 'react';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Manga Reader with NestJS backend</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

const LoadingScreen = () => {
  return <div>Loading</div>;
};

export function HydrateFallback() {
  return <LoadingScreen />;
}

export default function App() {
  const queryClient = useMemo(() => {
    return new QueryClient({
      queryCache: new QueryCache({
        onError: () => {
          // TODO Uncomment when api will be connected
          // toast.error(error.message)
        },
      }),
      mutationCache: new MutationCache({
        onError: (error) => toast.error(error.message),
      }),
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchOnReconnect: false,
          refetchIntervalInBackground: false,
        },
      },
    });
  }, []);

  return (
    <ErrorBoundary>
      <SDKProvider debug>
        <QueryClientProvider client={queryClient}>
          <Outlet />
          <ToastContainer
            pauseOnFocusLoss={false}
            pauseOnHover={false}
            theme="dark"
            toastStyle={{ zIndex: 1000000 }}
            position="bottom-right"
          />
        </QueryClientProvider>
      </SDKProvider>
    </ErrorBoundary>
  );
}
