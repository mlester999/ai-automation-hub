import { SVGProps } from "react";

const UpworkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="24"
    height="24"
    {...props}
  >
    {/* Left curved path */}
    <path d="M4 10.5c0 2.5 2 4.5 4.5 4.5 1.5 0 2.8-.7 3.7-1.8" />
    <path d="M8.5 6C6 6 4 8 4 10.5" />
    {/* Rising line from middle */}
    <path d="M12.2 13.2L14.5 6" />
    {/* Right arc with dot */}
    <path d="M14.5 6c0 0 1 5.5 4 5.5 1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3" />
    {/* Descending line */}
    <path d="M12.2 13.2l2.3 5.8" />
  </svg>
);

export default UpworkIcon;
