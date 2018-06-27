import React from 'react'
import {
    BrowserRouter,
    Switch
} from 'react-router-dom'
import {Route} from 'react-router-dom'
import routes from './routes'
import Main from '../components/layouts/DefaultLayout'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            {routes.map((route,i) => {
                let {component: Component, ...rest} = {...route}
                return <Route key={i} {...rest} render={props => (
                        <Main><Component key={i} {...props}/></Main>
                    )}/>
            })}
        </Switch>
    </BrowserRouter>
);

export default Routes;
