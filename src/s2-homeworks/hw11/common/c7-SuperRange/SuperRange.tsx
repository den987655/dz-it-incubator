import React from 'react'
import {Slider, SliderProps} from '@mui/material'



const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#00CC22',
                height: 4,
                width: '10%',
                m: '12px',
                '& .MuiSlider-thumb': {
                    height: 18,
                    width: 18,
                    backgroundColor: '#fff',
                    border: '1px solid #01CB22',
                    '&::before': {
                        content: '""',
                        width: 6,
                        height: 6,
                        backgroundColor: '#01CB22',
                        borderRadius: '50%',
                        position: 'absolute',
                    },
                },
                '& .MuiSlider-track': {
                    border: 'none',
                },
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B',
                }


            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
