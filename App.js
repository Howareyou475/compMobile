import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './screens/Home'
import Login from './screens/Login'
import Register from './screens/Register'
import Account from './screens/Account'
import Collection from './screens/Collection'
import Detail from './screens/Detail'
import Add from './screens/Add'

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Register" component={Register} />
				<Stack.Screen name="Account" component={Account} />
				<Stack.Screen name="Collection" component={Collection} />
				<Stack.Screen name="Detail" component={Detail} />
				<Stack.Screen name="Add" component={Add} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
