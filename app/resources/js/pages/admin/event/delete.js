import React from 'react';
import { Head, useForm } from '@inertiajs/inertia-react';
import { Modal } from '@/layouts/modal';
import Group from '@/layouts/form/group';
import Header from '@/components/form/header';
import Errors from '@/components/form/errors';

export default function DeleteEvent({ event }) {

  const { data, setData, post, processing, errors, reset } = useForm({
    id: event.id,
  });

  const deleteEvent = (e) => {
    e.preventDefault();
    post(route('delete-event', event.id));
  }

  return (
    <>
      <Head title="Supprimer un événement" />
      <Modal back={route('edit-event', event.id)}>
        <div className="p-10 pt-20">
          <div className="p-5 bg-white rounded-xl shadow-lg w-full">
            <Header title="Supprimer l'événement">
              <p className="text-orange-500 font-medium mb-2">Êtes-vous sûr de vouloir supprimer l'événement <span className="font-bold">{event.name}</span>?</p>
              <p className="text-red-500 font-bold">Cela supprimera toutes les questions, tous les défis, tous les groupes, toutes les équipes et toutes leurs contributions. Veuillez vous assurer que vous souhaitez effectuer cette opération !</p>
            </Header>
            <Errors errors={errors} />
            <Group onSubmit={deleteEvent}>
              <input type="hidden" name="id" value={event.id} />
              <button type="submit" className="inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest">Supprimer Événement</button>
            </Group>
          </div>
        </div>
      </Modal>
    </>
  );
}
