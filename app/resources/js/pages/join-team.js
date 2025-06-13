import React from 'react';
import { Head, useForm } from '@inertiajs/inertia-react';
import { Modal, Header } from '@/layouts/modal';
import Errors from '@/components/form/errors';
import TextSubmission from '@/components/text-submission';


export default function Question({ team, src }) {

  return (
    <>
      <Head title="Join Team" />
      <Modal>
        <div className="px-10 py-20 text-white text-xl">
          <div className="pb-5 font-serif text-4xl font-bold">Join a team</div>
          <p>Rejoindre <span className="font-bold">{ team }</span> en scannant le code QR ci-dessous avec votre téléphone.</p>
          <div className="pt-10">
            <img className="bg-white rounded-xl shadow-lg mx-auto" src={ src } />
          </div>
        </div>
      </Modal>
    </>
  );
}
