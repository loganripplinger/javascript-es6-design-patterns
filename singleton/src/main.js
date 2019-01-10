import test from './tressa.js';
import Singleton1 from './singleton1';
import Singleton2 from './singleton2'
import Singleton3 from './singleton3'
import DatabaseSingleton from './database'

((desc) => {
  const a1 = new Singleton1()
  const b1 = new Singleton1()
  
  test(a1 === b1, `${desc}: assert that they are the same object.`)
})('Singleton 1')

((desc) => {
  const a2 = Singleton2
  const b2 = Singleton2

  test(a2 === b2, `${desc}: assert that they are the same object.`)
})('Singleton 2')

((desc) => {
  const a2 = Singleton3
  const b2 = Singleton3

  test(a2 === b2, `${desc}: assert that they are the same object.`)
})('Singleton 3')

((desc) => {
  const db1 = new DatabaseSingleton();
  db1.add('first')
  test(db1.find('first') == true, `${desc}: find item we already added passes.`)
  test(db1.find('third') == false, `${desc}: find something not there fails.`)
  
  db1.add('second')
  const db2 = new DatabaseSingleton();
  test(db2.find('second') == true, `${desc}: add to db1 and its found in db2.`)

  test(db1 === db2, `${desc}: assert that db1 and db2 are the same object.`)
})('Database Singleton')