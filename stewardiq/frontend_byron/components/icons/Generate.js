export const Generate = ({ active }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0001 19.6258H5.44514C2.26431 19.6258 0.935142 17.3525 2.47514 14.575L5.33514 9.42334L8.03014 4.58334C9.66181 1.64084 12.3385 1.64084 13.9701 4.58334L16.6651 9.43251L19.5251 14.5842C21.0651 17.3617 19.7268 19.635 16.5551 19.635H11.0001V19.6258Z"
        stroke={active ? "#6D3FF3" : "#525865"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.6533 18.3333L11 12.2742L2.34668 18.3333"
        stroke={active ? "#6D3FF3" : "#525865"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 2.75V12.2742"
        stroke={active ? "#6D3FF3" : "#525865"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
