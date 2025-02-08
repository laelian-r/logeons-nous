import { StyleSheet, View, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const home = () => {
    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Découvrir</Text>
                <AntDesign name="search1" size={30} />
            </View>

            <View style={styles.section}>
                <View style={styles.article}>
                    <Text>Article 1</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    // body: {
    //     padding: '10%',
    // },

    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        marginTop: 50,
    },

    headerText: {
        fontSize: 30,
    },
});

export default home;