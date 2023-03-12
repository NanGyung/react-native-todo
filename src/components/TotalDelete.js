import React, { useState } from 'react'
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

const Container = styled.View`
    width: ${({ width }) => width - 40}px;
    align-self: flex-end;
    margin: 20px 0px;
    text-align: center;
    font-weight: 600;
    font-size: 40px;
    color: ${({ theme }) => theme.text};
`;

const TotalDelete = ({ item, deleteTask }) => {

    return (
        <Container>
            <IconButton
                id={item.id}
                onPressOut={deleteTask}
                completed={item.completed}
            >완료항목 전체삭제</IconButton>
        </Container>
    )
};

TotalDelete.propTypes = {
    item: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
};

export default TotalDelete;