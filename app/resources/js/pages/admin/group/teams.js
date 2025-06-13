import React from 'react';
import Frame, { Stripe } from '@/layouts/admin/frame';
import List from '@/layouts/admin/team-list';

export default function TeamList({ teams, group }) {
  return (
    <List teams={ teams }>
      Equipes dans le groupe <span className="font-bold">{ group }</span>
    </List>
  )
}
