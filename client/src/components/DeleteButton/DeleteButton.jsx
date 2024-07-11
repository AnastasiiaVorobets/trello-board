import React from 'react';
import { FaTrash } from 'react-icons/fa';
import './DeleteButton.scss'

const DeleteButton = ({ onDelete }) => (
  <button
    className="delete-button"
    onClick={onDelete}
  >
    <FaTrash />
  </button>
);

export default DeleteButton;
