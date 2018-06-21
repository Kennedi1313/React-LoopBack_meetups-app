import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Meetups from './meetups';
import About from './about';
import MeetupDetails from './meetupDetails';
import AddMeetup from './addMeetup';
import EditMeetup from './editMeetup';

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Meetups} />
			<Route exact path='/about' component={About} />
			<Route exact path='/meetups/add' component={AddMeetup} />
			<Route exact path='/meetups/:id' component={MeetupDetails} />
			<Route exact path='/meetups/edit/:id' component={EditMeetup} />
		</Switch>
	</main>

)

export default Main;