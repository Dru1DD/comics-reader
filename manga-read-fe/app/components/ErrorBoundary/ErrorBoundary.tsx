import { Component, ReactNode } from 'react';

export interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: boolean;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = { error: false };
  }

  public componentDidCatch() {
    this.setState({ error: true });
  }

  public render() {
    const { error } = this.state;
    const { children } = this.props;

    return error ? (
      <>
        <h1 className="text-blue-500 text-center">Oops...Something went wrong.</h1>
      </>
    ) : (
      <>{children}</>
    );
  }
}
