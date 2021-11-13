import React from 'react';
import {connect} from 'react-redux';

import {goBack} from "../../store/router/actions";

import {
  Panel, 
  PanelHeader, 
  PanelHeaderBack, 
  Placeholder,
  Group
} from "@vkontakte/vkui";

import {
  Icon56GhostOutline
} from '@vkontakte/icons';

class NotificationsPanel extends React.Component {

  render() {
    const {id, goBack} = this.props;

    return (
      <Panel id={id}>
        <PanelHeader
          left={<PanelHeaderBack onClick={() => goBack()}/>}
        >
          Уведомления
        </PanelHeader>
        <Group>
          <Placeholder
            icon={<Icon56GhostOutline/>}
            header='У Вас нет уведомлений'
          />
        </Group>
      </Panel>
    );
  }

}

const mapDispatchToProps = { goBack };

export default connect(null, mapDispatchToProps)(NotificationsPanel);