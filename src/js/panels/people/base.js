import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout} from "../../store/router/actions";

import {
	Header,
	Panel,
	PanelHeader,
	PanelHeaderButton,
	Search,
	Spacing,
	Link,
	HorizontalCell,
	HorizontalScroll,
	Avatar,
	Group,
	VKCOM,
	SplitLayout,
	SplitCol,
	Div,
	MiniInfoCell,
	Title,
	Text,
	Button,
	Tappable,
	SimpleCell,
	IconButton
} from "@vkontakte/vkui";

import queryGet from '../../../functions/query_get.jsx';

import bridge from '@vkontakte/vk-bridge';

import {
	Icon20Info,
	Icon24Filter,
	Icon28AllCategoriesOutline,
	Icon28CancelOutline,
	Icon28DoneOutline,
	Icon28NarrativeOutline,
	Icon20ArticleOutline, 
	Icon20Search,
	Icon20PlaceOutline,
	Icon20UserOutline,
	Icon20LikeOutline,
	Icon20VirusOutline,
	Icon20UsersOutline,
	Icon28HashtagOutline,
	Icon24UserAddOutline,
	Icon24MessageOutline,
	Icon24GiftOutline,
	Icon12Verified,
	Icon28SlidersOutline,
	Icon48SwipeUp
} from '@vkontakte/icons';

class PeoplePanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
					activeTab: 'profiles'
        };
    }

    render() {
        const {id, setPage, platform} = this.props;
				const { isDesktop } = this.state

        return (
            <Panel id={id}>
            {this.state.activeTab === "profiles" ?<div>
							<PanelHeader
								separator={false}
								left={<PanelHeaderButton label={platform === VKCOM ? 'Карточки' : undefined} onClick={() => this.setState({ activeTab: 'cards' })} selected={this.state.activeTab === 'cards'}><Icon28NarrativeOutline/></PanelHeaderButton>}
							>
								Люди
							</PanelHeader>
							<Group>
							<Search 
								icon={<Icon24Filter onClick={() => setPage('people', 'filter')} />}
							/>
							<Header mode="primary" aside={<Link>Хочу сюда</Link>}>Топ пользователи</Header>
							<HorizontalScroll
								showArrows
                getScrollToLeft={(i) => i - 120}
                getScrollToRight={(i) => i + 120}
							>
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
							</Group>
							<Group>
							<div className="people-block">
								<div>
									<Avatar mode='app' size={100} badge="online-mobile" className="img-people-block" src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
									<div className="text-people-block">Александр</div>
								</div>
								<div>
									<img className="img-people-block" src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
									<div className="text-people-block">Артём</div>
								</div>
								<div>
									<img className="img-people-block" src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
									<div className="text-people-block">Савелий</div>
								</div>
								<div>
									<img className="img-people-block" src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
									<div className="text-people-block">Михаил</div>
								</div>
								<div>
									<img className="img-people-block" src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
									<div className="text-people-block">Иван</div>
								</div>
								<div>
									<img className="img-people-block" src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
									<div className="text-people-block">Сергей</div>
								</div>
								<div>
									<img className="img-people-block" src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
									<div className="text-people-block">Александр</div>
								</div>
								<div>
									<img className="img-people-block" src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
									<div className="text-people-block">Артём</div>
								</div>
								<div>
									<img className="img-people-block" src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
									<div className="text-people-block">Савелий</div>
								</div>
								<div>
									<img className="img-people-block" src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
									<div className="text-people-block">Михаил</div>
								</div>
								<div>
									<img className="img-people-block" src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
									<div className="text-people-block">Иван</div>
								</div>
								<div>
									<img className="img-people-block" src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
									<div className="text-people-block">Сергей</div>
								</div>
							</div>
							</Group>
							</div> :null}
							{this.state.activeTab === "cards" ?<div>
							<PanelHeader
								separator={false}
								left={<PanelHeaderButton label={platform === VKCOM ? 'Профили' : undefined} onClick={() => this.setState({ activeTab: 'profiles' })} selected={this.state.activeTab === 'profiles'}><Icon28AllCategoriesOutline/></PanelHeaderButton>}
							>
								Люди
							</PanelHeader>
						{/*Для всех остальных устройств */}
						{
							(queryGet('vk_platform') === 'mobile_android'
							|| queryGet('vk_platform') === 'mobile_iphone'
							|| queryGet('vk_platform') === 'mobile_ipad'
							|| queryGet('vk_platform') === 'mobile_android_messenger'
							|| queryGet('vk_platform') === 'mobile_iphone_messenger'
							|| queryGet('vk_platform') === 'mobile_web') && (
								<div>
									<div className="block-card-people">
										<img src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" className="card-people" />
										<div onClick={() => setPage('people', 'filter')} className="button-filter-card-people"><Icon28SlidersOutline style={{margin: "auto", marginTop: 10, color: "#FFFFFF"}} /></div>
										<div className="button-done-card-people"><Icon28DoneOutline style={{margin: "auto", marginTop: 10, color: "#FFFFFF"}} /></div>
										<div className="button-dismiss-card-people"><Icon28CancelOutline style={{margin: "auto", marginTop: 10, color: "#FFFFFF"}} /></div>
										<div className="buttonSwipeUpCardPeople"><Icon48SwipeUp width={70} height={48}/></div>
									</div>
									<div>
									<SimpleCell
										style={{marginTop: "10px"}}
										badge={<Icon12Verified />}
										after={<IconButton><Icon24MessageOutline width={30} height={30} /></IconButton>}
										description={<Text style={{color: "var(--text_secondary)"}}>80 м · 22 года</Text>}
										disabled
									>
										<Title level="2" weight="bold">Александр Тихонович</Title>
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
									<div style={{margin: "0px 12px"}}>
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
									</div>
									</div>
									</div>
								</div>
							)
						}
						{/*Для ПК */}
						{
							(queryGet('vk_platform') === 'desktop_web') && (
						/*<div>
							<SplitLayout>
								<SplitCol width={'100px'}>
									<div className="block-card-people">
										<img src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" className="card-people" />
										<div onClick={() => setPage('people', 'filter')} className="button-filter-card-people"><Icon28SlidersOutline style={{margin: "auto", marginTop: 10, color: "#FFFFFF"}} /></div>
										<div className="button-done-card-people"><Icon28DoneOutline style={{margin: "auto", marginTop: 10, color: "#FFFFFF"}} /></div>
										<div className="button-dismiss-card-people"><Icon28CancelOutline style={{margin: "auto", marginTop: 10, color: "#FFFFFF"}} /></div>
									</div>
								</SplitCol>
								<SplitCol>
								<Group>
									<div className="groupBlockCardPeople">
									<Div>
										<Title level="2" weight="bold">Александр Тихонович</Title>
										<Text style={{color: "var(--text_secondary)"}}>80 м · 22 года</Text>
									</Div>
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
									<Div>
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
									</Div>
									</div>
								</Group>
								</SplitCol>
							</SplitLayout>
						</div> */
						<div style={{display: "flex"}}>
							<div className="blockImgCardPeople">
								<div className="popoutBlockCardPeople">
									<div className="blockCardPopoutBlockCardPeople">
										<div style={{position: "relative"}}>
											<div className="leftCardPopoutBlockCardPeople" />
											<div className="swipeLeftCardPopoutBlockCardPeople" />
											<div className="krugSwipeLeftCardPopoutBlockCardPeople" />
										</div>
										<div style={{position: "relative"}}>
											<div className="rightCardPopoutBlockCardPeople" />
											<div className="swipeRightCardPopoutBlockCardPeople" />
											<div className="krugSwipeRightCardPopoutBlockCardPeople" />
										</div>
									</div>
									<div className="textCardPopoutBlockCardPeople">Свайпай профили пользователей, чтобы начать общаться</div>
								</div>
								<img className="imgCardPeople" src="https://sun9-38.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
								<div onClick={() => setPage('people', 'filter')} className="buttonFilterCardPeople"><Icon28SlidersOutline style={{margin: "auto", marginTop: 10, color: "#FFFFFF"}} /></div>
							</div>
							<div className="blockInfoCardPeople">
								<Group>
										<div style={{textAlign: "center", marginTop: "16px"}}><b>Александр Тихонович</b></div>
										<div style={{textAlign: "center", color: "var(--text_secondary)"}}>80 м · 22 года</div>
									<div style={{display: "flex", marginTop: 12, marginBottom: 12}}>
										<Button
											stretched size="m"
											style={{marginLeft: 12}}
											before={<Icon24UserAddOutline />}
										>
											Подписаться
										</Button>
										<Button
											mode="secondary"
											stretched size="m"
											style={{marginLeft: 5, marginRight: 5}}
											before={<Icon24MessageOutline />}
										/>
										<Button
											mode="secondary"
											stretched size="m"
											style={{marginRight: 12}}
											before={<Icon24GiftOutline />}
										/>
									</div>
									<Spacing separator="center" />
									<div style={{display: "flex", justifyContent: "space-around", marginTop: 10}}>
										<Tappable style={{textAlign: "center", width: "calc(100%/3)", padding: 10}}>
											<div style={{fontWeight: "500"}}>7502</div>
											<div style={{fontSize: "14px", color: "var(--text_secondary)"}}>подписчики</div>
										</Tappable>
										<Tappable style={{textAlign: "center", width: "calc(100%/3)", padding: 10}}>
											<div style={{fontWeight: "500"}}>249</div>
											<div style={{fontSize: "14px", color: "var(--text_secondary)"}}>подписки</div>
										</Tappable>
										<Tappable style={{textAlign: "center", width: "calc(100%/3)", padding: 10}}>
											<div style={{fontWeight: "500"}}>127</div>
											<div style={{fontSize: "14px", color: "var(--text_secondary)"}}>подарки</div>
										</Tappable>
									</div>
								</Group>
								<Group>
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
										<Link style={{textAlign: "left"}}>#kiss #fetish #dogplay #gaymer</Link>
									</MiniInfoCell>
									<MiniInfoCell
										before={<Icon20Info />}
										mode="more"
									>
										Подробная информация
									</MiniInfoCell>
								</Group>
							</div>
						</div>
							)
						}
					</div> :null}
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage,
    openPopout,
    closePopout
};

export default connect(null, mapDispatchToProps)(PeoplePanel);