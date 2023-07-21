import React from 'react';
import "./FilterTypes.css";
import Type from './Type/Type';

function FilterTypes(){
    const typesData = [
        {
        id:1,
        image:"https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
        text:"Delivery"

    },
    {
        id:2,
        image:"https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp",
        text:"Dining Out"

    },
    {
        id:3,
        image:"https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp",
        text:"Nightlife"

    },

]
    return(
        <div>
            <div className='filter-types-type-container'>
                {typesData.map((typeData)=>(
                        <Type  key={typeData.id} image={typeData.image} text={typeData.text}/>
                    )
                )}
                
            </div>
        </div>
    )
}


export default FilterTypes;
