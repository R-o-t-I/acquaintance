import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout} from "../../store/router/actions";

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
	Spacing,
  Group
} from '@vkontakte/vkui/';

import {
	Icon12Verified,
	Icon16Dropdown,
	Icon28MessageOutline,
	Icon28MessageUnreadTop
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
        const {id} = this.props;

        return (
            <Panel id={id}>
              <PanelHeader separator={false}>
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
              <Search style={{backgroundColor: "var(--background_content)", marginLeft: "1px", marginRight: "1px", borderRadius: "0px 0px 8px 8px", marginBottom: "10px"}}/>
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
                <Group>
                <SimpleCell 
                  before={<Avatar size={48} style={{objectFit: "cover"}} src="https://sun9-18.userapi.com/impg/iCu0lPqTMBqw1c2aV9Ra5OiYd9Ki3yamQVkTfw/5Mw6yCkWOnU.jpg?size=1201x1600&quality=96&sign=7dfe1cea7dfe8b88f5a617790320848c&type=album" />}
                  badge={<Icon12Verified />}
                  after={<Counter style={{marginLeft: 10}} mode="primary">4</Counter>}
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
                  before={<Avatar size={48} style={{objectFit: "cover"}} src="" />}
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
                </Group>
              </div> : null : null}

              {this.state.activeTab === "message" ? this.state.mode === "unread" ?<div>
                <Group>
                <SimpleCell 
                  before={<Avatar size={48} style={{objectFit: "cover"}} src="https://sun9-18.userapi.com/impg/iCu0lPqTMBqw1c2aV9Ra5OiYd9Ki3yamQVkTfw/5Mw6yCkWOnU.jpg?size=1201x1600&quality=96&sign=7dfe1cea7dfe8b88f5a617790320848c&type=album" />}
                  badge={<Icon12Verified />}
                  after={<Counter style={{marginLeft: 10}} mode="primary">4</Counter>}
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
                </Group>
              </div> : null : null}
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