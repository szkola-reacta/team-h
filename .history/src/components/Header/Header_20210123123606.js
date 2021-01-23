import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="wrapper__header">
            <FontAwesomeIcon icon={faThList} />  Meal planner
        </div>
    )
}

export default Header;
