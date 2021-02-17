import React from 'react';

export const removeStudent = async(id) => {
    const response = await fetch(`http://localhost:4000/student/${id}`, {
        method : 'DELETE'
    })

    if(!response.ok){
        throw new Error(response.json().message)
    }
    return null
}