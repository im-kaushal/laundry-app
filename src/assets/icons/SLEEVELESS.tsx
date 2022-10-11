import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M34.88 19.54C30.286 15.029 29.997 5.958 30.23.94a.903.903 0 0 0-.902-.903h-5.01a.902.902 0 0 0-.902 1.11c.313 1.113.471 2.264.47 3.42v.181c-5.253 3.691-10.389.903-11.734 0v-.171a12.55 12.55 0 0 1 .434-3.43A.903.903 0 0 0 11.684 0H6.675a.903.903 0 0 0-.903.902c.235 5.01-.054 14.089-4.657 18.566a.903.903 0 0 0-.261.722v21.85C.854 43.123 1.73 44 2.812 44h30.416a1.958 1.958 0 0 0 1.922-1.959v-21.85a.903.903 0 0 0-.27-.65ZM18.29 8.386c1.875 0 3.719-.471 5.362-1.372-.704 3.7-2.97 6.409-5.659 6.409-2.69 0-4.982-2.762-5.668-6.508 1.85.94 3.89 1.443 5.966 1.471Zm15.055 33.656a.153.153 0 0 1-.153.154H2.794a.153.153 0 0 1-.153-.154V20.525C7.216 15.768 7.767 7.14 7.605 1.797h2.96a14.589 14.589 0 0 0-.262 2.77c.01 5.876 3.457 10.66 7.699 10.66s7.69-4.784 7.69-10.66c0-.93-.087-1.857-.262-2.77h2.96c-.162 5.343.398 13.971 4.964 18.728l-.009 21.516Z"
      fill="#38106A"
    />
  </Svg>
)

export default SvgComponent
