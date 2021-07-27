
import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ( { setcategories } ) => {


    const [inputValue, setInputValue] = useState('')
  

    const handleInputChange = (e) =>{
            //console.log(e.target.value);
            setInputValue (e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setcategories ( cats => [  inputValue, ...cats ] );
            setInputValue('');
        } else {
            
        }

        //console.log('submit hecho')
    }

    return (
        <div>
            {/* <h2>Add Category</h2> */}

            <form onSubmit={ handleSubmit }>

                <input 
                type = "text"
                value = {inputValue}
                onChange = { handleInputChange }
                />

            </form>

        </div>
    )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}