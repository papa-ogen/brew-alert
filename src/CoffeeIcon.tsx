import { BrewState } from "./types";

export const CoffeeIcon = ({
  empty,
  state,
}: {
  empty?: boolean;
  state?: BrewState;
}) => {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="coffee-icon"
    >
      <path
        d="M47.6625 31.7479L47.6625 31.7479C49.008 33.3929 49.4459 35.6573 48.8585 38.5626C48.8584 38.5631 48.8583 38.5637 48.8582 38.5643L48.8494 38.606C48.7991 38.8262 48.3154 40.822 46.8741 42.8496C45.3209 45.0344 43.2701 46.4167 40.857 46.9511L40.5261 47.0244L40.4716 47.3589C40.0385 50.0185 38.3628 52.3125 35.8771 53.535L35.4543 53.7429L35.6368 54.1773C35.7602 54.4709 35.8227 54.782 35.8227 55.1032C35.8227 56.4244 34.7471 57.5 33.4259 57.5H16.0444C14.7233 57.5 13.6476 56.4244 13.6476 55.1032C13.6476 54.782 13.7101 54.4712 13.8335 54.177L14.0156 53.7428L13.5931 53.535C10.6885 52.1066 8.88657 49.2142 8.88657 45.9814V28.7483C8.88657 28.2041 9.32785 27.7627 9.87218 27.7627H39.598C40.103 27.7627 40.5196 28.1432 40.5763 28.6335L40.6261 29.0652L41.0605 29.076C44.0667 29.1509 46.3141 30.0992 47.6625 31.7479ZM45.4715 37.8676L45.4748 37.8544L45.4775 37.8411C45.805 36.195 45.7125 34.8233 44.9866 33.9363C44.5072 33.3503 43.7951 33.0172 43.1073 32.8228C42.4121 32.6262 41.6829 32.5548 41.102 32.5335L40.5837 32.5145V33.0331V42.7361V43.5035L41.2857 43.1935C42.3732 42.7132 43.2897 41.9259 44.0564 40.8469C45.0424 39.4599 45.4269 38.0417 45.4715 37.8676Z"
        fill="#45393C"
        stroke={`${state === "ON" ? "" : "#fff"}`}
      />
      {!empty && (
        <path
          d="M18.2271 10.0882L18.2271 10.0882C20.6099 10.3648 23.0457 10.4027 25.1301 10.4027C25.8072 10.4027 26.4848 10.3986 27.1636 10.3943H27.1637L27.1672 10.3943C28.2201 10.3877 29.276 10.3812 30.3306 10.3906C30.331 10.3906 30.3314 10.3906 30.3318 10.3906L30.4853 10.3912C30.4856 10.3912 30.4859 10.3912 30.4862 10.3912C30.7492 10.3911 31.0577 10.3863 31.3845 10.3811M18.2271 10.0882L24.4656 1.54994C22.3434 1.59881 20.6237 1.78095 19.0531 2.12353C17.3414 2.49686 15.4453 3.06259 14.3608 4.42786C14.0029 4.87845 13.463 5.84692 13.982 6.28591C14.5564 6.77186 15.46 6.93839 16.1862 7.0721C17.1503 7.24948 18.1081 7.31945 18.9179 7.36461C19.9682 7.4233 21.1084 7.45167 22.4034 7.45167C23.6996 7.45167 25.0196 7.42359 26.296 7.39626L26.336 7.3954C27.7819 7.36447 29.2774 7.33247 30.7471 7.34233L31.2003 7.34441C32.9343 7.3508 34.8995 7.35808 36.5747 8.00625C37.5823 8.39589 38.2677 9.10002 38.507 9.97237L38.0527 10.0289L38.0835 10.3909V10.4004M18.2271 10.0882C17.005 9.94642 15.6263 9.69517 14.4207 9.25607M18.2271 10.0882L14.4207 9.25607M31.3845 10.3811L31.3872 10.5549C31.7131 10.4952 32.0304 10.4356 32.3194 10.3788L32.4159 10.8695L32.4165 11.3695C32.0894 11.3699 31.7399 11.3755 31.4005 11.381L31.4004 11.381C31.0753 11.3862 30.7581 11.3912 30.4853 11.3912H30.4834L30.3255 11.3906L30.3229 11.3905C30.3135 11.3905 30.3041 11.3904 30.2947 11.3903L30.36 11.756M31.3845 10.3811C31.7225 10.3756 32.0795 10.3699 32.4152 10.3695L32.5123 11.3601C31.8578 11.4887 31.0637 11.6305 30.36 11.756M31.3845 10.3811C31.3844 10.3811 31.3844 10.3811 31.3843 10.3811L31.3871 10.5549L18.8901 7.86384C19.9515 7.92314 21.1012 7.95167 22.4034 7.95167C23.7059 7.95167 25.0312 7.92346 26.3067 7.89614L26.3436 7.89535C27.7916 7.86437 29.2812 7.8325 30.7437 7.84232L30.7448 7.84233L31.198 7.84441L31.1985 7.84441C32.9528 7.85087 34.8208 7.86373 36.3942 8.47256L36.3943 8.4726C37.4022 8.86231 37.9794 9.57624 38.0835 10.4004M30.36 11.756C30.36 11.756 30.3599 11.756 30.3599 11.756L30.2947 11.3903C30.0588 11.3883 29.8228 11.387 29.5865 11.3864C28.3918 11.601 27.2151 11.8194 26.3289 12.0291L26.1304 12.0759C24.0804 12.5592 20.9826 13.2895 19.9826 15.5053C19.5891 16.3588 19.6178 17.3335 20.0612 18.1793C20.529 19.0717 21.3935 19.7068 22.3739 19.8782C22.7166 19.9381 23.085 19.9953 23.4856 19.9953C24.1376 19.9953 24.7916 19.9363 25.4163 19.8133C28.6481 19.1782 28.6758 20.0167 28.6772 20.1042C28.6861 20.6534 27.618 21.6036 27.1614 22.0098L27.161 22.0102C27.0631 22.0973 26.9806 22.1706 26.9212 22.2271C26.8027 22.3395 26.6633 22.4639 26.5126 22.5983L26.5107 22.6C25.5855 23.4252 24.3184 24.5555 24.472 25.7917M30.36 11.756C28.935 12.0104 27.483 12.2698 26.444 12.5157L26.4436 12.5158L26.2451 12.5626L26.2451 12.5626C25.2131 12.8059 23.9729 13.0998 22.8679 13.5969C21.7598 14.0955 20.8654 14.7647 20.4384 15.711L20.4367 15.7147C20.1094 16.4246 20.1313 17.2362 20.5041 17.9471L20.5041 17.9471C20.9009 18.7041 21.6348 19.2414 22.46 19.3857C22.7981 19.4447 23.1308 19.4953 23.4856 19.4953C24.1081 19.4953 24.7295 19.4389 25.3197 19.3227L25.3198 19.3227C26.9521 19.0019 27.8779 19.0285 28.4205 19.2149C28.7066 19.3131 28.9125 19.465 29.0393 19.6577C29.1664 19.8509 29.1761 20.0285 29.1771 20.0965M24.472 25.7917C24.4906 25.9408 24.6174 26.0521 24.7668 26.0521L24.7749 26.052C24.9279 26.0479 25.0527 25.9282 25.0633 25.7756C25.0986 25.2671 25.5951 24.8216 26.0572 24.4442C26.496 24.0875 26.9721 23.7551 27.4325 23.4337C27.6246 23.2999 27.8166 23.1657 28.0069 23.0295L28.0216 23.0191M24.472 25.7917L24.7585 25.7561L24.7663 25.7551L24.7668 25.7551L24.7669 25.755L24.7671 25.755L24.9682 25.73C24.9682 25.73 24.9682 25.7299 24.9682 25.7299M24.472 25.7917L24.7585 25.756L24.766 25.7551L24.7666 25.755L24.7668 25.755L24.7671 25.7549L24.9682 25.7299M28.0216 23.0191L28.023 23.018C28.8661 22.4145 30.2754 21.4056 30.4666 20.1966C30.5435 19.7112 30.4196 19.2446 30.0986 18.8095C29.2061 17.5997 27.5982 17.4986 26.1616 17.4986M28.0216 23.0191L27.7329 22.6108L27.7318 22.6116C28.157 22.3072 28.6873 21.9264 29.136 21.4805C29.5926 21.0268 29.902 20.5656 29.9727 20.1185L29.9728 20.1183C30.0265 19.7792 29.9467 19.4457 29.6963 19.1063C29.3384 18.6212 28.8293 18.3424 28.2107 18.1849C27.5831 18.0251 26.8766 17.9986 26.1622 17.9986L26.1616 17.4986M28.0216 23.0191L27.7305 22.6125L27.7182 22.6212L27.7158 22.6229C27.5283 22.7571 27.3386 22.8897 27.1467 23.0235L27.1464 23.0237L27.1431 23.026C26.6863 23.3448 26.1962 23.6869 25.7418 24.0562L25.7409 24.057C25.719 24.0748 25.6969 24.093 25.6744 24.1115M26.1616 17.4986L26.0463 17.4987C25.7989 17.4993 25.55 17.5052 25.3006 17.5111L25.2788 17.5116M26.1616 17.4986V17.9986L26.0475 17.9987M25.2788 17.5116C25.0132 17.5182 24.7471 17.5247 24.4814 17.5247C24.0234 17.5247 23.6539 17.5049 23.3187 17.461C22.6475 17.3729 22.4201 17.0154 22.5771 16.748C23.044 15.9531 25.3966 15.2504 29.6407 14.6998M25.2788 17.5116L25.2907 18.0115L25.2896 18.0115C25.0254 18.018 24.7538 18.0247 24.4814 18.0247C24.0094 18.0247 23.617 18.0044 23.2537 17.9567C22.8514 17.9039 22.4962 17.7609 22.2667 17.5073C22.0165 17.231 21.9441 16.8386 22.146 16.4948L22.146 16.4948C22.3326 16.177 22.6648 15.9301 23.0474 15.728C23.4408 15.5201 23.9464 15.3294 24.5523 15.1523C25.7653 14.7979 27.4437 14.4806 29.5764 14.204M25.2788 17.5116L25.2911 18.0115L25.3103 18.011C25.5613 18.0051 25.8055 17.9993 26.0475 17.9987M29.6407 14.6998L29.6536 14.6981C29.8783 14.6689 30.0547 14.646 30.1693 14.6287M29.6407 14.6998L29.5764 14.204M29.6407 14.6998L29.5763 14.204L29.5764 14.204M30.1693 14.6287C30.3942 14.5941 30.6197 14.5606 30.8456 14.527C30.8812 14.5217 30.9168 14.5164 30.9524 14.5111C32.4555 14.288 34.0101 14.057 35.4954 13.6168M30.1693 14.6287L30.0945 14.1343C30.0943 14.1343 30.0941 14.1343 30.094 14.1344M30.1693 14.6287L30.0934 14.1344C30.0936 14.1344 30.0938 14.1344 30.094 14.1344M35.4954 13.6168C38.1438 12.8317 38.6507 11.498 38.5927 10.4862C38.5926 10.4795 38.5923 10.4727 38.5917 10.4657L38.5904 10.4658L38.5904 10.4658L38.3398 10.4918L38.3379 10.492L38.1493 10.5116L38.1055 10.5161C38.1127 10.5397 38.1226 10.5657 38.1362 10.5929L38.0982 10.5169L38.0956 10.5171L38.0953 10.5147L38.0946 10.508L38.0935 10.4973L38.0923 10.4857L38.0911 10.4746L38.0913 10.4746C38.0903 10.4634 38.0893 10.452 38.0881 10.4402L38.0873 10.4355M35.4954 13.6168L35.3533 13.1374C35.3533 13.1374 35.3533 13.1374 35.3533 13.1374M35.4954 13.6168L35.3533 13.1374M38.0873 10.4355L38.0863 10.4232L38.0861 10.4215C38.0853 10.4145 38.0844 10.4074 38.0835 10.4004M38.0873 10.4355L38.0835 10.4127V10.4004M38.0873 10.4355L38.093 10.5018M38.093 10.5018L38.093 10.506L38.0935 10.5148C38.1167 10.9188 38.0296 11.3769 37.6699 11.8224C37.3031 12.2767 36.6163 12.763 35.3533 13.1374M38.093 10.5018L38.0935 10.5081C38.093 10.5022 38.0929 10.4983 38.0929 10.4974L38.093 10.5018ZM35.3533 13.1374C33.9074 13.5659 32.388 13.7925 30.879 14.0166L30.8788 14.0166C30.8435 14.0218 30.8082 14.0271 30.7728 14.0323C30.547 14.0659 30.3201 14.0996 30.094 14.1344M30.094 14.1344C29.9846 14.1509 29.8126 14.1733 29.5821 14.2032L29.5764 14.204M26.0475 17.9987H26.047L26.0463 17.4992L26.0475 17.9987ZM25.6744 24.1115C26.0249 23.7047 26.4489 23.3251 26.8435 22.9731L26.8435 22.9731L26.8493 22.9679C26.997 22.8362 27.1412 22.7076 27.2653 22.5898L27.2656 22.5896C27.3176 22.5401 27.3929 22.473 27.4932 22.3838L27.4933 22.3838L27.4987 22.3789C27.7258 22.177 28.1231 21.8235 28.4643 21.4464C28.6359 21.2568 28.8055 21.048 28.9343 20.8383C29.0543 20.643 29.1816 20.3796 29.1771 20.0965M25.6744 24.1115C25.4577 24.2906 25.2157 24.5026 25.0171 24.7394C24.8002 24.9981 24.5927 25.3354 24.5645 25.7409C24.5714 25.6417 24.6492 25.5626 24.7472 25.553C24.7508 25.5527 24.7545 25.5524 24.7581 25.5523C24.7595 25.5522 24.7608 25.5522 24.7618 25.5522C24.7619 25.5522 24.762 25.5522 24.7621 25.5522L24.7639 25.5521C24.7666 25.5521 24.7687 25.5521 24.7668 25.5521C24.8689 25.5521 24.9555 25.6279 24.9682 25.7299M25.6744 24.1115C25.6081 24.1886 25.5443 24.2665 25.4839 24.3455C25.1015 24.8455 24.9154 25.3044 24.9682 25.7299M29.1771 20.0965C29.1771 20.0964 29.1771 20.0962 29.1771 20.0961L28.6782 20.1042L29.1771 20.0965ZM16.0957 7.56385L16.0956 7.56383L16.0853 7.56193C15.7285 7.49625 15.2971 7.41682 14.8806 7.28914C14.4615 7.16065 14.0196 6.97261 13.6591 6.66766L13.659 6.66764C13.1528 6.2394 13.2375 5.60519 13.3671 5.20668C13.5061 4.77878 13.767 4.37151 13.9693 4.11688L13.9693 4.11687C15.1764 2.59716 17.2437 2.0064 18.9465 1.63502C20.5565 1.28385 22.3095 1.09946 24.4541 1.05007L24.4542 1.05007C25.0934 1.03544 25.7256 1.03491 26.3475 1.04841C24.5826 0.687554 22.7796 0.5 21.0419 0.5C20.2986 0.5 19.5582 0.533938 18.8416 0.60093L18.8415 0.600935C16.0354 0.863039 12.7139 1.85017 11.6123 4.85674L11.6123 4.85676C11.2429 5.86469 11.3122 6.70144 11.7428 7.40072L16.0957 7.56385ZM16.0957 7.56385C17.092 7.74714 18.0754 7.81841 18.89 7.86384L16.0957 7.56385ZM14.4207 9.25607C13.2026 8.81242 12.238 8.20466 11.7428 7.40074L14.4207 9.25607ZM38.5809 10.3695L38.563 10.2256C38.5711 10.2731 38.5779 10.321 38.5834 10.3693C38.5835 10.3696 38.5835 10.37 38.5835 10.3704V10.3713L38.5841 10.3762C38.5863 10.3966 38.5881 10.4158 38.5896 10.434L38.5929 10.4655L38.589 10.4341L38.589 10.4341L38.5818 10.3765L38.5818 10.3765L38.5812 10.3717L38.5812 10.3713L38.581 10.3705L38.581 10.3704L38.5809 10.3695ZM28.4772 1.15191C28.4698 1.15142 28.4616 1.15104 28.4529 1.15089L28.4543 1.151C28.4628 1.15113 28.4705 1.15148 28.4772 1.15191ZM28.5205 1.15662C28.5237 1.1571 28.523 1.15699 28.5215 1.15677L28.5205 1.15662Z"
          fill="#45393C"
          stroke="#fff"
          strokeWidth="4px"
          className="path"
        />
      )}
    </svg>
  );
};