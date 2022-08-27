import React from 'react';

type props = {
 children?: React.ReactNode,
 name: string
}

const Child = ({ children, ...rest}:props) => {
    return <div>{children} {rest.name}</div>;

}

export default Child;