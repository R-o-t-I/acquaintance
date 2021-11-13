import React from 'react';
import {connect} from 'react-redux';

import {setPage, openPopout, closePopout} from "../../store/router/actions";

import {
    Panel,
    PanelHeader,
    Group,
} from "@vkontakte/vkui";

import bridge from '@vkontakte/vk-bridge';

class PeoplePanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        const {id, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    noShadow={true}
                >
                  Люди
                </PanelHeader>
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

export default connect(null, mapDispatchToProps)(PeoplePanel);