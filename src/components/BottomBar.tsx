import React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Home from '../screen/Home';
import Cart from '../screen/Cart';
import Profile from '../screen/Profile';

const BottomBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'cart', title: 'Cart', icon: 'album' },
    { key: 'profile', title: 'Profile', icon: 'profile' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    cart: Cart,
    profile: Profile,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomBar;
