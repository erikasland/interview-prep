import { useState, Fragment } from "react";


const People = (props) => {
    const [people, setPeople] = useState(props.data)
    const [initialPeopleState] = useState(props.data)

    const handleClick = (key) => {
        console.log(people[key].id);
        console.log(people[key].name);
        console.log(people[key].hobby);
    }

    const handleChange = (e) => {
        const val = e.target.value;
        let filteredPeople = [];

        initialPeopleState.forEach((person) => {
            const doesContainValue = Object.values(person).some((value) => {
                if ( value.toString().includes(val) ) {
                    return true;
                }
            });

            if ( doesContainValue  === true ) {
                filteredPeople.push(person);
            }
        })

        setPeople(filteredPeople);
    }

    const generatePeopleElem = () => {
        return people.map((person, key) => {
            return (
                <Fragment>
                    <button key={key} onClick={ () => { handleClick(key) } }>{ person.name } - { person.hobby }</button>
                </Fragment>
            )
        })
    };

    return (
        <div>
            <div>
                <input onChange={ e => handleChange(e) }></input>
            </div>
            { generatePeopleElem() }
        </div>
    );
}

export default People;