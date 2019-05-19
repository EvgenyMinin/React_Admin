import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import './ModalEditUser.scss';

const ModalEditUser = ({
    currentUserId,
    isOpenModalEditUser,
    toggleModalEditUser
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
                                    placeholder={currentUserId}
                                />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup className='modalEditUser__input'>
                                <InputGroupAddon addonType='prepend'>Телефон</InputGroupAddon>
                                <Input
                                    name='phone'
                                    placeholder='2131312131'
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
                                    placeholder='qwertyyyy'
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
                                name='type'
                                placeholder='Ресторан'
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup className='modalEditUser__input'>
                            <InputGroupAddon addonType='prepend'>ФИО руководителя</InputGroupAddon>
                            <Input
                                name='managerName'
                                placeholder='Иванов Иван Иванович'
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup className='modalEditUser__input'>
                            <InputGroupAddon addonType='prepend'>Телефон руководителя</InputGroupAddon>
                            <Input
                                name='managerPhone'
                                placeholder='89115554433'
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup className='modalEditUser__input'>
                            <InputGroupAddon addonType='prepend'>Email руководителя</InputGroupAddon>
                            <Input
                                name='managerEmail'
                                placeholder='manager@mail.ru'
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