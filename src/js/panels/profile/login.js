import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout, goBack} from "../../store/router/actions";

import {
  Panel,
  PanelHeader,
  Group,
	Title,
	FormItem,
	Input,
	Button,
	Div,
	PanelHeaderBack,
	VKCOM
} from "@vkontakte/vkui";

import bridge from '@vkontakte/vk-bridge';

import {
	Icon28AccessibilityOutline,
	Icon28LogoVkOutline
} from '@vkontakte/icons';

import OKLogo from '../../../img/OKLogo.svg'

class LoginPanel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		};
  }

	render() {
		const {id, setPage, platform, goBack, login} = this.props;

		return (
			<Panel id={id}>
				<PanelHeader left={<PanelHeaderBack onClick={() => goBack()} label={platform === VKCOM ? 'Назад' : undefined} /*удалить*/ />}>
					Вход
				</PanelHeader>
				<Group>
					<FormItem top="Логин">
						<Input type="text" placeholder="Введите Ваш логин" />
					</FormItem>
					<FormItem top="Пароль">
						<Input type="password" placeholder="Введите Ваш пароль" />
					</FormItem>
					<Div>
						<Button size="m" stretched>Войти</Button>
					</Div>
					<div style={{textAlign: "center"}}>Или через</div>
					<Div className="buttonLogin">
						<div className="buttonLoginVK"><Icon28LogoVkOutline className="logoButtonLogin" /><span className="textButtonLogin">ВКонтакте</span></div>
						<div className="buttonLoginOK"><img src={OKLogo} className="logoButtonLogin" /><span className="textButtonLogin">Одноклассники</span></div>
					</Div>
					<Title level="2" style={{textAlign: "center", marginBottom: "12px"}}><div>Впервые с нами?</div><Button onClick={() => setPage('profile', 'registration')} mode="tertiary" size="l">Зарегистрироваться</Button></Title>
				</Group>
			</Panel>
		);
	}

}

const mapDispatchToProps = {
  setPage,
  openPopout,
  closePopout,
  goBack
};

export default connect(null, mapDispatchToProps)(LoginPanel);