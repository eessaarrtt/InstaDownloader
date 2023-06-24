interface IconProps {
  // Define the prop types here
  size?: string;
}

export const LikeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
  );
};

export const CommentIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const ViewIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
      <path
        fillRule="evenodd"
        d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const PhotoIcon: React.FC<IconProps> = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={size}
    >
      <path
        fillRule="evenodd"
        d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const ReelsFullFill = () => {
  return (
    <svg
      aria-label="Клип"
      color="rgb(255, 255, 255)"
      fill="rgb(255, 255, 255)"
      height="18"
      role="img"
      viewBox="0 0 24 24"
      width="18"
    >
      <path
        d="m12.823 1 2.974 5.002h-5.58l-2.65-4.971c.206-.013.419-.022.642-.027L8.55 1Zm2.327 0h.298c3.06 0 4.468.754 5.64 1.887a6.007 6.007 0 0 1 1.596 2.82l.07.295h-4.629L15.15 1Zm-9.667.377L7.95 6.002H1.244a6.01 6.01 0 0 1 3.942-4.53Zm9.735 12.834-4.545-2.624a.909.909 0 0 0-1.356.668l-.008.12v5.248a.91.91 0 0 0 1.255.84l.109-.053 4.545-2.624a.909.909 0 0 0 .1-1.507l-.1-.068-4.545-2.624Zm-14.2-6.209h21.964l.015.36.003.189v6.899c0 3.061-.755 4.469-1.888 5.64-1.151 1.114-2.5 1.856-5.33 1.909l-.334.003H8.551c-3.06 0-4.467-.755-5.64-1.889-1.114-1.15-1.854-2.498-1.908-5.33L1 15.45V8.551l.003-.189Z"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};

export const ReelsIcon: React.FC<IconProps> = ({ size }) => {
  return (
    <svg
      aria-label=""
      color="rgb(0, 0, 0)"
      fill="rgb(0, 0, 0)"
      role="img"
      viewBox="0 0 24 24"
      className={size}
    >
      <line
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="2.049"
        x2="21.95"
        y1="7.002"
        y2="7.002"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="13.504"
        x2="16.362"
        y1="2.001"
        y2="7.002"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="7.207"
        x2="10.002"
        y1="2.11"
        y2="7.002"
      ></line>
      <path
        d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
      <path
        d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};

export const AllPostsIcon = () => {
  return (
    <svg
      aria-label=""
      color="rgb(0, 0, 0)"
      fill="rgb(0, 0, 0)"
      height="12"
      role="img"
      viewBox="0 0 24 24"
      width="12"
    >
      <rect
        fill="none"
        height="18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        width="18"
        x="3"
        y="3"
      ></rect>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="9.015"
        x2="9.015"
        y1="3"
        y2="21"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="14.985"
        x2="14.985"
        y1="3"
        y2="21"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="21"
        x2="3"
        y1="9.015"
        y2="9.015"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="21"
        x2="3"
        y1="14.985"
        y2="14.985"
      ></line>
    </svg>
  );
};

export const LoadedIcon = () => {
  return (
    <div className="loader">
      <div className="inner one"></div>
      <div className="inner two"></div>
      <div className="inner three"></div>
    </div>
  );
};
export const VideoIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M9.1001 12V10.52C9.1001 8.60999 10.4501 7.83999 12.1001 8.78999L13.3801 9.52999L14.6601 10.27C16.3101 11.22 16.3101 12.78 14.6601 13.73L13.3801 14.47L12.1001 15.21C10.4501 16.16 9.1001 15.38 9.1001 13.48V12Z"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export const StoriesIcon: React.FC<IconProps> = ({size}) => {
  return (
    <svg
      enableBackground="new 0 0 32 32"
      viewBox="0 0 32 32"
      className={size}
      fill="#ffffff"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="m9.1502 25.97228c-1.29851-.89403-2.39526-2.01392-3.26093-3.32898-.43993-.66863-1.34057-.85575-2.01062-.41441-.66958.44087-.85528 1.34104-.41441 2.01062 1.07217 1.62928 2.43164 3.01663 4.03966 4.12377.25139.17342.53821.25611.82173.25611.46166 0 .91529-.21973 1.19692-.62847.45458-.66012.28825-1.56407-.37235-2.01864z"></path>
        <path d="m3.87298 9.78056c.24572.16161.52215.23863.79574.23863.47253 0 .93561-.23012 1.2144-.65446.86521-1.31647 1.96148-2.43731 3.25858-3.33134.65965-.45505.82598-1.359.37094-2.01912-.45552-.6606-1.35852-.82598-2.01912-.37094-1.6066 1.10761-2.96465 2.49638-4.03635 4.12708-.44041.67005-.25423 1.57022.41581 2.01015z"></path>
        <path d="m4.12862 18.33525c-.14932-.7622-.22492-1.54849-.22539-2.33525 0-.78109.07513-1.5636.22303-2.32485.15263-.78724-.36149-1.54895-1.14825-1.70205-.79149-.15121-1.5499.36149-1.70205 1.14825-.18287.94364-.27596 1.91233-.27596 2.87959.00047.97341.09451 1.94635.27927 2.89189.13562.69273.74282 1.17329 1.42326 1.17329.09214 0 .18618-.00898.28021-.02741.78676-.15404 1.29946-.91623 1.14588-1.70346z"></path>
        <path d="m16 1c-1.07453 0-2.14812.11435-3.19147.34069-.78345.16964-1.2815.94223-1.11139 1.72568.14696.67997.74849 1.14494 1.41712 1.14494.10159 0 .20508-.01087.30856-.03355.84205-.18192 1.70867-.27453 2.57718-.27453 6.67024 0 12.09678 5.42654 12.09678 12.09677s-5.42654 12.09678-12.09678 12.09678c-.86851 0-1.73513-.09262-2.57718-.27454-.78535-.17058-1.55651.32794-1.72568 1.11139-.17011.78345.32794 1.55604 1.11139 1.72568 1.04335.22634 2.11694.34069 3.19147.34069 8.27117 0 15-6.72883 15-15s-6.72883-15-15-15z"></path>
        <path d="m12.20558 22.57195c.22445.12995.47536.19468.72581.19468.25044 0 .50135-.06474.72581-.19468l9.20583-5.31502c.4489-.25895.72581-.73809.72581-1.25693s-.2769-.99798-.72581-1.25693l-9.20583-5.31502c-.4489-.25989-1.00271-.25989-1.45161 0-.4489.25895-.72581.73809-.72581 1.25693v10.63004c0 .51884.2769.99798.7258 1.25693zm2.17742-9.37264 4.851 2.80069-4.851 2.80069z"></path>
      </g>
    </svg>
  );
}
export const IgtvIcon: React.FC<IconProps> = ({size}) => {
  return (
    <svg
      className={size}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="#ffffff"
        d="M205.544,335.141V233.743c0-8.026,8.657-13.069,15.639-9.111l89.408,50.7c7.076,4.012,7.076,14.208,0,18.22l-89.408,50.7C214.202,348.211,205.544,343.168,205.544,335.141z"
      ></path>
      <g>
        <path
          fill="#ffffff"
          d="M216.031,359.852c-13.625,0-24.71-11.086-24.71-24.711V233.743c0-13.626,11.085-24.711,24.711-24.711c4.234,0,8.441,1.116,12.166,3.228l89.408,50.7c7.718,4.378,12.514,12.608,12.514,21.481s-4.796,17.104-12.514,21.481l-89.408,50.698C224.474,358.734,220.267,359.852,216.031,359.852z M219.766,240.179v88.526l78.057-44.263L219.766,240.179z"
        ></path>
        <path
          fill="#ffffff"
          d="M401.778,455.111c-7.855,0-14.222-6.369-14.222-14.222s6.367-14.222,14.222-14.222c25.879,0,46.933-21.055,46.933-46.933V189.152c0-25.879-21.055-46.933-46.933-46.933H110.222c-25.879,0-46.933,21.055-46.933,46.933v190.581c0,25.879,21.055,46.933,46.933,46.933h228.264c7.855,0,14.222,6.369,14.222,14.222s-6.367,14.222-14.222,14.222H110.222c-41.563,0-75.378-33.813-75.378-75.378V189.152c0-41.565,33.815-75.378,75.378-75.378h291.556c41.563,0,75.378,33.813,75.378,75.378v190.581C477.156,421.296,443.343,455.111,401.778,455.111z"
        ></path>
      </g>
      <path
        fill="#ffffff"
        d="M317.391,497.778H189.394c-12.568,0-22.756-10.187-22.756-22.756v-34.133h173.507v34.133C340.146,487.589,329.959,497.778,317.391,497.778z"
      ></path>
      <g>
        <path
          fill="#ffffff"
          d="M317.391,512H189.394c-20.389,0-36.978-16.587-36.978-36.978v-34.133c0-7.854,6.367-14.222,14.222-14.222h173.507c7.855,0,14.222,6.369,14.222,14.222v34.133C354.368,495.413,337.781,512,317.391,512zM180.861,455.111v19.911c0,4.706,3.827,8.533,8.533,8.533h127.996c4.706,0,8.533-3.827,8.533-8.533v-19.911H180.861z"
        ></path>
        <path
          fill="#ffffff"
          d="M253.402,142.219c-4.173,0-8.306-1.826-11.115-5.338L174.02,51.55c-4.907-6.134-3.913-15.083,2.222-19.991c6.134-4.91,15.083-3.913,19.991,2.222l68.267,85.331c4.907,6.134,3.913,15.083-2.222,19.991C259.655,141.2,256.518,142.219,253.402,142.219z"
        ></path>
        <path
          fill="#ffffff"
          d="M258.609,142.219c-3.641,0-7.279-1.39-10.057-4.166c-5.554-5.554-5.554-14.559,0-20.115L362.33,4.163c5.554-5.551,14.559-5.551,20.113,0c5.554,5.554,5.554,14.559,0,20.115L268.665,138.053C265.889,140.829,262.248,142.219,258.609,142.219z"
        ></path>
      </g>
    </svg>
  );
}
export const ArrowPath: React.FC<IconProps> = ({size}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={size}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    </svg>
  );
}
