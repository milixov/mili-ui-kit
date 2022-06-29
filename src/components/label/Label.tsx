import React from 'react';

interface Props {
    title: string
}

const Label = (props: Props) => {
    
    const {title} = props;

    return (
        <span>{title}</span>
    )
}

export default Label;