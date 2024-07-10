import React, { useEffect, useState } from 'react';
import Card from '../Card';
import { middleData, LastData } from './startData';
import FlexWrapper from '../FlexWrapper';
import Form from '../Form';
import { useDispatch, useSelector } from 'react-redux';
import { getArticlesData } from '../../features/articles/articlesActions';

function ContentHolder() {
  const [dataStart, setDataStart] = useState([]);
  const [dataMiddle, setDataMiddle] = useState(middleData);
  const [dataLast, setDataLast] = useState(LastData);
  const [name, setName] = useState('');

  const [formState, setFormState] = useState({ form: false, cardTitle: '' });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticlesData());
  }, [dispatch]);
  const { articles } = useSelector((state) => state.articles);
  // use effect --->>>>>> bacuase api renders in  infinite loop if we dont call it inside useEffect
  // useEffect(() => {
  //   // fetching data using axios
  //   // (IIFE), immediately invoked function expression
  //   (async () => {
  //     try {
  //       // getting data through api call
  //       const articles = await axios.get(
  //         'https://api.lumiplace.io/app.v1/api/getArticles'
  //       );
  //       console.log(articles.data);
  //       setDataStart(articles.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   })();
  // }, []);

  // add new data
  if (formState.cardTitle === 'Backend' && name !== '') {
    const getId = dataLast.length + 1;

    const newData = {
      id: getId,
      name: name,
    };
    setDataLast([...dataLast, newData]);
    setFormState({ form: false, cardTitle: '' });
    setName('');
  }
  if (formState.cardTitle === 'Front End' && name !== '') {
    const getId = dataMiddle.length + 1;

    const newData = {
      id: getId,
      name: name,
    };
    setDataMiddle([...dataMiddle, newData]);
    setFormState({ form: false, cardTitle: '' });
    setName('');
  }
  if (formState.cardTitle === 'UI/UX' && name !== '') {
    const getId = dataStart.length + 1;
    const newData = {
      id: getId,
      name: name,
    };
    setDataStart([...dataStart, newData]);
    setFormState({ form: false, cardTitle: '' });
    setName('');
  }

  // handle edit data
  const handleEdit = (info) => {
    let updatedDataStart = dataStart;
    let updatedDataMiddle = dataMiddle;
    let updatedDataLast = dataLast;

    if (info.box === 'first' && info.title !== '') {
      updatedDataStart = updatedDataStart.map((item) =>
        item.title === info.title ? { ...item, title: info.newName } : item
      );
    }
    if (info.box === 'second' && info.title !== '') {
      updatedDataMiddle = updatedDataMiddle.map((item) =>
        item.title === info.title ? { ...item, title: info.newName } : item
      );
    }
    if (info.box === 'third' && info.title !== '') {
      updatedDataLast = updatedDataLast.map((item) =>
        item.title === info.title ? { ...item, title: info.newName } : item
      );
    }

    // Update state
    setDataStart(updatedDataStart);
    setDataMiddle(updatedDataMiddle);
    setDataLast(updatedDataLast);
  };

  // handle detete
  const handleDeleteData = (info) => {
    let updatedDataStart = dataStart;
    let updatedDataMiddle = dataMiddle;
    let updatedDataLast = dataLast;

    if (info.box === 'first') {
      if (dataStart.some((item) => item.title === info.title)) {
        updatedDataStart = dataStart.filter(
          (item) => item.title !== info.title
        );
      }
    }
    if (info.box === 'second') {
      if (dataMiddle.some((item) => item.title === info.title)) {
        updatedDataMiddle = dataMiddle.filter(
          (item) => item.title !== info.title
        );
      }
    }
    if (info.box === 'third') {
      if (dataLast.some((item) => item.title === info.title)) {
        updatedDataLast = dataLast.filter((item) => item.title !== info.title);
      }
    }

    // Update state
    setDataStart(updatedDataStart);
    setDataMiddle(updatedDataMiddle);
    setDataLast(updatedDataLast);
  };

  // handle card pre
  const prevData = (info) => {
    let updatedDataStart = dataStart;
    let updatedDataMiddle = dataMiddle;
    let updatedDataLast = dataLast;

    if (dataMiddle.some((item) => item.title === info.title)) {
      updatedDataMiddle = dataMiddle.filter(
        (item) => item.title !== info.title
      );

      updatedDataStart = [...dataStart, info];
    } else if (dataLast.some((item) => item.title === info.title)) {
      updatedDataLast = dataLast.filter((item) => item.title !== info.title);

      updatedDataMiddle = [...dataMiddle, info];
    }

    setDataStart(updatedDataStart);
    setDataMiddle(updatedDataMiddle);
    setDataLast(updatedDataLast);
  };
  // handle card next
  const nextData = (info) => {
    // Checking arrays
    let updatedDataStart = dataStart;
    let updatedDataMiddle = dataMiddle;
    let updatedDataLast = dataLast;

    if (dataStart.some((item) => item.title === info.title)) {
      updatedDataStart = dataStart.filter((item) => item.title !== info.title);
      updatedDataMiddle = [...dataMiddle, info];
    } else if (dataMiddle.some((item) => item.title === info.title)) {
      updatedDataMiddle = dataMiddle.filter(
        (item) => item.title !== info.title
      );
      updatedDataLast = [...dataLast, info];
    }

    // Update state
    setDataStart(updatedDataStart);
    setDataMiddle(updatedDataMiddle);
    setDataLast(updatedDataLast);
  };

  return (
    <>
      <FlexWrapper>
        <Card
          data={articles}
          box={'first'}
          title={'UI/UX'}
          form={formState}
          setForm={setFormState}
          nextData={nextData}
          prevData={prevData}
          handleEdit={handleEdit}
          handleDeleteData={handleDeleteData}
        />
        <Card
          data={dataMiddle}
          box={'second'}
          title={'Front End'}
          form={formState}
          setForm={setFormState}
          nextData={nextData}
          prevData={prevData}
          handleEdit={handleEdit}
          handleDeleteData={handleDeleteData}
        />
        <Card
          data={dataLast}
          box={'third'}
          title={'Backend'}
          form={formState}
          setForm={setFormState}
          nextData={nextData}
          prevData={prevData}
          handleEdit={handleEdit}
          handleDeleteData={handleDeleteData}
        />
        {formState.form && (
          <Form setName={setName} setForm={setFormState} form={formState} />
        )}
      </FlexWrapper>
    </>
  );
}

export default ContentHolder;
