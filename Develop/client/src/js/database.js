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

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async () => console.log(); 


//console.error('putDb not implemented');

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.log('Get from database');


//console.error('getDb not implemented');

initdb();
