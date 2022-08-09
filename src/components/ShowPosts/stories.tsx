import { Story, Meta } from '@storybook/react'
import ShowPosts from '.'

export default {
  title: 'ShowPosts',
  component: ShowPosts
} as Meta

export const Default: Story = () => <ShowPosts />
