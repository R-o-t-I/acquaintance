import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout} from "../../store/router/actions";

import {
    Panel,
    PanelHeader,
    Div,
    Group,
    CellButton,
	PanelHeaderButton,
	PanelHeaderContent,
	PanelHeaderContext,
	List,
	Gallery,
	Text,
	Title,
	Placeholder,
	MiniInfoCell,
	Button,
	Tappable,
	Tabs,
	TabsItem,
	SimpleCell,
	Avatar,
	IconButton,
	Link,
	RichCell,
	Header,
	Spacing,
	VKCOM,
	platform,
	Snackbar
} from "@vkontakte/vkui";
import {
    Icon28SchoolOutline,
    Icon28AddOutline,
	Icon28SettingsOutline,
	Icon16Dropdown,
	Icon24Done,
	Icon28LogoVk,
	Icon28CopyOutline,
	Icon28ShareOutline,
	Icon28ReportOutline,
	Icon28BlockOutline,
	Icon20ArticleOutline, 
	Icon20Search,
	Icon56LockOutline,
	Icon20PlaceOutline,
	Icon20UserOutline,
	Icon20LikeOutline,
	Icon20AccessibilityOutline,
	Icon20VirusOutline,
	Icon20UsersOutline,
	Icon28HashtagOutline,
	Icon24UserAddOutline,
	Icon24MessageOutline,
	Icon24GiftOutline,
	Icon12Verified,
	Icon28LikeOutline,
	Icon28CommentOutline,
	Icon28GiftOutline,
	Icon28MoreVertical,
	Icon28EditOutline,
	Icon12ChevronOutline,
	Icon16Done
} from '@vkontakte/icons';

import bridge from '@vkontakte/vk-bridge';

import queryGet from '../../../functions/query_get.jsx';

var infouser = 0
var first_name = 'Загрузка...'
var last_name
var user_id
var photo

class ProfilePanel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			first_name: first_name,
			last_name: last_name,
			user_id: user_id,
			photo: photo,
			mode: 'all',
			activeTab: 'allPost'
		};
		this.toggleContext = this.toggleContext.bind(this);
	}
	
	toggleContext () {
		this.setState({ contextOpened: !this.state.contextOpened });
	}

	componentDidMount() {
		if (infouser === 0) {
			this.getInfoUser();
		}
	}

	async getInfoUser() {
		//this.props.openPopout(<ScreenSpinner/>)

		let user_info = await bridge.send('VKWebAppGetUserInfo');
		first_name = user_info.first_name
		last_name = user_info.last_name
		photo = user_info.photo_200
		user_id = user_info.id
		this.setState({ 
			first_name: first_name,
			last_name: last_name,
			user_id: user_id,
			photo: photo,
		});
		infouser = 1

		this.props.closePopout()

	}

	openSnackbar () {
		this.props.openPopout(
			<Snackbar
				onClose={() => this.props.closePopout()}
				before={<Avatar size={24} style={{ background: 'var(--accent)' }}><Icon16Done fill="#fff" width={14} height={14} /></Avatar>}
				action={<div onClose={() => this.props.closePopout()}>ОК</div>}
			>
				Доступ к фото запрошен
			</Snackbar>
		);
	}

	render() {
		const {id, platform, setPage} = this.props;
		const {photo, first_name, last_name, user_id} = this.state;

		return (
			<Panel id={id}>
				{/*Для ПК */}
				{
					(queryGet('vk_platform') === 'desktop_web') && (
					<PanelHeader
						right={
							<PanelHeaderButton
								aria-label="Настройки"
								onClick={() => setPage('profile', 'settings')}
							>
								<Icon28SettingsOutline />
							</PanelHeaderButton>
						}
						separator={false}
						aria-label="Профиль пользователя @Alexander"
					>
						<PanelHeaderContent
							aside={<Icon16Dropdown style={{ transform: `rotate(${this.state.contextOpened ? '180deg' : '0'})` }} />}
							onClick={this.toggleContext}
						>
							@Alexander
						</PanelHeaderContent>
					</PanelHeader>
					)
				}
				{/*Для всех остальных устройств */}
				{
					(queryGet('vk_platform') === 'mobile_android'
					|| queryGet('vk_platform') === 'mobile_iphone'
					|| queryGet('vk_platform') === 'mobile_android_messenger'
					|| queryGet('vk_platform') === 'mobile_iphone_messenger'
					|| queryGet('vk_platform') === 'mobile_web') && (
						<PanelHeader
							left={
								<PanelHeaderButton
									aria-label="Настройки"
									onClick={() => setPage('profile', 'settings')}
								>
									<Icon28SettingsOutline />
								</PanelHeaderButton>
							}
							separator={false}
							aria-label="Профиль пользователя @Alexander"
						>
							<PanelHeaderContent
								aside={<Icon16Dropdown style={{ transform: `rotate(${this.state.contextOpened ? '180deg' : '0'})` }} />}
								onClick={this.toggleContext}
							>
								@Alexander
							</PanelHeaderContent>
						</PanelHeader>
					)
				}
				<PanelHeaderContext opened={this.state.contextOpened} onClose={this.toggleContext}>
					<List>
						<CellButton 
							before={<Icon28LogoVk />}
							multiline
							href={`https://vk.com/id${user_id}`} 
							target='_blank' 
						>
							Перейти в профиль VK
						</CellButton >
						<CellButton
							before={<Icon28CopyOutline />}
							multiline
						>
							Копировать id профля
						</CellButton >
						<CellButton 
							before={<Icon28ShareOutline />}
							multiline
						>
							Поделиться профилем
						</CellButton >
						{/*<CellButton 
							before={<Icon28BlockOutline />}
							multiline
							mode="danger"
						>
							Заблокировать пользователя
						</CellButton >
						<CellButton 
							before={<Icon28ReportOutline />}
							multiline
							mode="danger"
						>
							Пожаловаться
						</CellButton >*/}
					</List>
				</PanelHeaderContext>
				{/*Для ПК */}
				{
					(queryGet('vk_platform') === 'desktop_web') && (
						<div style={{display: "flex"}}>
							<Group style={{marginTop: 10}}>
								<Gallery
									slideWidth="100%"
									style={{ height: 300, width: 300, borderRadius: "8px 8px 0px 0px" }}
									bullets="light"
									showArrows
								>
									<img src={photo} />
									<div style={{ backgroundColor: 'var(--button_commerce_background)' }} />
									<div style={{ backgroundColor: 'var(--accent)' }} />
									{/*У другого профиля*/}
									{/*<Placeholder
										icon={<Icon56LockOutline />}
										header="Фото скрыто"
										action={<Button onClick={() => this.openSnackbar()} size="m">Запросить доступ</Button>}
									>
										Запрсите у @Alexander доступ к фото, чтобы посмотреть его
									</Placeholder>*/}
								</Gallery>
								<div style={{textAlign: "center", marginTop: 10}}>
									<Title level="2" weight="bold">{first_name} {last_name}</Title>
									<Text style={{color: "var(--text_secondary)"}}>80 м · 22 года</Text>
								</div>
								{/*У своего профиля*/}
								<div style={{display: "flex"}}>
									<Button
										stretched size="l"
										style={{marginTop: 10}}
										before={<Icon28EditOutline width={24} height={24} />}
										mode="outline"
										onClick={() => setPage('profile', 'editProfile')}
									>
										Редактировать информацию
									</Button>
								</div>
								{/*У другого профиля*/}
								{/*<div style={{display: "flex"}}>
									<Button
										stretched size="l"
										style={{marginTop: 10}}
										before={<Icon24UserAddOutline />}
									>
										Подписаться
									</Button>
									<Button
										mode="secondary"
										stretched size="l"
										style={{marginLeft: 5, marginRight: 5, marginTop: 10}}
										before={<Icon24MessageOutline />}
									/>
									<Button
										mode="secondary"
										stretched size="l"
										style={{marginTop: 10}}
										before={<Icon24GiftOutline />}
									/>
								</div>*/}
								<div style={{display: "flex", justifyContent: "space-around", marginTop: 10}}>
									<Tappable style={{textAlign: "center", width: "calc(100%/3)", padding: 10}}>
										<div style={{fontWeight: "500"}}>7502</div>
										<div style={{color: "var(--text_secondary)"}}>Подписчики</div>
									</Tappable>
									<Tappable style={{textAlign: "center", width: "calc(100%/3)", padding: 10}}>
										<div style={{fontWeight: "500"}}>249</div>
										<div style={{color: "var(--text_secondary)"}}>Подписки</div>
									</Tappable>
									<Tappable style={{textAlign: "center", width: "calc(100%/3)", padding: 10}}>
										<div style={{fontWeight: "500"}}>127</div>
										<div style={{color: "var(--text_secondary)"}}>Подарки</div>
									</Tappable>
								</div>
							</Group>
							<Group style={{width: "100%", marginLeft: 5, marginTop: 10}}>
								<div style={{marginLeft: 5, marginRight: 5}}>
								<Header style={{margin: "-15px -15px"}}><Title label="3" weight="bold">Информация</Title></Header>
									<MiniInfoCell
										before={<Icon20ArticleOutline />}
										textWrap="short"
										textLevel="primary"
										style={{marginLeft: "-15px", marginRight: "-15px"}}
									>
										ВКонтакте начинался как сайт для выпускников вузов, а сейчас это огромная экосистема с безграничными возможностями и миллионами пользователей.
									</MiniInfoCell>
									<MiniInfoCell
										before={<Icon20Search />}
										textWrap="short"
										textLevel="primary"
										style={{marginLeft: "-15px", marginRight: "-15px"}}
									>
										Отношениея · Дружба · Свидания · Общение в сети
									</MiniInfoCell>
									<MiniInfoCell
										before={<Icon20PlaceOutline />}
										textWrap="short"
										textLevel="primary"
										style={{marginLeft: "-15px", marginRight: "-15px"}}
									>
										Минск
									</MiniInfoCell>
									<MiniInfoCell
										before={<Icon20UserOutline />}
										textWrap="short"
										textLevel="primary"
										style={{marginLeft: "-15px", marginRight: "-15px"}}
									>
										Белый · 175см · 55 кг
									</MiniInfoCell>
									<MiniInfoCell
										before={<Icon20LikeOutline />}
										textWrap="short"
										textLevel="primary"
										style={{marginLeft: "-15px", marginRight: "-15px"}}
									>
										В отношениях
									</MiniInfoCell>
									<MiniInfoCell
										before={<Icon20VirusOutline />}
										textWrap="short"
										textLevel="primary"
										style={{marginLeft: "-15px", marginRight: "-15px"}}
									>
										Отрицательный · 30 октября 2021г.
									</MiniInfoCell>
									<MiniInfoCell
										before={<Icon20UsersOutline />}
										textWrap="short"
										textLevel="primary"
										style={{marginLeft: "-15px", marginRight: "-15px"}}
									>
										Гей · Уни
									</MiniInfoCell>
									<MiniInfoCell
										before={<Icon28HashtagOutline width={20} height={20} />}
										textWrap="short"
										textLevel="primary"
										style={{marginLeft: "-15px", marginRight: "-15px"}}
									>
										#Kiss #fetish #dogplay #gaymer
									</MiniInfoCell>
									<Header style={{margin: "-10px -15px"}} aside={<Link>Показать все <Icon12ChevronOutline /></Link>}><Title label="3" weight="bold">Скрытые фото</Title></Header>
									<div style={{display: "flex", justifyContent: "space-around"}}>
										<img style={{width: 80, height: 80, objectFit: "cover", borderRadius: 8}} src="https://img1.akspic.ru/previews/1/3/0/5/4/145031/145031-glaz-krug-rozovyj-resnichka-graficeskij_dizajn-500x.jpg" />
										<img style={{width: 80, height: 80, objectFit: "cover", borderRadius: 8}} src="https://prikolnye-kartinki.ru/img/picture/Oct/08/81c41cca31756877c9a3ed12a9fdc77d/1.jpg" />
										<img style={{width: 80, height: 80, objectFit: "cover", borderRadius: 8}} src="https://prikolnye-kartinki.ru/img/picture/Oct/08/81c41cca31756877c9a3ed12a9fdc77d/1.jpg" />
										<img style={{width: 80, height: 80, objectFit: "cover", borderRadius: 8}} src="https://prikolnye-kartinki.ru/img/picture/Oct/08/81c41cca31756877c9a3ed12a9fdc77d/1.jpg" />
									</div>
								</div>
							</Group>
						</div>
					)
				}
				{/*Для всех остальных устройств */}
				{
					(queryGet('vk_platform') === 'mobile_android'
					|| queryGet('vk_platform') === 'mobile_iphone'
					|| queryGet('vk_platform') === 'mobile_android_messenger'
					|| queryGet('vk_platform') === 'mobile_iphone_messenger'
					|| queryGet('vk_platform') === 'mobile_web') && (
						<div>
							<div style={{position: "relative"}}>
								<Gallery
									slideWidth="100%"
									className="gallery-profile"
									bullets="light"
									showArrows
								>
									<img className="img-gallery-profile" onClick={this.img} style={{ objectFit: "cover" }} src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
									<img onClick={this.img} style={{ objectFit: "cover" }} src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
									<img onClick={this.img} style={{ objectFit: "cover" }} src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
									{/*У другого профиля*/}
									{/*<Placeholder
										icon={<Icon56LockOutline />}
										header="Фото скрыто"
										action={<Button onClick={() => this.openSnackbar()} size="m">Запросить доступ</Button>}
									>
										Запрсите у @Alexander доступ к фото, чтобы посмотреть его
									</Placeholder>*/}
								</Gallery>
								<div className="block-profile-img"></div>
							</div>
							<SimpleCell
								className="block-avatar-profile"
								before={<Avatar size={72} mode="app" src={photo} />}
								badge={<Icon12Verified />}
								// для другого профиля
								//after={<IconButton><Icon24MessageOutline width={30} height={30} /></IconButton>}
								description={<Text style={{color: "var(--text_secondary)"}}>80 м · 22 года</Text>}
								disabled
							>
								<Title level="2" weight="bold">{first_name} {last_name}</Title>
							</SimpleCell>
							{/*У своего профиля*/}
							<Div style={{display: "flex"}}>
								<Button
									stretched
									size="m"
									before={<Icon28EditOutline width={24} height={24} />}
									mode="outline"
									onClick={() => setPage('profile', 'editProfile')}
								>
									Редактировать информацию
								</Button>
							</Div>
							{/*У другого профиля*/}
							{/*
							<Div style={{display: "flex"}}>
								<Button
									stretched
									size="m"
									before={<Icon24UserAddOutline />}
									style={{marginRight: 8}}
								>
									Подписаться
								</Button>
								<Button
									mode="secondary"
									stretched
									size="m"
									before={<Icon24GiftOutline />}
								>
									Подарок
								</Button>
							</Div>
							*/}
							<Div className="block-info-profile">
								<Tappable className="position-info-profile">
									<div className="text-info-profile-1">
										45
									</div>
									<div className="text-info-profile-2">
										подписчики
									</div>
								</Tappable>
								<Tappable className="position-info-profile">
									<div className="text-info-profile-1">
										14
									</div>
									<div className="text-info-profile-2">
										подписки
									</div>
								</Tappable>
								<Tappable className="position-info-profile">
									<div className="text-info-profile-1">
										54
									</div>
									<div className="text-info-profile-2">
										подарки
									</div>
								</Tappable>
							</Div>
							<Spacing separator="center" />
							<div>
								<Header mode="primary">Информация</Header>
								<MiniInfoCell
									before={<Icon20ArticleOutline />}
									textWrap="short"
									textLevel="primary"
								>
									ВКонтакте начинался как сайт для выпускников вузов, а сейчас это огромная экосистема с безграничными возможностями и миллионами пользователей.
								</MiniInfoCell>
								<MiniInfoCell
									before={<Icon20Search />}
									textWrap="short"
									textLevel="primary"
								>
									Отношениея · Дружба · Свидания · Общение в сети
								</MiniInfoCell>
								<MiniInfoCell
									before={<Icon20PlaceOutline />}
									textWrap="short"
									textLevel="primary"
								>
									Минск
								</MiniInfoCell>
								<MiniInfoCell
									before={<Icon20UserOutline />}
									textWrap="short"
									textLevel="primary"
								>
									Белый · 175см · 55 кг
								</MiniInfoCell>
								<MiniInfoCell
									before={<Icon20LikeOutline />}
									textWrap="short"
									textLevel="primary"
								>
									В отношениях
								</MiniInfoCell>
								<MiniInfoCell
									before={<Icon20VirusOutline />}
									textWrap="short"
									textLevel="primary"
								>
									Отрицательный · 30 октября 2021г.
								</MiniInfoCell>
								<MiniInfoCell
									before={<Icon20UsersOutline />}
									textWrap="short"
									textLevel="primary"
								>
									Гей · Уни
								</MiniInfoCell>
								<MiniInfoCell
									before={<Icon28HashtagOutline width={20} height={20} />}
									textWrap="short"
									textLevel="primary"
								>
									#Kiss #fetish #dogplay #gaymer
								</MiniInfoCell>
								<Spacing separator="center" />
								<Header mode="primary" aside={<Link>Показать все</Link>}>Скрытые фото</Header>
								<Div style={{display: "flex", justifyContent: "space-around"}}>
									<img style={{width: 70, height: 70, objectFit: "cover", borderRadius: 8}} src="https://img1.akspic.ru/previews/1/3/0/5/4/145031/145031-glaz-krug-rozovyj-resnichka-graficeskij_dizajn-500x.jpg" />
									<img style={{width: 70, height: 70, objectFit: "cover", borderRadius: 8}} src="https://prikolnye-kartinki.ru/img/picture/Oct/08/81c41cca31756877c9a3ed12a9fdc77d/1.jpg" />
									<img style={{width: 70, height: 70, objectFit: "cover", borderRadius: 8}} src="https://prikolnye-kartinki.ru/img/picture/Oct/08/81c41cca31756877c9a3ed12a9fdc77d/1.jpg" />
									<img style={{width: 70, height: 70, objectFit: "cover", borderRadius: 8}} src="https://prikolnye-kartinki.ru/img/picture/Oct/08/81c41cca31756877c9a3ed12a9fdc77d/1.jpg" />
								</Div>
								<Spacing separator="center" />
							</div>
						</div>
					)
				}
				{this.state.activeTab === "allPost" ? <div>
				<Group>
					<Tabs>
						<TabsItem
							onClick={() => this.setState({ activeTab: 'allPost' })}
							selected={this.state.activeTab === 'allPost'}
						>
							Все записи
						</TabsItem>
						<TabsItem
							onClick={() => this.setState({ activeTab: 'iPost' })}
							selected={this.state.activeTab === 'iPost'}
						>
							Мои записи
						</TabsItem>
					</Tabs>
					<Spacing separator="top" />
					<div>
						<SimpleCell 
							before={<Avatar size={48} src="" />}
							badge={<Icon12Verified />}
							after={<IconButton><Icon28MoreVertical /></IconButton>}
							description="вчера в 19:35"
							onClick={() => setPage('profile', 'userProfile')}
						>
							Артём Петрунин
						</SimpleCell>
						<Div>Всем привет!</Div>
						<div className="allBlockIconPost">
							<div style={{display: "flex"}}>
								<Tappable className="blockIconPost">
									<Icon28LikeOutline style={{color: "var(--icon_outline_secondary)", marginTop: "5px", marginBottom: "5px", marginLeft: "10px", marginRight: "5px"}} />
									<div className="indicatorblockIconPost">11</div>
								</Tappable>
								<Tappable style={{marginLeft: "10px"}} className="blockIconPost">
									<Icon28CommentOutline style={{color: "var(--icon_outline_secondary)", marginTop: "5px", marginBottom: "5px", marginLeft: "10px", marginRight: "5px"}} />
									<div className="indicatorblockIconPost">11</div>
								</Tappable>
							</div>
							<Tappable className="blockIconPost" style={{marginLeft: 10}}>
								<Icon28GiftOutline style={{color: "var(--icon_outline_secondary)", marginTop: "5px", marginBottom: "5px", marginLeft: "10px", marginRight: "5px"}} />
								<div onClick={() => setPage('home', 'gifts')} className="indicatorblockIconPost">Подарок</div>
							</Tappable>
						</div>
					</div>
				</Group>
				<Group>
					<div>
						<SimpleCell 
							before={<Avatar size={48} src="" />}
							badge={<Icon12Verified />}
							after={<IconButton><Icon28MoreVertical /></IconButton>}
							description="вчера в 15:12"
						>
							Александр Тихонович
						</SimpleCell>
						<Div>Всем привет! Мой первый пост. Как вам этот закат? Пишите комментарии, ставьте лайки. <Link>#Закат</Link> <Link>@VK</Link></Div>
						<Div><img onClick={this.openImg} className="imgPost" src="https://img2.akspic.ru/originals/1/7/1/5/6/165171-zemlya-oblako-atmosfera-poslesvechenie-zakat-1080x1920.jpg" /></Div>
						<div className="allBlockIconPost">
							<div style={{display: "flex"}}>
								<Tappable className="blockIconPost">
									<Icon28LikeOutline style={{color: "var(--icon_outline_secondary)", marginTop: "5px", marginBottom: "5px", marginLeft: "10px", marginRight: "5px"}} />
									<div className="indicatorblockIconPost">11</div>
								</Tappable>
								<Tappable style={{marginLeft: "10px"}} className="blockIconPost">
									<Icon28CommentOutline style={{color: "var(--icon_outline_secondary)", marginTop: "5px", marginBottom: "5px", marginLeft: "10px", marginRight: "5px"}} />
									<div className="indicatorblockIconPost">11</div>
								</Tappable>
							</div>
							<Tappable className="blockIconPost" style={{marginLeft: 10}}>
								<Icon28GiftOutline style={{color: "var(--icon_outline_secondary)", marginTop: "5px", marginBottom: "5px", marginLeft: "10px", marginRight: "5px"}} />
								<div onClick={() => setPage('home', 'gifts')} className="indicatorblockIconPost">Подарок</div>
							</Tappable>
						</div>
					</div>
				</Group>
				</div> : null}
				{this.state.activeTab === "iPost" ? <div>
				<Group>
					<Tabs>
						<TabsItem
							onClick={() => this.setState({ activeTab: 'allPost' })}
							selected={this.state.activeTab === 'allPost'}
						>
							Все записи
						</TabsItem>
						<TabsItem
							onClick={() => this.setState({ activeTab: 'iPost' })}
							selected={this.state.activeTab === 'iPost'}
						>
							Мои записи
						</TabsItem>
					</Tabs>
					<Spacing separator="top" />
					<div>
						<SimpleCell 
							before={<Avatar size={48} src="" />}
							badge={<Icon12Verified />}
							after={<IconButton><Icon28MoreVertical /></IconButton>}
							description="вчера в 15:12"
						>
							Александр Тихонович
						</SimpleCell>
						<Div>Всем привет! Мой первый пост. Как вам этот закат? Пишите комментарии, ставьте лайки. <Link>#Закат</Link> <Link>@VK</Link></Div>
						<Div><img onClick={this.openImg} className="imgPost" src="https://img2.akspic.ru/originals/1/7/1/5/6/165171-zemlya-oblako-atmosfera-poslesvechenie-zakat-1080x1920.jpg" /></Div>
						<div className="allBlockIconPost">
							<div style={{display: "flex"}}>
								<Tappable className="blockIconPost">
									<Icon28LikeOutline style={{color: "var(--icon_outline_secondary)", marginTop: "5px", marginBottom: "5px", marginLeft: "10px", marginRight: "5px"}} />
									<div className="indicatorblockIconPost">11</div>
								</Tappable>
								<Tappable style={{marginLeft: "10px"}} className="blockIconPost">
									<Icon28CommentOutline style={{color: "var(--icon_outline_secondary)", marginTop: "5px", marginBottom: "5px", marginLeft: "10px", marginRight: "5px"}} />
									<div className="indicatorblockIconPost">11</div>
								</Tappable>
							</div>
							<Tappable className="blockIconPost" style={{marginLeft: 10}}>
								<Icon28GiftOutline style={{color: "var(--icon_outline_secondary)", marginTop: "5px", marginBottom: "5px", marginLeft: "10px", marginRight: "5px"}} />
								<div onClick={() => setPage('home', 'gifts')} className="indicatorblockIconPost">Подарок</div>
							</Tappable>
						</div>
					</div>
				</Group>
				</div> : null}
			</Panel>
		);
	}

}

const mapDispatchToProps = {
  setPage,
  openPopout,
  closePopout
};

export default connect(null, mapDispatchToProps)(ProfilePanel);