import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import CountriesList from '../components/countries_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const countries = Collections.Countries.find().fetch();
  onData(null, { countries });
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CountriesList);
