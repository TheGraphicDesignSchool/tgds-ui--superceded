import React from 'react';
import styled from 'styled-components';
import {CBox,RBox} from "./containers";
import PageContainer from './page-container'

const log = console.log

const Container = styled(CBox)`
`

const Header = styled.div`
  background: white;
`

const Body = styled(RBox)`
  background: tomato;
`

const Sidebar = styled(CBox)`
  flex: 0 0 ${props => props.theme.sidebar.width};
  background: rgba(0,0,0,.1)
`

const Aside = styled(CBox)`
  flex: 0 0 ${props => props.theme.aside.width};
  background: rgba(0,0,0,.1)
`


export default props => {
    log(props.theme)
    return (
        <Container>
            {props.renderHeader && (
                <Header theme={props.theme}>
                    {props.renderHeader({theme: props.theme})}
                </Header>
            )}
            <Body>
                {props.renderSidebar && (
                    <Sidebar theme={props.theme}>
                        {props.renderSidebar({theme: props.theme})}
                    </Sidebar>
                )}
                <PageContainer>
                    {props.children}
                </PageContainer>
                {props.renderAside && (
                    <Aside theme={props.theme}>
                        {props.renderAside({theme: props.theme})}
                    </Aside>
                )}
            </Body>
        </Container>
    )
}
