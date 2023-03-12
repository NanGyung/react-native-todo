import React from 'react'
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { images } from '../images';

const Icon = styled.Image`
    tint-color: ${({ theme, completed }) => completed ? theme.done : theme.text};
    width: 30px;
    height: 30px;
    margin: 10px;
`;

const IconButton = ({ type, onPressOut, id }) => {
    const _onPressOut = () => {
        onPressOut(id);
    };

    return (
        <TouchableOpacity onPressOut={_onPressOut}>
            <Icon source={type} />
        </TouchableOpacity>
    )
};

IconButton.defaultProps = {
    onPressOut: () => { },
};

IconButton.propTypes = {
    type: PropTypes.oneOf(Object.values(images)),
    onPressOut: PropTypes.func,
    id: PropTypes.string,
    completed: PropTypes.bool
};

export default IconButton;