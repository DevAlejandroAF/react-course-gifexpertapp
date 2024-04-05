import { useState } from "react";

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    const newCategory = inputValue.trim();
    if (newCategory.length <= 1) return;
    onNewCategory(newCategory)
    setInputValue('');
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Buscar gif" value={inputValue} onChange={onInputChange} />
    </form>
  )
}

export default AddCategory;
