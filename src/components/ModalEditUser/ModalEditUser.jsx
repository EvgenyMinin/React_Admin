import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import './ModalEditUser.scss';

const ModalEditUser = ({
    isOpenModalEditUser,
    toggleModalEditUser,
    currentUser : {
        email,
        phone,
        password,
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
                                />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup className='modalEditUser__input'>
                                <InputGroupAddon addonType='prepend'>Телефон</InputGroupAddon>
                                <Input
                                    name='phone'
                                    value={phone}
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
                                />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup className='modalEditUser__input'>
                                <InputGroupAddon addonType='prepend'>Статус</InputGroupAddon>
                                <Input
                                    name='status'
                                    type='select'
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
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup className='modalEditUser__input'>
                            <InputGroupAddon addonType='prepend'>ФИО руководителя</InputGroupAddon>
                            <Input
                                name='managerName'
                                value={managerName}
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup className='modalEditUser__input'>
                            <InputGroupAddon addonType='prepend'>Телефон руководителя</InputGroupAddon>
                            <Input
                                name='managerPhone'
                                value={managerPhone}
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup className='modalEditUser__input'>
                            <InputGroupAddon addonType='prepend'>Email руководителя</InputGroupAddon>
                            <Input
                                name='managerEmail'
                                value={managerEmail}
                            />
                        </InputGroup>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary">Сохранить</Button>
                <Button color="warning" onClick={toggleModalEditUser}>Отмена</Button>
            </ModalFooter>
        </Modal>
    );
}
 
export default ModalEditUser;