import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import toast from 'react-hot-toast';
import { ContactSchemaType } from '@/schema';

// eslint-disable-next-line no-unused-vars
type ResetType = (values?: ContactSchemaType) => void;

const createClientMessage = async (
  data: ContactSchemaType,
  reset: ResetType
) => {
  await addDoc(collection(db, 'Client_Messages'), {
    ...data,
    timestamp: Timestamp.now(),
  })
    .then(() => {
      toast.success(
        'Thank you for your message 😊, we will get back to you soon!'
      );
      reset();
    })
    .catch((error) => {
      toast.error(`Error: ${error}`);
    });
};

export { createClientMessage };
