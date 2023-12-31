import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFaceHappy = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 24 24" accessibilityRole="image" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM10.966 8.3c.562.88.284 2.323-1.614 3.83a.256.256 0 0 1-.24.042c-2.299-.766-3.053-2.027-2.826-3.048.11-.495.454-.897.91-1.083a1.562 1.562 0 0 1 1.326.082 1.561 1.561 0 0 1 1.218-.53c.492.019.953.278 1.226.706Zm3.925 3.872c2.298-.766 3.053-2.027 2.825-3.048a1.525 1.525 0 0 0-.91-1.082 1.561 1.561 0 0 0-1.326.081 1.561 1.561 0 0 0-1.217-.53 1.524 1.524 0 0 0-1.226.706c-.563.881-.285 2.325 1.613 3.83.068.054.158.07.24.043Zm.557 1.881c.296-.026.555.206.514.5a4 4 0 0 1-7.924 0c-.04-.294.218-.526.514-.5 2.309.206 4.587.206 6.896 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFaceHappy;
