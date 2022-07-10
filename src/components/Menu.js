import React from 'react';
import DBRecepts from './DBRecepts';
import MenuItem from './MenuItem';


const Menu = ({ setCurrentRecept }) => {

    return (
        <div>
            <MenuItem 
                items = {DBRecepts}
                setCurrentRecept = {setCurrentRecept}/>                
		</div>
    );
}

export default Menu;

