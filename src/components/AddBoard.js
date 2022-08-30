import React from 'react';

const AddBoard = ({onAddBoard}) => {
    const onClick = () => onAddBoard();
    return (
        <button onClick={onClick}>보드추가</button>
    );
};

export default AddBoard;