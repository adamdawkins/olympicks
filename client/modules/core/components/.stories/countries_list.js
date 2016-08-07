import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import CountriesList from '../countries_list.jsx';

storiesOf('core.CountriesList', module)
  .add('default view', () => {
    return (
      <CountriesList />
    );
  })
