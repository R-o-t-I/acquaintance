import React from 'react';
import {connect} from 'react-redux';

import {openModal} from "../../store/router/actions";

import {
    ModalPage, 
    ModalPageHeader, 
    PanelHeaderButton, 
    withPlatform, 
    IOS,
    Div,
    Cell,
    Subhead,
    Link,
    FormLayout,
    FormItem,
    Input,
    Button,
    Group
} from "@vkontakte/vkui";
import {
    Icon24Dismiss,
    Icon24Cancel
} from '@vkontakte/icons'
import { Checkbox } from '@vkontakte/vkui/dist/components/Checkbox/Checkbox';

class PublicationModal extends React.Component {

    render() {
        const {id, onClose, openModal, platform} = this.props;

        return (
            <ModalPage
                id={id}
                header={
                    <ModalPageHeader
                        left={platform !== IOS &&
                        <PanelHeaderButton onClick={onClose}><Icon24Cancel/></PanelHeaderButton>}
                        right={platform === IOS &&
                        <PanelHeaderButton onClick={onClose}><Icon24Dismiss/></PanelHeaderButton>}
                    >
                        Публикация
                    </ModalPageHeader>
                }
                onClose={onClose}
                settlingHeight={80}
            >
                <Group>
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
                                onChange={this.onChange}
                            />
                        </FormItem>
                        <Checkbox>Доступна только донам</Checkbox>
                        <Checkbox>Показывать автора</Checkbox>
                    </FormLayout>
                    <FormItem>
                        <Button size="l" stretched>Сохранить</Button>
                    </FormItem>
                </Group>
                <Div style={{marginBottom: 20}}></Div>
            </ModalPage>
        );
    }

}

const mapDispatchToProps = {
    openModal
};

export default withPlatform(connect(null, mapDispatchToProps)(PublicationModal));