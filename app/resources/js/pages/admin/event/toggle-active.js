import React from 'react';
import { Head, useForm } from '@inertiajs/inertia-react';
import { Modal } from '@/layouts/modal';
import Group from '@/layouts/form/group';
import Header from '@/components/form/header';
import Errors from '@/components/form/errors';

export default function ToggleActiveEvent({ event }) {

  const { data, setData, post, processing, errors, reset } = useForm({
    id: event.id,
  });

  const toggleActive = (e) => {
    e.preventDefault();
    post(route('toggle-event-active', event.id));
  }

  return (
    <>
      <Head title="Modifier l'événement actif" />
      <Modal back={route('events')}>
        <div className="p-10 pt-20">
          <div className="p-5 bg-white rounded-xl shadow-lg w-full">
            <Header title="Modifier l'événement actif">
              <p className="font-medium mb-2">Êtes-vous sûr de vouloir d'activer l'événement <span className="font-bold">{event.name}</span> ?</p>
              <p className="text-red-500">Cela mettra fin à l'événement en cours, et toutes les équipes participantes seront exclues de l'événement.</p>
            </Header>
            <Errors errors={errors} />
            <Group onSubmit={toggleActive}>
              <input type="hidden" name="id" value={event.id} />
              <button type="submit" className="inline-flex items-center px-4 py-2 bg-green-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest">Rendre l'événement actif</button>
            </Group>
          </div>
        </div>
      </Modal>
    </>
  );
}
