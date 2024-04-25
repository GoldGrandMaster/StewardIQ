export const Logout = ({ active }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9868 13.4016L18.3335 11.0549L15.9868 8.70825"
        stroke={active ? "#6D3FF3" : "#525865"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.94678 11.0549H18.2693"
        stroke={active ? "#6D3FF3" : "#525865"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.7801 18.3334C6.72844 18.3334 3.44678 15.5834 3.44678 11.0001C3.44678 6.41675 6.72844 3.66675 10.7801 3.66675"
        stroke={active ? "#6D3FF3" : "#525865"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
