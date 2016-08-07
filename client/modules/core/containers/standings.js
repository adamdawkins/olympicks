import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Standings from '../components/standings.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const people = Collections.People.find().fetch().map((person) => {
    const { gold, silver, bronze } = person;
    const points = gold * 5 + silver * 3 + bronze;
    return Object.assign(person, { points });
  }).sort((a,b) => {
    return b.points - a.points;
  });
  onData(null, { people });
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Standings);
