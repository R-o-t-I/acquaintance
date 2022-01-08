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
  PanelHeaderBack,
  FixedLayout,
  Div,
  WriteBar,
  WriteBarIcon,
  ActionSheet,
  ActionSheetItem,
  Alert
} from '@vkontakte/vkui/';

import { Dropdown } from '@vkontakte/vkui/dist/unstable';
import '@vkontakte/vkui/dist/unstable.css' // CSS достаточно подключить один раз 

import {
  Icon12Articles,
	Icon12Verified,
	Icon16CheckDoubleOutline,
	Icon16Done,
	Icon16Dropdown,
	Icon16HieroglyphCharacterOutline,
  Icon24Filter,
	Icon28MessageAddBadgeOutline,
	Icon28MessageCheckOutline,
	Icon28MessageHeartOutline,
	Icon28MessageOutline,
	Icon28MessageReplyOutline,
	Icon28MessageUnreadTop,
	Icon28ClearDataOutline,
	Icon28CopyOutline,
	Icon28DeleteOutline,
	Icon28HieroglyphCharacterOutline,
	Icon28LockOutline,
  Icon28MoreVertical,
  Icon28MuteOutline,
  Icon28PictureOutline,
  Icon28Profile,
  Icon28ReplyOutline,
  Icon28ReportOutline,
  Icon28SearchOutline,
  Icon28SmileOutline,
  Icon28VoiceOutline,
  Icon28LikeOutline
} from '@vkontakte/icons';

import bridge from '@vkontakte/vk-bridge';

class TestChatPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'message',
			contextOpened: false,
			mode: 'message'
    };
    this.toggleContext = this.toggleContext.bind(this);
		this.select = this.select.bind(this);
    this.openInteractionMessage = this.openInteractionMessage.bind(this);
  }

  toggleContext () {
		this.setState({ contextOpened: !this.state.contextOpened });
	}
	
	select (e) {
		const mode = e.currentTarget.dataset.mode;
		this.setState({ mode });
		requestAnimationFrame(this.toggleContext);
	}

  openInteractionMessage() {
    this.props.openPopout(
      <ActionSheet
        onClose={() => this.props.closePopout()}
        iosCloseItem={<ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
        //toggleRef={this.targetRef.current}
      >
        <ActionSheetItem autoclose before={<Icon28ReplyOutline />}>
          Ответить
        </ActionSheetItem>
        <ActionSheetItem autoclose before={<Icon28CopyOutline />}>
          Скопировать
        </ActionSheetItem>
        <ActionSheetItem autoclose before={<Icon28HieroglyphCharacterOutline />}>
          Перевести сообщение
        </ActionSheetItem>
        <ActionSheetItem
          autoclose
          before={<Icon28DeleteOutline />}
          mode="destructive"
        >
          Удалить
        </ActionSheetItem>
        <ActionSheetItem
          autoclose
          before={<Icon28ReportOutline />}
          mode="destructive"
        >
          Это спам
        </ActionSheetItem>
      </ActionSheet>
    );
  }

  openLockPhoto() {
    this.props.openPopout(
      <Alert
        actions={[
          {
            title: "Нет",
            autoclose: true,
            mode: "cancel",
          },
          {
            title: "Да",
            autoclose: true,
            mode: "cancel",
          },
        ]}
        onClose={() => this.props.closePopout()}
        header="Доступ к скрытым фото"
        text="Вы действительно хотите предоставить $Name доступ к скрытым фото?"
      />
    );
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
                              before={<Icon28MessageHeartOutline />}
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
                <div className="blockUserMessage">
                  <div style={{height: 48, display: "flex"}}>
                    <SimpleCell
                      before={<Avatar badge="online-mobile" size={35} style={{objectFit: "cover"}} src="https://sun9-18.userapi.com/impg/iCu0lPqTMBqw1c2aV9Ra5OiYd9Ki3yamQVkTfw/5Mw6yCkWOnU.jpg?size=1201x1600&quality=96&sign=7dfe1cea7dfe8b88f5a617790320848c&type=album" />}
                      badge={<Icon12Verified />}
                      disabled
                      description={<div style={{display: "flex"}}><div style={{marginRight: "5px", display: "flex", marginTop: "auto", marginBottom: "auto"}}><Icon12Articles/></div><div>Печатает...</div></div>}
                    >
                      Артём Петрунин
                    </SimpleCell>
                    <div style={{display: "flex", marginLeft: "auto"}}>
                      <IconButton style={{marginTop: "auto", marginBottom: "auto"}}><Icon28LikeOutline style={{color: "var(--icon_secondary)"}}/></IconButton>
                    <Dropdown
                      action="hover"
                      placement="bottom-end"
                      content={
                        <List>
                          <CellButton
                            before={<Icon28Profile />}
                            multiline
                          >
                            Открыть профиль
                          </CellButton>
                          <CellButton
                            before={<Icon28SearchOutline />}
                            multiline
                          >
                            Поиск
                          </CellButton>
                          <CellButton
                            before={<Icon28PictureOutline />}
                            multiline
                          >
                            Вложения диалога
                          </CellButton>
                          <CellButton
                            before={<Icon28LockOutline />}
                            multiline
                          >
                            Запросить доступ к скрытым фото
                          </CellButton>
                          <CellButton
                            before={<Icon28LockOutline />}
                            multiline
                            onClick={() => this.openLockPhoto()}
                          >
                            Предоставить доступ к скрытым фото
                          </CellButton>
                          <Spacing separator="center"/>
                          <CellButton
                            before={<Icon28MuteOutline />}
                            multiline
                          >
                            Отключить уведомления
                          </CellButton>
                          <CellButton
                            mode="danger"
                            before={<Icon28ClearDataOutline/>}
                            multiline
                          >
                            Очистить диалог
                          </CellButton>
                          <CellButton
                            mode="danger"
                            before={<Icon28DeleteOutline/>}
                            multiline
                          >
                            Удалить диалог
                          </CellButton>
                        </List>
                      }
                    >
                      <IconButton style={{marginLeft: "auto", marginTop: "auto", marginBottom: "auto", color: "var(--icon_secondary)"}}><Icon28MoreVertical/></IconButton>
                    </Dropdown>
                    </div>
                  </div>
                  <Separator wide />
                  <div className="chat">
                    <div className="mine messages">
                      <div className="message last">
                        Привет! Как ты?
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          12:43
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16CheckDoubleOutline />
                        </div>
                      </div>
                    </div>
                    <div className="yours messages">
                      <div className="message">
                        Привет, нормально!
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataLeft">
                          12:43
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16HieroglyphCharacterOutline style={{color: "var(--text_subhead)"}} />
                        </div>
                      </div>
                      <div className="message last">
                        А ты как?
                      </div>
                      <div className="messageDataLeft">
                        12:44
                      </div>
                    </div>
                    <div className="mine messages">
                      <div className="message">
                        У меня тоже все хорошо
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          12:45
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16CheckDoubleOutline />
                        </div>
                      </div>
                      <div className="message last">
                        Чем занимаешься?
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          12:45
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16CheckDoubleOutline />
                        </div>
                      </div>
                    </div>
                    <div className="yours messages">
                    <Dropdown
                      action="click"
                      placement="top-end"
                      content={
                        <List>
                          <CellButton
                            before={<Icon28ReplyOutline />}
                            multiline
                          >
                            Ответить
                          </CellButton>
                          <CellButton
                            before={<Icon28CopyOutline />}
                            multiline
                          >
                            Скопировать
                          </CellButton>
                          <CellButton
                            before={<Icon28HieroglyphCharacterOutline />}
                            multiline
                          >
                            Перевести сообщение
                          </CellButton>
                          <CellButton
                            mode="danger"
                            before={<Icon28DeleteOutline />}
                            multiline
                          >
                            Удалить
                          </CellButton>
                          <CellButton
                            mode="danger"
                            before={<Icon28ReportOutline />}
                            multiline
                          >
                            Это спам
                          </CellButton>
                        </List>
                      }
                    >
                      <div className="message last">
                        Да вот, сижу, ничего не делаю. Скоро пойду на улицу с друзьями гулять. Может, еще зайдем куда-нибудь покушать, не решили еще.
                      </div>
                    </Dropdown>
                      <div className="messageDataLeft">
                        12:47
                      </div>
                    </div>
                    <div className="mine messages"> 
                      <div className="message last">
                        Неплохо
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          12:47
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16CheckDoubleOutline />
                        </div>
                      </div>
                    </div>
                    <div className="yours messages">
                      <div className="message last">
                        Ага
                      </div>
                      <div className="messageDataLeft">
                        12:48
                      </div>
                    </div>
                    <div className="mine messages"> 
                      <div className="message last">
                        Ну что, решили?
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          13:24
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16Done width={14} height={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="writeBarChat">
                    <Separator wide />
                    <WriteBar
                      before={
                        <WriteBarIcon
                          mode="attach"
                        />
                      }
                      inlineAfter={
                        <div>
                          <WriteBarIcon aria-label="Смайлы и стикеры">
                            <Icon28SmileOutline />
                          </WriteBarIcon>
                        </div>
                      }
                      after={
                        <div>
                          <WriteBarIcon aria-label="Смайлы и стикеры">
                            <Icon28SmileOutline />
                          </WriteBarIcon>
                          <WriteBarIcon aria-label="Записать голосовое сообщение">
                            <Icon28VoiceOutline />
                          </WriteBarIcon>
                          <WriteBarIcon mode="send" />
                        </div>
                      }
                      placeholder="Ваше сообщение..."
                    />
                  </div>
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
                              before={<Icon28MessageHeartOutline />}
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
                <div className="blockUserMessage">
                  <div style={{height: 48, display: "flex"}}>
                    <SimpleCell
                      before={<Avatar badge="online-mobile" size={35} style={{objectFit: "cover"}} src="https://sun9-18.userapi.com/impg/iCu0lPqTMBqw1c2aV9Ra5OiYd9Ki3yamQVkTfw/5Mw6yCkWOnU.jpg?size=1201x1600&quality=96&sign=7dfe1cea7dfe8b88f5a617790320848c&type=album" />}
                      badge={<Icon12Verified />}
                      disabled
                      description={<div style={{display: "flex"}}><div style={{marginRight: "5px", display: "flex", marginTop: "auto", marginBottom: "auto"}}><Icon12Articles/></div><div>Печатает...</div></div>}
                    >
                      Артём Петрунин
                    </SimpleCell>
                    <div style={{display: "flex", marginLeft: "auto"}}>
                      <IconButton style={{marginTop: "auto", marginBottom: "auto"}}><Icon28LikeOutline style={{color: "var(--icon_secondary)"}}/></IconButton>
                    <Dropdown
                      action="hover"
                      placement="bottom-end"
                      content={
                        <List>
                          <CellButton
                            before={<Icon28Profile />}
                            multiline
                          >
                            Открыть профиль
                          </CellButton>
                          <CellButton
                            before={<Icon28SearchOutline />}
                            multiline
                          >
                            Поиск
                          </CellButton>
                          <CellButton
                            before={<Icon28PictureOutline />}
                            multiline
                          >
                            Вложения диалога
                          </CellButton>
                          <CellButton
                            before={<Icon28LockOutline />}
                            multiline
                          >
                            Запросить доступ к скрытым фото
                          </CellButton>
                          <CellButton
                            before={<Icon28LockOutline />}
                            multiline
                            onClick={() => this.openLockPhoto()}
                          >
                            Предоставить доступ к скрытым фото
                          </CellButton>
                          <Spacing separator="center"/>
                          <CellButton
                            before={<Icon28MuteOutline />}
                            multiline
                          >
                            Отключить уведомления
                          </CellButton>
                          <CellButton
                            mode="danger"
                            before={<Icon28ClearDataOutline/>}
                            multiline
                          >
                            Очистить диалог
                          </CellButton>
                          <CellButton
                            mode="danger"
                            before={<Icon28DeleteOutline/>}
                            multiline
                          >
                            Удалить диалог
                          </CellButton>
                        </List>
                      }
                    >
                      <IconButton style={{marginLeft: "auto", marginTop: "auto", marginBottom: "auto", color: "var(--icon_secondary)"}}><Icon28MoreVertical/></IconButton>
                    </Dropdown>
                    </div>
                  </div>
                  <Separator wide />
                  <div className="chat">
                    <div className="mine messages">
                      <div className="message last">
                        Привет! Как ты?
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          12:43
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16CheckDoubleOutline />
                        </div>
                      </div>
                    </div>
                    <div className="yours messages">
                      <div className="message">
                        Привет, нормально!
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataLeft">
                          12:43
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16HieroglyphCharacterOutline style={{color: "var(--text_subhead)"}} />
                        </div>
                      </div>
                      <div className="message last">
                        А ты как?
                      </div>
                      <div className="messageDataLeft">
                        12:44
                      </div>
                    </div>
                    <div className="mine messages">
                      <div className="message">
                        У меня тоже все хорошо
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          12:45
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16CheckDoubleOutline />
                        </div>
                      </div>
                      <div className="message last">
                        Чем занимаешься?
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          12:45
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16CheckDoubleOutline />
                        </div>
                      </div>
                    </div>
                    <div className="yours messages">
                    <Dropdown
                      action="click"
                      placement="top-end"
                      content={
                        <List>
                          <CellButton
                            before={<Icon28ReplyOutline />}
                            multiline
                          >
                            Ответить
                          </CellButton>
                          <CellButton
                            before={<Icon28CopyOutline />}
                            multiline
                          >
                            Скопировать
                          </CellButton>
                          <CellButton
                            before={<Icon28HieroglyphCharacterOutline />}
                            multiline
                          >
                            Перевести сообщение
                          </CellButton>
                          <CellButton
                            mode="danger"
                            before={<Icon28DeleteOutline />}
                            multiline
                          >
                            Удалить
                          </CellButton>
                          <CellButton
                            mode="danger"
                            before={<Icon28ReportOutline />}
                            multiline
                          >
                            Это спам
                          </CellButton>
                        </List>
                      }
                    >
                      <div className="message last">
                        Да вот, сижу, ничего не делаю. Скоро пойду на улицу с друзьями гулять. Может, еще зайдем куда-нибудь покушать, не решили еще.
                      </div>
                    </Dropdown>
                      <div className="messageDataLeft">
                        12:47
                      </div>
                    </div>
                    <div className="mine messages"> 
                      <div className="message last">
                        Неплохо
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          12:47
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16CheckDoubleOutline />
                        </div>
                      </div>
                    </div>
                    <div className="yours messages">
                      <div className="message last">
                        Ага
                      </div>
                      <div className="messageDataLeft">
                        12:48
                      </div>
                    </div>
                    <div className="mine messages"> 
                      <div className="message last">
                        Ну что, решили?
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          13:24
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16Done width={14} height={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="writeBarChat">
                    <Separator wide />
                    <WriteBar
                      before={
                        <WriteBarIcon
                          mode="attach"
                        />
                      }
                      inlineAfter={
                        <div>
                          <WriteBarIcon aria-label="Смайлы и стикеры">
                            <Icon28SmileOutline />
                          </WriteBarIcon>
                        </div>
                      }
                      after={
                        <div>
                          <WriteBarIcon aria-label="Смайлы и стикеры">
                            <Icon28SmileOutline />
                          </WriteBarIcon>
                          <WriteBarIcon aria-label="Записать голосовое сообщение">
                            <Icon28VoiceOutline />
                          </WriteBarIcon>
                          <WriteBarIcon mode="send" />
                        </div>
                      }
                      placeholder="Ваше сообщение..."
                    />
                  </div>
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
                              before={<Icon28MessageHeartOutline />}
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
                <div className="blockUserMessage">
                  <div style={{height: 48, display: "flex"}}>
                    <SimpleCell
                      before={<Avatar badge="online-mobile" size={35} style={{objectFit: "cover"}} src="https://sun9-18.userapi.com/impg/iCu0lPqTMBqw1c2aV9Ra5OiYd9Ki3yamQVkTfw/5Mw6yCkWOnU.jpg?size=1201x1600&quality=96&sign=7dfe1cea7dfe8b88f5a617790320848c&type=album" />}
                      badge={<Icon12Verified />}
                      disabled
                      description={<div style={{display: "flex"}}><div style={{marginRight: "5px", display: "flex", marginTop: "auto", marginBottom: "auto"}}><Icon12Articles/></div><div>Печатает...</div></div>}
                    >
                      Артём Петрунин
                    </SimpleCell>
                    <div style={{display: "flex", marginLeft: "auto"}}>
                      <IconButton style={{marginTop: "auto", marginBottom: "auto"}}><Icon28LikeOutline style={{color: "var(--icon_secondary)"}}/></IconButton>
                    <Dropdown
                      action="hover"
                      placement="bottom-end"
                      content={
                        <List>
                          <CellButton
                            before={<Icon28Profile />}
                            multiline
                          >
                            Открыть профиль
                          </CellButton>
                          <CellButton
                            before={<Icon28SearchOutline />}
                            multiline
                          >
                            Поиск
                          </CellButton>
                          <CellButton
                            before={<Icon28PictureOutline />}
                            multiline
                          >
                            Вложения диалога
                          </CellButton>
                          <CellButton
                            before={<Icon28LockOutline />}
                            multiline
                          >
                            Запросить доступ к скрытым фото
                          </CellButton>
                          <CellButton
                            before={<Icon28LockOutline />}
                            multiline
                            onClick={() => this.openLockPhoto()}
                          >
                            Предоставить доступ к скрытым фото
                          </CellButton>
                          <Spacing separator="center"/>
                          <CellButton
                            before={<Icon28MuteOutline />}
                            multiline
                          >
                            Отключить уведомления
                          </CellButton>
                          <CellButton
                            mode="danger"
                            before={<Icon28ClearDataOutline/>}
                            multiline
                          >
                            Очистить диалог
                          </CellButton>
                          <CellButton
                            mode="danger"
                            before={<Icon28DeleteOutline/>}
                            multiline
                          >
                            Удалить диалог
                          </CellButton>
                        </List>
                      }
                    >
                      <IconButton style={{marginLeft: "auto", marginTop: "auto", marginBottom: "auto", color: "var(--icon_secondary)"}}><Icon28MoreVertical/></IconButton>
                    </Dropdown>
                    </div>
                  </div>
                  <Separator wide />
                  <div className="chat">
                    <div className="mine messages">
                      <div className="message last">
                        Привет! Как ты?
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          12:43
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16CheckDoubleOutline />
                        </div>
                      </div>
                    </div>
                    <div className="yours messages">
                      <div className="message">
                        Привет, нормально!
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataLeft">
                          12:43
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16HieroglyphCharacterOutline style={{color: "var(--text_subhead)"}} />
                        </div>
                      </div>
                      <div className="message last">
                        А ты как?
                      </div>
                      <div className="messageDataLeft">
                        12:44
                      </div>
                    </div>
                    <div className="mine messages">
                      <div className="message">
                        У меня тоже все хорошо
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          12:45
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16CheckDoubleOutline />
                        </div>
                      </div>
                      <div className="message last">
                        Чем занимаешься?
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          12:45
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16CheckDoubleOutline />
                        </div>
                      </div>
                    </div>
                    <div className="yours messages">
                    <Dropdown
                      action="click"
                      placement="top-end"
                      content={
                        <List>
                          <CellButton
                            before={<Icon28ReplyOutline />}
                            multiline
                          >
                            Ответить
                          </CellButton>
                          <CellButton
                            before={<Icon28CopyOutline />}
                            multiline
                          >
                            Скопировать
                          </CellButton>
                          <CellButton
                            before={<Icon28HieroglyphCharacterOutline />}
                            multiline
                          >
                            Перевести сообщение
                          </CellButton>
                          <CellButton
                            mode="danger"
                            before={<Icon28DeleteOutline />}
                            multiline
                          >
                            Удалить
                          </CellButton>
                          <CellButton
                            mode="danger"
                            before={<Icon28ReportOutline />}
                            multiline
                          >
                            Это спам
                          </CellButton>
                        </List>
                      }
                    >
                      <div className="message last">
                        Да вот, сижу, ничего не делаю. Скоро пойду на улицу с друзьями гулять. Может, еще зайдем куда-нибудь покушать, не решили еще.
                      </div>
                    </Dropdown>
                      <div className="messageDataLeft">
                        12:47
                      </div>
                    </div>
                    <div className="mine messages"> 
                      <div className="message last">
                        Неплохо
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          12:47
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16CheckDoubleOutline />
                        </div>
                      </div>
                    </div>
                    <div className="yours messages">
                      <div className="message last">
                        Ага
                      </div>
                      <div className="messageDataLeft">
                        12:48
                      </div>
                    </div>
                    <div className="mine messages"> 
                      <div className="message last">
                        Ну что, решили?
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          13:24
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16Done width={14} height={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="writeBarChat">
                    <Separator wide />
                    <WriteBar
                      before={
                        <WriteBarIcon
                          mode="attach"
                        />
                      }
                      inlineAfter={
                        <div>
                          <WriteBarIcon aria-label="Смайлы и стикеры">
                            <Icon28SmileOutline />
                          </WriteBarIcon>
                        </div>
                      }
                      after={
                        <div>
                          <WriteBarIcon aria-label="Смайлы и стикеры">
                            <Icon28SmileOutline />
                          </WriteBarIcon>
                          <WriteBarIcon aria-label="Записать голосовое сообщение">
                            <Icon28VoiceOutline />
                          </WriteBarIcon>
                          <WriteBarIcon mode="send" />
                        </div>
                      }
                      placeholder="Ваше сообщение..."
                    />
                  </div>
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
                              before={<Icon28MessageHeartOutline />}
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
                    icon={<Icon28MessageHeartOutline width={56} height={56} />}
                    header="У Вас нет таких чатов"
                    action={<Button mode="outline" size="m" onClick={this.select} data-mode="message">Все сообщения</Button>}
                  >
                    У Вас нет избранных чатов. Чтобы добавить их, нажимайте на иконку сердечка в открытом чате. Вы можете перейти ко всем сообщениям и там кому-нибудь написать
                  </Placeholder>
                </div>
                <div className="blockUserMessage">
                  <div style={{height: 48, display: "flex"}}>
                    <SimpleCell
                      before={<Avatar badge="online-mobile" size={35} style={{objectFit: "cover"}} src="https://sun9-18.userapi.com/impg/iCu0lPqTMBqw1c2aV9Ra5OiYd9Ki3yamQVkTfw/5Mw6yCkWOnU.jpg?size=1201x1600&quality=96&sign=7dfe1cea7dfe8b88f5a617790320848c&type=album" />}
                      badge={<Icon12Verified />}
                      disabled
                      description={<div style={{display: "flex"}}><div style={{marginRight: "5px", display: "flex", marginTop: "auto", marginBottom: "auto"}}><Icon12Articles/></div><div>Печатает...</div></div>}
                    >
                      Артём Петрунин
                    </SimpleCell>
                    <div style={{display: "flex", marginLeft: "auto"}}>
                      <IconButton style={{marginTop: "auto", marginBottom: "auto"}}><Icon28LikeOutline style={{color: "var(--icon_secondary)"}}/></IconButton>
                    <Dropdown
                      action="hover"
                      placement="bottom-end"
                      content={
                        <List>
                          <CellButton
                            before={<Icon28Profile />}
                            multiline
                          >
                            Открыть профиль
                          </CellButton>
                          <CellButton
                            before={<Icon28SearchOutline />}
                            multiline
                          >
                            Поиск
                          </CellButton>
                          <CellButton
                            before={<Icon28PictureOutline />}
                            multiline
                          >
                            Вложения диалога
                          </CellButton>
                          <CellButton
                            before={<Icon28LockOutline />}
                            multiline
                          >
                            Запросить доступ к скрытым фото
                          </CellButton>
                          <CellButton
                            before={<Icon28LockOutline />}
                            multiline
                            onClick={() => this.openLockPhoto()}
                          >
                            Предоставить доступ к скрытым фото
                          </CellButton>
                          <Spacing separator="center"/>
                          <CellButton
                            before={<Icon28MuteOutline />}
                            multiline
                          >
                            Отключить уведомления
                          </CellButton>
                          <CellButton
                            mode="danger"
                            before={<Icon28ClearDataOutline/>}
                            multiline
                          >
                            Очистить диалог
                          </CellButton>
                          <CellButton
                            mode="danger"
                            before={<Icon28DeleteOutline/>}
                            multiline
                          >
                            Удалить диалог
                          </CellButton>
                        </List>
                      }
                    >
                      <IconButton style={{marginLeft: "auto", marginTop: "auto", marginBottom: "auto", color: "var(--icon_secondary)"}}><Icon28MoreVertical/></IconButton>
                    </Dropdown>
                    </div>
                  </div>
                  <Separator wide />
                  <div className="chat">
                    <div className="mine messages">
                      <div className="message last">
                        Привет! Как ты?
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          12:43
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16CheckDoubleOutline />
                        </div>
                      </div>
                    </div>
                    <div className="yours messages">
                      <div className="message">
                        Привет, нормально!
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataLeft">
                          12:43
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16HieroglyphCharacterOutline style={{color: "var(--text_subhead)"}} />
                        </div>
                      </div>
                      <div className="message last">
                        А ты как?
                      </div>
                      <div className="messageDataLeft">
                        12:44
                      </div>
                    </div>
                    <div className="mine messages">
                      <div className="message">
                        У меня тоже все хорошо
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          12:45
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16CheckDoubleOutline />
                        </div>
                      </div>
                      <div className="message last">
                        Чем занимаешься?
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          12:45
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16CheckDoubleOutline />
                        </div>
                      </div>
                    </div>
                    <div className="yours messages">
                    <Dropdown
                      action="click"
                      placement="top-end"
                      content={
                        <List>
                          <CellButton
                            before={<Icon28ReplyOutline />}
                            multiline
                          >
                            Ответить
                          </CellButton>
                          <CellButton
                            before={<Icon28CopyOutline />}
                            multiline
                          >
                            Скопировать
                          </CellButton>
                          <CellButton
                            before={<Icon28HieroglyphCharacterOutline />}
                            multiline
                          >
                            Перевести сообщение
                          </CellButton>
                          <CellButton
                            mode="danger"
                            before={<Icon28DeleteOutline />}
                            multiline
                          >
                            Удалить
                          </CellButton>
                          <CellButton
                            mode="danger"
                            before={<Icon28ReportOutline />}
                            multiline
                          >
                            Это спам
                          </CellButton>
                        </List>
                      }
                    >
                      <div className="message last">
                        Да вот, сижу, ничего не делаю. Скоро пойду на улицу с друзьями гулять. Может, еще зайдем куда-нибудь покушать, не решили еще.
                      </div>
                    </Dropdown>
                      <div className="messageDataLeft">
                        12:47
                      </div>
                    </div>
                    <div className="mine messages"> 
                      <div className="message last">
                        Неплохо
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          12:47
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16CheckDoubleOutline />
                        </div>
                      </div>
                    </div>
                    <div className="yours messages">
                      <div className="message last">
                        Ага
                      </div>
                      <div className="messageDataLeft">
                        12:48
                      </div>
                    </div>
                    <div className="mine messages"> 
                      <div className="message last">
                        Ну что, решили?
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          13:24
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16Done width={14} height={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="writeBarChat">
                    <Separator wide />
                    <WriteBar
                      before={
                        <WriteBarIcon
                          mode="attach"
                        />
                      }
                      inlineAfter={
                        <div>
                          <WriteBarIcon aria-label="Смайлы и стикеры">
                            <Icon28SmileOutline />
                          </WriteBarIcon>
                        </div>
                      }
                      after={
                        <div>
                          <WriteBarIcon aria-label="Смайлы и стикеры">
                            <Icon28SmileOutline />
                          </WriteBarIcon>
                          <WriteBarIcon aria-label="Записать голосовое сообщение">
                            <Icon28VoiceOutline />
                          </WriteBarIcon>
                          <WriteBarIcon mode="send" />
                        </div>
                      }
                      placeholder="Ваше сообщение..."
                    />
                  </div>
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
                              before={<Icon28MessageHeartOutline />}
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
                <div className="blockUserMessage">
                  <div style={{height: 48, display: "flex"}}>
                    <SimpleCell
                      before={<Avatar badge="online-mobile" size={35} style={{objectFit: "cover"}} src="https://sun9-18.userapi.com/impg/iCu0lPqTMBqw1c2aV9Ra5OiYd9Ki3yamQVkTfw/5Mw6yCkWOnU.jpg?size=1201x1600&quality=96&sign=7dfe1cea7dfe8b88f5a617790320848c&type=album" />}
                      badge={<Icon12Verified />}
                      disabled
                      description={<div style={{display: "flex"}}><div style={{marginRight: "5px", display: "flex", marginTop: "auto", marginBottom: "auto"}}><Icon12Articles/></div><div>Печатает...</div></div>}
                    >
                      Артём Петрунин
                    </SimpleCell>
                    <div style={{display: "flex", marginLeft: "auto"}}>
                      <IconButton style={{marginTop: "auto", marginBottom: "auto"}}><Icon28LikeOutline style={{color: "var(--icon_secondary)"}}/></IconButton>
                    <Dropdown
                      action="hover"
                      placement="bottom-end"
                      content={
                        <List>
                          <CellButton
                            before={<Icon28Profile />}
                            multiline
                          >
                            Открыть профиль
                          </CellButton>
                          <CellButton
                            before={<Icon28SearchOutline />}
                            multiline
                          >
                            Поиск
                          </CellButton>
                          <CellButton
                            before={<Icon28PictureOutline />}
                            multiline
                          >
                            Вложения диалога
                          </CellButton>
                          <CellButton
                            before={<Icon28LockOutline />}
                            multiline
                          >
                            Запросить доступ к скрытым фото
                          </CellButton>
                          <CellButton
                            before={<Icon28LockOutline />}
                            multiline
                            onClick={() => this.openLockPhoto()}
                          >
                            Предоставить доступ к скрытым фото
                          </CellButton>
                          <Spacing separator="center"/>
                          <CellButton
                            before={<Icon28MuteOutline />}
                            multiline
                          >
                            Отключить уведомления
                          </CellButton>
                          <CellButton
                            mode="danger"
                            before={<Icon28ClearDataOutline/>}
                            multiline
                          >
                            Очистить диалог
                          </CellButton>
                          <CellButton
                            mode="danger"
                            before={<Icon28DeleteOutline/>}
                            multiline
                          >
                            Удалить диалог
                          </CellButton>
                        </List>
                      }
                    >
                      <IconButton style={{marginLeft: "auto", marginTop: "auto", marginBottom: "auto", color: "var(--icon_secondary)"}}><Icon28MoreVertical/></IconButton>
                    </Dropdown>
                    </div>
                  </div>
                  <Separator wide />
                  <div className="chat">
                    <div className="mine messages">
                      <div className="message last">
                        Привет! Как ты?
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          12:43
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16CheckDoubleOutline />
                        </div>
                      </div>
                    </div>
                    <div className="yours messages">
                      <div className="message">
                        Привет, нормально!
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataLeft">
                          12:43
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16HieroglyphCharacterOutline style={{color: "var(--text_subhead)"}} />
                        </div>
                      </div>
                      <div className="message last">
                        А ты как?
                      </div>
                      <div className="messageDataLeft">
                        12:44
                      </div>
                    </div>
                    <div className="mine messages">
                      <div className="message">
                        У меня тоже все хорошо
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          12:45
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16CheckDoubleOutline />
                        </div>
                      </div>
                      <div className="message last">
                        Чем занимаешься?
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          12:45
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16CheckDoubleOutline />
                        </div>
                      </div>
                    </div>
                    <div className="yours messages">
                    <Dropdown
                      action="click"
                      placement="top-end"
                      content={
                        <List>
                          <CellButton
                            before={<Icon28ReplyOutline />}
                            multiline
                          >
                            Ответить
                          </CellButton>
                          <CellButton
                            before={<Icon28CopyOutline />}
                            multiline
                          >
                            Скопировать
                          </CellButton>
                          <CellButton
                            before={<Icon28HieroglyphCharacterOutline />}
                            multiline
                          >
                            Перевести сообщение
                          </CellButton>
                          <CellButton
                            mode="danger"
                            before={<Icon28DeleteOutline />}
                            multiline
                          >
                            Удалить
                          </CellButton>
                          <CellButton
                            mode="danger"
                            before={<Icon28ReportOutline />}
                            multiline
                          >
                            Это спам
                          </CellButton>
                        </List>
                      }
                    >
                      <div className="message last">
                        Да вот, сижу, ничего не делаю. Скоро пойду на улицу с друзьями гулять. Может, еще зайдем куда-нибудь покушать, не решили еще.
                      </div>
                    </Dropdown>
                      <div className="messageDataLeft">
                        12:47
                      </div>
                    </div>
                    <div className="mine messages"> 
                      <div className="message last">
                        Неплохо
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          12:47
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16CheckDoubleOutline />
                        </div>
                      </div>
                    </div>
                    <div className="yours messages">
                      <div className="message last">
                        Ага
                      </div>
                      <div className="messageDataLeft">
                        12:48
                      </div>
                    </div>
                    <div className="mine messages"> 
                      <div className="message last">
                        Ну что, решили?
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          13:24
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16Done width={14} height={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="writeBarChat">
                    <Separator wide />
                    <WriteBar
                      before={
                        <WriteBarIcon
                          mode="attach"
                        />
                      }
                      inlineAfter={
                        <div>
                          <WriteBarIcon aria-label="Смайлы и стикеры">
                            <Icon28SmileOutline />
                          </WriteBarIcon>
                        </div>
                      }
                      after={
                        <div>
                          <WriteBarIcon aria-label="Смайлы и стикеры">
                            <Icon28SmileOutline />
                          </WriteBarIcon>
                          <WriteBarIcon aria-label="Записать голосовое сообщение">
                            <Icon28VoiceOutline />
                          </WriteBarIcon>
                          <WriteBarIcon mode="send" />
                        </div>
                      }
                      placeholder="Ваше сообщение..."
                    />
                  </div>
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
                              before={<Icon28MessageHeartOutline />}
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
                <div className="blockUserMessage">
                  <div style={{height: 48, display: "flex"}}>
                    <SimpleCell
                      before={<Avatar badge="online-mobile" size={35} style={{objectFit: "cover"}} src="https://sun9-18.userapi.com/impg/iCu0lPqTMBqw1c2aV9Ra5OiYd9Ki3yamQVkTfw/5Mw6yCkWOnU.jpg?size=1201x1600&quality=96&sign=7dfe1cea7dfe8b88f5a617790320848c&type=album" />}
                      badge={<Icon12Verified />}
                      disabled
                      description={<div style={{display: "flex"}}><div style={{marginRight: "5px", display: "flex", marginTop: "auto", marginBottom: "auto"}}><Icon12Articles/></div><div>Печатает...</div></div>}
                    >
                      Артём Петрунин
                    </SimpleCell>
                    <div style={{display: "flex", marginLeft: "auto"}}>
                      <IconButton style={{marginTop: "auto", marginBottom: "auto"}}><Icon28LikeOutline style={{color: "var(--icon_secondary)"}}/></IconButton>
                    <Dropdown
                      action="hover"
                      placement="bottom-end"
                      content={
                        <List>
                          <CellButton
                            before={<Icon28Profile />}
                            multiline
                          >
                            Открыть профиль
                          </CellButton>
                          <CellButton
                            before={<Icon28SearchOutline />}
                            multiline
                          >
                            Поиск
                          </CellButton>
                          <CellButton
                            before={<Icon28PictureOutline />}
                            multiline
                          >
                            Вложения диалога
                          </CellButton>
                          <CellButton
                            before={<Icon28LockOutline />}
                            multiline
                          >
                            Запросить доступ к скрытым фото
                          </CellButton>
                          <CellButton
                            before={<Icon28LockOutline />}
                            multiline
                            onClick={() => this.openLockPhoto()}
                          >
                            Предоставить доступ к скрытым фото
                          </CellButton>
                          <Spacing separator="center"/>
                          <CellButton
                            before={<Icon28MuteOutline />}
                            multiline
                          >
                            Отключить уведомления
                          </CellButton>
                          <CellButton
                            mode="danger"
                            before={<Icon28ClearDataOutline/>}
                            multiline
                          >
                            Очистить диалог
                          </CellButton>
                          <CellButton
                            mode="danger"
                            before={<Icon28DeleteOutline/>}
                            multiline
                          >
                            Удалить диалог
                          </CellButton>
                        </List>
                      }
                    >
                      <IconButton style={{marginLeft: "auto", marginTop: "auto", marginBottom: "auto", color: "var(--icon_secondary)"}}><Icon28MoreVertical/></IconButton>
                    </Dropdown>
                    </div>
                  </div>
                  <Separator wide />
                  <div className="chat">
                    <div className="mine messages">
                      <div className="message last">
                        Привет! Как ты?
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          12:43
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16CheckDoubleOutline />
                        </div>
                      </div>
                    </div>
                    <div className="yours messages">
                      <div className="message">
                        Привет, нормально!
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataLeft">
                          12:43
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16HieroglyphCharacterOutline style={{color: "var(--text_subhead)"}} />
                        </div>
                      </div>
                      <div className="message last">
                        А ты как?
                      </div>
                      <div className="messageDataLeft">
                        12:44
                      </div>
                    </div>
                    <div className="mine messages">
                      <div className="message">
                        У меня тоже все хорошо
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          12:45
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16CheckDoubleOutline />
                        </div>
                      </div>
                      <div className="message last">
                        Чем занимаешься?
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          12:45
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16CheckDoubleOutline />
                        </div>
                      </div>
                    </div>
                    <div className="yours messages">
                    <Dropdown
                      action="click"
                      placement="top-end"
                      content={
                        <List>
                          <CellButton
                            before={<Icon28ReplyOutline />}
                            multiline
                          >
                            Ответить
                          </CellButton>
                          <CellButton
                            before={<Icon28CopyOutline />}
                            multiline
                          >
                            Скопировать
                          </CellButton>
                          <CellButton
                            before={<Icon28HieroglyphCharacterOutline />}
                            multiline
                          >
                            Перевести сообщение
                          </CellButton>
                          <CellButton
                            mode="danger"
                            before={<Icon28DeleteOutline />}
                            multiline
                          >
                            Удалить
                          </CellButton>
                          <CellButton
                            mode="danger"
                            before={<Icon28ReportOutline />}
                            multiline
                          >
                            Это спам
                          </CellButton>
                        </List>
                      }
                    >
                      <div className="message last">
                        Да вот, сижу, ничего не делаю. Скоро пойду на улицу с друзьями гулять. Может, еще зайдем куда-нибудь покушать, не решили еще.
                      </div>
                    </Dropdown>
                      <div className="messageDataLeft">
                        12:47
                      </div>
                    </div>
                    <div className="mine messages"> 
                      <div className="message last">
                        Неплохо
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          12:47
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16CheckDoubleOutline />
                        </div>
                      </div>
                    </div>
                    <div className="yours messages">
                      <div className="message last">
                        Ага
                      </div>
                      <div className="messageDataLeft">
                        12:48
                      </div>
                    </div>
                    <div className="mine messages"> 
                      <div className="message last">
                        Ну что, решили?
                      </div>
                      <div style={{display: "flex"}}>
                        <div className="messageDataRight">
                          13:24
                        </div>
                        <div style={{color: "var(--accent)", marginLeft: 5}}>
                          <Icon16Done width={14} height={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="writeBarChat">
                    <Separator wide />
                    <WriteBar
                      before={
                        <WriteBarIcon
                          mode="attach"
                        />
                      }
                      inlineAfter={
                        <div>
                          <WriteBarIcon aria-label="Смайлы и стикеры">
                            <Icon28SmileOutline />
                          </WriteBarIcon>
                        </div>
                      }
                      after={
                        <div>
                          <WriteBarIcon aria-label="Смайлы и стикеры">
                            <Icon28SmileOutline />
                          </WriteBarIcon>
                          <WriteBarIcon aria-label="Записать голосовое сообщение">
                            <Icon28VoiceOutline />
                          </WriteBarIcon>
                          <WriteBarIcon mode="send" />
                        </div>
                      }
                      placeholder="Ваше сообщение..."
                    />
                  </div>
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
              <PanelHeader
                left={<PanelHeaderBack onClick={() => goBack()} />}
                separator={true}
              >
                <PanelHeaderContent
                  aside={<Icon16Dropdown style={{transform: `rotate(${this.state.contextOpened ? "180deg" : "0"})`,}}/>}
                  onClick={this.toggleContext}
                  status={<div style={{display: "flex"}}><div style={{marginRight: "5px", display: "flex", marginTop: "auto", marginBottom: "auto"}}><Icon12Articles/></div><div>Печатает...</div></div>}
                  before={<Avatar badge="online-mobile" size={34} style={{objectFit: "cover"}} src="https://sun9-18.userapi.com/impg/iCu0lPqTMBqw1c2aV9Ra5OiYd9Ki3yamQVkTfw/5Mw6yCkWOnU.jpg?size=1201x1600&quality=96&sign=7dfe1cea7dfe8b88f5a617790320848c&type=album" />}
                >
                  Артём Петрунин
                </PanelHeaderContent>
              </PanelHeader>
              <PanelHeaderContext opened={this.state.contextOpened} onClose={this.toggleContext}>
                <List>
                  <CellButton
                    before={<Icon28Profile />}
                    multiline
                  >
                    Открыть профиль
                  </CellButton>
                  <CellButton
                    before={<Icon28SearchOutline />}
                    multiline
                  >
                    Поиск
                  </CellButton>
                  <CellButton
                    before={<Icon28PictureOutline />}
                    multiline
                  >
                    Вложения диалога
                  </CellButton>
                  <CellButton
                    before={<Icon28LockOutline />}
                    multiline
                  >
                    Запросить доступ к скрытым фото
                  </CellButton>
                  <CellButton
                    before={<Icon28LockOutline />}
                    multiline
                    onClick={() => this.openLockPhoto()}
                  >
                    Предоставить доступ к скрытым фото
                  </CellButton>
                  <CellButton
                    before={<Icon28LikeOutline />}
                    multiline
                  >
                    Добавить в избранные
                  </CellButton>
                  <Spacing separator="center"/>
                  <CellButton
                    before={<Icon28MuteOutline />}
                    multiline
                  >
                    Отключить уведомления
                  </CellButton>
                  <CellButton
                    mode="danger"
                    before={<Icon28ClearDataOutline/>}
                    multiline
                  >
                    Очистить диалог
                  </CellButton>
                  <CellButton
                    mode="danger"
                    before={<Icon28DeleteOutline/>}
                    multiline
                  >
                    Удалить диалог
                  </CellButton>
                </List>
              </PanelHeaderContext>
              <div className="chatMobile">
                <div className="mine messages">
                  <div onClick={this.openInteractionMessage} className="message last">
                    Привет! Как ты?
                  </div>
                  <div style={{display: "flex"}}>
                    <div className="messageDataRight">
                      12:43
                    </div>
                    <div style={{color: "var(--accent)", marginLeft: 5}}>
                      <Icon16CheckDoubleOutline />
                    </div>
                  </div>
                </div>
                <div className="yours messages">
                  <div onClick={this.openInteractionMessage} className="message">
                    Привет, нормально!
                  </div>
                  <div style={{display: "flex"}}>
                    <div className="messageDataLeft">
                      12:43
                    </div>
                    <div style={{color: "var(--accent)", marginLeft: 5}}>
                      <Icon16HieroglyphCharacterOutline style={{color: "var(--text_subhead)"}} />
                    </div>
                  </div>
                  <div onClick={this.openInteractionMessage} className="message last">
                    А ты как?
                  </div>
                  <div className="messageDataLeft">
                    12:44
                  </div>
                </div>
                <div className="mine messages">
                  <div onClick={this.openInteractionMessage} className="message">
                    У меня тоже все хорошо
                  </div>
                  <div style={{display: "flex"}}>
                    <div className="messageDataRight">
                      12:45
                    </div>
                    <div style={{color: "var(--accent)", marginLeft: 5}}>
                      <Icon16CheckDoubleOutline />
                    </div>
                  </div>
                  <div onClick={this.openInteractionMessage} className="message last">
                    Чем занимаешься?
                  </div>
                  <div style={{display: "flex"}}>
                    <div className="messageDataRight">
                      12:45
                    </div>
                    <div style={{color: "var(--accent)", marginLeft: 5}}>
                      <Icon16CheckDoubleOutline />
                    </div>
                  </div>
                </div>
                <div className="yours messages">
                  <div onClick={this.openInteractionMessage} className="message last">
                    Да вот, сижу, ничего не делаю. Скоро пойду на улицу с друзьями гулять. Может, еще зайдем куда-нибудь покушать, не решили еще.
                  </div>
                  <div className="messageDataLeft">
                    12:47
                  </div>
                </div>
                <div className="mine messages"> 
                  <div onClick={this.openInteractionMessage} className="message last">
                    Неплохо
                  </div>
                  <div style={{display: "flex"}}>
                    <div className="messageDataRight">
                      12:47
                    </div>
                    <div style={{color: "var(--accent)", marginLeft: 5}}>
                      <Icon16CheckDoubleOutline />
                    </div>
                  </div>
                </div>
                <div className="yours messages">
                  <div onClick={this.openInteractionMessage} className="message last">
                    Ага
                  </div>
                  <div className="messageDataLeft">
                    12:48
                  </div>
                </div>
                <div className="mine messages"> 
                  <div onClick={this.openInteractionMessage} className="message last">
                    Ну что, решили?
                  </div>
                  <div style={{display: "flex"}}>
                    <div className="messageDataRight">
                      13:24
                    </div>
                    <div style={{color: "var(--accent)", marginLeft: 5}}>
                      <Icon16Done width={14} height={14} />
                    </div>
                  </div>
                </div>
              </div>
              <FixedLayout vertical="bottom">
                <Separator wide />
                <WriteBar
                  before={
                    <WriteBarIcon
                      mode="attach"
                    />
                  }
                  inlineAfter={
                    <div>
                      <WriteBarIcon aria-label="Смайлы и стикеры">
                        <Icon28SmileOutline />
                      </WriteBarIcon>
                    </div>
                  }
                  after={
                    <div>
                      <WriteBarIcon aria-label="Смайлы и стикеры">
                        <Icon28SmileOutline />
                      </WriteBarIcon>
                      <WriteBarIcon aria-label="Записать голосовое сообщение">
                        <Icon28VoiceOutline />
                      </WriteBarIcon>
                      <WriteBarIcon mode="send" />
                    </div>
                  }
                  placeholder="Cообщение"
                />
              </FixedLayout>
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

export default connect(null, mapDispatchToProps)(TestChatPanel);