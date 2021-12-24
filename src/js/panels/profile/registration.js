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
	SliderSwitch,
	DatePicker,
	FormLayoutGroup,
	PanelHeaderBack,
	VKCOM
} from "@vkontakte/vkui";

import { RichTooltip } from '@vkontakte/vkui/dist/unstable';
import '@vkontakte/vkui/dist/unstable.css' // CSS достаточно подключить один раз 

import bridge from '@vkontakte/vk-bridge';

import {
	Icon20HelpOutline,
	Icon28AccessibilityOutline,
	Icon28LogoVkOutline
} from '@vkontakte/icons';

import OKLogo from '../../../img/OKLogo.svg'

class RegistrationPanel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			login: ''
		};
  }

	render() {
		const {id, setPage, platform, goBack, login} = this.props;

		return (
			<Panel id={id}>
				<PanelHeader left={<PanelHeaderBack onClick={() => goBack()} label={platform === VKCOM ? 'Назад' : undefined} /*удалить*/ />}>
					Регистрация
				</PanelHeader>
				<Group>
					<FormLayoutGroup mode="horizontal">
						<FormItem top="Имя">            
							<Input placeholder="Ваше имя" />
						</FormItem>
						<FormItem top="Фамилия">            
							<Input placeholder="Ваша фамилия" />
						</FormItem>
					</FormLayoutGroup>
					<FormItem top="Дата рождения">
						<DatePicker
							min={{day: 1, month: 1, year: 1901}}
							max={{day: 1, month: 1, year: 2006}}
							onDateChange={(value) => {console.log(value)}}
							dayPlaceholder="ДД"
							monthPlaceholder="ММММ"
							yearPlaceholder="ГГГГ"
						/>
					</FormItem>
					<FormItem top="Пол">
						<SliderSwitch 
							options={[
								{
									name: 'Мужской',
									value: 'male',
								},
								{
									name: 'Женский',
									value: 'female',
								},
							]}
						/>
					</FormItem>
					<FormItem
						top="Логин"
						bottom={<div style={{display: "flex"}}><div>example.com/@<b>login</b></div><div style={{color: "var(--destructive)", marginLeft: "12px"}}>Логин уже занят</div><div style={{color: "var(--field_valid_border)", marginLeft: "12px"}}>Логин свободен</div></div>}
						//status={login ? 'valid' : 'error'}
						//bottom={login ? 'Логин свободен' : 'Логин уже занят'}
					>
						<Input
							type="text"
							placeholder="Введите Ваш логин"
							after={
								<RichTooltip
										action="hover"
										placement="bottom"
										content={
											<Div>В дальнейшем будет использоваться как короткий адрес профиля</Div>
										}
								>
									<Icon20HelpOutline />
								</RichTooltip>
							}
						/>
					</FormItem>
					<FormItem top="E-mail">
              <Input type="email" placeholder="Введите Ваш E-mail" />
          </FormItem>
					<FormItem top="Пароль">
						<Input type="password" placeholder="Введите Ваш пароль" />
					</FormItem>            
          <FormItem>
            <Input type="password" placeholder="Повторите Ваш пароль" />
          </FormItem>
					<Div>
						<Button mode="commerce" size="m" stretched>Зарегистрироваться</Button>
					</Div>
					<div style={{textAlign: "center"}}>Или через</div>
					<Div className="buttonLogin">
						<div className="buttonLoginVK"><Icon28LogoVkOutline className="logoButtonLogin" /><span className="textButtonLogin">ВКонтакте</span></div>
						<div className="buttonLoginOK"><img src={OKLogo} className="logoButtonLogin" /><span className="textButtonLogin">Одноклассники</span></div>
					</Div>
					<Title level="2" style={{textAlign: "center", marginBottom: "12px"}}><div>Уже есть аккаунт?</div><Button onClick={() => setPage('profile', 'login')} mode="tertiary" size="l">Войти</Button></Title>
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

export default connect(null, mapDispatchToProps)(RegistrationPanel);