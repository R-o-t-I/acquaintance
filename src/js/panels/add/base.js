import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout} from "../../store/router/actions";

import {
  Panel,
  PanelHeader,
  Group
} from "@vkontakte/vkui";

import {

} from '@vkontakte/icons';

import bridge from '@vkontakte/vk-bridge';

class AddPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

    render() {
        const {id} = this.props;

        return (
            <Panel id={id}>
              <PanelHeader noShadow={true}>Добавить запись</PanelHeader>
              <Group>
                    
              </Group>
            </Panel>
        );
    }

}

const mapDispatchToProps = {
  setPage,
  openPopout,
  closePopout
};

export default connect(null, mapDispatchToProps)(AddPanel);