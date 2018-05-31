import React, { ReactNode, ReactInstance } from "react";

interface OwnProps {
    data: any;
    component: ReactNode | ReactInstance;
}

class Recurse extends React.Component<OwnProps> {
    public render() {
        const { data, component } = this.props;
        let subtree = null;

        for (const item in data) {
            return <Recurse data={item} component={component}/>
        }

        return (
            // TODO: return passed in component with data
        );
    }
}
