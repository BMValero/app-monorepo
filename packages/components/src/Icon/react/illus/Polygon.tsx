import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPolygon = (props: SvgProps) => (
  <Svg viewBox="0 0 16 16" fill="none" accessibilityRole="image" {...props}>
    <Path
      d="M10.651 6.309a.605.605 0 0 0-.6 0l-1.377.814-.936.531-1.378.815a.605.605 0 0 1-.6 0L4.665 7.83a.61.61 0 0 1-.3-.513V6.06c0-.213.106-.408.3-.514l1.077-.62a.605.605 0 0 1 .6 0l1.078.62a.61.61 0 0 1 .3.514v.814l.936-.549v-.814a.574.574 0 0 0-.3-.514L6.36 3.83a.605.605 0 0 0-.6 0L3.729 4.998a.574.574 0 0 0-.3.514v2.355c0 .212.106.407.3.513l2.03 1.169a.605.605 0 0 0 .601 0l1.378-.797.936-.549 1.377-.797a.605.605 0 0 1 .6 0l1.078.62a.61.61 0 0 1 .3.514v1.257a.574.574 0 0 1-.3.513l-1.078.637a.605.605 0 0 1-.6 0l-1.077-.62a.61.61 0 0 1-.3-.513V9l-.936.549v.814c0 .213.106.408.3.514l2.03 1.168a.605.605 0 0 0 .601 0l2.03-1.168a.61.61 0 0 0 .301-.514V8.008a.574.574 0 0 0-.3-.513L10.65 6.309Z"
      fill="#8C8CA1"
    />
  </Svg>
);
export default SvgPolygon;
