import React from 'react';
import { Head, useForm } from '@inertiajs/inertia-react';
import { Modal } from '@/layouts/modal';
import Group from '@/layouts/form/group';
import Header from '@/components/form/header';
import Errors from '@/components/form/errors';
import Button from '@/components/form/button';

export default function DeleteTeam({ id, name }) {

  const { data, setData, post, processing, errors, reset } = useForm({
    id: id,
  });

  const deleteTeam = (e) => {
    e.preventDefault();
    post(route('delete-team', id));
  }

  return (
    <>
      <Head title="Supprimer l'équipe" />
      <Modal back={ route('teams') }>
        <div className="p-10 pt-20">
          <div className="p-5 bg-white rounded-xl shadow-lg w-full">
            <Header title="Supprimer l'équipe">
              <p className="text-red-500 font-medium">Êtes-vous sûr de vouloir supprimer l'équipe <span className="font-bold">{ name }</span>? Cela supprimera toutes les soumissions qui y sont associées.</p>
            </Header>
            
            <Errors errors={errors} />
            
            <Group onSubmit={ deleteTeam }>
              <input type="hidden" name="id" value={ id } />
              <button type="submit" className="inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest">Supprimer l'équipe</button>
            </Group>
          </div>
        </div>
      </Modal>
    </>
  );
}
