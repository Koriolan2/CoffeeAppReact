import React from 'react';
import Styled from 'styled-components';
import InnerLayer from './InnerLayer';


const InnerWrap = Styled.div`
    background-color: #face00;
    height: 100%;
`;


const Inner = ({recept}) => {
    
    if (!recept) {return null};
    return (
        <InnerWrap>
            {recept.map(item => <InnerLayer item={item}/>)}
        </InnerWrap>      
    );    
}

export default Inner;