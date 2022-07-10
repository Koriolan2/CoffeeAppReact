import React from 'react';
import Styled from 'styled-components';

const Li = Styled.li`
    padding: 5px 25px;
    margin:1px 0;
    cursor:pointer;
    border: 1px solid #eaeaea;
    position:relative;
    transition: all 0.2s linear;

    &::after {
        content:"";
        display:block;
        width:20px;
        height:20px;
        position:absolute;
        right:-11px;
        top:50%;
        margin-top: -11px;
        transform: rotate(45deg);
        border-top: 1px solid #eaeaea;
        border-right: 1px solid #eaeaea;
        background-color: #fff;
        transition: all 0.2s linear;
    }

    &:hover, &:hover::after {
        background-color: #eaeaea;
    }
`

const MenuItem = ({items, setCurrentRecept}) => {

    return (
       <ul>
            {items.map(item => (
                <Li 
                    key={item.id}
                    onClick = {() => setCurrentRecept(item.recipe)}
                >{item.title_ua}</Li>
            ))}
       </ul>
    );
}

export default MenuItem; 