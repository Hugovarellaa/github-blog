import { createStitches } from "@stitches/react";

export const { styled, globalCss, getCssText } = createStitches({
  theme: {
    colors: {
      blue: '#3294F8',

      title: '#E7EDF4',
      subTitle: '#C4D4E3',
      baseText: '#AFC2D4',

      baseSpan: '#7B96B2',
      baseLabel: '#3A536B',
      baseBorder: '#1C2F41',
      basePost: '#112131',

      baseProfile: '#0B1B2B',
      baseBackground: '#071422',
      baseInput: '#040F1A'
    },
  }
})