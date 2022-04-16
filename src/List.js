// import React from 'react';
import React, { useState } from 'react';
import data from './data';

const List = () => {

  // const {id, age, image } = people
  const [people, setPeople] = useState(data)

  const remove = (id) => {
    const newList = people.filter((person) => person.id !== id);
    // console.log(`removing ${id}`);
    setPeople(newList);
  }

  return (
    <>
      <h3>{people.length} birthdays today</h3>
      {people.map((person) => {
        const { id, name, age, image } = person;

        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
              <button className='btn' onClick={() => remove(id)} >Delete</button>
            </div>
          </article>


        )

      })}

      <button onClick={() => setPeople([])}>clear all</button>
    </>
  );
};

export default List;
