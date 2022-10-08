import { fireDB } from '../config'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { doc, getDoc } from 'firebase/firestore'

// For using firebase please install package "npm install -g firebase-tools"
const writeData = async (collectionName, data) => {
  const colRef = collection(fireDB, collectionName)
  const doc = await addDoc(colRef, data)
  return doc.id
}

export { writeData }

// Instruction of using these functions in the components to perform CRUD operations:

// 1. Import the function in the component you want use these function.
// 2. Call the function and give it the required arguments.

// Below is the example of using of writeData. It upload new data in the firebase Database.

// import { writeData } from "./functions/crudOperations"

// let data = {
//   category_img: 'a',
//   title: 'a',
// }

// <button onClick={() => writeData('programs', data)}>c</button>
