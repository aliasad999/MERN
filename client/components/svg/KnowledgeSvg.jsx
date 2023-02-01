import React from "react";
import { motion } from "framer-motion";
function KnowledgeSvg() {
  return (
    <motion.svg
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      style={{ width: "35rem", height: "35rem" }}
      viewBox="0 0 433 494"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M418.768 357.458H13.832C6.31953 357.449 0.231661 351.361 0.222961 343.849V14.126C0.231661 6.61361 6.31956 0.525749 13.832 0.517059H418.768C426.28 0.525759 432.368 6.61362 432.377 14.126V343.849C432.368 351.361 426.28 357.449 418.768 357.458Z"
        fill="#E6E6E6"
      />
      <path
        d="M379.423 348.279H23.0137C15.5012 348.27 9.41336 342.182 9.40466 334.669V23.3128C9.41336 15.8004 15.5013 9.71255 23.0137 9.70386H409.588C417.101 9.71256 423.188 15.8004 423.197 23.3128V304.504C423.17 328.669 403.588 348.251 379.423 348.279Z"
        fill="white"
      />
      <path
        d="M281.483 80.1068H118.729C116.791 80.1068 115.22 78.5354 115.22 76.597C115.22 74.6587 116.791 73.0872 118.729 73.0872H281.483C283.421 73.0872 284.992 74.6586 284.992 76.597C284.992 78.5355 283.421 80.1068 281.483 80.1068Z"
        fill="#6C63FF"
      />
      <path
        d="M363.871 117.554H118.729C116.791 117.554 115.22 115.982 115.22 114.044C115.22 112.106 116.791 110.534 118.729 110.534H363.871C365.809 110.534 367.381 112.106 367.381 114.044C367.381 115.982 365.809 117.554 363.871 117.554Z"
        fill="#E6E6E6"
      />
      <path
        d="M363.871 155.001H118.729C116.791 155.001 115.22 153.43 115.22 151.491C115.22 149.553 116.791 147.981 118.729 147.981H363.871C365.809 147.981 367.381 149.553 367.381 151.491C367.381 153.43 365.809 155.001 363.871 155.001Z"
        fill="#E6E6E6"
      />
      <path
        d="M363.871 192.448H118.729C116.791 192.448 115.22 190.877 115.22 188.938C115.22 187 116.791 185.428 118.729 185.428H363.871C365.809 185.428 367.381 187 367.381 188.938C367.381 190.877 365.809 192.448 363.871 192.448Z"
        fill="#E6E6E6"
      />
      <path
        d="M363.871 229.895H118.729C116.791 229.895 115.22 228.324 115.22 226.385C115.22 224.447 116.791 222.875 118.729 222.875H363.871C365.809 222.875 367.381 224.447 367.381 226.385C367.381 228.324 365.809 229.895 363.871 229.895Z"
        fill="#E6E6E6"
      />

      <path
        d="M352.847 289.569C343.032 289.569 335.075 281.612 335.075 271.797C335.075 261.982 343.032 254.025 352.847 254.025C362.662 254.025 370.619 261.982 370.619 271.797C370.619 281.612 362.662 289.569 352.847 289.569Z"
        fill="#6C63FF"
      />
      <motion.path
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        d="M362.845 270.953L357.807 263.599C357.342 262.917 356.413 262.741 355.731 263.205C355.049 263.67 354.873 264.6 355.337 265.282L355.342 265.288L358.6 270.044H345.835C344.867 270.041 344.079 270.824 344.077 271.792C344.074 272.76 344.856 273.547 345.824 273.55H358.761L355.342 278.54C354.878 279.223 355.056 280.152 355.739 280.616C356.417 281.076 357.341 280.904 357.807 280.229L362.845 272.875C363.179 272.278 363.179 271.55 362.845 270.953Z"
        fill="white"
      />
      <path
        d="M41.8833 308.036C44.5738 305.785 44.9301 301.779 42.6792 299.088C42.4392 298.802 42.1743 298.536 41.8877 298.296L38.0345 265.002L25.8002 267.834L32.5992 299.395C30.5175 302.242 31.138 306.237 33.9851 308.319C36.3671 310.061 39.6323 309.944 41.8833 308.036Z"
        fill="#FFB6B6"
      />
      <path
        d="M40.6192 270.431L26.4553 279.267C26.4553 279.267 25.5931 284.445 24.6192 271.431C24.5175 270.072 25.4654 267.705 25.3612 266.311C25.2436 264.738 20.7378 264.022 20.6192 262.431C20.5347 261.298 21.8373 260.29 21.7532 259.16C21.6258 257.448 21.4992 255.746 21.3749 254.072C21.2709 252.671 19.7192 251.783 19.6192 250.431C19.5183 249.067 20.8692 247.24 20.7739 245.948C20.06 236.26 22.5289 211.885 22.5289 211.389C22.3381 210.144 21.8185 208.974 21.0238 207.997L21.7798 205.736L21.2799 201.494C20.6229 195.919 21.7949 190.282 24.6192 185.431L28.2163 183.075L44.814 210.992C37.8295 235.15 33.2702 244.639 40.6192 270.431Z"
        fill="#6C63FF"
      />
      <path
        d="M29.567 478.585H38.135L42.213 445.536H29.567V478.585Z"
        fill="#FFB6B6"
      />
      <path
        d="M26.7711 472.717L40.4597 471.9V477.765L53.4738 486.753C55.1387 487.902 55.5565 490.184 54.407 491.849C53.723 492.839 52.596 493.431 51.3922 493.431H35.0954L32.2864 487.629L31.1896 493.431H25.0451L26.7711 472.717Z"
        fill="#2F2E41"
      />
      <path
        d="M77.696 478.585H86.264L90.341 445.536H77.696V478.585Z"
        fill="#FFB6B6"
      />
      <path
        d="M74.8994 472.717L88.588 471.9V477.765L101.602 486.753C103.267 487.902 103.685 490.184 102.535 491.849C101.851 492.839 100.724 493.431 99.5204 493.431H83.2236L80.4146 487.629L79.3179 493.431H73.1734L74.8994 472.717Z"
        fill="#2F2E41"
      />
      <path
        d="M25.9304 450.086H25.9637L27.6116 371.381C25.4458 367.203 25.5149 362.219 27.7959 358.103L28.0319 357.676L27.4202 354.84C26.6345 351.197 26.9951 347.401 28.4523 343.971L29.9895 293.845C24.4975 258.253 50.6707 235.041 50.6707 235.041H89.8783L98.2958 263.961C103.86 318.176 102.851 395.975 94.0204 447.159L94.2611 447.281C95.2095 447.81 95.5752 448.991 95.0917 449.963C94.6837 451.145 93.6502 451.861 92.7834 451.562L72.0773 450.841C71.1288 450.313 70.7631 449.132 71.2467 448.159C71.6547 446.977 72.6882 446.262 73.555 446.561L74.9629 447.273L73.5102 444.316C71.7284 440.688 72.073 436.377 74.4081 433.079L74.1537 426.569C71.9523 423.992 71.2206 420.468 72.2136 417.227L73.6104 412.668L71.9604 370.451L72.2936 360.98L71.6072 350.235L68.4333 301.904L56.4197 361.337L44.1483 450.684C44.7489 451.226 45.0125 452.048 44.8387 452.838C44.5781 453.898 43.6177 454.636 42.5265 454.615H25.8706C24.6175 454.613 23.6026 453.596 23.6037 452.343C23.6039 452.14 23.6314 451.938 23.6855 451.742C23.9744 450.747 24.8942 450.068 25.9304 450.086Z"
        fill="#2F2E41"
      />
      <path
        d="M121.21 295.098C123.424 292.377 123.012 288.376 120.291 286.163C120.001 285.927 119.691 285.717 119.364 285.535L109.254 253.579L97.7812 258.685L110.453 288.379C108.95 291.57 110.319 295.374 113.509 296.877C116.179 298.135 119.362 297.399 121.21 295.098Z"
        fill="#FFB6B6"
      />
      <path
        d="M79.6115 193.507C79.6115 193.507 91.1413 234.309 90.6191 238.431C89.5423 246.93 36.5594 273.057 32.6191 261.431L33.1131 257.609C31.1225 253.628 43.2673 237.827 43.8568 235.761C44.6059 233.118 41.2143 224.441 41.2143 224.441C41.2143 224.441 43.5586 216.52 43.1841 211.617C42.8026 206.713 41.6721 207.469 37.5244 204.445C33.3767 201.428 26.5864 187.473 26.5864 187.473C26.5864 187.473 29.6035 173.892 29.6035 171.249C29.6035 168.607 41.998 164.105 43.5031 162.6C44.1583 161.726 44.71 160.779 45.1469 159.777C45.4521 159.167 45.2579 157.752 45.5839 157.052C45.792 156.594 46.5203 156.878 46.7353 156.407C46.9434 155.949 46.7631 155.422 46.9711 154.971C47.2416 154.374 47.8936 153.854 48.1502 153.292C49.3293 150.712 50.335 148.611 50.6471 148.611C51.3962 148.611 75.5471 152.009 75.5471 152.009C76.8616 154.042 78.3766 155.938 80.0694 157.669C82.712 160.305 95.0787 166.72 95.0787 166.72L79.6115 193.507Z"
        fill="#6C63FF"
      />
      <path
        d="M112.223 262.15C110.336 264.037 101.001 272.699 100.619 270.431C100.245 268.169 100.041 267.899 98.5287 267.15C97.0167 266.394 97.0167 266.02 96.6422 263.377C96.2676 260.734 92.869 258.092 93.2505 256.961C93.625 255.831 93.2754 257.269 93.2754 256.131C93.2754 255.001 92.1448 250.853 90.6328 250.097C89.1277 249.341 86.8596 248.592 87.9971 246.705C89.1277 244.819 77.3504 188.222 77.3504 188.222L87.9139 167.476L95.0787 166.72C95.0787 166.72 97.2558 167.966 97.9379 179.197C97.9725 179.765 98.5927 180.809 98.6191 181.431C98.6411 181.947 98.0705 182.032 98.0862 182.586C98.0895 182.704 98.0928 182.823 98.0959 182.943C98.1102 183.494 99.5969 183.899 99.6192 184.431C99.6591 185.38 100.243 191.435 100.306 192.325C100.377 193.328 100.461 194.295 100.557 195.224C101.6 205.345 101.973 206.2 102.619 209.431C103.619 214.431 107.765 243.633 107.765 243.633C107.765 243.633 110.782 244.382 110.782 247.024C110.782 249.667 114.109 254.978 112.604 257.995C111.092 261.02 114.109 260.264 112.223 262.15Z"
        fill="#6C63FF"
      />
      <path
        d="M60.8745 147.836C70.7568 147.836 78.7681 139.825 78.7681 129.942C78.7681 120.06 70.7568 112.049 60.8745 112.049C50.9922 112.049 42.9809 120.06 42.9809 129.942C42.9809 139.825 50.9922 147.836 60.8745 147.836Z"
        fill="#FFB8B8"
      />
      <path
        d="M22.315 167.548C18.5285 166.206 14.7419 164.861 10.9554 163.514C11.608 162.419 12.4392 161.441 13.4145 160.62C17.0197 157.61 21.9959 157.066 26.5731 156.05C31.1576 155.034 36.1338 152.953 37.8095 148.571C39.5504 144.016 37.0261 139.098 35.5608 134.455C33.3965 127.943 33.6593 120.869 36.3007 114.536C39.0357 108.196 44.5682 103.492 51.2655 101.812C57.8956 100.34 65.389 102.741 69.4657 108.167C74.9014 106.536 80.6989 109.22 82.9725 114.42C84.0213 116.808 83.8594 119.555 82.5373 121.804C81.1228 123.944 78.0979 125.039 75.8201 123.85L77.1404 120.498C73.0564 121.884 70.4015 129.268 70.9527 133.548C71.4968 137.821 73.9921 141.564 76.5238 145.053C79.0555 148.542 81.7539 152.068 82.8419 156.239C84.4088 162.238 82.2906 168.795 78.3735 173.605C74.4564 178.414 68.9362 181.678 63.22 184.079C58.9412 185.878 54.4945 187.249 49.9453 188.171C50.7578 186.589 51.563 185.008 52.3754 183.427L42.7349 189.259C40.8707 189.44 38.9919 189.549 37.1131 189.585C31.6437 189.679 26.0654 189.106 21.0601 186.923C16.0477 184.732 11.6445 180.764 9.83102 175.607C9.24963 173.939 8.97442 172.179 9.01867 170.413C13.4507 169.455 17.8828 168.5 22.315 167.548Z"
        fill="#2F2E41"
      />
    </motion.svg>
  );
}

export default KnowledgeSvg;
