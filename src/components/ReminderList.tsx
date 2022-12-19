import React from "react";
import Reminder from "../models/Reminder";
import { Box, ListItem, Button } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

function ReminderList({ items,onRemoveReminder }: ReminderListProps) {
  return (
    <>
      <ul>
        {items.map((item ) => {
          return (
            <>
              <Box key={item.id} sx={{ border: "1px solid black", p: "2" }}>
                <ListItem>{item.title}</ListItem>
              </Box>
              <Button
                onClick={()=> onRemoveReminder(item.id)}
                sx={{ width: "100%", mb: 2 }}
                variant="outlined"
                color="error"
              >
                <RemoveIcon />
              </Button>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default ReminderList;
