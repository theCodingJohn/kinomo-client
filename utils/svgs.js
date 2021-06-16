export const ChevronLeft = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    dataprefix="fas"
    dataicon="chevron-left"
    className="svg-inline--fa fa-chevron-left fa-w-10"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
  >
    <path
      fill="inherit"
      d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
    ></path>
  </svg>
);

export const ChevronRight = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    dataprefix="fas"
    dataicon="chevron-right"
    className="svg-inline--fa fa-chevron-right fa-w-10"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
  >
    <path
      fill="inherit"
      d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
    ></path>
  </svg>
);

export const MenuBar = ({ className, onClick }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    className={className}
    onClick={onClick}
  >
    <g>
      <g>
        <path d="M492,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z" />
      </g>
    </g>
    <g>
      <g>
        <path d="M492,76H20C8.954,76,0,84.954,0,96s8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,76,492,76z" />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M492,396H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20
     C512,404.954,503.046,396,492,396z"
        />
      </g>
    </g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
  </svg>
);

export const UserIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="-42 0 512 512.002"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m210.351562 246.632812c33.882813 0 63.222657-12.152343 87.195313-36.128906 23.972656-23.972656 36.125-53.304687 36.125-87.191406 0-33.875-12.152344-63.210938-36.128906-87.191406-23.976563-23.96875-53.3125-36.121094-87.191407-36.121094-33.886718 0-63.21875 12.152344-87.191406 36.125s-36.128906 53.308594-36.128906 87.1875c0 33.886719 12.15625 63.222656 36.132812 87.195312 23.976563 23.96875 53.3125 36.125 87.1875 36.125zm0 0" />
    <path d="m426.128906 393.703125c-.691406-9.976563-2.089844-20.859375-4.148437-32.351563-2.078125-11.578124-4.753907-22.523437-7.957031-32.527343-3.308594-10.339844-7.808594-20.550781-13.371094-30.335938-5.773438-10.15625-12.554688-19-20.164063-26.277343-7.957031-7.613282-17.699219-13.734376-28.964843-18.199219-11.226563-4.441407-23.667969-6.691407-36.976563-6.691407-5.226563 0-10.28125 2.144532-20.042969 8.5-6.007812 3.917969-13.035156 8.449219-20.878906 13.460938-6.707031 4.273438-15.792969 8.277344-27.015625 11.902344-10.949219 3.542968-22.066406 5.339844-33.039063 5.339844-10.972656 0-22.085937-1.796876-33.046874-5.339844-11.210938-3.621094-20.296876-7.625-26.996094-11.898438-7.769532-4.964844-14.800782-9.496094-20.898438-13.46875-9.75-6.355468-14.808594-8.5-20.035156-8.5-13.3125 0-25.75 2.253906-36.972656 6.699219-11.257813 4.457031-21.003906 10.578125-28.96875 18.199219-7.605469 7.28125-14.390625 16.121094-20.15625 26.273437-5.558594 9.785157-10.058594 19.992188-13.371094 30.339844-3.199219 10.003906-5.875 20.945313-7.953125 32.523437-2.058594 11.476563-3.457031 22.363282-4.148437 32.363282-.679688 9.796875-1.023438 19.964844-1.023438 30.234375 0 26.726562 8.496094 48.363281 25.25 64.320312 16.546875 15.746094 38.441406 23.734375 65.066406 23.734375h246.53125c26.625 0 48.511719-7.984375 65.0625-23.734375 16.757813-15.945312 25.253906-37.585937 25.253906-64.324219-.003906-10.316406-.351562-20.492187-1.035156-30.242187zm0 0" />
  </svg>
);

export const SearchIcon = ({ className, onClick }) => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 192.904 192.904"
    xmlSpace="preserve"
    className={className}
    onClick={onClick}
  >
    <path
      d="M190.707,180.101l-47.078-47.077c11.702-14.072,18.752-32.142,18.752-51.831C162.381,36.423,125.959,0,81.191,0
	C36.422,0,0,36.423,0,81.193c0,44.767,36.422,81.187,81.191,81.187c19.688,0,37.759-7.049,51.831-18.751l47.079,47.078
	c1.464,1.465,3.384,2.197,5.303,2.197c1.919,0,3.839-0.732,5.304-2.197C193.637,187.778,193.637,183.03,190.707,180.101z M15,81.193
	C15,44.694,44.693,15,81.191,15c36.497,0,66.189,29.694,66.189,66.193c0,36.496-29.692,66.187-66.189,66.187
	C44.693,147.38,15,117.689,15,81.193z"
    />
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
  </svg>
);

export const StarIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    dataprefix="far"
    dataicon="star"
    className="svg-inline--fa fa-star fa-w-18"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
  >
    <path
      fill="currentColor"
      d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
    ></path>
  </svg>
);

export const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 397.2 397.2"
    xmlSpace="preserve"
  >
    <g>
      <g>
        <path
          d="M284.2,178l-58-33.6l-57.6-33.2c-5.6-3.2-12-4-17.6-2.4c-5.6,1.6-10.8,5.2-14,10.8
   c-1.2,1.6-1.6,3.6-2.4,5.6c-0.4,1.2-0.4,2.8-0.8,4.4c0,0.4,0,1.2,0,1.6v68v68c0,6.4,2.8,12.4,6.8,16.4c4.4,4.4,10,6.8,16.4,6.8
   c3.6,0,11.2-3.2,13.2-4.4l56.8-32.8h0.4l0.4-0.4l58.8-34c5.6-3.2,9.2-8.4,10.8-14.4c0.4-1.2,0.4-2.8,0.4-4.4
   C297.8,186.8,284.2,178,284.2,178z M276.2,201.6l-58,33.6c-0.4,0-0.8,0.4-0.8,0.4l-56.8,32.8c-0.4,0.4-2.4,1.2-3.2,1.2
   s-1.6-0.4-2.4-0.8c-0.4-0.4-0.8-1.6-0.8-2.4v-67.6v-67.6v-0.4c0-0.4,0-0.4,0-0.8c0,0,0-0.4,0.4-0.4c0,0,0.4-0.4,0.4-0.8
   c0.4-0.4,1.2-0.8,1.6-1.2c0.8,0,1.6,0,2,0c0.4,0.4,0.8,0.4,1.2,0.8l56.8,32.8c0.4,0.4,0.8,0.4,0.8,0.4h0.4l58,33.6
   c0.8,0.4,2.4,1.6,2.4,2.8C278.2,199.6,277,201.2,276.2,201.6z"
        />
        <path
          d="M339,58.4C300.6,19.6,249.8,0,199,0S97.4,19.2,58.6,58C19.8,97.2,0.2,148,0.2,198.8
   s19.2,101.6,58,140.4s89.6,58,140.4,58c50.8,0,101.6-19.2,140.4-58c38.8-38.8,58-89.6,58-140.4S377.8,97.2,339,58.4z M325,324.8
   c-34.8,34.8-80.4,52.4-126,52.4c-45.6,0-91.2-17.6-126-52.4c-35.2-34.8-52.4-80.4-52.4-126c0-45.6,17.6-91.2,52.4-126
   s80.4-52.4,126-52.4c45.6,0,91.2,17.6,126,52.4s52.4,80.4,52.4,126C377.4,244.4,360.2,290,325,324.8z"
        />
      </g>
    </g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
  </svg>
);
