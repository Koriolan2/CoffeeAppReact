import React from 'react';
import Styled from 'styled-components';
import Img from '../images/pic.png';
import Inner from './Inner';

const CupWrap = Styled.div`
    background-color: #eaeaea;
	position:relative;
	z-index:-10;
	height:611px;`;


 
const CupFront = Styled.div`
    position:absolute;	
	background-image: url(${Img});
	left:0;
	top:0;
	right:0;
	bottom:0;
`;

const Cup = ({currentRecept}) => {
	
    return (
        <CupWrap>
			<Inner recept = {currentRecept} />
			<CupFront />
		</CupWrap>
    );
}

export default Cup;