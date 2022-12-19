import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}

function NewReminder({ onAddReminder }: NewReminderProps): JSX.Element {
  const [title, setTitle] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) alert("plz fill input");
    onAddReminder(title);
    setTitle("");
  };

  return (
    <>
      <Stack display={"flex"} flexDirection="column" marginLeft={5}>
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="title"
          variant="filled"
        />
        <br />
        <Button
          onClick={submit}
          sx={{ p: 1 }}
          variant="outlined"
          color="primary"
        >
          Add Reminder
        </Button>
      </Stack>
    </>
  );
}

export default NewReminder;
