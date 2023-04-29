import React from 'react'
import { Box, FormControl, IconButton, Input, Row, StatusBar, Text, VStack } from 'native-base'
import { COLORS, FONTS } from '../../styles'
import { Controller, useForm } from 'react-hook-form'

const Home = () => {

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    return (
        <>
            <StatusBar backgroundColor={COLORS.PRIMARY} />
            <Box
                bgColor={COLORS.SECONDARY}
                flex={1}
            >
                <Box
                    justifyContent={'center'}
                    alignItems={'center'}
                    py={4}
                    bgColor={'#272762'}
                >
                    <Text
                        fontSize={'lg'}
                        color={'#fff'}
                    >
                        Hooks Form
                    </Text>
                </Box>
                <Box
                    p={4}
                >
                    <VStack mt={3}>
                        <Text fontFamily={'Montserrat-SemiBold'} fontSize={15}>
                            Name
                        </Text>
                        <FormControl isRequired isInvalid={'name' in errors}>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Input
                                        placeholder="Enter your name"
                                        borderRadius={14}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        fontFamily={'Montserrat-Regular'}
                                        placeholderTextColor={'#000'}
                                        fontSize={14}
                                        backgroundColor={'#fff'}
                                        borderWidth={2}
                                        mt={1}
                                        InputLeftElement={
                                            <Row pl="2" space="2" alignItems={'center'}>
                                                {/* <ICONS.User /> */}
                                            </Row>
                                        }
                                    />
                                )}
                                name="name"
                                rules={{
                                    required: 'Name is required',
                                    pattern: {
                                        value: /^[a-zA-Z\s]*$/,
                                        message: 'Name is invalid',
                                    },
                                }}
                                defaultValue=""
                            />
                            <FormControl.ErrorMessage>
                                {errors.name?.message}
                            </FormControl.ErrorMessage>
                        </FormControl>
                    </VStack>
                    <VStack mt={3}>
                        <Text fontFamily={'Montserrat-SemiBold'} fontSize={15}>
                            Email
                        </Text>
                        <FormControl isRequired isInvalid={'email' in errors}>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Input
                                        placeholder="Enter your email"
                                        borderRadius={14}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        autoCapitalize={'none'}
                                        placeholderTextColor={'#000'}
                                        fontSize={14}
                                        backgroundColor={'#fff'}
                                        borderWidth={2}
                                        mt={1}
                                        keyboardType="email-address"
                                        InputLeftElement={
                                            <Row pl="2" space="2" alignItems={'center'}>
                                                {/* <ICONS.Email /> */}
                                            </Row>
                                        }
                                    />
                                )}
                                name="email"
                                rules={{
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: 'Email is invalid',
                                    },
                                }}
                                defaultValue=""
                            />
                            <FormControl.ErrorMessage mt={0}>
                                {errors.email?.message}
                            </FormControl.ErrorMessage>
                        </FormControl>
                    </VStack>
                    <VStack mt={3}>
                        <Text fontFamily={'Montserrat-SemiBold'} fontSize={15}>
                            Fathers Name
                        </Text>
                        <FormControl isRequired isInvalid={'email' in errors}>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Input
                                        placeholder="Enter your email"
                                        borderRadius={14}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        autoCapitalize={'none'}
                                        placeholderTextColor={'#000'}
                                        fontSize={14}
                                        backgroundColor={'#fff'}
                                        borderWidth={2}
                                        mt={1}
                                        keyboardType="email-address"
                                        InputLeftElement={
                                            <Row pl="2" space="2" alignItems={'center'}>
                                                {/* <ICONS.Email /> */}
                                            </Row>
                                        }
                                    />
                                )}
                                name="email"
                                rules={{
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: 'Email is invalid',
                                    },
                                }}
                                defaultValue=""
                            />
                            <FormControl.ErrorMessage mt={0}>
                                {errors.email?.message}
                            </FormControl.ErrorMessage>
                        </FormControl>
                    </VStack>
                    <VStack mt={3}>
                        <Text fontFamily={'Montserrat-SemiBold'} fontSize={15}>
                            Mothers Name
                        </Text>
                        <FormControl isRequired isInvalid={'email' in errors}>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Input
                                        placeholder="Enter your email"
                                        borderRadius={14}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        autoCapitalize={'none'}
                                        placeholderTextColor={'#000'}
                                        fontSize={14}
                                        backgroundColor={'#fff'}
                                        borderWidth={2}
                                        mt={1}
                                        keyboardType="email-address"
                                        InputLeftElement={
                                            <Row pl="2" space="2" alignItems={'center'}>
                                                {/* <ICONS.Email /> */}
                                            </Row>
                                        }
                                    />
                                )}
                                name="email"
                                rules={{
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: 'Email is invalid',
                                    },
                                }}
                                defaultValue=""
                            />
                            <FormControl.ErrorMessage mt={0}>
                                {errors.email?.message}
                            </FormControl.ErrorMessage>
                        </FormControl>
                    </VStack>
                    <VStack mt={3}>
                        <Text fontFamily={'Montserrat-SemiBold'} fontSize={15}>
                            Location
                        </Text>
                        <FormControl isRequired isInvalid={'location' in errors}>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Input
                                        placeholder="Enter your location"
                                        borderRadius={14}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        autoCapitalize={'none'}
                                        placeholderTextColor={'#000'}
                                        fontSize={14}
                                        backgroundColor={'#fff'}
                                        borderWidth={2}
                                        mt={1}
                                        InputLeftElement={
                                            <Row pl="2" space="2" alignItems={'center'}>
                                                {/* <ICONS.Location /> */}
                                            </Row>
                                        }
                                    />
                                )}
                                name="location"
                                rules={{
                                    required: 'location is required',
                                }}
                                defaultValue=""
                            />
                            <FormControl.ErrorMessage mt={0}>
                                {errors.location?.message}
                            </FormControl.ErrorMessage>
                        </FormControl>
                    </VStack>
                    <VStack mt={3}>
                        <Text fontFamily={'Montserrat-SemiBold'} fontSize={15}>
                            Current Education
                        </Text>
                        <FormControl isRequired isInvalid={'currentEducation' in errors}>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Input
                                        placeholder="Enter your education"
                                        borderRadius={14}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        autoCapitalize={'none'}
                                        placeholderTextColor={'#000'}
                                        fontSize={14}
                                        backgroundColor={'#fff'}
                                        borderWidth={2}
                                        mt={1}
                                        InputLeftElement={
                                            <Row pl="2" space="2" alignItems={'center'}>
                                                {/* <ICONS.Institute /> */}
                                            </Row>
                                        }
                                    />
                                )}
                                name="currentEducation"
                                rules={{
                                    required: 'Current Education is required',
                                }}
                                defaultValue=""
                            />
                            <FormControl.ErrorMessage mt={0}>
                                {errors.currentEducation?.message}
                            </FormControl.ErrorMessage>
                        </FormControl>
                    </VStack>
                    <VStack mt={3}>
                        <Text fontFamily={'Montserrat-SemiBold'} fontSize={15}>
                            Institution Name
                        </Text>
                        <FormControl isRequired isInvalid={'institution' in errors}>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Input
                                        placeholder="Your institution name"
                                        borderRadius={14}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        autoCapitalize={'none'}
                                        placeholderTextColor={'#000'}
                                        fontSize={14}
                                        backgroundColor={'#fff'}
                                        borderWidth={2}
                                        mt={1}
                                        InputLeftElement={
                                            <Row pl="2" space="2" alignItems={'center'}>
                                                {/* <ICONS.Institute /> */}
                                            </Row>
                                        }
                                    />
                                )}
                                name="institution"
                                rules={{
                                    required: 'institution is required',
                                }}
                                defaultValue=""
                            />
                            <FormControl.ErrorMessage mt={0}>
                                {errors.institution?.message}
                            </FormControl.ErrorMessage>
                        </FormControl>
                    </VStack>
                </Box>
            </Box>
        </>
    )
}

export default Home