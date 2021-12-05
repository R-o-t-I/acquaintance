import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout, goBack} from "../../store/router/actions";

import {
	Panel,
	PanelHeader,
  PanelHeaderBack,
  Search,
  Spacing,
  SimpleCell,
  Header,
  FormItem,
  RangeSlider,
  CustomSelect,
  CustomSelectOption,
  HorizontalCell,
  HorizontalScroll,
  Avatar,
  Link,
	Div,
	Cell,
	Switch,
	AdaptivityProvider,
	Button,
	Snackbar,
	VKCOM,
	Group
} from '@vkontakte/vkui/';

import { ChipsSelect } from '@vkontakte/vkui/dist/unstable';

import {
	Icon16Done,
  Icon28DonateCircleFillYellow,
  Icon28LocationMapOutline
} from '@vkontakte/icons';

class FilterPanel extends React.Component {
    constructor (props) {
        super(props);

		this.state = {
			snackbar: null
		};
		this.openBaseWithAction = this.openBaseWithAction.bind(this);
	}

	openBaseWithAction () {
		if (this.state.snackbar) return;
		this.setState({ snackbar:
			<Snackbar
				onClose={() => this.setState({ snackbar: null })}
				before={<Avatar size={24} style={{ background: 'var(--accent)' }}><Icon16Done fill="#fff" width={14} height={14} /></Avatar>}
			>
				Настройки фильтров сброшены
			</Snackbar>
		});
	}


	render () {
		const {id, setPage, platform, goBack} = this.props;
		const role = [{value: '1', label: 'Актив'}, {value: '2', label: 'Уни-актив'}, {value: '3', label: 'Уни'}, {value: '4', label: 'Уни-пассив'}, {value: '5', label: 'Пассив'}]
		const marital_status = [{value: '1', label: 'Не женат/не замужем'}, {value: '2', label: 'Встречаюсь'}, {value: '3', label: 'Помолвлен(а)'}, {value: '4', label: 'Женат/Замужем'}, {value: '5', label: 'В гражданском браке'}, {value: '6', label: 'Влюблен(а)'}, {value: '7', label: 'В свободных отношениях'}, {value: '8', label: 'Всё сложно'}, {value: '9', label: 'В активном поиске'}]
		const looking_for = []
		const orientation = []
		const hiv_status = []

		return (
		<Panel id={id}>
			<PanelHeader
				separator={false}
				left={<PanelHeaderBack onClick={() => goBack()} label={platform === VKCOM ? 'Назад' : undefined} />}
			>
				Фильтры
			</PanelHeader>
			<Group>
				<Search />
				<SimpleCell
					expandable 
					before={<Icon28LocationMapOutline />}
					description="Поиск людей поблизости"
				>
					Исследуй мир
				</SimpleCell>
				<Spacing separator={true} size={8} />
				<Header mode="primary" aside="18-100">Возраст</Header>
				<FormItem>
					<RangeSlider
						min={18}
						max={100}
						step={1}
						defaultValue={[33, 70]}
					/>
				</FormItem>
				<Header mode="primary" aside={<Icon28DonateCircleFillYellow />}>Рост</Header>
				<FormItem>
					<RangeSlider
						min={50}
						max={250}
						step={1}
						defaultValue={[50, 250]}
						disabled
					/>
				</FormItem>
				<Header mode="primary" aside={<Icon28DonateCircleFillYellow />}>Вес</Header>
				<FormItem>
					<RangeSlider
						min={40}
						max={200}
						step={1}
						defaultValue={[40, 200]}
						disabled
					/>
				</FormItem>
				<Header mode="primary" aside={<Icon28DonateCircleFillYellow />}>Роль в сексе</Header>
				<FormItem>
				<CustomSelect
					placeholder="Не выбрано"
					options={role}
					disabled
					renderOption={({ ...otherProps }) => {
						return (
							<CustomSelectOption
								{...otherProps}
							/>
						);
					}}
				/>
				</FormItem>
				<Header mode="primary" aside={<Icon28DonateCircleFillYellow />}>Семейное положение</Header>
				<FormItem>
				<CustomSelect
					placeholder="Не выбрано"
					options={marital_status}
					disabled
					renderOption={({ ...otherProps }) => {
						return (
							<CustomSelectOption
								{...otherProps}
							/>
						);
					}}
				/>
				</FormItem>
				<Header mode="primary" aside={<Icon28DonateCircleFillYellow />}>Ищу для</Header>
				<FormItem>
				<ChipsSelect
					placeholder="Не выбрано"
					options={looking_for}
					disabled
					renderOption={({ ...otherProps }) => {
						return (
							<CustomSelectOption
								{...otherProps}
							/>
						);
					}}
				/>
				</FormItem>
				<Header mode="primary" aside={<Icon28DonateCircleFillYellow />}>Ориентация</Header>
				<FormItem>
				<CustomSelect
					placeholder="Не выбрано"
					options={orientation}
					disabled
					renderOption={({ ...otherProps }) => {
						return (
							<CustomSelectOption
								{...otherProps}
							/>
						);
					}}
				/>
				</FormItem>
				<Header mode="primary" aside={<Icon28DonateCircleFillYellow />}>ВИЧ-статус</Header>
				<FormItem>
				<CustomSelect
					placeholder="Не выбрано"
					options={hiv_status}
					disabled
					renderOption={({ ...otherProps }) => {
						return (
							<CustomSelectOption
								{...otherProps}
							/>
						);
					}}
				/>
				</FormItem>
				<Header mode="primary" aside={<Icon28DonateCircleFillYellow />}>Только онлайн</Header>
				<AdaptivityProvider sizeY="compact">
					<Cell multiline after={<Switch disabled />}>
						Отображать только тех пользователей, который сейчас онлайн
					</Cell>
				</AdaptivityProvider>
				<Div>
					<Button
						stretched
						mode="commerce"
						size="m"
						onClick={() => goBack()}
					>
						Применить фильтры
					</Button>
					<Button
						onClick={this.openBaseWithAction}
						stretched
						mode="destructive"
						size="m"
						style={{marginTop: 10}}
					>
						Сбросить фильтры
					</Button>
				</Div>
				<Spacing separator={true} size={8} />
				<Header mode="primary" aside={<Link>Показать всех</Link>}>Новые пользователи</Header>
				<HorizontalScroll>
					<div style={{display: 'flex'}}>
						<HorizontalCell
							size='s'
							header={<div className="name-people">Александр</div>}
						>
							<Avatar
								mode="app"
								size={60}
								style={{objectFit: "cover"}}
								src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album"
							/>
						</HorizontalCell>
						<HorizontalCell
							size='s'
							header={<div className="name-people">Савелий</div>}
						>
							<Avatar
								mode="app"
								size={60}
								style={{objectFit: "cover"}}
								src="https://image.flaticon.com/icons/png/512/2644/2644746.png"
							/>
						</HorizontalCell>
						<HorizontalCell
							size='s'
							header={<div className="name-people">Артём</div>}
						>
							<Avatar
								mode="app"
								size={60}
								style={{objectFit: "cover"}}
								src="https://sun9-18.userapi.com/impg/iCu0lPqTMBqw1c2aV9Ra5OiYd9Ki3yamQVkTfw/5Mw6yCkWOnU.jpg?size=1201x1600&quality=96&sign=7dfe1cea7dfe8b88f5a617790320848c&type=album"
							/>
						</HorizontalCell>
						<HorizontalCell
							size='s'
							header={<div className="name-people">Константин</div>}
						>
							<Avatar
								mode="app"
								size={60}
								style={{objectFit: "cover"}}
								src=""
							/>
						</HorizontalCell>
						<HorizontalCell
							size='s'
							header={<div className="name-people">Кирилл</div>}
						>
							<Avatar
								mode="app"
								size={60}
								style={{objectFit: "cover"}}
								src=""
							/>
						</HorizontalCell>
						<HorizontalCell
							size='s'
							header={<div className="name-people">Павел</div>}
						>
							<Avatar
								mode="app"
								size={60}
								style={{objectFit: "cover"}}
								src=""
							/>
						</HorizontalCell>
					</div>
        </HorizontalScroll>
				<Spacing separator={true} size={8} />
				<Header mode="primary" aside={<Link>Показать всех</Link>}>Кто смотрел тебя</Header>
				<HorizontalScroll>
					<div style={{display: 'flex'}}>
						<HorizontalCell
							size='s'
							header={<div className="name-people">Александр</div>}
						>
							<Avatar
								mode="app"
								size={60}
								style={{objectFit: "cover"}}
								src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album"
							/>
						</HorizontalCell>
						<HorizontalCell
							size='s'
							header={<div className="name-people">Савелий</div>}
						>
							<Avatar
								mode="app"
								size={60}
								style={{objectFit: "cover"}}
								src="https://image.flaticon.com/icons/png/512/2644/2644746.png"
							/>
						</HorizontalCell>
						<HorizontalCell
							size='s'
							header={<div className="name-people">Артём</div>}
						>
							<Avatar
								mode="app"
								size={60}
								style={{objectFit: "cover"}}
								src="https://sun9-18.userapi.com/impg/iCu0lPqTMBqw1c2aV9Ra5OiYd9Ki3yamQVkTfw/5Mw6yCkWOnU.jpg?size=1201x1600&quality=96&sign=7dfe1cea7dfe8b88f5a617790320848c&type=album"
							/>
						</HorizontalCell>
						<HorizontalCell
							size='s'
							header={<div className="name-people">Константин</div>}
						>
							<Avatar
								mode="app"
								size={60}
								style={{objectFit: "cover"}}
								src=""
							/>
						</HorizontalCell>
						<HorizontalCell
							size='s'
							header={<div className="name-people">Кирилл</div>}
						>
							<Avatar
								mode="app"
								size={60}
								style={{objectFit: "cover"}}
								src=""
							/>
						</HorizontalCell>
						<HorizontalCell
							size='s'
							header={<div className="name-people">Павел</div>}
						>
							<Avatar
								mode="app"
								size={60}
								style={{objectFit: "cover"}}
								src=""
							/>
						</HorizontalCell>
					</div>
				</HorizontalScroll>
				<Spacing separator={true} size={8} />
				<Header mode="primary" aside={<Link>Показать все</Link>}>Популярные хэштеги</Header>
				<Div>
					#1
				</Div>
				<Div>
					#2
				</Div>
				<Div>
					#3
				</Div>
				<Div>
					#4
				</Div>
				<Div>
					#5
				</Div>
			</Group>
			{this.state.snackbar}
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

export default connect(null, mapDispatchToProps)(FilterPanel);