import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { Head, useForm } from '@inertiajs/inertia-react';
import { Modal } from '@/layouts/modal';
import Group from '@/layouts/form/group';
import Header from '@/components/form/header';
import Errors from '@/components/form/errors';
import Textarea from '@/components/form/textarea';
import Button from '@/components/form/button';

export default function Broadcast(props) {

  const { data, setData, post, processing, errors } = useForm({
    message: '',
  });

  const handleChange = (event) => {
    setData(event.target.name, event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    if(props.id === null) {
      console.log('Annonce à tout le monde');
      post(route('broadcast'));
    }
    else {
      console.log(`Annonce à ${ props.id }`);
      post(route('broadcast-to-team', props.id));
    }
  };
  
  const name = (props.name !== null) ? props.name : 'all teams';
  const title = (props.name !== null) ? ` to ${ props.name }` : '';

  return (
    <>
      <Head title="Annonce" />
      <Modal>
        <div className="p-10 pt-20">
          <div className="p-5 bg-white rounded-xl shadow-lg w-full">
            <Header title={`Annonce${ title }`}>
              <p><span className="italic">Annonce</span> envoie instantanément un message aux équipes - utilisez-le avec précaution et vérifiez qu'il n'y a pas d'erreurs dans votre message !</p>
            </Header>
            <Errors errors={ errors } />
            <Group onSubmit={ submit }>
              <Textarea title="Message" name="message" placeholder={`Envoyer un message à ${ name }`} onChange={ handleChange } required />
              <Button processing={ processing }>Annonce</Button>
            </Group>
          </div>
        </div>
      </Modal>
    </>
  );
}
