import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { Head, useForm } from '@inertiajs/inertia-react';
import { Modal } from '@/layouts/modal';
import Group from '@/layouts/form/group';
import Header from '@/components/form/header';
import Errors from '@/components/form/errors';
import Input from '@/components/form/input';
import Button from '@/components/form/button';

export default function AddUser(props) {

  const add = (props.data.username === null);
  const action = add ? 'Ajouter' : 'Editer';

  const { data, setData, post, processing, errors, reset } = useForm({
    id: props.data.id || '',
    username: props.data.username || '',
    password: '',
    confirm: '',
  });

  const handleChange = (event) => {
    setData(event.target.name, event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    if(add) {
      post(route('add-user'));
    }
    else {
      post(route('edit-user', props.data.id));
    }

  };

  return (
    <>
      <Head title={`${ action } l'utilisateur`} />
      <Modal>
        <div className="p-10 pt-20">
          <div className="p-5 bg-white rounded-xl shadow-lg w-full">
          <Header title={`${ action } l'utilisateur`} />
          <Errors errors={ errors } />

          <Group onSubmit={ submit }>
            <Input type="text" title="Utilisateur" name="username" placeholder="Nom d'utilisateur" value={ data.username } onChange={ handleChange } required />
            <Input type="password" title="Mot de passe" name="password" placeholder="Mot de passe" onChange={ handleChange } required />
            <Input type="password" title="Confirmer le mot de passe" name="password_confirmation" placeholder="Confirmer le mot de passe" onChange={ handleChange } required />
            <Button processing={ processing }>{`${ action } l'utilisateur`}</Button>
          </Group>
          { !add && props.data.canDelete &&
            <div className="pt-2">
              <Link href={ route('delete-user', props.data.id) } type="button" className="inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest">Supprimer l'utilisateur</Link>
            </div>
          }
          </div>
        </div>
      </Modal>
    </>
  );
}
