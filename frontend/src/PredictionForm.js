import React, { useState } from "react";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    VStack,
    Select,
    useToast,
    Heading,
    Text,
} from "@chakra-ui/react";

const PredictionForm = () => {
    const [formData, setFormData] = useState({
        OverallQual: "",
        GrLivArea: "",
        TotalBsmtSF: "",
        OverallCond: "",
        GarageCars: "",
        LotArea: "",
        GarageArea: "",
        YearBuilt: "",
        PoolArea: "",
        OpenPorchSF: "",
    });
    const toast = useToast();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/predict", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await response.json();

            // Show toast with predicted price at the top of the page
            toast({
                title: "Prediction Success",
                description: `The predicted house price is $${data.prediction}`,
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top", // Position at the top of the page
                variant: "solid", // Solid background for a clearer message
                render: ({ onClose }) => (
                    <Box
                        color="white"
                        p={4}
                        bg="green.600"
                        borderRadius="md"
                        boxShadow="lg"
                        display="flex"
                        flexDirection="column" // Stack content vertically
                        justifyContent="center"
                        alignItems="center"
                        maxW="500px"
                        mx="auto"
                        border="1px solid rgba(255, 255, 255, 0.2)" // Adds subtle border for separation
                        transition="all 0.3s ease" // Smooth transition on hover
                        _hover={{ boxShadow: "lg", bg: "green.700" }} // Hover effect for interactivity
                    >
                        <Box textAlign="center">
                            <Text fontWeight="bold" fontSize="xl" mb={2}>
                                Prediction Success
                            </Text>
                            <Text fontSize="lg" lineHeight="1.5">
                                The predicted house price is:
                            </Text>
                            <Text fontWeight="bold" fontSize="2xl" color="yellow.300" mt={2}>
                                ${data.prediction}
                            </Text>
                        </Box>
                        <Button onClick={onClose} colorScheme="green" size="sm" variant="outline" borderRadius="full" mt={3}>
                            Close
                        </Button>
                    </Box>
                ),
            });
        } catch (error) {
            console.error("Error fetching prediction:", error);
            toast({
                title: "Prediction Failed",
                description: "An error occurred while predicting the price.",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top", // Position at the top of the page
                variant: "solid", // Solid background for a clearer message
                render: ({ onClose }) => (
                    <Box
                        color="white"
                        p={3}
                        bg="red.500"
                        borderRadius="md"
                        boxShadow="md"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Text fontWeight="bold">Prediction Failed</Text>
                        <Button onClick={onClose} colorScheme="red" size="sm">
                            Close
                        </Button>
                    </Box>
                ),
            });
        }
    };

    return (
        <Box
            maxW="500px"
            mx="auto"
            mt={10}
            p={5}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="lg"
            bg="gray.50" // Neutral light background color for the form
        >
            <Heading as="h2" size="lg" mb={6} textAlign="center" color="teal.600">
                House Price Prediction
            </Heading>
            <VStack spacing={4} as="form" onSubmit={handleSubmit}>
                {/* OverallQual Dropdown */}
                <FormControl id="OverallQual" isRequired>
                    <FormLabel>Overall Quality</FormLabel>
                    <Select
                        name="OverallQual"
                        value={formData.OverallQual}
                        onChange={handleChange}
                    >
                        {[...Array(10)].map((_, index) => (
                            <option key={index + 1} value={index + 1}>
                                {index + 1}
                            </option>
                        ))}
                    </Select>
                </FormControl>

                {/* GrLivArea Input */}
                <FormControl id="GrLivArea" isRequired>
                    <FormLabel>Above Ground Living Area (sq ft)</FormLabel>
                    <Input
                        type="number"
                        name="GrLivArea"
                        value={formData.GrLivArea}
                        onChange={handleChange}
                    />
                </FormControl>

                {/* TotalBsmtSF Input */}
                <FormControl id="TotalBsmtSF" isRequired>
                    <FormLabel>Total Basement Area (sq ft)</FormLabel>
                    <Input
                        type="number"
                        name="TotalBsmtSF"
                        value={formData.TotalBsmtSF}
                        onChange={handleChange}
                    />
                </FormControl>

                {/* OverallCond Dropdown */}
                <FormControl id="OverallCond" isRequired>
                    <FormLabel>Overall Condition</FormLabel>
                    <Select
                        name="OverallCond"
                        value={formData.OverallCond}
                        onChange={handleChange}
                    >
                        {[...Array(10)].map((_, index) => (
                            <option key={index + 1} value={index + 1}>
                                {index + 1}
                            </option>
                        ))}
                    </Select>
                </FormControl>

                {/* GarageCars Dropdown */}
                <FormControl id="GarageCars" isRequired>
                    <FormLabel>Garage Cars Capacity</FormLabel>
                    <Select
                        name="GarageCars"
                        value={formData.GarageCars}
                        onChange={handleChange}
                    >
                        {[...Array(5)].map((_, index) => (
                            <option key={index + 1} value={index + 1}>
                                {index + 1}
                            </option>
                        ))}
                    </Select>
                </FormControl>

                {/* LotArea Input */}
                <FormControl id="LotArea" isRequired>
                    <FormLabel>Lot Area (sq ft)</FormLabel>
                    <Input
                        type="number"
                        name="LotArea"
                        value={formData.LotArea}
                        onChange={handleChange}
                    />
                </FormControl>

                {/* GarageArea Input */}
                <FormControl id="GarageArea" isRequired>
                    <FormLabel>Garage Area (sq ft)</FormLabel>
                    <Input
                        type="number"
                        name="GarageArea"
                        value={formData.GarageArea}
                        onChange={handleChange}
                    />
                </FormControl>

                {/* YearBuilt Dropdown */}
                <FormControl id="YearBuilt" isRequired>
                    <FormLabel>Year Built</FormLabel>
                    <Select
                        name="YearBuilt"
                        value={formData.YearBuilt}
                        onChange={handleChange}
                    >
                        {Array.from({ length: 121 }, (_, index) => 1900 + index).map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </Select>
                </FormControl>

                {/* PoolArea Input */}
                <FormControl id="PoolArea" isRequired>
                    <FormLabel>Pool Area (sq ft)</FormLabel>
                    <Input
                        type="number"
                        name="PoolArea"
                        value={formData.PoolArea}
                        onChange={handleChange}
                    />
                </FormControl>

                {/* OpenPorchSF Input */}
                <FormControl id="OpenPorchSF" isRequired>
                    <FormLabel>Open Porch Area (sq ft)</FormLabel>
                    <Input
                        type="number"
                        name="OpenPorchSF"
                        value={formData.OpenPorchSF}
                        onChange={handleChange}
                    />
                </FormControl>

                <Button colorScheme="teal" type="submit" width="full">
                    Predict Price
                </Button>
            </VStack>
        </Box>
    );
};

export default PredictionForm;
