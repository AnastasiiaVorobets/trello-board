import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../redux/slices/cardSlice';

const useCards = () => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.cards.cards);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return cards;
};

export default useCards;