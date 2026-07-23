type AddButtonProps = {
  onClick: () => void;
};

function AddButton({ onClick }: AddButtonProps) {
  return <button onClick={onClick}>予定追加</button>;
}

export default AddButton;
