import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Panel.scss';

class Panel extends Component {
    state = {
        isOpenModalNewUser: false
    }

    toggleModalNewUser = () => {
        this.setState(prevState => ({
            isOpenModalNewUser: !prevState.isOpenModalNewUser
        }))
    }

    showModalNewUser = () => {
        this.setState({
            isOpenModalNewUser: true
        })
    }

    hideModalNewUser = () => {
        this.setState({
            isOpenModalNewUser: false
        })
    }

    render() {
        //const {createNewUser} = this.props;
        const { isOpenModalNewUser } = this.state;
        return (
            <React.Fragment>
            <div className="panel">
                <div className="panel__info">
                    <p> <span><i className="fas fa-user"></i></span> admin@yandex.ru</p>
                    <p
                        className='panel__button'
                        onClick={this.showModalNewUser}
                    > 
                        <span><i className="fas fa-plus"></i></span> Добавить клиента
                    </p>
                </div>
                <div className="panel__exit">
                    <p>Выход</p>
                </div>
            </div>
                <Modal isOpen={isOpenModalNewUser} toggle={this.toggleModalNewUser} className='panel__modalNewUser'>
                    <ModalHeader toggle={this.hideModalNewUser}>Регистрация нового клиента</ModalHeader>
                    <ModalBody>
                        <p className='modal__text'>Основная информация</p>
                        <Form>
                            <div className="panel__modalItems">
                                <FormGroup>
                                    <InputGroup className='custom-input'>
                                        <InputGroupAddon addonType='prepend'>Логин(email)</InputGroupAddon>
                                        <Input name='email' placeholder='Введите email клиента' />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className='custom-input'>
                                        <InputGroupAddon addonType='prepend'>Телефон</InputGroupAddon>
                                        <Input name='phone' placeholder='Введите телефон клиента'/>
                                    </InputGroup>
                                </FormGroup>
                            </div>
                            <div className="panel__modalItems">
                                <FormGroup>
                                    <InputGroup className='custom-input'>
                                        <InputGroupAddon addonType='prepend'>Пароль</InputGroupAddon>
                                        <Input name='password' type='password' placeholder='Придумайте пароль' />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className='custom-input'>
                                        <InputGroupAddon addonType='prepend'>Тип заведения</InputGroupAddon>
                                        <Input name='select' type='select'>
                                            <option>Кафе</option>
                                            <option>Ресторан</option>
                                            <option>Бар</option>
                                        </Input>
                                    </InputGroup>
                                </FormGroup>
                            </div>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleModalNewUser}>Сохранить</Button>
                        <Button color="warning" onClick={this.toggleModalNewUser}>Отмена</Button>
                    </ModalFooter>
            </Modal>
          </React.Fragment>
        );
    }
}
 
export default Panel;