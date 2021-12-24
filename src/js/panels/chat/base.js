import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout} from "../../store/router/actions";

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
  IconButton
} from '@vkontakte/vkui/';

import {
	Icon12Verified,
	Icon16Dropdown,
	Icon28MessageOutline,
	Icon28MessageUnreadTop,
  Icon28SearchOutline,
  Icon56MessagesOutline
} from '@vkontakte/icons';

import bridge from '@vkontakte/vk-bridge';

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
        const {id, platform} = this.props;

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
              </PanelHeader>
              
              {this.state.activeTab === "message" ? this.state.mode === "message" ?<div style={{display: "flex"}}>
                <div className="listUsersMessage">
                  <Search />
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
                  <Search />
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
              || queryGet('vk_platform') === 'mobile_android_messenger'
              || queryGet('vk_platform') === 'mobile_iphone_messenger'
              || queryGet('vk_platform') === 'mobile_web') && (<div>
              <PanelHeader left={<IconButton><Icon28SearchOutline /></IconButton>} separator={true}>
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
                  before={<Icon28MessageUnreadTop />}
                  multiline
                >
                  Непрочитанные
                </CellButton>
              </List>
              </PanelHeaderContext>
              
              {this.state.activeTab === "message" ? this.state.mode === "message" ?<div>
                <div>
                  <SimpleCell
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
              </div>)
            }
            </Panel>
        );
    }

}

const mapDispatchToProps = {
  setPage,
  openPopout,
  closePopout
};

export default connect(null, mapDispatchToProps)(ChatPanel);