declare module '*.svg' {
    import React from 'react';
    import {Color, SvgProps} from 'react-native-svg';
    interface CustomSVGProps extends SvgProps {
        fillSecondary?: Color;
    }
    const content: React.FC<CustomSVGProps>;
    export default content;
}
