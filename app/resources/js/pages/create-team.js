import React from 'react';
import { Head, useForm } from '@inertiajs/inertia-react';
import Frame from '@/layouts/form/frame';
import Group from '@/layouts/form/group';
import Header from '@/components/form/header';
import Errors from '@/components/form/errors';
import Input from '@/components/form/input';
import Select from '@/components/form/select';
import Button from '@/components/form/button';

const Start = (props) => {

  const { data, setData, post, processing, errors, reset } = useForm({
    group: '',
    name: '',
  });

  const handleChange = (event) => {
    setData(event.target.name, event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    post(route('create-team'));
  };

  return (
    <>
      <Head title="Créer une équipe" />
      <Frame>
        {(props.running == true) &&
          <>
            <Header title={props.name}>
              <p>Choisissez votre groupe et décidez d'un nom d'équipe pour commencer l'événement.</p>
            </Header>

            <Errors errors={errors} />

            <Group onSubmit={submit}>
              <Select title="Groupe" name="group" placeholder="Sélectionnez votre groupe" onChange={handleChange} required>
                {props.groups.map(g => (<option key={g.id} value={g.id}>{g.name}</option>))}
              </Select>
              <Input type="text" title="Nom de l'équipe" name="name" placeholder="Entrer votre nom d'équipe" onChange={handleChange} required />
              <Button processing={processing}>Rejoindre l'événément</Button>
            </Group>
          </>
        }

        {(props.running == false) &&
          <Header title={props.name}>
            <p>Cet événement n'est pas en cours, revenez plus tard !</p>
          </Header>
        }
      </Frame>
    </>
  );
}

Start.layout = null;
export default Start;
