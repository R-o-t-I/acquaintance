import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout, goBack} from "../../store/router/actions";

import {
    Panel,
    PanelHeader,
    Div,
    Group,
    CellButton,
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
		Header,
		Spacing,
		VKCOM,
		Snackbar,
		PanelHeaderBack
} from "@vkontakte/vkui";

import {
		Icon16Dropdown,
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
		Icon12ChevronOutline,
		Icon16Done
} from '@vkontakte/icons';

import bridge from '@vkontakte/vk-bridge';

import queryGet from '../../../functions/query_get.jsx';

class UserProfilePanel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
				mode: 'all',
				activeTab: 'allPost'
		};
		this.toggleContext = this.toggleContext.bind(this);
	}
	
	toggleContext () {
		this.setState({ contextOpened: !this.state.contextOpened });
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
		const {id, platform, setPage, goBack} = this.props;

		return (
			<Panel id={id}>
				<PanelHeader
					left={<PanelHeaderBack onClick={() => goBack()} label={platform === VKCOM ? 'Назад' : undefined} />}
					separator={false}
					aria-label="Профиль пользователя @skgopnik"
				>
					<PanelHeaderContent
						aside={<Icon16Dropdown style={{ transform: `rotate(${this.state.contextOpened ? '180deg' : '0'})` }} />}
						onClick={this.toggleContext}
					>
						@skgopnik
					</PanelHeaderContent>
				</PanelHeader>
				<PanelHeaderContext className={platform === VKCOM ? 'panelHeaderPC' : undefined} opened={this.state.contextOpened} onClose={this.toggleContext}>
					<List>
						<CellButton 
							before={<Icon28LogoVk />}
							multiline
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
						<CellButton 
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
						</CellButton >
					</List>
				</PanelHeaderContext>
				{/*Для ПК */}
				{
					(queryGet('vk_platform') === 'desktop_web') && (
						<div style={{display: "flex"}}>
							<Group style={{marginTop: 10}}>
								<Gallery
									slideWidth="100%"
									style={{ height: 316, width: 316, borderRadius: "8px 8px 0px 0px" }}
									className="gallery"
									bullets="light"
									showArrows
								>
									<img style={{objectFit: "cover"}} src="https://sun9-61.userapi.com/impg/Uh2AlA6e_cswtjmOO_IVHJ0LhL3WxDUPPGjx1A/57_rE5bJkjA.jpg?size=453x604&quality=95&sign=6fd12c61ac91d70aaeea13faee160da5&type=album" />
									<img style={{objectFit: "cover"}} src="https://sun9-3.userapi.com/impg/sijemgHQpkinmNnxcUlKttjtXx5rr3hKSU60cA/pbz3hky7RlM.jpg?size=811x1080&quality=95&sign=9b142c4007a3200619ab1b09bacf4f08&type=album" />
									<img style={{objectFit: "cover"}} src="https://sun9-80.userapi.com/impg/iCu0lPqTMBqw1c2aV9Ra5OiYd9Ki3yamQVkTfw/5Mw6yCkWOnU.jpg?size=811x1080&quality=96&sign=5d331e3f20502fcc4afa1b967d953635&type=album" />
									<Placeholder
										icon={<Icon56LockOutline />}
										header="Фото скрыто"
										action={<Button onClick={() => this.openSnackbar()} size="m">Запросить доступ</Button>}
									>
										Запрсите у @skgopnik доступ к фото, чтобы посмотреть его
									</Placeholder>
								</Gallery>
								<div style={{textAlign: "center", marginTop: 10}}>
									<Title level="2" weight="bold">Артём Петрунин</Title>
									<Text style={{color: "var(--text_secondary)"}}>80 м · 22 года</Text>
								</div>
								<div style={{display: "flex"}}>
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
								</div>
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
										ВКонтакте начинался как сайт.
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
										Москва
									</MiniInfoCell>
									<MiniInfoCell
										before={<Icon20UserOutline />}
										textWrap="short"
										textLevel="primary"
										style={{marginLeft: "-15px", marginRight: "-15px"}}
									>
										Белый · 185см · 63 кг
									</MiniInfoCell>
									<MiniInfoCell
										before={<Icon20LikeOutline />}
										textWrap="short"
										textLevel="primary"
										style={{marginLeft: "-15px", marginRight: "-15px"}}
									>
										В активном поиске
									</MiniInfoCell>
									<MiniInfoCell
										before={<Icon20UsersOutline />}
										textWrap="short"
										textLevel="primary"
										style={{marginLeft: "-15px", marginRight: "-15px"}}
									>
										Натурал
									</MiniInfoCell>
									<MiniInfoCell
										before={<Icon28HashtagOutline width={20} height={20} />}
										textWrap="short"
										textLevel="primary"
										style={{marginLeft: "-15px", marginRight: "-15px"}}
									>
										#Kiss
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
									<img style={{objectFit: "cover"}} src="https://sun9-61.userapi.com/impg/Uh2AlA6e_cswtjmOO_IVHJ0LhL3WxDUPPGjx1A/57_rE5bJkjA.jpg?size=453x604&quality=95&sign=6fd12c61ac91d70aaeea13faee160da5&type=album" />
									<img style={{objectFit: "cover"}} src="https://sun9-3.userapi.com/impg/sijemgHQpkinmNnxcUlKttjtXx5rr3hKSU60cA/pbz3hky7RlM.jpg?size=811x1080&quality=95&sign=9b142c4007a3200619ab1b09bacf4f08&type=album" />
									<img style={{objectFit: "cover"}} src="https://sun9-80.userapi.com/impg/iCu0lPqTMBqw1c2aV9Ra5OiYd9Ki3yamQVkTfw/5Mw6yCkWOnU.jpg?size=811x1080&quality=96&sign=5d331e3f20502fcc4afa1b967d953635&type=album" />
									<Placeholder
										icon={<Icon56LockOutline />}
										header="Фото скрыто"
										action={<Button onClick={() => this.openSnackbar()} size="m">Запросить доступ</Button>}
									>
										Запрсите у @skgopnik доступ к фото, чтобы посмотреть его
									</Placeholder>
								</Gallery>
								<div className="block-profile-img"></div>
							</div>
							<SimpleCell
								className="block-avatar-profile"
								before={<Avatar size={72} mode="app" src="https://sun9-61.userapi.com/impg/Uh2AlA6e_cswtjmOO_IVHJ0LhL3WxDUPPGjx1A/57_rE5bJkjA.jpg?size=453x604&quality=95&sign=6fd12c61ac91d70aaeea13faee160da5&type=album" />}
								badge={<Icon12Verified />}
								after={<IconButton><Icon24MessageOutline width={30} height={30} /></IconButton>}
								description={<Text style={{color: "var(--text_secondary)"}}>80 м · 22 года</Text>}
								disabled
							>
								<Title level="2" weight="bold">Артём Петрунин</Title>
							</SimpleCell>
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
									ВКонтакте начинался как сайт.
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
									Москва
								</MiniInfoCell>
								<MiniInfoCell
									before={<Icon20UserOutline />}
									textWrap="short"
									textLevel="primary"
								>
									Белый · 185см · 64 кг
								</MiniInfoCell>
								<MiniInfoCell
									before={<Icon20LikeOutline />}
									textWrap="short"
									textLevel="primary"
								>
									В активном поиске
								</MiniInfoCell>
								<MiniInfoCell
									before={<Icon20UsersOutline />}
									textWrap="short"
									textLevel="primary"
								>
									Натурал
								</MiniInfoCell>
								<MiniInfoCell
									before={<Icon28HashtagOutline width={20} height={20} />}
									textWrap="short"
									textLevel="primary"
								>
									#Kiss
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
							Записи Артёма
						</TabsItem>
					</Tabs>
					<Spacing separator="top" />
					<div>
						<SimpleCell 
							before={<Avatar size={48} src="" />}
							badge={<Icon12Verified />}
							after={<IconButton><Icon28MoreVertical /></IconButton>}
							description="вчера в 19:35"
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
							Записи Артёма
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
  closePopout,
	goBack
};

export default connect(null, mapDispatchToProps)(UserProfilePanel);