import React from 'react';
import List from '@/layouts/admin/submission-list';
import { Button, ButtonBar } from '@/components/admin/button-bar';

export default function Submissions({ submissions }) {
  return (
    <List submissions={ submissions }>
      <ButtonBar>
        <Button href={ route('submissions') }>Toutes</Button>
        <Button href={ route('submissions', 'pending') }>En attente</Button>
      </ButtonBar>
    </List>
  )
}
