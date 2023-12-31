import React from 'react';
import { Button, Stack,Typography,button } from '@mui/material';
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png"
const Detail = ({exerciseDetail}) => {
  console.log(exerciseDetail)
  const {bodyPart,gifUrl,name ,target,equipment} = exerciseDetail;
  const extraDetail=[
  {
    icon: BodyPartImage,
    name: bodyPart,
  },
  {
    icon: TargetImage,
    name: bodyPart,
  }, {
    icon: EquipmentImage,
    name: equipment,
  }
]
  return (
    <Stack gap='60px' sx={{flexDirection:{lg:'row'},p:'20px',alignItems:'center'}}>
      <img src={gifUrl}  alt={name} loading='lazy' className='detail-image'/>
      <Stack sx={{gap:{lg:'35px',xs:'20px'}}}>
        <Typography variant='h3'>{name}</Typography>
        <Typography variant='h6'>
          Exercise keep you strong.{name} {` `}
          is one of the best exercises to target your {target} .
          it will help you improve your mood and gain energy

        </Typography>
        {extraDetail?.map((item)=>(
          <Stack key={item.name} direction='row' gap="24px" alignItems="center">
            <Button>
              <img src={item.icon} alt={bodyPart} style={{width:'50px',height:'50px'}}/>
              <Typography variant='h5' textTransform='capitalize' sx={{ fontSize: { lg: '30px', xs: '20px' } }} >
              {item.name}
              </Typography>
            </Button>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail
