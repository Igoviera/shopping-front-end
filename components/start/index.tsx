import { Box, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

export const Star = () => {
    const[rating, setRating] = useState(0);

    const handleRatingClick = (star: number) => {
        setRating(star)
    };

    return(
        <>
            {[1,2,3,4,5].map((star) => (
                <Box key={star} onClick={() => handleRatingClick(star)}>
                    {star <= rating? 
                        <AiFillStar fontSize={25} cursor={'pointer'} color='#FF5C01'/>
                        :
                        <AiOutlineStar fontSize={25} cursor={'pointer'} color='#ccc'/>}
                </Box>
            ))}
        </>
    )
};

