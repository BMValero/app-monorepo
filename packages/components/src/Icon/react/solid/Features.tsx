import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFeatures = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 24 24" accessibilityRole="image" {...props}>
    <Path
      fill="currentColor"
      d="M13.786 1.908c.778-1.291 2.65-1.291 3.428 0l1.229 2.042 2.321.538c1.469.34 2.047 2.12 1.06 3.26l-1.563 1.8.206 2.373c.13 1.502-1.384 2.603-2.773 2.015l-2.194-.93-2.194.93c-1.388.588-2.903-.513-2.773-2.015l.206-2.374-1.562-1.8c-.988-1.138-.41-2.919 1.059-3.26l2.322-.537 1.228-2.042Zm-6.079 9.799a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 1 0 1.414 1.414l4-4Zm2 5a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 1 0 1.414 1.414l4-4Zm7-1.414a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0Z"
    />
  </Svg>
);
export default SvgFeatures;
