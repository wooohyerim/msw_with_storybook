import type { Meta, StoryObj } from '@storybook/react';
import App from './App';
import { getWorker } from 'msw-storybook-addon';
import { getMockList } from './api/getMockList';

const worker = getWorker()

const meta = {
  component: App,
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 정상: Story = {
    decorators:[
        (Story)=>{
            // mock api 받음
            worker.resetHandlers(getMockList())
            return <Story />
        }
    ]
};