import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [peopleList, setPeopleList] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [lastnameFilter, setLastnameFilter] = useState('');
  const [ageFilter, setAgeFilter] = useState('');
  const [maleFilter, setMaleFilter] = useState(true);
  const [femaleFilter, setFemaleFilter] = useState(true);

  useEffect(() => {
    fetch('https://venbest-test.herokuapp.com/')
      .then(response => response.json())
      .then(data => setPeopleList(data))
  }, []);

  const filteredList = peopleList.filter(person => (
    person.name.includes(nameFilter)
    && person.lastname.includes(lastnameFilter)
    && (person.age === +ageFilter || ageFilter === '')
    && (person.sex === (maleFilter && 'm')
      || person.sex === (femaleFilter && 'f'))
  ))

  return (
    <div className="App">
      <h2 className="title">Filter for people from API</h2>
        <div className="filterbox">
          <input
            type="text"
            className='input'
            placeholder="Имя"
            value={nameFilter}
            onChange={({ target }) => setNameFilter(target.value)}
          />
          <input
            type="text"
            className='input'
            placeholder="Фамилия"
            value={lastnameFilter}
            onChange={({ target }) => setLastnameFilter(target.value)}
          />
          <input
            type="text"
            className='input'
            placeholder="Возраст"
            value={ageFilter}
            onChange={({ target }) => setAgeFilter(target.value)}
          />
          <div className="checkboxes">
            <label>
              <input
                type="checkbox"
                checked={maleFilter}
                onChange={() => setMaleFilter(!maleFilter)}
              />
              Мужчина
            </label>
            <label>
              <input
                type="checkbox"
                checked={femaleFilter}
                onChange={() => setFemaleFilter(!femaleFilter)}
              />
              Женщина
            </label>
          </div>
        </div>
      {filteredList.map(person => (
        <div key={person.lastname} className="person">
          <span className="name">{person.name}</span>
          <span className="lastname">{person.lastname}</span>
          <span className="age">{person.age}</span>
          <span className="sex">{person.sex === 'm'? 'Мужчина': 'Женщина'}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
