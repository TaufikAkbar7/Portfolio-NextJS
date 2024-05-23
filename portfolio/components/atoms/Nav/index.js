import { hero } from '../../../content/data';
import React from 'react';

const Nav = React.forwardRef(({ onClick, href }, ref) => {
    return <a onClick={onClick} href={href} ref={ref} className="text-2xl font-bold text-gray-200 cursor-pointer">{hero.title}</a>
    
    }
)

export default Nav;