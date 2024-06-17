import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";

type Props = {
  id: string;
  assignment: string;
  completed: boolean;
  toggleCompletion: (id: string) => void;
  delteTask: (id: string) => void;
};

export function Assignment({
  id,
  assignment,
  completed,
  toggleCompletion,
  delteTask,
}: Props) {
  return (
    <div className={styles.assignment}>
      <button
        className={styles.checkContainer}
        onClick={() => toggleCompletion(id)}
      >
        {completed ? <BsCheckCircleFill /> : <div />}
      </button>

      <p>{assignment}</p>

      <button className={styles.deleteButton}>
        <TbTrash size={20} onClick={() => delteTask(id)} />
      </button>
    </div>
  );
}
