import {View, Text} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const home = () => {
    return (
        <View style>
            <Text>Découvrir</Text>
            <AntDesign name="search1" size={24} color="black" />
        </View>
    );
};

export default home;