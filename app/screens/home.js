import { StyleSheet, ScrollView, View, FlatList, Text, ImageBackground } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import houseList from '@/assets/data/data-apartments.json';

const home = () => {
    return (
        <ScrollView>
            <View style={styles.body}>
            <View style={styles.header}>
                    <Text style={styles.headerText}>Découvrir</Text>
                    <AntDesign name="search1" size={30} />
                </View>

                <FlatList 
                data={houseList} 
                horizontal 
                style={styles.flatList}
                contentContainerStyle={{gap: 20}} 
                //  keyExtractor={
                //     (item) => item.cover_image_url.toLowerCase().toString() + 
                //     Math.floor(Math.random() * 1000)
                //  } 
                renderItem={({item}) => 
                    <View style={styles.article}>
                        <ImageBackground 
                        source={{
                            uri: item.cover_image_url
                        }} 
                        style={styles.articleImage}
                        >

                            <View style={styles.tagContainer}>
                                <View style={styles.tag}>
                                    <Text style={styles.tagText}>Nouveau</Text>
                                </View>
                            </View>

                        </ImageBackground>

                        <View style={styles.infosLocation}>
                            <Text style={styles.location}>{item.location_city}</Text>
                            <View style={styles.articleLabels}>
                                <AntDesign name="star" size={24} color="#fe9379" />
                                <Text>5.0</Text>
                            </View>
                        </View>

                        <View style={styles.infosLocation}>
                            <Text style={styles.price}>{item.month_price}€ / mois</Text>
                            <View style={styles.articleLabels}>
                                <AntDesign name="user" size={24} color="#fe9379" />
                                <Text>3 visiteurs</Text>
                            </View>
                        </View>
                    </View>
                } />



                <View style={styles.owner}>
                    <Text style={styles.ownerText}>Nos meilleurs propriétaires</Text>
                </View>

                <FlatList 
                data={houseList} 
                horizontal 
                style={styles.flatList}
                contentContainerStyle={{gap: 20}} 
                //  keyExtractor={
                //     (item) => item.cover_image_url.toLowerCase().toString() + 
                //     Math.floor(Math.random() * 1000)
                //  } 
                renderItem={({item}) => 
                    <View style={styles.article}>
                        <ImageBackground 
                        source={{
                            uri: item.cover_image_url
                        }} 
                        style={styles.articleImage}
                        >
                        </ImageBackground>

                        <View style={styles.infosLocation}>
                            <Text style={styles.location}>{item.location_city}</Text>
                            <View style={styles.articleLabels}>
                                <AntDesign name="star" size={24} color="#fe9379" />
                                <Text>5.0</Text>
                            </View>
                        </View>

                        <View style={styles.infosLocation}>
                            <Text style={styles.price}>{item.month_price}€ / mois</Text>
                            <View style={styles.articleLabels}>
                                <AntDesign name="user" size={24} color="#fe9379" />
                                <Text>3 visiteurs</Text>
                            </View>
                        </View>
                    </View>
                } />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    body: {
        paddingHorizontal: 15,
        display: 'flex',
        gap: 15,
        paddingBottom: 25,
    },

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

    flatList: {
        paddingVertical: 15,
    },

    article: {
        display: 'flex',
        gap: 10,
    },

    articleImage: {
        height: 200,
        width: 300,
        borderRadius: 20,
        overflow: 'hidden',
        padding: 15,
    },

    tagContainer: {
        display: 'flex',
        flexDirection: 'row',
    },

    tag: {
        backgroundColor: '#4e5ac8',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 50,
        opacity: 0.8,
    },

    tagText: {
        color: 'white',
    },

    infosLocation: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    location: {
        fontSize: 25,
    },

    price: {
        fontSize: 20,
        color: '#8a8a8a',
    },

    articleLabels: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(243,243,243,255)',
        padding: 10,
        borderRadius: 5,
    },

    owner: {
        // marginTop: 50,
    },

    ownerText: {
        fontSize: 25,
    },
});

export default home;