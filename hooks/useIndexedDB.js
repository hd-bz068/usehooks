import { useState } from "react";

const useIndexedDB = (DB, tableName, primaryKey) => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [database] = useState(DB);
  const [table] = useState(tableName);

  if (!window.indexedDB) {
    setError(
      "Your browser does not support a stable version of IndexedDB. Such and such feature will not be available."
    );
  }

  var db = null;

  const request = indexedDB.open(database);

  request.onupgradeneeded = function (event) {
    db = event.target.result;

    db.createObjectStore(table, { keyPath: primaryKey });
  };

  request.onerror = function (event) {
    setError(
      event.target.error || "Please allow my web app to use IndexedDB?!"
    );
  };

  request.onsuccess = function (event) {
    db = event.target.result;

    setSuccess("connected");
    setError(null);
  };

  const add = (object) => {
    const transaction = db.transaction(tableName, "readwrite");

    transaction.onerror = function (event) {
      setError(event.target.error.message);
    };

    var objectStore = transaction.objectStore(tableName);
    var request = objectStore.add(object);
    request.onsuccess = function () {
      setSuccess("Added");
      setError(null);
    };
  };

  const removeItem = (id) => {
    var request = db
      .transaction(tableName, "readwrite")
      .objectStore(tableName)
      .delete(id);

    request.onerror = (event) => {
      console.log(event.target);
      setError(event.target.error.message);
    };

    request.onsuccess = function () {
      setSuccess("deleted");
      setError(null);
    };
  };

  const updateItem = (obj) => {
    let objectStore = db
      .transaction(tableName, "readwrite")
      .objectStore(tableName);
    const id = `${obj}.${primaryKey}`;
    console.log(id);
    let request = objectStore.get(id);

    request.onerror = function (event) {
      setError(event.target.error.message);
    };
    request.onsuccess = function (event) {
      var data = event.target.result;

      // update the value(s) in the object that you want to change
      data = obj;

      // Put this updated object back into the database.
      var requestUpdate = objectStore.put(data);
      requestUpdate.onerror = function (event) {
        setError(event.target.error.message);
        setError(null);
      };
      requestUpdate.onsuccess = function (event) {
        setSuccess("Updated");
      };
    };
  };

  const getItem = (id) => {
    return new Promise(function (resolve, reject) {
      var transaction = db.transaction(tableName);
      var objectStore = transaction.objectStore(tableName);
      var request = objectStore.get(id);

      request.onerror = function (event) {
        setError(event.target.error.message);
      };
      request.onsuccess = function () {
        setError(null);
        resolve(request.result);
        return request.result;
      };
    });
  };

  const getAll = () => {
    return new Promise(function (resolve, reject) {
      var objectStore = db.transaction(tableName).objectStore(tableName);

      let data = [];

      objectStore.openCursor().onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
          data.push(cursor.value);
          cursor.continue();
        } else {
          resolve(data);
        }
      };
    });
  };

  const state = { error, success };

  const actions = { add, removeItem, updateItem, getItem, getAll };

  return [state, actions];
};

export default useIndexedDB;
