import { useDispatch } from 'react-redux';
import { moveCard, fetchCards } from '../redux/slices/cardSlice';

const useHandleDragEnd = () => {
  const dispatch = useDispatch();

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      dispatch(moveCard({
        cardId: result.draggableId,
        destinationListId: destination.droppableId
      })).then(() => {
        dispatch(fetchCards());
      });
    }
  };

  return handleDragEnd;
};

export default useHandleDragEnd;
