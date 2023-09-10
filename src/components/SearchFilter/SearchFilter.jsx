import PropTypes from 'prop-types';
import {Input, SubTitle} from './SearchFilter.styled'
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/filter/filterSelector';

const SearchFilter = () => {

  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  console.log(filter)

    return (
    <>
      <SubTitle>Find contact by name</SubTitle>
      <Input 
        type="text" 
        value={filter}
        onChange={e => {dispatch(filterContacts(e.currentTarget.value))}}/>
    </>
  )
};

SearchFilter.propTypes = {
  onChange: PropTypes.func,
};

export default SearchFilter;