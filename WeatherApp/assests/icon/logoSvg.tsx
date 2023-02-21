import React, {FC} from "react"
import Svg, { Defs, LinearGradient, Path, RadialGradient, Stop } from "react-native-svg"
import { styles } from "./styles";

interface IProps {
    width?:number;
    height?:number;
    color?:string;
};

export const LogoSvg:FC<IProps>= ({width,height,color}) => (
  <Svg style={styles.svgLogo}
  width={90}
  height={90}
  viewBox="0 0 24 24"
>
<Path 
      opacity={0.5}
      d="M13.633 5.358a6.984 6.984 0 0 0-9.874 0 6.984 6.984 0 0 0 0 9.875 6.984 6.984 0 0 0 9.874 0 6.973 6.973 0 0 0 0-9.875Z"
      fill="url(#a)"
    />
    <Path
      d="M8.696 15.278a4.983 4.983 0 1 0 0-9.965 4.983 4.983 0 0 0 0 9.965Z"
      fill="url(#b)"
    />
    <Path
      d="M8.696 15.278a4.983 4.983 0 1 0 0-9.965 4.983 4.983 0 0 0 0 9.965Z"
      fill="url(#c)"
    />
    <Path
      d="M9.536 16.815a3.731 3.731 0 1 0 0-7.462 3.731 3.731 0 0 0 0 7.462Z"
      fill="url(#d)"
    />
    <Path
      d="M14.473 16.095a4.131 4.131 0 1 0 0-8.262 4.131 4.131 0 0 0 0 8.262Z"
      fill="url(#e)"
    />
    <Path
      d="M12.713 19.552a3.457 3.457 0 1 0 0-6.914 3.457 3.457 0 0 0 0 6.914Z"
      fill="url(#f)"
    />
    <Path d="M6.027 20.644H17.65v-5.023H6.69l-.663 5.023Z" fill="url(#g)" />
    <Path
      d="M17.65 20.644a4.634 4.634 0 1 0 0-9.269 4.634 4.634 0 0 0 0 9.27Z"
      fill="url(#h)"
    />
    <Path
      d="M18.941 20.46a4.636 4.636 0 0 1-2.582-8.902 4.636 4.636 0 0 1 2.582 8.903Z"
      fill="url(#i)"
    />
    <Path
      d="M10.21 9.41a3.732 3.732 0 0 0-3.703 5.851l1.412-1.023c-.829-1.886-.395-4.337 2.291-4.828Z"
      fill="url(#j)"
    />
    <Path
      d="M6.027 20.644a3.731 3.731 0 1 0 0-7.463 3.731 3.731 0 0 0 0 7.463Z"
      fill="url(#k)"
    />
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(8.697 10.296) scale(6.9839)"
      >
        <Stop offset={0.682} stopColor="#FCCE38" stopOpacity={0} />
        <Stop offset={1} stopColor="#FCCE38" />
      </RadialGradient>
      <RadialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(7.37 8.291) scale(6.82362)"
      >
        <Stop stopColor="#FBE07A" />
        <Stop offset={1} stopColor="#FF9D00" />
      </RadialGradient>
      <RadialGradient
        id="c"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(1.07658 1.89202 -3.55778 2.02443 7.28 7.92)"
      >
        <Stop stopColor="#fff" stopOpacity={0.5} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="d"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(10.13 14.381) scale(8.6494)"
      >
        <Stop stopColor="#fff" />
        <Stop offset={0.345} stopColor="#FCFDFD" />
        <Stop offset={0.596} stopColor="#F3F6F7" />
        <Stop offset={0.815} stopColor="#E3EBEC" />
        <Stop offset={1} stopColor="#CFDCDE" />
      </RadialGradient>
      <RadialGradient
        id="e"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(11.971 13.264) scale(6.94231)"
      >
        <Stop stopColor="#fff" />
        <Stop offset={0.345} stopColor="#FCFDFD" />
        <Stop offset={0.596} stopColor="#F3F6F7" />
        <Stop offset={0.815} stopColor="#E3EBEC" />
        <Stop offset={1} stopColor="#CFDCDE" />
      </RadialGradient>
      <RadialGradient
        id="f"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(12.178 16.368) scale(4.65688)"
      >
        <Stop stopColor="#fff" />
        <Stop offset={0.345} stopColor="#FCFDFD" />
        <Stop offset={0.596} stopColor="#F3F6F7" />
        <Stop offset={0.815} stopColor="#E3EBEC" />
        <Stop offset={1} stopColor="#CFDCDE" />
      </RadialGradient>
      <RadialGradient
        id="h"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(16.193 12.022) scale(9.16822)"
      >
        <Stop stopColor="#fff" />
        <Stop offset={0.345} stopColor="#FCFDFD" />
        <Stop offset={0.595} stopColor="#F3F6F7" />
        <Stop offset={0.814} stopColor="#E3EBEC" />
        <Stop offset={0.999} stopColor="#CFDCDE" />
      </RadialGradient>
      <RadialGradient
        id="i"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(2.38318 8.20947 -8.20869 2.38295 14.077 12.86)"
      >
        <Stop stopColor="#fff" />
        <Stop offset={0.345} stopColor="#FCFDFD" />
        <Stop offset={0.596} stopColor="#F3F6F7" />
        <Stop offset={0.815} stopColor="#E3EBEC" />
        <Stop offset={1} stopColor="#CFDCDE" />
      </RadialGradient>
      <RadialGradient
        id="j"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(119.175 1.25 7.032) scale(9.26054)"
      >
        <Stop stopColor="#CFDCDE" stopOpacity={0} />
        <Stop offset={0.887} stopColor="#CFDCDE" stopOpacity={0.887} />
        <Stop offset={1} stopColor="#CFDCDE" />
      </RadialGradient>
      <RadialGradient
        id="k"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(8.495 13.657) scale(7.20081)"
      >
        <Stop stopColor="#fff" />
        <Stop offset={0.345} stopColor="#FCFDFD" />
        <Stop offset={0.596} stopColor="#F3F6F7" />
        <Stop offset={0.815} stopColor="#E3EBEC" />
        <Stop offset={1} stopColor="#CFDCDE" />
      </RadialGradient>
      <LinearGradient
        id="g"
        x1={11.838}
        y1={14.008}
        x2={11.838}
        y2={20.843}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={0.345} stopColor="#FCFDFD" />
        <Stop offset={0.596} stopColor="#F3F6F7" />
        <Stop offset={0.815} stopColor="#E3EBEC" />
        <Stop offset={1} stopColor="#CFDCDE" />
      </LinearGradient>
    </Defs>
  </Svg>

);