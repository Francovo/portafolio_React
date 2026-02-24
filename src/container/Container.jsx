import React, { Component } from 'react'
import Presentacion from '../components/Presentacion'
import Proyects from '../components/Proyectos'
import Nav from '../components/Nav'
import Form from '../components/Form'

import Conocimientos from '../components/Conocimientos'

export default class Container extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Presentacion/>
                <Proyects/>
                <Conocimientos/>
                <Form/>
            </div>
        )
    }
}