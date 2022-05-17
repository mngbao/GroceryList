import React, { useState } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([]);
  const [isEditting, setIsEditting] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const deleteItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  const editItem = (id) => {
    const currentItem = list.find((item) => item.id === id);
    setIsEditting(true);
    setEditID(id)
    setName(currentItem.title)
  }

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type })
  }

  const clearList = () => {
    showAlert(true, 'List has been cleared', 'danger')
    setList([]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'empty value', 'danger');
    }
    else if (name && isEditting) {
      // editting
      showAlert(true, 'Item updated', 'success')
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name }
          }
          return item
        })
      )
      setIsEditting(false);
      setName('')
      setEditID(null)
    }
    else {
      showAlert(true, 'Item added', 'success');
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('');
    }
  }



  return (
    <section className="section-center">
      <form onSubmit={handleSubmit} className="grocery-form">
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

        <h3>Grocery List</h3>
        <div className="form-control">
          <input type="text" className='grocery' placeholder='e.g. Eggs' value={name} onChange={(e) => setName(e.target.value)} />
          <button type="submit" className='submit-btn' >{isEditting ? 'edit' : 'submit'}</button>
        </div>
      </form>
      <div className="grocery-container">
        {list.length > 0 ? <List list={list} setIsEditting={setIsEditting} clearList={clearList} deleteItem={deleteItem} editItem={editItem} /> : null}
      </div>
    </section >
  )
}

export default App
