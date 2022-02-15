import React, {FC} from 'react';
import {StyleSheet} from 'react-native';

// Components
import OtpInputs from 'react-native-otp-inputs';

interface OtpInputProps {
    numberOfInput: number;
    onChange: (text: string) => void;
    textInputBackgroundColor: string;
}

const OtpInput: FC<OtpInputProps> = props => {
    return (
        <OtpInputs
            numberOfInputs={props.numberOfInput}
            handleChange={props.onChange}
            autofillFromClipboard={false}
            style={styles.textInputContainer}
            inputStyles={[
                styles.textInputStyle,
                {backgroundColor: props.textInputBackgroundColor},
            ]}
            keyboardType={'phone-pad'}
            textAlign={'center'}
        />
    );
};

const styles = StyleSheet.create({
    textInputContainer: {
        height: 50,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
    },
    textInputStyle: {
        alignItems: 'center',
        width: 50,
        borderRadius: 5,
    },
});

export default OtpInput;
