    import {createStackNavigator} from 'react-navigation-stack';
    import {createAppContainer}  from 'react-navigation';
    import Login from '../screens/Login';
    import Register from '../screens/Register';
    import SiteList from '../screens/SiteList';
    import SiteDetail from '../screens/SiteDetail';

    const stackNavigatorOptions = {
        headerShown: true
    }
    const AppNavigator = createStackNavigator(
        {
            Login:{screen: Login, },
            Register:{screen:Register},
            SiteList:{screen:SiteList},
            SiteDetail:{screen:SiteDetail}
        },
        {
            defaultNavigationOptions : stackNavigatorOptions
        }
    );
    const AppContainer = createAppContainer(AppNavigator);
export default createAppContainer(AppContainer);