import React from 'react';
import { Scene, Stack, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm'; 
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 12 }}>
            <Stack key="root" hideNavBar>
                <Scene key="auth">
                    <Scene 
                        key="login" 
                        component={LoginForm} 
                        title='Please Log in' 
                        initial
                    />
                </Scene>
                <Scene key="main">
                    <Scene
                        rightTitle='Add'
                        onRight={() => Actions.employeeCreate()}
                        key="employeeList" 
                        component={EmployeeList} 
                        title='Employees List'
                        initial 
                    />
                    <Scene
                        key="employeeCreate" 
                        component={EmployeeCreate} 
                        title='Create Employee' 
                    />
                </Scene>
            </Stack>
        </Router>
    );
};


export default RouterComponent;
