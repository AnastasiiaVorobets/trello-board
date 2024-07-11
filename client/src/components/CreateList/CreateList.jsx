import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createList } from '../../redux/slices/listSlice';
import './CreateList.scss'

const CreateList = () => {
  const dispatch = useDispatch();
  const [listTitle, setListTitle] = useState('');

  const handleCreateList = () => {
    if (listTitle.trim() !== '') {
      console.log('Creating list with title:', listTitle);
      dispatch(createList({ title: listTitle }));
      setListTitle('');
    }
  };

  return (
    <div className="create-list">
      <input
        className="create-list__input"
        type="text"
        value={listTitle}
        onChange={(e) => setListTitle(e.target.value)}
        placeholder="Enter list title..."
      />
      <button
        className="create-list__button"
        onClick={handleCreateList}
      >
        Add List
      </button>
    </div>
  );
};

export default CreateList;
