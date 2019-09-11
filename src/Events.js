import React from 'react';

import { Container } from '@material-ui/core';
import Event from './Event';

const EMPTY_FILTER = 'None';

export default function Events({data, filters}) {
  if (filters.tag !== EMPTY_FILTER) {
    data = data.filter(item => item.event.tags.includes(filters.tag));
  }

  if (filters.sport !== EMPTY_FILTER) {
    data = data.filter(item => item.event.sport === filters.sport);
  }

  if (filters.odd > 0) {
    data = data.filter(item => {
      return item.betOffers.filter(betOffer => {
        return betOffer.outcomes.map(outcome => outcome.odds/1000).filter(odd => odd > filters.odd).length;
      }).length;
    });
  }

  return (
    <Container maxWidth="md">
      <div style={{position: 'absolute', left: 20, top: 80}}>Data count: {data.length}</div>
      { data.map(listItem => <Event data={listItem} key={listItem.event.id} />) }
    </Container>
  );
}
