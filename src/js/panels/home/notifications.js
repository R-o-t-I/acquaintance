import React from 'react';
import {connect} from 'react-redux';

import {goBack} from "../../store/router/actions";

import {
  Panel, 
  PanelHeader, 
  PanelHeaderBack, 
  Placeholder,
  Group,
  platform,
  VKCOM,
  SimpleCell,
  Avatar,
  Link
} from "@vkontakte/vkui";

import {
  Icon56GhostOutline
} from '@vkontakte/icons';

class NotificationsPanel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    const {id, goBack, platform} = this.props;

    return (
      <Panel id={id}>
        <PanelHeader
          left={<PanelHeaderBack onClick={() => goBack()} label={platform === VKCOM ? 'Назад' : undefined} />}
        >
          Уведомления
        </PanelHeader>
        <Group>
          <SimpleCell
            before={<Avatar size={48} style={{objectFit: "cover"}} className="avatar-for-notifications" src="https://sun9-18.userapi.com/impg/iCu0lPqTMBqw1c2aV9Ra5OiYd9Ki3yamQVkTfw/5Mw6yCkWOnU.jpg?size=1201x1600&quality=96&sign=7dfe1cea7dfe8b88f5a617790320848c&type=album" />}
            description="25 мая 2021, 01:14"
            disabled
            multiline
          >
            <div className="text-notifications"><Link>Артём Петрунин</Link> подписался на Ваш профиль подписался на Ваш профиль подписался на Ваш профиль подписался на Ваш профиль подписался на Ваш профиль подписался на Ваш профиль</div>
          </SimpleCell>
          <SimpleCell
            before={<Avatar size={48} style={{objectFit: "cover"}} className="avatar-for-notifications" src="https://sun9-18.userapi.com/impg/iCu0lPqTMBqw1c2aV9Ra5OiYd9Ki3yamQVkTfw/5Mw6yCkWOnU.jpg?size=1201x1600&quality=96&sign=7dfe1cea7dfe8b88f5a617790320848c&type=album" />}
            description="24 мая 2021, 01:14"
            disabled
            multiline
          >
            <div className="text-notifications"><Link>Артём Петрунин</Link> оценил Вашу <Link>запись</Link></div>
          </SimpleCell>
          <SimpleCell
            before={<Avatar size={48} style={{objectFit: "cover"}} className="avatar-for-notifications" src="https://sun9-18.userapi.com/impg/iCu0lPqTMBqw1c2aV9Ra5OiYd9Ki3yamQVkTfw/5Mw6yCkWOnU.jpg?size=1201x1600&quality=96&sign=7dfe1cea7dfe8b88f5a617790320848c&type=album" />}
            after={<img className="img-gifts-for-notifications" src="https://vk.com/images/gift/884/512.png" />}
            description="23 мая 2021, 01:14"
            disabled
            multiline
          >
            <div className="text-notifications"><Link>Артём Петрунин</Link> подарил Вам подарок</div>
          </SimpleCell>
          {/*Если нет уведомлений*/}
          {/*
          <Placeholder
            icon={<Icon56GhostOutline/>}
            header='У Вас нет уведомлений'
          />
          */}
        </Group>
      </Panel>
    );
  }

}

const mapDispatchToProps = { goBack };

export default connect(null, mapDispatchToProps)(NotificationsPanel);