import * as types from '../reducers/types';

import axios from 'axios';
//var Database = require('arangojs').Database;

//var db = new Database('http://127.0.0.1:8529');
/*
db.createDatabase('sce').then(
    () => console.log('Database created'),
    err => console.error('Failed to create database:', err)
);*/

//db.useDatabase('sce');

//let collection = db.collection('models');

/*

collection.create().then(
    () => console.log('Collection created'),
    err => console.error('Failed to create collection:', err)
);
*/


/*let doc = {
    _key: 'firstDocument',
    a: 'foo',
    b: 'bar',
    c: Date()
};


collection.save(doc).then(
    meta => console.log('Document saved:', meta._rev),
    err => console.error('Failed to save document:', err)
);


collection.update('firstDocument', {d: 'qux'}).then(
    meta => console.log('Document updated:', meta._rev),
    err => console.error('Failed to update document:', err)
);


collection.document('firstDocument').then(
    doc => console.log('Document:', JSON.stringify(doc, null, 2)),
    err => console.error('Failed to fetch document:', err)
);*/

export const fetchAllModels = () => {

    return (dispatch) => {
        return "hello"
    }
}

export const searchWebsites = () => {
    return (dispatch) => {

    }
}


export const fetchNewTime = () => ({
    type: types.FETCH_NEW_TIME,
    payload: new Date().toString(),
})

/*
export const login = (user) => ({
    type: types.LOGIN,
    payload: user
})

export const logout = () => ({
    type: types.LOGOUT,
})*/
