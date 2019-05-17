import React, { Component } from 'react';
import Joi from 'joi-browser';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Panel.scss';

class Panel extends Component {
    state = {
        isOpenModalNewUser: false,
        userData: {
            email: '',
            status: 'Активен',
            type: 'Клиент',
            subpay: 0,
            balance: 0,
            phone: '',
            password: '',
            business: 'Кафе'
        },
        errors: {}
    }

    schema = {
        email: Joi.string().email({minDomainSegments: 2}).required(),
        status: Joi.string(),
        type: Joi.string(),
        subpay: Joi.number(),
        balance: Joi.number(),
        phone: Joi.string().min(11).required(),
        password: Joi.string().min(8).required(),
        business: Joi.string().required()
    }

    validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(this.state.userData, this.schema, options);
        if (!error) return null;
        const errors = {};
        for (let item of error.details) {
            errors[item.path[0]] = item.message;
        }
        return errors;
    }

    validateProperty = ({ name, value }) => {
        const obj = { [name]:value };
        const schema = { [name]:this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
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

    handleChange = ({currentTarget: input}) => {

        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) {
            errors[input.name] = errorMessage;
        } else {
            delete errors[input.name]
        }

        const userData = {...this.state.userData};
        userData[input.name] = input.value;
        this.setState({
            userData,
            errors
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const errors = this.validate();
        const { email, status, type, subpay, balance, phone, password, business } = this.state.userData;
        this.props.createNewUser(email, status, type, subpay, balance, phone, password, business);
        this.setState({
            errors: errors || {}
        });
        if (errors) return;
    }

    render() {
        const { users } = this.props;
        const { isOpenModalNewUser, errors } = this.state;
        const click = (event) => {
            this.handleSubmit(event);
            this.toggleModalNewUser();
        }
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
                    <p>Выход{users.email}</p>
                </div>
            </div>
                <Modal isOpen={isOpenModalNewUser} toggle={this.toggleModalNewUser} className='panel__modalNewUser'>
                    <ModalHeader toggle={this.hideModalNewUser}>Регистрация нового клиента</ModalHeader>
                    <ModalBody className='modal__body'>
                        <p className='modal__text'>Основная информация</p>
                        <Form>
                            <div className="panel__modalItems">
                                <FormGroup>
                                    <InputGroup className='modal__input'>
                                        <InputGroupAddon addonType='prepend'>Логин(email)</InputGroupAddon>
                                        <Input
                                            name='email'
                                            placeholder='Введите email клиента'
                                            onChange={this.handleChange}
                                            error={errors.email}
                                        />
                                    </InputGroup>
                                    {errors.email && <div className='alert alert-danger'>{errors.email}</div>}
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className='modal__input'>
                                        <InputGroupAddon addonType='prepend'>Телефон</InputGroupAddon>
                                        <Input
                                            name='phone'
                                            placeholder='Введите телефон клиента'
                                            onChange={this.handleChange}
                                            error={errors.phone}
                                        />
                                    </InputGroup>
                                    {errors.phone && <div className='alert alert-danger'>{errors.phone}</div>}
                                </FormGroup>
                            </div>
                            <div className="panel__modalItems">
                                <FormGroup>
                                    <InputGroup className='modal__input'>
                                        <InputGroupAddon addonType='prepend'>Пароль</InputGroupAddon>
                                        <Input
                                            name='password'
                                            type='password'
                                            placeholder='Придумайте пароль'
                                            onChange={this.handleChange}
                                            error={errors.password}
                                        />
                                    </InputGroup>
                                    {errors.password && <div className='alert alert-danger'>{errors.password}</div>}
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup className='modal__input'>
                                        <InputGroupAddon addonType='prepend'>Тип заведения</InputGroupAddon>
                                        <Input
                                            name='business'
                                            type='select'
                                            onChange={this.handleChange}
                                        >
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
                        <Button color="primary" disabled={!!this.validate()} onClick={click}>Сохранить</Button>
                        <Button color="warning" onClick={this.toggleModalNewUser}>Отмена</Button>
                    </ModalFooter>
            </Modal>
          </React.Fragment>
        );
    }
}
 
export default Panel;