import { openDB } from 'idb';

const initdb = async () =>
  openDB('texteditor-db', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('texteditor-db')) {
        console.log('texteditor-db database already exists');
        return;
      }
      db.createObjectStore('texteditor-db', { keyPath: 'id', autoIncrement: true });
      console.log('texteditor-db database created');
    },
  });

//allows put in database
export const putDb = async (text) => {

  const textDb = await openDB('texteditor-db', 1);

  const tx = textDb.transaction('texteditor-db', 'readwrite');

  const store = tx.objectStore('texteditor-db');

  const request = store.add({id:1, value: text});

  const result = await request;
  console.log('data saved', result);
};

//allows get in database
export const getDb = async () => {
  
  const textdb = await openDB('texteditor-db', 1);

  const tx = textdb.transaction('texeditor-db', ' readonly');

  const store = tx.objectStore('texteditor-db');

  const request = store.get(1);

  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
