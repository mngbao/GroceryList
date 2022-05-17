import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ list, setIsEditting, clearList, deleteItem, editItem }) => {
  return (
    <div className='grocery-list'>
      {list.map((item) =>
        <article className='grocery-item' key={item.id}>
          <p className="title">{item.title}</p>
          <div className="btn-container">
            <button type='button' className='edit-btn' onClick={() => editItem(item.id)}> <FaEdit /></button>
            <button type='button' className='delete-btn' onClick={() => deleteItem(item.id)}><FaTrash /></button>

          </div>
        </article>
      )
      }
      <button className="clear-btn" onClick={() => clearList()}>Clear Items</button>
    </div >
  )
}

export default List
