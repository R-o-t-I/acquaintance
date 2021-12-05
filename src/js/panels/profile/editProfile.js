import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout, goBack} from "../../store/router/actions";

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Div,
	Header,
	Spacing,
	FormItem,
	Input,
	Textarea,
	VKCOM,
	Group
} from '@vkontakte/vkui/';

import {
	Icon28CameraOutline,
	Icon28DonateCircleFillYellow
} from '@vkontakte/icons';

class EditProfilePanel extends React.Component {
    constructor (props) {
        super(props);

		this.state = {};
	}


	render () {
		const {id, setPage, platform, goBack} = this.props;

		return (
		<Panel id={id}>
			<PanelHeader
      	left={<PanelHeaderBack onClick={() => goBack()} label={platform === VKCOM ? 'Назад' : undefined} />}
      >
        Редактировать
      </PanelHeader>
			<Group>
				<Header mode="primary">Общедоступные фото</Header>
				<Div className="block-img-for-editProfile">
					<div style={{position: "relative"}}>
						<img src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" className="big-img-for-editProfile" />
						<div className="text-big-img-for-editProfile">Главное фото</div>
					</div>
					<div>
						<div style={{display: "flex"}}>
							<img src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" className="img-for-editProfile" />
							<img src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" className="img-for-editProfile" />
						</div>
						<div style={{marginTop: 7, display: "flex"}}>
							<div className="img-for-editProfile">
								<Icon28CameraOutline style={{margin: "auto", marginTop: 15, color: "var(--accent)"}} />
								<div style={{fontSize: 12, color: "var(--accent)"}}>Загрузить</div>
							</div>
							<div className="img-for-editProfile">
								<Icon28CameraOutline style={{margin: "auto", marginTop: 15, color: "var(--accent)"}} />
								<div style={{fontSize: 12, color: "var(--accent)"}}>Загрузить</div>
							</div>
						</div>
					</div>
				</Div>
				<Div className="block-mini-img-for-editProfile">
					<div className="img-for-editProfile">
						<Icon28DonateCircleFillYellow style={{margin: "auto", marginTop: 15}} />
						<div style={{fontSize: 12}}>Премиум</div>
					</div>
					<div className="img-for-editProfile">
						<Icon28DonateCircleFillYellow style={{margin: "auto", marginTop: 15}} />
						<div style={{fontSize: 12}}>Премиум</div>
					</div>
					<div className="img-for-editProfile">
						<Icon28DonateCircleFillYellow style={{margin: "auto", marginTop: 15}} />
						<div style={{fontSize: 12}}>Премиум</div>
					</div>
					<div className="img-for-editProfile">
						<Icon28DonateCircleFillYellow style={{margin: "auto", marginTop: 15}} />
						<div style={{fontSize: 12}}>Премиум</div>
					</div>
				</Div>
				<Spacing separator size={8} />
				<Header mode="primary">Скрытые фото</Header>
				<Div className="block-mini-img-for-editProfile">
					<div className="img-for-editProfile">
						<Icon28CameraOutline style={{margin: "auto", marginTop: 15, color: "var(--accent)"}} />
						<div style={{fontSize: 12, color: "var(--accent)"}}>Загрузить</div>
					</div>
					<div className="img-for-editProfile">
						<Icon28CameraOutline style={{margin: "auto", marginTop: 15, color: "var(--accent)"}} />
						<div style={{fontSize: 12, color: "var(--accent)"}}>Загрузить</div>
					</div>
					<div className="img-for-editProfile">
						<Icon28CameraOutline style={{margin: "auto", marginTop: 15, color: "var(--accent)"}} />
						<div style={{fontSize: 12, color: "var(--accent)"}}>Загрузить</div>
					</div>
					<div className="img-for-editProfile">
						<Icon28CameraOutline style={{margin: "auto", marginTop: 15, color: "var(--accent)"}} />
						<div style={{fontSize: 12, color: "var(--accent)"}}>Загрузить</div>
					</div>
				</Div>
				<Div className="block-mini-img-for-editProfile">
					<div className="img-for-editProfile">
						<Icon28CameraOutline style={{margin: "auto", marginTop: 15, color: "var(--accent)"}} />
						<div style={{fontSize: 12, color: "var(--accent)"}}>Загрузить</div>
					</div>
					<div className="img-for-editProfile">
						<Icon28CameraOutline style={{margin: "auto", marginTop: 15, color: "var(--accent)"}} />
						<div style={{fontSize: 12, color: "var(--accent)"}}>Загрузить</div>
					</div>
					<div className="img-for-editProfile">
						<Icon28DonateCircleFillYellow style={{margin: "auto", marginTop: 15}} />
						<div style={{fontSize: 12}}>Премиум</div>
					</div>
					<div className="img-for-editProfile">
						<Icon28DonateCircleFillYellow style={{margin: "auto", marginTop: 15}} />
						<div style={{fontSize: 12}}>Премиум</div>
					</div>
				</Div>
				<Div className="block-mini-img-for-editProfile">
					<div className="img-for-editProfile">
						<Icon28DonateCircleFillYellow style={{margin: "auto", marginTop: 15}} />
						<div style={{fontSize: 12}}>Премиум</div>
					</div>
					<div className="img-for-editProfile">
						<Icon28DonateCircleFillYellow style={{margin: "auto", marginTop: 15}} />
						<div style={{fontSize: 12}}>Премиум</div>
					</div>
					<div className="img-for-editProfile">
						<Icon28DonateCircleFillYellow style={{margin: "auto", marginTop: 15}} />
						<div style={{fontSize: 12}}>Премиум</div>
					</div>
					<div className="img-for-editProfile">
						<Icon28DonateCircleFillYellow style={{margin: "auto", marginTop: 15}} />
						<div style={{fontSize: 12}}>Премиум</div>
					</div>
				</Div>
				<Spacing separator size={8} />
				<Header mode="primary">О себе</Header>
				<FormItem top="Имя Фамилия">
					<Input type="text" defaultValue="Александр Тихонович" />
				</FormItem>
				<FormItem top="Короткий адрес">
					<Input type="text" defaultValue="@Alexander" />
				</FormItem>
				<FormItem top="Описание">
					<Textarea type="text" defaultValue="Ищу человека, с которым будет интересно пообщаться" />
				</FormItem>
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

export default connect(null, mapDispatchToProps)(EditProfilePanel);