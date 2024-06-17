import { TAssignment } from "../../types";
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

type Props = {
  assignments: TAssignment[];
  toggleCompletion: (id: string) => void;
  delteTask: (id: string) => void;
};

export function Assignments({
  assignments,
  toggleCompletion,
  delteTask,
}: Props) {
  const completeCount = assignments.filter(
    (assignment) => assignment.completed
  ).length;
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>
            {completeCount} of {assignments.length}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment) => (
          <Assignment
            key={assignment.id}
            id={assignment.id}
            assignment={assignment.task}
            completed={assignment.completed}
            toggleCompletion={toggleCompletion}
            delteTask={delteTask}
          />
        ))}
      </div>
    </section>
  );
}
