import * as React from "react"

const Logo = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={103} height={45} {...props}>
    <text
      transform="translate(0 23)"
      style={{
        fill: "#71bb00",
        fontSize: 24,
        fontFamily: "SFProDisplay-Black,SF Pro Display",
        fontWeight: 800,
      }}
    >
      <tspan x={0} y={0}>
        {"buildbox"}
      </tspan>
    </text>
    <text
      data-name="WEB CHALLENGE"
      transform="translate(0 42)"
      style={{
        fill: "#707070",
        fontSize: 12,
        fontFamily: "SFProDisplay-Light,SF Pro Display",
        fontWeight: 300,
        letterSpacing: ".024em",
      }}
    >
      <tspan x={0} y={0}>
        {"WEB CHALLENGE"}
      </tspan>
    </text>
  </svg>
)

export default Logo