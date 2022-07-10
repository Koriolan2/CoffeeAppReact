import React from 'react';

const InnerLayer = ({item}) => {
       
    return (
       <div  key = {item.id} 
             className = {item.class_name}> 
                    {item.name}
        </div>
    );
}

export default InnerLayer;