import React from 'react';
import PropTypes from 'prop-types';

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

Label.propTypes = {
    title: PropTypes.string.isRequired,
};