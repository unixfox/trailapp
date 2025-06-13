import React from 'react';
import { Head, useForm } from '@inertiajs/inertia-react';
import { Modal } from '@/layouts/modal';
import Group from '@/layouts/form/group';
import Header from '@/components/form/header';
import Errors from '@/components/form/errors';

export default function ToggleRunningEvent({ event }) {

  const { data, setData, post, processing, errors, reset } = useForm({
    id: event.id,
  });

  const toggleRunning = (e) => {
    e.preventDefault();
    post(route('toggle-event-running', event.id));
  }

  return (
    <>
      <Head title="Changer l'événement en cours" />
      <Modal>
        <div className="p-10 pt-20">
          <div className="p-5 bg-white rounded-xl shadow-lg w-full">

            {(event.running == true) &&
              <Header title="Arrêter l'événement en cours">
                <p className="font-medium mb-2">Êtes-vous sûr de vouloir arrêter l'événement <span className="font-bold">{event.name}</span> en cours ?</p>
                <p className="text-red-500">Cela mettra fin à l'événement, et toutes les équipes qui y participent actuellement seront exclues.</p>
              </Header>
            }
            {(event.running == false) &&
              <Header title="Démarrer l'événement">
                <p className="font-medium mb-2">Êtes-vous sûr de vouloir démarrer l'événement <span className="font-bold">{event.name}</span>?</p>
              </Header>
            }
            <Errors errors={errors} />

            <Group onSubmit={toggleRunning}>
              <input type="hidden" name="id" value={event.id} />
              {(event.running == true) &&
                <button type="submit" className="inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest">Arrêt de l'événement en cours</button>
              }
              {(event.running == false) &&
                <button type="submit" className="inline-flex items-center px-4 py-2 bg-green-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest">Démarrer l'événement</button>
              }
            </Group>
          </div>
        </div>
      </Modal>
    </>
  );
}
