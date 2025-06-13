import React from 'react';
import { Head, useForm } from '@inertiajs/inertia-react';
import { Modal } from '@/layouts/modal';
import Group from '@/layouts/form/group';
import Header from '@/components/form/header';
import Errors from '@/components/form/errors';
import Button from '@/components/form/button';

export default function DeleteGroup({ id, name }) {

  const { data, setData, post, processing, errors, reset } = useForm({
    id: id,
  });

  const deleteGroup = (e) => {
    e.preventDefault();
    post(route('delete-group', id));
  }

  return (
    <>
      <Head title="Supprimer le groupe" />
      <Modal back={ route('groups') }>
        <div className="p-10 pt-20">
          <div className="p-5 bg-white rounded-xl shadow-lg w-full">
            <Header title="Supprimer le groupe">
              <p className="text-red-500 font-medium">Êtes-vous sûr de vouloir supprimer le groupe <span className="font-bold">{ name }</span>? Cela supprimera toutes les équipes (et toutes les soumissions) qui y sont associées.</p>
            </Header>
            
            <Errors errors={errors} />
            
            <Group onSubmit={ deleteGroup }>
              <input type="hidden" name="id" value={ id } />
              <button type="submit" className="inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest">Supprimer le groupe</button>
            </Group>
          </div>
        </div>
      </Modal>
    </>
  );
}
