import { connect } from 'react-redux';
import { setVisibilityFilter } from '../redux/actions';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    };
};

const mapDispatchToProps = (state, ownProps) => {
    return {
        onClick: () => {
            dispatchEvent(setVisibilityFilter(ownProps.filter));
        }
    };
};

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;