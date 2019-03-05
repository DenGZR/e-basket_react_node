import React from 'react';
import  { Link } from 'react-router-dom';

const AllBrandsList = ({ heading, contents }) => (
    <div className="brends-list">
        <h1>{heading}</h1>
        <ul>
            {
                contents.map(item => (
                    <li key={item.url}>
                        <Link to={item.url}>
                            {item.text}
                        </Link>                             
                    </li>
                ))
            }
        </ul>
    </div>
)

export default AllBrandsList;