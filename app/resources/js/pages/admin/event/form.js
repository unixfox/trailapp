import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { Head, useForm } from '@inertiajs/inertia-react';
import { Modal } from '@/layouts/modal';
import Group from '@/layouts/form/group';
import Header from '@/components/form/header';
import Errors from '@/components/form/errors';
import Input from '@/components/form/input';
import Button from '@/components/form/button';
import Select from '@/components/form/select';
import Checkbox from '@/components/form/checkbox';

export default function AddEvent(props) {

  const add = (props.event === false);
  const action = add ? 'Ajouter' : 'Editer';

  const { data, setData, post, processing, errors, reset } = useForm({
    id: props.event.id || '',
    name: props.event.name || '',
    clone: false,
    clone_questions: true,
    clone_challenges: true,
    clone_groups: true,
  });

  const handleChange = (event) => {
    setData(event.target.name, event.target.value);
  };

  const handleCheckbox = (event) => {
    setData(event.target.name, !data[event.target.name]);
  }

  const submit = (e) => {
    e.preventDefault();
    if (add) {
      post(route('new-event'));
    }
    else {
      post(route('edit-event', props.event.id));
    }

  };

  return (
    <>
      <Head title={`${action} l'événement`} />
      <Modal back={route('events')}>
        <div className="p-10 pt-20">
          <div className="p-5 bg-white rounded-xl shadow-lg w-full">
            <Header title={`${action} l'événement`} />
            <Errors errors={errors} />

            <Group onSubmit={submit}>
              <Input type="text" title="Nom de l'événement" name="name" placeholder="Name" value={data.name} onChange={handleChange} required />
              {(add == true) &&
                <>
                  <Checkbox name="clone" label="Copier un événement existant ?" onChange={handleCheckbox} defaultChecked={data.clone} />
                  <Select title="Événement à Copier" name="clone_event_id" placeholder="Choisir un événement" onChange={handleChange}>
                    {props.events.map(e => (<option key={e.id} value={e.id}>{e.name}</option>))}
                  </Select>
                  <Checkbox name="clone_questions" label="Copier les questions" onChange={handleCheckbox} defaultChecked={data.clone_questions} />
                  <Checkbox name="clone_challenges" label="Copier les challenges" onChange={handleCheckbox} defaultChecked={data.clone_challenges} />
                  <Checkbox name="clone_groups" label="Copier les groupes" onChange={handleCheckbox} defaultChecked={data.clone_groups} />
                </>
              }
              <Button processing={processing}>{`${action} l'événement`}</Button>
            </Group>
            {(add == false) && (props.event.active == false) &&
              <div className="pt-2">
                <Link href={route('delete-event', props.event.id)} type="button" className="inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest">Supprimer Événement</Link>
              </div>
            }
          </div>
        </div>
      </Modal>
    </>
  );
}
