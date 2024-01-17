import styled from "styled-components";

export const Wrapper = styled.div`
    background: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    padding: 4px;
    width: fit-content;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

Wrapper.displayName = 'TransactionWrapper';

export const Input = styled.input`
    border-radius: 12px;
    width: 200px;
    margin: 4px;
    border: 2px solid #A9A9A9;
    height: 40px;
    outline: none;
`;

Input.displayName = 'Input';

export const Row = styled.div`
    display: flex;
    align-items: center;
`;

Row.displayName = 'Row';

export const Button = styled.button`
    border-radius: 12px;
    width: 207px;
    margin: 4px;
    border: 2px solid #778899;
    height: 60px;
    outline: none;
    box-sizing: border-box;
    color: #4B0082;
    background-color: #F0FFF0;
    font-size: 18px;
    &:hover {
        cursor: pointer;
    }
`;

Button.displayName = 'Button';

export const Comment = styled.textarea`
    min-height: 40px;
    line-height: 1.5;
    box-sizing: border-box;
    padding: 4px;
    border-radius: 12px;
    width: 207px;
    margin: 4px;
    height: 60px;
    border: 2px solid #A9A9A9;
    outline: none;
`;

Comment.displayName = 'Comment';
