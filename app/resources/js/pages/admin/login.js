import React from 'react';
import { Head, useForm } from '@inertiajs/inertia-react';
import Frame from '@/layouts/form/frame';
import Group from '@/layouts/form/group';
import Header from '@/components/form/header';
import Errors from '@/components/form/errors';
import Input from '@/components/form/input';
import Button from '@/components/form/button';

export default function Login(props) {

  const { data, setData, post, processing, errors, reset } = useForm({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    setData(event.target.name, event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    post(route('login'));
  };

  return (
    <>
      <Head title="Connexion" />
      <div className="container max-w-screen-lg mx-auto">
        <Frame>
          <Header title={ props.name } />
          <Errors errors={errors} />
          <Group onSubmit={ submit }>
            <Input type="text" title="Nom d'utilisateur" name="username" placeholder="Nom d'utilisateur" onChange={ handleChange } required />
            <Input type="password" title="Mot de passe" name="password" placeholder="Mot de passe" onChange={ handleChange } required />
            <Button processing={ processing }>Connexion</Button>
          </Group>
        </Frame>
      </div>
    </>
  );
}
