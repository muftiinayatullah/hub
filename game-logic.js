import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';
import { saveDareAnswer } from './firebase.js';

export function handleModal(modalId, action = 'open') {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = action === 'open' ? 'flex' : 'none';
  }
}

export async function saveNoResponse(name) {
  try {
    const db = getFirestore();
    await addDoc(collection(db, 'noResponses'), {
      name: name,
      timestamp: new Date()
    });
  } catch (error) {
    console.error('Error saving no response:', error);
    throw error;
  }
}

export async function saveYesResponse(name) {
  try {
    const db = getFirestore();
    await addDoc(collection(db, 'yesResponses'), {
      name: name,
      timestamp: new Date()
    });
  } catch (error) {
    console.error('Error saving yes response:', error);
    throw error;
  }
}

export async function submitDareAnswer(name, dare, answer) {
  try {
    await saveDareAnswer(name, dare, answer);
  } catch (error) {
    console.error('Error submitting dare answer:', error);
    throw error;
  }
}