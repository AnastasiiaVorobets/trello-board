import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLists } from '../redux/slices/listSlice';

const useLists = () => {
  const dispatch = useDispatch();
  const lists = useSelector(state => state.lists.lists);

  useEffect(() => {
    dispatch(fetchLists());
  }, [dispatch]);

  return lists;
};

export default useLists;