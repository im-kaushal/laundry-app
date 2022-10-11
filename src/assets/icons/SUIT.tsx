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
      d="m32.58 3.806-8.569-2.579L19.98.009a.84.84 0 0 0-.235 0h-5.478a.839.839 0 0 0-.244 0l-2.058.613-1.975.597L1.42 3.798a.84.84 0 0 0-.596.84v30.421c0 .464.376.84.84.84h3.848v1.26c0 .465.376.84.84.84h6.578a7.646 7.646 0 0 0 4.075-1.537A7.704 7.704 0 0 0 21.138 38h6.511a.84.84 0 0 0 .84-.84V35.9h3.848a.84.84 0 0 0 .84-.84V4.603a.84.84 0 0 0-.596-.798ZM20.45 1.907l.713.219 1.412.428-1.143 2.328a.84.84 0 0 0 .328 1.092l1.68 1.008-4.948 10.569 1.957-15.644Zm-8.486.488 1.63-.496 1.957 15.644-5.024-10.57 1.68-1.008a.84.84 0 0 0 .328-1.092l-1.143-2.327.572-.151Zm4.2 32.438c-.554 1.016-2.638 1.428-3.293 1.487h-5.67V13.712a.84.84 0 0 0-1.681 0v20.507H2.512V5.234l7.293-2.21.924 1.874-1.68 1.009a.84.84 0 0 0-.337 1.083l7.453 15.87v11.973Zm-.94-33.211h3.57l-1.79 14.282-1.78-14.282Zm16.273 32.597H28.49V13.711a.84.84 0 0 0-1.68 0V36.32h-5.604c-.714-.06-2.806-.47-3.36-1.487v-3.168h.983a.84.84 0 0 0 0-1.68h-.983v-3.671h.983a.84.84 0 0 0 0-1.68h-.983V22.86l7.477-15.862a.84.84 0 0 0-.336-1.084l-1.68-1.008.899-1.882 7.292 2.201v28.993Z"
      fill="#38106A"
    />
  </Svg>
)

export default SvgComponent
