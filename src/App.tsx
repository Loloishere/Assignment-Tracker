import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";
import { TAssignment } from "./types";

function App() {
  const [assignments, setAssignments] = useState<TAssignment[]>([
    { id: "1", task: "study typescript", completed: false },
  ]);

  const toggleCompletion = (id: string) => {
    setAssignments((preAssignments) =>
      preAssignments.map((assignment) =>
        assignment.id == id
          ? { ...assignment, completed: !assignment.completed }
          : assignment
      )
    );
  };

  const delteTask = (id: string) => {
    setAssignments((preAssignmenet) =>
      preAssignmenet.filter((assignment) => assignment.id !== id)
    );
  };
  return (
    <>
      <Header setAssignments={setAssignments} />
      <Assignments
        assignments={assignments}
        toggleCompletion={toggleCompletion}
        delteTask={delteTask}
      />
    </>
  );
}

export default App;
