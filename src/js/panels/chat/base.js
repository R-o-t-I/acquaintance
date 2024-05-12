import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout, goBack} from "../../store/router/actions";

import queryGet from '../../../functions/query_get.jsx';

import {
	Panel,
	PanelHeader,
	SimpleCell,
	Avatar,
	Counter,
	PanelHeaderContent,
	PanelHeaderContext,
	CellButton,
	List,
	Search,
  Group,
  VKCOM,
  Placeholder,
  Button,
  Spacing,
  IconButton,
  Separator,
  Cell
} from '@vkontakte/vkui/';

import {
	Icon12Verified,
	Icon16Dropdown,
	Icon24Filter,
	Icon28MessageAddBadgeOutline,
	Icon28MessageCheckOutline,
	Icon28MessageOutline,
	Icon28MessageReplyOutline,
	Icon28MessageUnreadTop,
  Icon28SearchOutline,
  Icon56MessagesOutline
} from '@vkontakte/icons';

import Icon28MessageFavoriteOutline from '../../../img/icon28MessageFavoriteOutline.svg'

import bridge from '@vkontakte/vk-bridge';
import { Dropdown } from '@vkontakte/vkui/dist/unstable';

class ChatPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'message',
			contextOpened: false,
			mode: 'message'
    };
    this.toggleContext = this.toggleContext.bind(this);
		this.select = this.select.bind(this);
  }

  toggleContext () {
		this.setState({ contextOpened: !this.state.contextOpened });
	}
	
	select (e) {
		const mode = e.currentTarget.dataset.mode;
		this.setState({ mode });
		requestAnimationFrame(this.toggleContext);
	}

    render() {
        const {id, platform, setPage, goBack} = this.props;

        return (
            <Panel id={id}>
            {/*Для ПК */}
            {
              (queryGet('vk_platform') === 'desktop_web') && (<div>
              <PanelHeader separator={false}>
                {this.state.activeTab === "message" ? this.state.mode === "message" ?<div>
                  Сообщения
                </div> :null :null}
                {this.state.activeTab === "message" ? this.state.mode === "unread" ?<div>
                  Непрочитанные
                </div> :null :null}
                {this.state.activeTab === "message" ? this.state.mode === "onlyOnline" ?<div>
                  Только онлайн
                </div> :null :null}
                {this.state.activeTab === "message" ? this.state.mode === "favorites" ?<div>
                  Избранные
                </div> :null :null}
                {this.state.activeTab === "message" ? this.state.mode === "waiting" ?<div>
                  Ждут ответ
                </div> :null :null}
                {this.state.activeTab === "message" ? this.state.mode === "correspondenceRequests" ?<div>
                  Запросы на переписку
                </div> :null :null}
              </PanelHeader>
              
              {this.state.activeTab === "message" ? this.state.mode === "message" ?<div style={{display: "flex"}}>
                <div className="listUsersMessage">
                  <div style={{display: "flex"}}>
                    <Search after />
                    <div>
                      <Dropdown
                        placement="bottom-end"
                        action="hover"
                        content={
                          <List>
                            <CellButton 
                              before={<Icon28MessageOutline />}
                              multiline
                              onClick={this.select} data-mode="message"
                            >
                              Все сообщения
                            </CellButton>
                            <CellButton 
                              before={<Icon28MessageCheckOutline />}
                              multiline
                              onClick={this.select} data-mode="unread"
                            >
                              Непрочитанные
                            </CellButton>
                            <CellButton
                              before={<Icon28MessageUnreadTop />}
                              multiline
                              onClick={this.select} data-mode="onlyOnline"
                            >
                              Только онлайн
                            </CellButton>
                            <CellButton
                              before={<img style={{marginRight: "16px"}} src={Icon28MessageFavoriteOutline} className="Icon28MessageFavoriteOutline" />}
                              multiline
                              onClick={this.select} data-mode="favorites"
                            >
                              Избранные
                            </CellButton>
                            <CellButton
                              before={<Icon28MessageReplyOutline />}
                              multiline
                              onClick={this.select} data-mode="waiting"
                            >
                              Ждут ответа
                            </CellButton>
                            <CellButton
                              before={<Icon28MessageAddBadgeOutline />}
                              multiline
                              onClick={this.select} data-mode="correspondenceRequests"
                            >
                              Запросы на переписку
                            </CellButton>
                          </List>
                        }
                      >
                        <IconButton style={{margin: "2px"}}><Icon24Filter style={{color: "var(--search_bar_field_tint)"}}/></IconButton>
                      </Dropdown>
                      <div className="separatorSearch" />
                    </div>
                  </div>
                  <SimpleCell
                    onClick={() => setPage('chat', 'testChat')}
                    before={<Avatar badge="online-mobile" size={48} style={{objectFit: "cover"}} src="https://sun9-18.userapi.com/impg/iCu0lPqTMBqw1c2aV9Ra5OiYd9Ki3yamQVkTfw/5Mw6yCkWOnU.jpg?size=1201x1600&quality=96&sign=7dfe1cea7dfe8b88f5a617790320848c&type=album" />}
                    badge={<Icon12Verified />}
                    after={<Counter size="s" style={{marginLeft: 10}} mode="primary">4</Counter>}
                    description={
                      <div className="footer-message">
                        <div className="text-footer-message">Добрый день! Хотелось бы уточнить по игре</div>
                        <div className="separator-footer-message">·</div>
                        <div className="time-footer-message">6ч</div>
                      </div>
                    }
                    data-to="messagePanel"
                  >
                    Артём Петрунин
                  </SimpleCell>
                  <SimpleCell 
                    before={<Avatar badge="online" size={48} style={{objectFit: "cover"}} src="" />}
                    badge={<Icon12Verified />}
                    description={
                      <div className="footer-message">
                        <div className="text-footer-message">Добрый день! Да, мы готовы предоставить Вам DLC!</div>
                        <div className="separator-footer-message">·</div>
                        <div className="time-footer-message">6ч</div>
                      </div>
                    }
                  >
                    Вася Пупкин
                  </SimpleCell>
                  <div onClick={this.select} data-mode="unread" className="bottomButtonListUsersMessage">
                    Показать непрочитанные
                  </div>
                </div>
                <div className="blockUsersMessage">
                  <Placeholder
                    icon={<Icon56MessagesOutline />}
                    header="Выберите чат"
                    action={<Button mode="outline" size="m">Найти пользователя</Button>}
                  >
                    Находите пользователей для общения и будьте первыми, кто начнет разговор
                  </Placeholder>
                </div>
              </div> : null : null}

              {this.state.activeTab === "message" ? this.state.mode === "unread" ?<div  style={{display: "flex"}}>
                <div className="listUsersMessage">
                  <div style={{display: "flex"}}>
                    <Search after />
                    <div>
                      <Dropdown
                        placement="bottom-end"
                        action="hover"
                        content={
                          <List>
                            <CellButton 
                              before={<Icon28MessageOutline />}
                              multiline
                              onClick={this.select} data-mode="message"
                            >
                              Все сообщения
                            </CellButton>
                            <CellButton 
                              before={<Icon28MessageCheckOutline />}
                              multiline
                              onClick={this.select} data-mode="unread"
                            >
                              Непрочитанные
                            </CellButton>
                            <CellButton
                              before={<Icon28MessageUnreadTop />}
                              multiline
                              onClick={this.select} data-mode="onlyOnline"
                            >
                              Только онлайн
                            </CellButton>
                            <CellButton
                              before={<img style={{marginRight: "16px"}} src={Icon28MessageFavoriteOutline} className="Icon28MessageFavoriteOutline" />}
                              multiline
                              onClick={this.select} data-mode="favorites"
                            >
                              Избранные
                            </CellButton>
                            <CellButton
                              before={<Icon28MessageReplyOutline />}
                              multiline
                              onClick={this.select} data-mode="waiting"
                            >
                              Ждут ответа
                            </CellButton>
                            <CellButton
                              before={<Icon28MessageAddBadgeOutline />}
                              multiline
                              onClick={this.select} data-mode="correspondenceRequests"
                            >
                              Запросы на переписку
                            </CellButton>
                          </List>
                        }
                      >
                        <IconButton style={{margin: "2px"}}><Icon24Filter style={{color: "var(--search_bar_field_tint)"}}/></IconButton>
                      </Dropdown>
                      <div className="separatorSearch" />
                    </div>
                  </div>
                  <SimpleCell
                    onClick={() => setPage('chat', 'testChat')}
                    before={<Avatar badge="online-mobile" size={48} style={{objectFit: "cover"}} src="https://sun9-18.userapi.com/impg/iCu0lPqTMBqw1c2aV9Ra5OiYd9Ki3yamQVkTfw/5Mw6yCkWOnU.jpg?size=1201x1600&quality=96&sign=7dfe1cea7dfe8b88f5a617790320848c&type=album" />}
                    badge={<Icon12Verified />}
                    after={<Counter size="s" style={{marginLeft: 10}} mode="primary">4</Counter>}
                    description={
                      <div className="footer-message">
                        <div className="text-footer-message">Добрый день! Хотелось бы уточнить по игре</div>
                        <div className="separator-footer-message">·</div>
                        <div className="time-footer-message">6ч</div>
                      </div>
                    }
                    data-to="messagePanel"
                  >
                    Артём Петрунин
                  </SimpleCell>
                  <div onClick={this.select} data-mode="message" className="bottomButtonListUsersMessage">
                    Показать все
                  </div>
                </div>
                <div className="blockUsersMessage">
                  <Placeholder
                    icon={<Icon56MessagesOutline />}
                    header="Выберите чат"
                    action={<Button mode="outline" size="m">Найти пользователя</Button>}
                  >
                    Находите пользователей для общения и будьте первыми, кто начнет разговор
                  </Placeholder>
                </div>
              </div> : null : null}

              {this.state.activeTab === "message" ? this.state.mode === "onlyOnline" ?<div  style={{display: "flex"}}>
                <div className="listUsersMessage">
                  <div style={{display: "flex"}}>
                    <Search after />
                    <div>
                      <Dropdown
                        placement="bottom-end"
                        action="hover"
                        content={
                          <List>
                            <CellButton 
                              before={<Icon28MessageOutline />}
                              multiline
                              onClick={this.select} data-mode="message"
                            >
                              Все сообщения
                            </CellButton>
                            <CellButton 
                              before={<Icon28MessageCheckOutline />}
                              multiline
                              onClick={this.select} data-mode="unread"
                            >
                              Непрочитанные
                            </CellButton>
                            <CellButton
                              before={<Icon28MessageUnreadTop />}
                              multiline
                              onClick={this.select} data-mode="onlyOnline"
                            >
                              Только онлайн
                            </CellButton>
                            <CellButton
                              before={<img style={{marginRight: "16px"}} src={Icon28MessageFavoriteOutline} className="Icon28MessageFavoriteOutline" />}
                              multiline
                              onClick={this.select} data-mode="favorites"
                            >
                              Избранные
                            </CellButton>
                            <CellButton
                              before={<Icon28MessageReplyOutline />}
                              multiline
                              onClick={this.select} data-mode="waiting"
                            >
                              Ждут ответа
                            </CellButton>
                            <CellButton
                              before={<Icon28MessageAddBadgeOutline />}
                              multiline
                              onClick={this.select} data-mode="correspondenceRequests"
                            >
                              Запросы на переписку
                            </CellButton>
                          </List>
                        }
                      >
                        <IconButton style={{margin: "2px"}}><Icon24Filter style={{color: "var(--search_bar_field_tint)"}}/></IconButton>
                      </Dropdown>
                      <div className="separatorSearch" />
                    </div>
                  </div>
                  <Placeholder
                    icon={<Icon28MessageUnreadTop width={56} height={56} />}
                    header="У Вас нет таких чатов"
                    action={<Button mode="outline" size="m" onClick={this.select} data-mode="message">Все сообщения</Button>}
                  >
                    У Вас нет чатов, с людьми в сети. Вы можете перейти ко всем сообщениям и там кому-нибудь написать
                  </Placeholder>
                </div>
                <div className="blockUsersMessage">
                  <Placeholder
                    icon={<Icon56MessagesOutline />}
                    header="Выберите чат"
                    action={<Button mode="outline" size="m">Найти пользователя</Button>}
                  >
                    Находите пользователей для общения и будьте первыми, кто начнет разговор
                  </Placeholder>
                </div>
              </div> : null : null}

              {this.state.activeTab === "message" ? this.state.mode === "favorites" ?<div  style={{display: "flex"}}>
                <div className="listUsersMessage">
                  <div style={{display: "flex"}}>
                    <Search after />
                    <div>
                      <Dropdown
                        placement="bottom-end"
                        action="hover"
                        content={
                          <List>
                            <CellButton 
                              before={<Icon28MessageOutline />}
                              multiline
                              onClick={this.select} data-mode="message"
                            >
                              Все сообщения
                            </CellButton>
                            <CellButton 
                              before={<Icon28MessageCheckOutline />}
                              multiline
                              onClick={this.select} data-mode="unread"
                            >
                              Непрочитанные
                            </CellButton>
                            <CellButton
                              before={<Icon28MessageUnreadTop />}
                              multiline
                              onClick={this.select} data-mode="onlyOnline"
                            >
                              Только онлайн
                            </CellButton>
                            <CellButton
                              before={<img style={{marginRight: "16px"}} src={Icon28MessageFavoriteOutline} className="Icon28MessageFavoriteOutline" />}
                              multiline
                              onClick={this.select} data-mode="favorites"
                            >
                              Избранные
                            </CellButton>
                            <CellButton
                              before={<Icon28MessageReplyOutline />}
                              multiline
                              onClick={this.select} data-mode="waiting"
                            >
                              Ждут ответа
                            </CellButton>
                            <CellButton
                              before={<Icon28MessageAddBadgeOutline />}
                              multiline
                              onClick={this.select} data-mode="correspondenceRequests"
                            >
                              Запросы на переписку
                            </CellButton>
                          </List>
                        }
                      >
                        <IconButton style={{margin: "2px"}}><Icon24Filter style={{color: "var(--search_bar_field_tint)"}}/></IconButton>
                      </Dropdown>
                      <div className="separatorSearch" />
                    </div>
                  </div>
                  <Placeholder
                    icon={<img src={Icon28MessageFavoriteOutline} className="Icon28MessageFavoriteOutline" width={56} height={56} />}
                    header="У Вас нет таких чатов"
                    action={<Button mode="outline" size="m" onClick={this.select} data-mode="message">Все сообщения</Button>}
                  >
                    У Вас нет избранных чатов. Чтобы добавить их, нажимайте на иконку сердечка в открытом чате. Вы можете перейти ко всем сообщениям и там кому-нибудь написать
                  </Placeholder>
                </div>
                <div className="blockUsersMessage">
                  <Placeholder
                    icon={<Icon56MessagesOutline />}
                    header="Выберите чат"
                    action={<Button mode="outline" size="m">Найти пользователя</Button>}
                  >
                    Находите пользователей для общения и будьте первыми, кто начнет разговор
                  </Placeholder>
                </div>
              </div> : null : null}

              {this.state.activeTab === "message" ? this.state.mode === "waiting" ?<div  style={{display: "flex"}}>
                <div className="listUsersMessage">
                  <div style={{display: "flex"}}>
                    <Search after />
                    <div>
                      <Dropdown
                        placement="bottom-end"
                        action="hover"
                        content={
                          <List>
                            <CellButton 
                              before={<Icon28MessageOutline />}
                              multiline
                              onClick={this.select} data-mode="message"
                            >
                              Все сообщения
                            </CellButton>
                            <CellButton 
                              before={<Icon28MessageCheckOutline />}
                              multiline
                              onClick={this.select} data-mode="unread"
                            >
                              Непрочитанные
                            </CellButton>
                            <CellButton
                              before={<Icon28MessageUnreadTop />}
                              multiline
                              onClick={this.select} data-mode="onlyOnline"
                            >
                              Только онлайн
                            </CellButton>
                            <CellButton
                              before={<img style={{marginRight: "16px"}} src={Icon28MessageFavoriteOutline} className="Icon28MessageFavoriteOutline" />}
                              multiline
                              onClick={this.select} data-mode="favorites"
                            >
                              Избранные
                            </CellButton>
                            <CellButton
                              before={<Icon28MessageReplyOutline />}
                              multiline
                              onClick={this.select} data-mode="waiting"
                            >
                              Ждут ответа
                            </CellButton>
                            <CellButton
                              before={<Icon28MessageAddBadgeOutline />}
                              multiline
                              onClick={this.select} data-mode="correspondenceRequests"
                            >
                              Запросы на переписку
                            </CellButton>
                          </List>
                        }
                      >
                        <IconButton style={{margin: "2px"}}><Icon24Filter style={{color: "var(--search_bar_field_tint)"}}/></IconButton>
                      </Dropdown>
                      <div className="separatorSearch" />
                    </div>
                  </div>
                  <Placeholder
                    icon={<Icon28MessageReplyOutline width={56} height={56} />}
                    header="У Вас нет таких чатов"
                    action={<Button mode="outline" size="m" onClick={this.select} data-mode="message">Все сообщения</Button>}
                  >
                    У Вас нет чатов с людьми, которые ждут от Вас ответа. Вы можете перейти ко всем сообщениям и там кому-нибудь написать
                  </Placeholder>
                </div>
                <div className="blockUsersMessage">
                  <Placeholder
                    icon={<Icon56MessagesOutline />}
                    header="Выберите чат"
                    action={<Button mode="outline" size="m">Найти пользователя</Button>}
                  >
                    Находите пользователей для общения и будьте первыми, кто начнет разговор
                  </Placeholder>
                </div>
              </div> : null : null}

              {this.state.activeTab === "message" ? this.state.mode === "correspondenceRequests" ?<div  style={{display: "flex"}}>
                <div className="listUsersMessage">
                  <div style={{display: "flex"}}>
                    <Search after />
                    <div>
                      <Dropdown
                        placement="bottom-end"
                        action="hover"
                        content={
                          <List>
                            <CellButton 
                              before={<Icon28MessageOutline />}
                              multiline
                              onClick={this.select} data-mode="message"
                            >
                              Все сообщения
                            </CellButton>
                            <CellButton 
                              before={<Icon28MessageCheckOutline />}
                              multiline
                              onClick={this.select} data-mode="unread"
                            >
                              Непрочитанные
                            </CellButton>
                            <CellButton
                              before={<Icon28MessageUnreadTop />}
                              multiline
                              onClick={this.select} data-mode="onlyOnline"
                            >
                              Только онлайн
                            </CellButton>
                            <CellButton
                              before={<img style={{marginRight: "16px"}} src={Icon28MessageFavoriteOutline} className="Icon28MessageFavoriteOutline" />}
                              multiline
                              onClick={this.select} data-mode="favorites"
                            >
                              Избранные
                            </CellButton>
                            <CellButton
                              before={<Icon28MessageReplyOutline />}
                              multiline
                              onClick={this.select} data-mode="waiting"
                            >
                              Ждут ответа
                            </CellButton>
                            <CellButton
                              before={<Icon28MessageAddBadgeOutline />}
                              multiline
                              onClick={this.select} data-mode="correspondenceRequests"
                            >
                              Запросы на переписку
                            </CellButton>
                          </List>
                        }
                      >
                        <IconButton style={{margin: "2px"}}><Icon24Filter style={{color: "var(--search_bar_field_tint)"}}/></IconButton>
                      </Dropdown>
                      <div className="separatorSearch" />
                    </div>
                  </div>
                  <Placeholder
                    icon={<Icon28MessageAddBadgeOutline width={56} height={56} />}
                    header="У Вас нет таких чатов"
                    action={<Button mode="outline" size="m" onClick={this.select} data-mode="message">Все сообщения</Button>}
                  >
                    У Вас нет чатов с запросами на переписку. Вы можете перейти ко всем сообщениям и там кому-нибудь написать
                  </Placeholder>
                </div>
                <div className="blockUsersMessage">
                  <Placeholder
                    icon={<Icon56MessagesOutline />}
                    header="Выберите чат"
                    action={<Button mode="outline" size="m">Найти пользователя</Button>}
                  >
                    Находите пользователей для общения и будьте первыми, кто начнет разговор
                  </Placeholder>
                </div>
              </div> : null : null}
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
              <PanelHeader left={<IconButton onClick={() => goBack()}><Icon28SearchOutline /></IconButton>} separator={true}>
                {this.state.activeTab === "message" ? this.state.mode === "message" ?<div>
                <PanelHeaderContent
                  aside={<Icon16Dropdown style={{ transform: `rotate(${this.state.contextOpened ? '180deg' : '0'})` }} />}
                  onClick={this.toggleContext}
                >
                  Сообщения
                </PanelHeaderContent>
                </div> :null :null}

                {this.state.activeTab === "message" ? this.state.mode === "unread" ?<div>
                <PanelHeaderContent
                  aside={<Icon16Dropdown style={{ transform: `rotate(${this.state.contextOpened ? '180deg' : '0'})` }} />}
                  onClick={this.toggleContext}
                >
                  Непрочитанные
                </PanelHeaderContent>
                </div> :null :null}

                {this.state.activeTab === "message" ? this.state.mode === "onlyOnline" ?<div>
                <PanelHeaderContent
                  aside={<Icon16Dropdown style={{ transform: `rotate(${this.state.contextOpened ? '180deg' : '0'})` }} />}
                  onClick={this.toggleContext}
                >
                  Только онлайн
                </PanelHeaderContent>
                </div> :null :null}

                {this.state.activeTab === "message" ? this.state.mode === "favorites" ?<div>
                <PanelHeaderContent
                  aside={<Icon16Dropdown style={{ transform: `rotate(${this.state.contextOpened ? '180deg' : '0'})` }} />}
                  onClick={this.toggleContext}
                >
                  Избранные
                </PanelHeaderContent>
                </div> :null :null}

                {this.state.activeTab === "message" ? this.state.mode === "waiting" ?<div>
                <PanelHeaderContent
                  aside={<Icon16Dropdown style={{ transform: `rotate(${this.state.contextOpened ? '180deg' : '0'})` }} />}
                  onClick={this.toggleContext}
                >
                  Ждут ответа
                </PanelHeaderContent>
                </div> :null :null}

                {this.state.activeTab === "message" ? this.state.mode === "correspondenceRequests" ?<div>
                <PanelHeaderContent
                  aside={<Icon16Dropdown style={{ transform: `rotate(${this.state.contextOpened ? '180deg' : '0'})` }} />}
                  onClick={this.toggleContext}
                >
                  Запросы на переписку
                </PanelHeaderContent>
                </div> :null :null}
              </PanelHeader>
              <PanelHeaderContext opened={this.state.contextOpened} onClose={this.toggleContext}>
              <List>
                <CellButton
                  onClick={this.select}
                  data-mode="message"
                  before={<Icon28MessageOutline />}
                  multiline
                >
                  Сообщения
                </CellButton>
                <CellButton
                  onClick={this.select}
                  data-mode="unread"
                  before={<Icon28MessageCheckOutline />}
                  multiline
                >
                  Непрочитанные
                </CellButton>
                <CellButton
                  before={<Icon28MessageUnreadTop />}
                  multiline
                  onClick={this.select}
                  data-mode="onlyOnline"
                >
                  Только онлайн
                </CellButton>
                <CellButton
                  before={<img style={{marginRight: "16px"}} src={Icon28MessageFavoriteOutline} className="Icon28MessageFavoriteOutline" />}
                  multiline
                  onClick={this.select}
                  data-mode="favorites"
                >
                  Избранные
                </CellButton>
                <CellButton
                  before={<Icon28MessageReplyOutline />}
                  multiline
                  onClick={this.select}
                  data-mode="waiting"
                >
                  Ждут ответа
                </CellButton>
                <CellButton
                  before={<Icon28MessageAddBadgeOutline />}
                  multiline
                  onClick={this.select}
                  data-mode="correspondenceRequests"
                >
                  Запросы на переписку
                </CellButton>
              </List>
              </PanelHeaderContext>
              
              {this.state.activeTab === "message" ? this.state.mode === "message" ?<div>
                <div>
                  <SimpleCell
                    onClick={() => setPage('chat', 'testChat')}
                    before={<Avatar badge="online-mobile" size={48} style={{objectFit: "cover"}} src="https://sun9-18.userapi.com/impg/iCu0lPqTMBqw1c2aV9Ra5OiYd9Ki3yamQVkTfw/5Mw6yCkWOnU.jpg?size=1201x1600&quality=96&sign=7dfe1cea7dfe8b88f5a617790320848c&type=album" />}
                    badge={<Icon12Verified />}
                    after={<Counter size="m" style={{marginLeft: 10}} mode="primary">4</Counter>}
                    description={
                      <div className="footer-message">
                        <div className="text-footer-message">Добрый день! Хотелось бы уточнить по игре</div>
                        <div className="separator-footer-message">·</div>
                        <div className="time-footer-message">6ч</div>
                      </div>
                    }
                    data-to="messagePanel"
                  >
                    Артём Петрунин
                  </SimpleCell>
                  <SimpleCell 
                    before={<Avatar badge="online" size={48} style={{objectFit: "cover"}} src="" />}
                    badge={<Icon12Verified />}
                    description={
                      <div className="footer-message">
                        <div className="text-footer-message">Добрый день! Да, мы готовы предоставить Вам DLC!</div>
                        <div className="separator-footer-message">·</div>
                        <div className="time-footer-message">6ч</div>
                      </div>
                    }
                  >
                    Вася Пупкин
                  </SimpleCell>
                </div>
              </div> : null : null}

              {this.state.activeTab === "message" ? this.state.mode === "unread" ?<div>
                <div>
                  <SimpleCell
                    onClick={() => setPage('chat', 'testChat')}
                    before={<Avatar badge="online-mobile" size={48} style={{objectFit: "cover"}} src="https://sun9-18.userapi.com/impg/iCu0lPqTMBqw1c2aV9Ra5OiYd9Ki3yamQVkTfw/5Mw6yCkWOnU.jpg?size=1201x1600&quality=96&sign=7dfe1cea7dfe8b88f5a617790320848c&type=album" />}
                    badge={<Icon12Verified />}
                    after={<Counter size="m" style={{marginLeft: 10}} mode="primary">4</Counter>}
                    description={
                      <div className="footer-message">
                        <div className="text-footer-message">Добрый день! Хотелось бы уточнить по игре</div>
                        <div className="separator-footer-message">·</div>
                        <div className="time-footer-message">6ч</div>
                      </div>
                    }
                    data-to="messagePanel"
                  >
                    Артём Петрунин
                  </SimpleCell>
                </div>
              </div> : null : null}
              {this.state.activeTab === "message" ? this.state.mode === "onlyOnline" ?<div>
                <Placeholder
                  stretched
                  icon={<Icon28MessageUnreadTop width={56} height={56} />}
                  header="У Вас нет таких чатов"
                  action={<Button mode="outline" size="m" onClick={this.select} data-mode="message">Все сообщения</Button>}
                >
                  У Вас нет чатов, с людьми в сети. Вы можете перейти ко всем сообщениям и там кому-нибудь написать
                </Placeholder>
              </div> : null : null}

              {this.state.activeTab === "message" ? this.state.mode === "favorites" ?<div>
                <Placeholder
                  stretched
                  icon={<img src={Icon28MessageFavoriteOutline} className="Icon28MessageFavoriteOutline" width={56} height={56} />}
                  header="У Вас нет таких чатов"
                  action={<Button mode="outline" size="m" onClick={this.select} data-mode="message">Все сообщения</Button>}
                >
                  У Вас нет избранных чатов. Чтобы добавить их, нажимайте на иконку сердечка в открытом чате. Вы можете перейти ко всем сообщениям и там кому-нибудь написать
                </Placeholder>
              </div> : null : null}

              {this.state.activeTab === "message" ? this.state.mode === "waiting" ?<div>
                <Placeholder
                  stretched
                  icon={<Icon28MessageReplyOutline width={56} height={56} />}
                  header="У Вас нет таких чатов"
                  action={<Button mode="outline" size="m" onClick={this.select} data-mode="message">Все сообщения</Button>}
                >
                  У Вас нет чатов с людьми, которые ждут от Вас ответа. Вы можете перейти ко всем сообщениям и там кому-нибудь написать
                </Placeholder>
              </div> : null : null}

              {this.state.activeTab === "message" ? this.state.mode === "correspondenceRequests" ?<div>
                <Placeholder
                  stretched
                  icon={<Icon28MessageAddBadgeOutline width={56} height={56} />}
                  header="У Вас нет таких чатов"
                  action={<Button mode="outline" size="m" onClick={this.select} data-mode="message">Все сообщения</Button>}
                >
                  У Вас нет чатов с запросами на переписку. Вы можете перейти ко всем сообщениям и там кому-нибудь написать
                </Placeholder>
              </div> : null : null}
              </div>)
            }
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

export default connect(null, mapDispatchToProps)(ChatPanel);