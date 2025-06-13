import React from 'react';
import { Head, useForm } from '@inertiajs/inertia-react';
import { Modal } from '@/layouts/modal';
import Group from '@/layouts/form/group';
import Header from '@/components/form/header';
import Errors from '@/components/form/errors';
import Button from '@/components/form/button';

export default function DeleteChallenge({ id, name }) {

  const { data, setData, post, processing, errors, reset } = useForm({
    id: id,
  });

  const deleteChallenge = (e) => {
    e.preventDefault();
    post(route('delete-challenge', id));
  }

  return (
    <>
      <Head title="Supprimer le challenge" />
      <Modal back={ route('challenges') }>
        <div className="p-10 pt-20">
          <div className="p-5 bg-white rounded-xl shadow-lg w-full">
            <Header title="Supprimer le challenge">
              <p className="text-red-500 font-medium">Êtes-vous sûr de vouloir supprimer le défi <span className="font-bold">{ name }</span>? Cela supprimera également toutes les soumissions qui y sont associées.</p>
            </Header>
            
            <Errors errors={errors} />
            
            <Group onSubmit={ deleteChallenge }>
              <input type="hidden" name="id" value={ id } />
              <button type="submit" className="inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest">Supprimer Challenge</button>
            </Group>
          </div>
        </div>
      </Modal>
    </>
  );
}
