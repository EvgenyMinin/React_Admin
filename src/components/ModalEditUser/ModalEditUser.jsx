import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import './ModalEditUser.scss';

const ModalEditUser = ({
    isOpenModalEditUser,
    toggleModalEditUser,
    onChange,
    onSubmit,
    currentUser : {
        email,
        phone,
        password,
        status,
        business,
        managerName,
        managerPhone,
        managerEmail
    }
}) => {
    return (
        <Modal isOpen={isOpenModalEditUser} toggle={toggleModalEditUser} className='modalEditUser'>
            <ModalHeader  toggle={toggleModalEditUser}>Контактная информация</ModalHeader>
            <ModalBody className='modalEditUser__body'>
                <p className='modalEditUser__text'>Основная информация</p>
                <Form>
                    <div className="modalItems">
                        <FormGroup>
                            <InputGroup className='modalEditUser__input'>
                                <InputGroupAddon addonType='prepend'>Логин(email)</InputGroupAddon>
                                <Input
                                    disabled
                                    name='email'
                                    value={email}
                                    onChange={onChange}
                                />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup className='modalEditUser__input'>
                                <InputGroupAddon addonType='prepend'>Телефон</InputGroupAddon>
                                <Input
                                    name='phone'
                                    value={phone}
                                    onChange={onChange}
                                />
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <div className="modalItems">
                        <FormGroup>
                            <InputGroup className='modalEditUser__input'>
                                <InputGroupAddon addonType='prepend'>Пароль</InputGroupAddon>
                                <Input
                                    name='password'
                                    type='password'
                                    value={password}
                                    onChange={onChange}
                                />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup className='modalEditUser__input'>
                                <InputGroupAddon addonType='prepend'>Статус</InputGroupAddon>
                                <Input
                                    name='status'
                                    type='select'
                                    value={status}
                                    onChange={onChange}
                                >
                                    <option>Активен</option>
                                    <option>Заблокирован</option>
                                </Input>
                            </InputGroup>
                        </FormGroup>
                    </div>
                    <p className='modalEditUser__text'>Контакты клиента</p>
                    <FormGroup>
                        <InputGroup className='modalEditUser__input'>
                            <InputGroupAddon addonType='prepend'>Название организации</InputGroupAddon>
                            <Input
                                name='business'
                                value={business}
                                onChange={onChange}
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup className='modalEditUser__input'>
                            <InputGroupAddon addonType='prepend'>ФИО руководителя</InputGroupAddon>
                            <Input
                                name='managerName'
                                value={managerName}
                                onChange={onChange}
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup className='modalEditUser__input'>
                            <InputGroupAddon addonType='prepend'>Телефон руководителя</InputGroupAddon>
                            <Input
                                name='managerPhone'
                                value={managerPhone}
                                onChange={onChange}
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup className='modalEditUser__input'>
                            <InputGroupAddon addonType='prepend'>Email руководителя</InputGroupAddon>
                            <Input
                                name='managerEmail'
                                value={managerEmail}
                                onChange={onChange}
                            />
                        </InputGroup>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={onSubmit}>Сохранить</Button>
                <Button color="warning" onClick={toggleModalEditUser}>Отмена</Button>
            </ModalFooter>
        </Modal>
    );
}
 
export default ModalEditUser;