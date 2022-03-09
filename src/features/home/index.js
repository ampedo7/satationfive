import React, { useState } from 'react';
import { Wrapper } from './styles';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { findIndex, includes } from 'lodash';
import { postGroup } from '@modules/groups/actions';
import { useDispatch } from 'react-redux';
import sampleData from '../../constants/sample_data';

const Index = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const [dishIdx, setDishIdx] = useState();
  const dishes = sampleData.dishes;
  const [main, setMain] = useState(sampleData.main);
  const [sides, setSides] = useState(sampleData.sides);
  const rules = sampleData.rules;

  const onSubmitButton = (data) => {
    console.log('data ->', data);
    alert('form submit');
    dispatch(postGroup(data));
  };
  const handleChangeDish = async (data) => {
    const index = findIndex(rules, { id: data.id });
    setValue('main', null);
    setValue('sides', null);
    setDishIdx(index);
    setMainData(index);
    setSidesData(index);
  };

  const handleChangemain = async (data) => {
    const index = findIndex(rules, { id: data.id });
    setValue('sides', null);
    setSidesData(dishIdx);
    if (index >= 0) setSidesData(index, false);
  };
  const setMainData = async (index) => {
    let _main = [];
    await Promise.all(
      main.map(async (data) => {
        if (includes(rules[index].value, parseInt(data.id))) {
          data.isActive = false;
          _main.push(data);
        } else {
          data.isActive = true;
          _main.push(data);
        }
      })
    );
    setTimeout(setMain(_main));
  };

  const setSidesData = async (index, reset = true) => {
    let _sides = [];
    await Promise.all(
      sides.map(async (data) => {
        if (includes(rules[index].value, parseInt(data.id))) {
          data.isActive = false;
          _sides.push(data);
        } else {
          if (reset) data.isActive = true;
          _sides.push(data);
        }
      })
    );
    setTimeout(setSides(_sides));
  };

  return (
    <Wrapper>
      <div className="container jumbotron mt-5">
        <Form onSubmit={handleSubmit(onSubmitButton)}>
          {dishes &&
            dishes.map((data, key) => {
              return (
                <div key={key}>
                  <Form.Check
                    {...register('dish', { required: true })}
                    label={data.value}
                    name="dish"
                    type="radio"
                    value={data.id}
                    id={`group1-radio-${key}`}
                    onClick={() => handleChangeDish(data)}
                  />
                </div>
              );
            })}
          <small className="text-danger">
            {errors.group1 && 'group1 is required'}
          </small>
          <hr />
          {main &&
            main.map((data, key) => {
              return (
                <div key={key}>
                  <Form.Check
                    {...register('main', { required: true })}
                    label={data.value}
                    name="main"
                    type="radio"
                    value={data.id}
                    id={`main-radio-${key}`}
                    disabled={!data.isActive ? true : false}
                    onClick={() => handleChangemain(data)}
                  />
                </div>
              );
            })}
          <small className="text-danger">
            {errors.main && 'main is required'}
          </small>
          <hr />
          {sides &&
            sides.map((data, key) => {
              return (
                <div key={key}>
                  <Form.Check
                    {...register('sides', { required: true })}
                    label={data.value}
                    name="sides"
                    type="radio"
                    value={data.id}
                    id={`sides-radio-${key}`}
                    disabled={!data.isActive ? true : false}
                  />
                </div>
              );
            })}
          <small className="text-danger">
            {errors.sides && 'sides is required'}
          </small>
          <hr />
          <Button type="submit">Send</Button>
        </Form>
      </div>
    </Wrapper>
  );
};

export default Index;
