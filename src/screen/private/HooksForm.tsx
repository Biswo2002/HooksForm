import { useForm, Controller } from 'react-hook-form';
import { StyleSheet } from 'react-native'
import { COLORS } from '../../styles'
import {
    FormControl,
    StatusBar,
    VStack,
    Button,
    Input,
    Box,
    Text,
} from 'native-base';
import React from 'react';


const HooksForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        console.log('data ', data);
    };
    return (
        <>
            <StatusBar backgroundColor={'pink'} />
            <Box
                bgColor={COLORS.SECONDARY}
                flex={1}
            >
                <Box
                    justifyContent={'center'}
                    alignItems={'center'}
                    py={4}
                    bgColor={'pink.600'}
                >
                    <Text
                        fontSize={'lg'}
                        color={'#fff'}
                    >
                        Hooks Form
                    </Text>
                </Box>
                <VStack width="92%" space={4} m={4} >
                    <FormControl isRequired isInvalid={'firstName' in errors}>
                        <FormControl.Label>First Name</FormControl.Label>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }: any) => (
                                <Input
                                    onBlur={onBlur}
                                    placeholder="John"
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="firstName"
                            rules={{ required: 'Field is required', minLength: 3 }}
                            defaultValue=""
                        />
                        <FormControl.ErrorMessage>
                            {errors.firstName?.message}
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={'lastName' in errors}>
                        <FormControl.Label>Last Name</FormControl.Label>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }: any) => (
                                <Input
                                    onBlur={onBlur}
                                    placeholder="Doe"
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="lastName"
                            rules={{ required: 'Field is required', minLength: 3 }}
                            defaultValue=""
                        />
                        <FormControl.ErrorMessage>
                            {errors.lastName?.message}
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl isRequired isInvalid={'age' in errors}>
                        <FormControl.Label>Age</FormControl.Label>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }: any) => (
                                <Input
                                    onBlur={onBlur}
                                    placeholder="24"
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="age"
                            rules={{
                                min: 1, required: 'Age is required',
                                pattern: {
                                    value: /^[a-zA-Z\s]*$/,
                                    message: 'Name is invalid',
                                },
                            }}
                            defaultValue=""
                        />
                        <FormControl.ErrorMessage>
                            {errors.age?.type === 'required'
                                ? errors.age?.message
                                : errors.age?.type === 'min' ?? 'Under age'}
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <Button onPress={handleSubmit(onSubmit)} colorScheme="pink">
                        Submit
                    </Button>
                </VStack>
            </Box>
        </>
    )
}

export default HooksForm

const styles = StyleSheet.create({})