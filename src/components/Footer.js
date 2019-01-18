import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters }from '../redux/actions';

const Footer = () => (
    <p>
        Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        {', '}
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        {', '}
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>SHOW_COMPLETED</FilterLink>
    </p>
);

export default Footer;