import React from 'react';
import HelloWorld from '../../components/HelloWorld';
import HelloWorld2 from '../../components/HelloWorld2';
import Button from '../../components/Button';

const Main = () => (
    <>
        <HelloWorld name="Adriana" color="blue"/>
        <HelloWorld2 />
        <Button>Button</Button>
        <Button primary>Primary</Button>
    </>
)

export default Main;