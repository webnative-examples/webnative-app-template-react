const CheckThinIcon = ({ color }: { color: string }) => (
  <svg
    width="28px"
    height="28px"
    viewBox="0 0 28 28"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g fill="none" fillRule="nonzero">
        <path
          d="M4.03033009,13.4696699 C3.73743687,13.1767767 3.26256313,13.1767767 2.96966991,13.4696699 C2.6767767,13.7625631 2.6767767,14.2374369 2.96966991,14.5303301 L9.96966991,21.5303301 C10.2625631,21.8232233 10.7374369,21.8232233 11.0303301,21.5303301 L25.0303301,7.53033009 C25.3232233,7.23743687 25.3232233,6.76256313 25.0303301,6.46966991 C24.7374369,6.1767767 24.2625631,6.1767767 23.9696699,6.46966991 L10.5,19.9393398 L4.03033009,13.4696699 Z"
          fill={color}
        />
      </g>
    </g>
  </svg>
);

export default CheckThinIcon;
