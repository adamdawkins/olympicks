import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Standings from '../standings.jsx';

storiesOf('core.Standings', module)
  .add('default view', () => {
    return (
      <Standings />
    );
  })
