import type { Preview } from "@storybook/react";
import  Providers  from "../src/Providers";
import React from "react";
import { initialize, mswLoader } from 'msw-storybook-addon'


initialize()

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators:[
    (Story)=>{
      return (
      <Providers>
        <Story/>
      </Providers>
      )
 }
  ],
  loaders:[mswLoader]
};

export default preview;
