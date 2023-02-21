import React, {FC} from "react"
import Svg, { G, Path } from "react-native-svg"

interface IProps {
    width?:number;
    height?:number;
    color?:string;
};

export const BorgerSvg:FC<IProps>= ({width,height,color}) => (
    <Svg
    width={34}
    height={34}
    viewBox="0 0 26 26"
    color={'#fff'}
  >
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h24v24H0z" />
      <Path
        stroke="#0C0310"
        strokeWidth={2}
        strokeLinecap="round"
        d="M5 6h14M5 14h14M5 10h14M5 18h14"
      />
    </G>
  </Svg>
);