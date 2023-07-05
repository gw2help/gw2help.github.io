import firebase from "../firebase";

let db = firebase.ref("/array");

class CrudService {
  getAll() {
    var list = [];
    
    var childData;
    db = firebase.ref("/array/builds");
    db.on('value',function(snapshot){
        snapshot.forEach(function(childSnapshot){
            childData = childSnapshot.val();
            list.push(childData);
        })
    })
    console.log("CRUDSERVICE");
    console.log(list);
    return list;
  }
  getAllText(){
      db = firebase.ref("/array/accounts");
      return db;
  }
  create(object) {
      console.log(object);
    switch(object.class){
        case "guardian":                    
            db = firebase.ref("/array/builds/0/guardian/0");
            break;
        case "revenant":                  
            db = firebase.ref("/array/builds/0/revenant/0");
            break;
        case "ranger":                    
            db = firebase.ref("/array/builds/0/ranger/0");
            break;
        case "engineer":                    
            db = firebase.ref("/array/builds/0/engineer/0");
            break;
        case "mesmer":                    
            db = firebase.ref("/array/builds/0/mesmer/0");
            break;
        case "thief":                    
            db = firebase.ref("/array/builds/0/thief/0");
            break;
        case "necromancer":                    
            db = firebase.ref("/array/builds/0/necromancer/0");
            break;
        case "warrior":                    
            db = firebase.ref("/array/builds/0/warrior/0");
            break;
        case "elementalist":                    
            db = firebase.ref("/array/builds/0/elementalist/0");
            break;
    }
    return db.push(object);
  }
  createPerson(object){
      db = firebase.ref("/array/accounts")
      return db.push(object);
  }
  getAccounts(){
    var list = [];

    var childData;
    db = firebase.ref("/array/accounts");
    console.log("DATABASE ACCOUNTS");
    console.log(db);
    db.on('value', function(snapshot){
      snapshot.forEach(function(childSnapshot){
        childData = childSnapshot.val();
        list.push(childData);
      })
      console.log("CRUDSERVICE =>> get Accounts");
      console.log(list);
      return list;
    })
  }
  /*
    update(key, value) {
      return db.child(key).update(value);
    }
    delete(key) {
      return db.child(key).remove();
    }
    deleteAll() {
      return db.remove();
    }
  */

    
}

export default new CrudService();