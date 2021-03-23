import React from 'react';
import SendIcon from "@material-ui/icons/Send";
import CustomButton from './CustomButton';

export default {
  title: 'Atom/CustomSelect',
};

const Template = (args) => <CustomButton {...args} />;
export const Default = Template.bind({});

Default.args = {
    variant: "contained",
    color: "primary",
    endIcon: <SendIcon />,
    children: "Submit"
};
