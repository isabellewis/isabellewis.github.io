import { configure } from '@storybook/react';

configure (
    () => {
        const req = require.context('../src', true, /.stories.jsx$/);
        req.keys().forEach((filename) => req(filename));
    },
    module
)