import React from 'react';
import HelloWorld from '../../components/HelloWorld';
import HelloWorld2 from '../../components/HelloWorld2';
import Button from '../../components/Button';
import NameForm from '../../components/NameForm'
import InputForm from '../../components/InputForm';

const Main = () => (
    <>
        <HelloWorld name="Adriana" color="blue"/>
        <HelloWorld2 />
        <Button>Button</Button>
        <Button primary>Primary</Button>
        <NameForm />
        <InputForm />
    </>
)

export default Main;