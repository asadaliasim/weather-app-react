import React from 'react';
import DataHolder from '../DataHolder';
import Button from '../Button';
import { Box, Divider, Heading } from '@chakra-ui/react';

function Card({
  data,
  box,
  form,
  setForm,
  title,
  nextData,
  prevData,
  handleEdit,
  handleDeleteData,
}) {
  // this triggers add employee form
  const handleAddButtonClick = () => {
    setForm({ ...form, form: true, cardTitle: title });
  };
  return (
    <>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '2px solid grey',
          borderRadius: '10px',
          padding: '10px',
          width: '33%',
          minHeight: '75vh',
          backgroundColor: '#C1E9F4',
        }}
      >
        <Box>
          <Heading size="md">{title}</Heading>
        </Box>
        <Divider variant="dashed" />
        {data.map((item, index) => {
          return (
            <DataHolder
              key={index}
              {...item}
              box={box}
              nextData={nextData}
              prevData={prevData}
              handleEdit={handleEdit}
              handleDeleteData={handleDeleteData}
            />
          );
        })}
        <Box>
          <Button
            onClick={handleAddButtonClick}
            text={'Add a New Emp'}
            backgroundColor={'blue'}
          />
        </Box>
      </Box>
    </>
  );
}

export default Card;
