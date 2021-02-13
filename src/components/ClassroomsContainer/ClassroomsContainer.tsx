import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import classes from './ClassroomsContainer.module.scss';
import ClassroomsList from '../ClassroomsList';
import StudentsList from '../StudentsList';

const schoolClasses = [
    '1A', '1B', '1C', '1D'
];

const students = [
    { id: '1', name: 'Steve Johnson' },
    { id: '2', name: 'John Peter Paul' },
    { id: '3', name: 'Peter Gutenberg' },
    { id: '8', name: 'Ada Lovelas' },
    { id: '11', name: 'Angela' },
];

const ClassroomsContainer: React.FC = () => {

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className={classes.wrapper}>
                <ClassroomsList classrooms={schoolClasses} addClassroom={(e, v) => console.log('add: ', v)}/>
                <Switch>
                    {schoolClasses.map(schoolClass => (
                        <Route key={schoolClass} path={`/${schoolClass}`}>
                            <StudentsList students={students} name={schoolClass} />
                        </Route>
                    ))}
                    <Route>
                        <Redirect to={`${schoolClasses[0]}`} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default ClassroomsContainer;