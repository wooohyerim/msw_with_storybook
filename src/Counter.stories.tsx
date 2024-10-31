import type { Meta, StoryObj } from '@storybook/react';
import Counter from './Counter';

const meta = {
  component: Counter,
  argTypes:{
    text:{
        control:{
            text:'text'
        }
    }
  },
  args:{
    text:'hello'
  }
} satisfies Meta<typeof Counter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 기본표시: Story = {
    args:{
        value:0
    },
    decorators:[
        (Story,ctx)=>{
            // console.log(ctx.args.text)
            return (
                <Story text={ctx.args.text} />
            )
        }
    ]
};