import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { Head, useForm } from '@inertiajs/inertia-react';
import { Modal } from '@/layouts/modal';
import Group from '@/layouts/form/group';
import Header from '@/components/form/header';
import Errors from '@/components/form/errors';
import Input from '@/components/form/input';
import Button from '@/components/form/button';

export default function AddGroup(props) {

  const add = (props.data.name === null);
  const action = add ? 'Ajouter' : 'Editer';

  const { data, setData, post, processing, errors, reset } = useForm({
    id: props.data.id || '',
    name: props.data.name || '',
    number: props.data.number || '',
  });

  const handleChange = (event) => {
    setData(event.target.name, event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    if(add) {
      post(route('add-group'));
    }
    else {
      post(route('edit-group', props.data.id));
    }
    
  };
  
  const deleteGroup = (e) => {
    e.preventDefault();
    post(route('delete-group', props.data.id));
  }

  return (
    <>
      <Head title={`${ action } le groupe`} />
      <Modal>
        <div className="p-10 pt-20">
          <div className="p-5 bg-white rounded-xl shadow-lg w-full">
          <Header title={`${ action } le groupe`} />
          <Errors errors={errors} />
          
          <Group onSubmit={ submit }>
            <Input type="number" title="Numéro du groupe" name="number" placeholder="Numéro du groupe" value={ data.number } onChange={ handleChange } required />
            <Input type="text" title="Nom du groupe" name="name" placeholder="Nom du groupe" value={ data.name } onChange={ handleChange } required />
            <Button processing={ processing }>{`${ action } le groupe`}</Button>
          </Group>
          { !add && 
            <div className="pt-2">
              <Link href={ route('delete-group', props.data.id) } type="button" className="inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest">Supprimer le groupe</Link>
            </div>
          }
          </div>
        </div>
      </Modal>
    </>
  );
}
