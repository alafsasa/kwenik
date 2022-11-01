import React from "react";

const MISSING_ERROR = 'Error got lost!';

export const withErrorBoundary = <BaseProps extends {}> (
    BaseComponent: React.ComponentType<BaseProps>
) => {
    type HocProps = React.PropsWithChildren<{}>;
    type HocState = {
        readonly error: Error | null | undefined;
    };
    return class Hoc extends React.Component<HocProps, HocState> {
        static displayName = `withErrorBoundary(${BaseComponent.name})`;
        static readonly WrappedComponent = BaseComponent;
        readonly state: HocState = {
            error: undefined
        };
        componentDidCatch(error: Error | null, info: object){
            this.setState({error: error || new Error(MISSING_ERROR)});
            this.logErrorToCloud(error, info);
        }
        logErrorToCloud = (error: Error | null, info: object) => {
            //send error report to service provider
        }
        render(): React.ReactNode {
            const { children, ...restProps } = this.props;
            const { error } = this.state;
      
            if (error) {
              return <BaseComponent {...(restProps as BaseProps)} />;
            }
      
            return children;
        }
    }
}