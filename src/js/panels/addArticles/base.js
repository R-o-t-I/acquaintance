import React from 'react';
import {connect} from 'react-redux';

import {goBack, openModal, openPopout, closePopout} from "../../store/router/actions";

import queryGet from '../../../functions/query_get.jsx';

import {
  Panel,
  PanelHeader,
  Group,
  SubnavigationBar,
  SubnavigationButton,
  Title,
  Headline,
  FixedLayout,
  Separator,
  IconButton,
  HorizontalScroll,
	Tabs,
	TabsItem,
	Search,
	Cell,
	Placeholder,
	Div,
	Alert,
	Subhead,
	Link,
	FormLayout,
	FormItem,
	Input,
	Button,
	PanelHeaderContent,
	Avatar,
	Spacing,
	List
} from "@vkontakte/vkui";

import { Dropdown } from '@vkontakte/vkui/dist/unstable';

import {
  Icon24ArticleOutline,
  Icon28AddCircleOutline,
  Icon28ArrowUturnLeftOutline,
  Icon28ArrowUturnRightOutline,
  Icon28ChainOutline,
  Icon28EditOutline,
  Icon28ListCheckOutline,
	Icon28CancelOutline,
	Icon16Done,
	Icon16Dropdown,
	Icon28CameraOutline,
	Icon28VideoOutline,
	Icon28MusicOutline,
	Icon28PollSquareOutline,
	Icon28MarketOutline,
	Icon28BillSeparatedOutline,
	Icon28PodcastOutline,
	Icon28StarsOutline,
	Icon24TextTtOutline,
	Icon24TextOutline
} from '@vkontakte/icons';
import { Checkbox } from '@vkontakte/vkui/dist/components/Checkbox/Checkbox';

const bots = [
	{
			name: "Наши проекты",
			description: "2 часа назад"
	},
	{
			name: "ПРЕЗЕНТАЦИЯ APPLE 2021",
			description: "вчера"
	},
	{
			name: "Наши проекты",
			description: "5 июн в 12:42"
	}
];

class AddArticlesPanels extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
				openSnackbar: false,
				activeTab: 'drafts',
				popout: null
		}
	};

	openSnackbar = () => {
		this.setState({openSnackbar: true});
	};

	openPopout() {
		this.props.openPopout(
			<Alert
				actions={[{
					title: 'Отмена',
					autoclose: true,
					mode: 'cancel'
				}, {
					title: 'Удалить',
					autoclose: true,
					mode: 'destructive',
				}]}
				onClose={() => this.props.closePopout()}
				header='Удаление черновика'
				text='Вы действительно хотите удалить этот черновик? Восстановить его будет невозможно.'
			/>
		);
	}

	render() {
		const {id, goBack, openPopout, closePopout} = this.props;

		return (
			<Panel id={id}>
			{/*Для ПК */}
			{
        (queryGet('vk_platform') === 'desktop_web') && (<div>
			<FixedLayout vertical="top" style={{marginTop: "66px", maxWidth: "100%"}}>
				<PanelHeader
					separator={false}
					right={
						<div style={{display: "flex", marginLeft: "12px", marginRight: "12p"}}>
							<Dropdown
								placement="bottom-end"
								style={{width: "100%", maxWidth: "450px"}}
								content={
									<div>
										<Tabs>
											<HorizontalScroll>
												<TabsItem
													onClick={() => this.setState({ activeTab: 'drafts' })}
													selected={this.state.activeTab === 'drafts'}
												>
													Черновики
												</TabsItem>
												<TabsItem
													onClick={() => this.setState({ activeTab: 'availableLink' })}
													selected={this.state.activeTab === 'availableLink'}
												>
													Опубликованные
												</TabsItem>
											</HorizontalScroll>
										</Tabs>
										<Separator wide />
										<Search />
										{this.state.activeTab === "drafts" ?<div>
											{bots.map((bot, index) => (
												<Cell
													description={bot.description}
													after={<IconButton onClick={() => this.openPopout()} style={{color: "var(--icon_secondary)"}}><Icon28CancelOutline /></IconButton>}
												>
													{bot.name}
												</Cell>
											))}
										</div> : null}
										{this.state.activeTab === "availableLink" ?<div>
											<Placeholder
												icon={<Icon24ArticleOutline width={56} height={56} />}
											>
												У Вас пока нет опубликованных статей
											</Placeholder>
										</div> : null}
									</div>
								}
							>
								<div style={{display: "flex", marginRight: "12px"}}><div style={{marginRight: "5px"}}>Статьи</div><div style={{marginTop: "auto", marginBottom: "auto"}}><Icon16Dropdown/></div></div>
							</Dropdown>
							<Dropdown
								
								placement="bottom-end"
								style={{width: "100%", maxWidth: "450px"}}
								content={
									<div>
										<Div>
											Подготовка к публикации
										</Div>
										<Spacing separator="top"/>
										<Cell
											description={<Link>Загрузить изображение</Link>}
											disabled
										>
											<Subhead weight="regular" style={{color: "var(--text_secondary)"}}>Обложка</Subhead>
										</Cell>
										<FormLayout>
											<FormItem
												top="Статья будет сохранена и доступна по ссылке:" 
											>
												<Input
													type="text"
													name="link"
													value="vk.com/@skyreglis-"
												/>
											</FormItem>
											<Checkbox>Доступна только донам</Checkbox>
											<Checkbox>Показывать автора</Checkbox>
										</FormLayout>
										<FormItem>
											<Button size="l" stretched>Сохранить</Button>
										</FormItem>
									</div>
								}
							>
								<div style={{display: "flex", marginRight: "12px"}}><div style={{marginRight: "5px"}}>Публикация</div><div style={{marginTop: "auto", marginBottom: "auto"}}><Icon16Dropdown/></div></div>
							</Dropdown>
						</div>
					}
				>
					<PanelHeaderContent>
            <div style={{fontSize: "18px"}}>Новая статья</div>
          </PanelHeaderContent>
				</PanelHeader>
				<div style={{display: "flex", backgroundColor: "var(--background_content)", boxShadow: "0 0 0 1px #e1e3e6 inset", boxShadow: "0 0 0 var(--thin-border) var(--input_border) inset", borderBottom: "none"}}>
					<Dropdown
						placement="bottom-start"
						content={
							<div>
								<List>
									<Cell before={<Icon28CameraOutline/>}>Фото</Cell>
									<Cell before={<Icon28VideoOutline/>}>Видео</Cell>
									<Cell before={<Icon28MusicOutline/>}>Музыка</Cell>
									<Cell before={<Icon28PollSquareOutline/>}>Опрос</Cell>
									<Cell before={<Icon28MarketOutline/>}>Товар</Cell>
									<Cell before={<Icon28StarsOutline/>}>GIF</Cell>
									<Cell before={<Icon28BillSeparatedOutline/>}>Разделитель</Cell>
									<Cell before={<Icon28PodcastOutline/>}>Подкаст</Cell>
								</List>
							</div>
						}
					>
						<IconButton style={{color: "var(--accent)"}}><Icon28AddCircleOutline /></IconButton>
					</Dropdown>
					<div className="separator-editor"/>
					<IconButton style={{color: "var(--icon_tertiary)"}}><Icon28ArrowUturnLeftOutline /></IconButton>
					<IconButton style={{color: "var(--icon_tertiary)"}}><Icon28ArrowUturnRightOutline /></IconButton>
					<div className="separator-editor"/>
				<HorizontalScroll showArrows getScrollToLeft={i => i - 120} getScrollToRight={i => i + 120}>
					<div style={{display: "flex"}}>
						<IconButton style={{color: "var(--icon_tertiary)"}}><Icon28ChainOutline /></IconButton>
						<IconButton style={{color: "var(--icon_tertiary)"}}><Icon28EditOutline /></IconButton>
						<IconButton style={{color: "var(--icon_tertiary)"}}><Icon24TextTtOutline width={28} height={28} /></IconButton>
						<IconButton style={{color: "var(--icon_tertiary)"}}><Icon24TextOutline width={28} height={28} /></IconButton>
					</div>
				</HorizontalScroll>
				</div>
			</FixedLayout>
				<Group style={{marginTop: "85px", overflow: "clip"}}>
					<div className="windowEditArticles">
						<Title level="1" weight="bold" className="title-editor">
							Заголовок
						</Title>
						<Headline weight="regular" className="headline-editor">
							Основная часть
						</Headline>
					</div>
				</Group>
				</div>)
			}
			{/*Для всех остальных устройств */}
			{
				(queryGet('vk_platform') === 'mobile_android'
				|| queryGet('vk_platform') === 'mobile_iphone'
				|| queryGet('vk_platform') === 'mobile_ipad'
				|| queryGet('vk_platform') === 'mobile_android_messenger'
				|| queryGet('vk_platform') === 'mobile_iphone_messenger'
				|| queryGet('vk_platform') === 'mobile_web') && (<div>
					<PanelHeader separator={false}>Новая статья</PanelHeader>
						<Group>
							<SubnavigationBar mode="fixed">
								<SubnavigationButton
									before={<Icon24ArticleOutline />}
									size="l"
									expandable
									onClick={() => this.props.openModal("MODAL_PAGE_ARTICLES")}
								>
									Статьи
								</SubnavigationButton>
								<SubnavigationButton
									before={<Icon28ListCheckOutline width={24} height={24} />}
									size="l"
									expandable
									onClick={() => this.props.openModal("MODAL_PAGE_PUBLICATION")}
								>
									Публикация
								</SubnavigationButton>
							</SubnavigationBar>
						</Group>
						<Group>
							<Title level="1" weight="bold" className="title-editor">
									Заголовок
							</Title>
							<Headline weight="regular" className="headline-editor">
									Основная часть
							</Headline>
						</Group>
						<FixedLayout filled vertical="bottom">
							<Separator wide />
							<div style={{display: "flex"}}>
								<Dropdown
									placement="top"
									style={{marginLeft: 5}}
									content={
										<div>
											<List>
												<Cell before={<Icon28CameraOutline/>}>Фото</Cell>
												<Cell before={<Icon28VideoOutline/>}>Видео</Cell>
												<Cell before={<Icon28MusicOutline/>}>Музыка</Cell>
												<Cell before={<Icon28PollSquareOutline/>}>Опрос</Cell>
												<Cell before={<Icon28MarketOutline/>}>Товар</Cell>
												<Cell before={<Icon28StarsOutline/>}>GIF</Cell>
												<Cell before={<Icon28BillSeparatedOutline/>}>Разделитель</Cell>
												<Cell before={<Icon28PodcastOutline/>}>Подкаст</Cell>
											</List>
										</div>
									}
								>
									<IconButton style={{color: "var(--accent)"}}><Icon28AddCircleOutline /></IconButton>
								</Dropdown>
								<div className="separator-editor"/>
								<IconButton style={{color: "var(--icon_tertiary)"}}><Icon28ArrowUturnLeftOutline /></IconButton>
								<IconButton style={{color: "var(--icon_tertiary)"}}><Icon28ArrowUturnRightOutline /></IconButton>
								<div className="separator-editor"/>
							<HorizontalScroll showArrows getScrollToLeft={i => i - 120} getScrollToRight={i => i + 120}>
								<div style={{display: "flex"}}>
								<IconButton style={{color: "var(--icon_tertiary)"}}><Icon28ChainOutline /></IconButton>
								<IconButton style={{color: "var(--icon_tertiary)"}}><Icon28EditOutline /></IconButton>
								<IconButton style={{color: "var(--icon_tertiary)"}}><Icon24TextTtOutline width={28} height={28} /></IconButton>
								<IconButton style={{color: "var(--icon_tertiary)"}}><Icon24TextOutline width={28} height={28} /></IconButton>
								</div>
							</HorizontalScroll>
							</div>
							<Separator wide />
						</FixedLayout>
				</div>)
			}
			</Panel>
		);
	}

}

const mapDispatchToProps = { goBack, openModal, openPopout, closePopout };

export default connect(null, mapDispatchToProps)(AddArticlesPanels);