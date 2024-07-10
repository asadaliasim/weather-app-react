import React, { useState } from 'react';
import { imageURL } from '../../config/constants';
import Button from '../Button';
import { Box, Image, Skeleton } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

function DataHolder({
  id,
  name,
  box,
  title,
  image,
  nextData,
  prevData,
  handleEdit,
  handleDeleteData,
}) {
  const { isArticlesLoading } = useSelector((state) => state.articles);
  // state for editing
  const [isEditing, setIsEditing] = useState(false);
  // state to store temp name
  const [tempName, setTempName] = useState(title);
  const handleEditClick = () => {
    setIsEditing(true);
  };
  // handle click
  const handleSaveClick = () => {
    setTempName(tempName);
    setIsEditing(false);
    let data = {
      id: id,
      newName: tempName,
      box: box,
      title: title,
    };
    handleEdit(data);
  };
  //
  const handleCancel = () => {
    setIsEditing(false);
  };

  // handle change
  const handleChange = (event) => {
    setTempName(event.target.value);
  };

  // handle delete
  const handleDelete = () => {
    let data = {
      id: id,
      title: title,
      box: box,
    };
    handleDeleteData(data);
  };

  // data to move next
  const handleNext = () => {
    let data = {
      id: id,
      title: title,
      image: image,
    };
    nextData(data);
  };
  // data to move pre
  const handlePrev = () => {
    let data = {
      id: id,
      image: image,
      title: title,
    };
    prevData(data);
  };

  return (
    <>
      <Skeleton isLoaded={!isArticlesLoading}>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solid grey',
            borderRadius: '5px',
            width: '40vh',
          }}
        >
          <Box>Name:{title}</Box>
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              src={`${imageURL}${image}`}
              alt=""
              width="60%"
              style={{ maxHeight: '200px' }}
            />
          </Box>
          {isEditing && (
            <Box>
              <input type="text" value={tempName} onChange={handleChange} />
            </Box>
          )}

          <Box>
            <Box>
              {isEditing && (
                <>
                  <Button
                    onClick={handleSaveClick}
                    backgroundColor="gray"
                    text={'Save'}
                  />

                  <Button
                    onClick={handleCancel}
                    backgroundColor="yellow"
                    text={'Cancel'}
                  />
                </>
              )}
              {!isEditing && (
                <>
                  <Button
                    onClick={handleEditClick}
                    backgroundColor="gray"
                    text={'Edit'}
                  />

                  <Button
                    onClick={handleDelete}
                    backgroundColor="red"
                    text={'Delete'}
                  />
                </>
              )}
            </Box>
          </Box>

          <Box>
            {box === 'first' && (
              <Button
                onClick={handleNext}
                backgroundColor="purple"
                text={'Next'}
              />
            )}
            {box === 'second' && (
              <>
                <Button
                  onClick={handlePrev}
                  backgroundColor="teal"
                  text={'Prev'}
                />

                <Button
                  onClick={handleNext}
                  backgroundColor="teal"
                  text={'Next'}
                />
              </>
            )}
            {box === 'third' && (
              <Button
                onClick={handlePrev}
                backgroundColor="teal"
                text={'Prev'}
              />
            )}
          </Box>
        </Box>
      </Skeleton>
    </>
  );
}

export default DataHolder;
