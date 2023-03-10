import {useState, useEffect} from 'react';
import { Container } from '@mui/material';
import ReminderList from './components/ReminderList';
import Reminder from './models/Reminder';
import reminderService from './services/reminder'
import './App.css';
import NewReminder from './components/NewReminder';



function App() {

const [reminders, setReminders] = useState<Reminder[]>([])

useEffect(()=>{
loadReminders()
},[]);

const loadReminders = async ()=>{
  const reminders = await reminderService.getReminders();
  setReminders(reminders);
}

const removeReminder = (id: number) =>{
setReminders(reminders.filter(reminder => reminder.id !== id))
}

const addReminder = async (title: string) => {
const newReminder = await reminderService.addReminder(title);
setReminders([newReminder,...reminders])
}

  return (
    <>
    <Container>
      <NewReminder onAddReminder={addReminder} />
    <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </Container>
    </>
  );
}

export default App;
