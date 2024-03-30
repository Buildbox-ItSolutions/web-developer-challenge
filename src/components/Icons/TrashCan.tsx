import { ComponentProps } from "react";

export const  TrashCan = (props: ComponentProps<'svg'>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <g transform="translate(-1181 -306)">
        <g transform="translate(1181.5 305.5)">
          <path
            fill="#d65923"
            d="M19 5.5H5a.5.5 0 000 1h14a.5.5 0 000-1zm-5-1h-4a.472.472 0 00-.5.5.472.472 0 00.5.5h4a.472.472 0 00.5-.5.472.472 0 00-.5-.5zM5.5 10v10a1.5 1.5 0 00.4 1.1 1.5 1.5 0 001.1.4h10a1.384 1.384 0 001.5-1.5V10a.5.5 0 00-1 0v10a.4.4 0 01-.5.5H7a.584.584 0 01-.4-.1.584.584 0 01-.1-.4V10a.5.5 0 00-1 0z"
            data-name="Caminho 12"
          ></path>
        </g>
        <path
          fill="none"
          d="M0 0h24v24H0z"
          data-name="Retângulo 13"
          transform="translate(1181 306)"
        ></path>
      </g>
    </svg>
  );
}

