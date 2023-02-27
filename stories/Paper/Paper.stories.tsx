import { Meta, StoryFn } from '@storybook/react';
import { Paper } from '../../components/Paper/paper.component';

export default {
  title: 'Component/Paper',
  component: Paper,
} as Meta<typeof Paper>;

export const Template: StoryFn<typeof Paper> = (props) => <Paper {...props} />;

export { SimplePaper } from '../../components/Paper/examples';
