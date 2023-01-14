import styles from "../styles/DropDownList.module.scss";

// TypeScript
interface DropDownListProps {
  showDropDown: boolean;
  selected: string;
  setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

// Drop Down List Options Array
const options = ["Login", "Register", "Email", "Payment"];

const DropDownList = ({
  showDropDown,
  setShowDropDown,
  selected,
  setSelected,
}: DropDownListProps) => {
  return (
    <div className={styles.listContainer}>
      <h2 className={styles.selectionText}>Select a form</h2>

      <div
        className={styles.textBox}
        onClick={() => setShowDropDown(!showDropDown)}
      >
        {selected}
        {showDropDown ? (
          <span
            style={{ transform: "rotate(180deg)" }}
            className={styles.arrow}
          >
            &#9662;
          </span>
        ) : (
          <span className={styles.arrow}>&#9662;</span>
        )}
      </div>

      {showDropDown && (
        <div className={styles.options} onClick={() => setShowDropDown(false)}>
          {options.map((option) => (
            <h2 key={option} onClick={() => setSelected(option)}>
              {option}
            </h2>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownList;
