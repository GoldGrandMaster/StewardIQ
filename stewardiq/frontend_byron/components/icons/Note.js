export const Note = ({ active }) => {
  return (
    <svg
      width="22"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3333 8.06248V17C18.3333 19.75 16.6925 20.6666 14.6666 20.6666H7.33329C5.30746 20.6666 3.66663 19.75 3.66663 17V8.06248C3.66663 5.08331 5.30746 4.39581 7.33329 4.39581C7.33329 4.96415 7.56243 5.47748 7.93827 5.85331C8.3141 6.22914 8.82746 6.45831 9.39579 6.45831H12.6041C13.7408 6.45831 14.6666 5.53248 14.6666 4.39581C16.6925 4.39581 18.3333 5.08331 18.3333 8.06248Z"
        stroke={active ? "#6D3FF3" : "#525865"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 4.39581C14.6667 5.53248 13.7409 6.45831 12.6042 6.45831H9.39587C8.82754 6.45831 8.31418 6.22914 7.93835 5.85331C7.56252 5.47748 7.33337 4.96415 7.33337 4.39581C7.33337 3.25915 8.25921 2.33331 9.39587 2.33331H12.6042C13.1725 2.33331 13.6859 2.56248 14.0617 2.93832C14.4376 3.31415 14.6667 3.82748 14.6667 4.39581Z"
        stroke={active ? "#6D3FF3" : "#525865"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.33337 12.4167H11"
        stroke={active ? "#6D3FF3" : "#525865"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.33337 16.0833H14.6667"
        stroke={active ? "#6D3FF3" : "#525865"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
