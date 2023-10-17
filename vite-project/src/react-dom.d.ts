// react-dom.d.ts
declare module 'react-dom' {
    export function createRoot(
      container: Element,
      options?: {
        hydrate?: boolean;
      }
    ): {
      render: (element: React.ReactNode) => void;
      unmount: () => void;
    };
  }
  