interface ComponentProps {
  className?: string;
}

export default function ArrowDownIcon({ className }: Readonly<ComponentProps>) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 32L0 16L2.1 13.9L14.5 26.3V0H17.5V26.3L29.9 13.9L32 16L16 32Z"
        fill="currentColor"
      />
    </svg>
  );
}
