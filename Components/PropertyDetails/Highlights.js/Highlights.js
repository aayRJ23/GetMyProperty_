import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import Color from '../../../constants/Color';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Icon } from 'react-native-elements';


const Highlights = () => {
    // Dummy data for FlatList
    const data = [
        { id: 1, title: "Property Highlight", data: [{ text: "Visitors car Parking", icon: "car" }, { text: "On-Call maintenance stuff", icon: "walk-outline" }, { text: "Car Parking", icon: "star" }] },
        { id: 2, title: "Property Highlight", data: [{ text: "School", icon: "business-outline" }, { text: "Bus station", icon: "bus" }, { text: "Car Parking", icon: "car-sport-outline" }] },
    ];

    // Render item for FlatList
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <View style={styles.items}>
                {item.data.map((data, i) => (
                    <View style={styles.oneItem} key={i}>
                        <Icon name={data.icon} size={24} style={styles.HighlightsIcon} type='ionicon' />
                        <Text style={styles.HighlightsText}>{data.text}</Text>
                    </View>
                ))}
            </View>
        </View>

    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Icon name='shield-checkmark-outline' type='ionicon'
                    style={styles.image} size={50} />
                <View style={styles.headerContent}>
                    <Text style={styles.heading}>Other Key Highlights</Text>
                    <Text style={styles.subheading}>Why you should choose the property</Text>
                </View>
            </View>
            {/* FlatList */}
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: Color.homeBackground1
    },
    header: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        // width: '50%', // 1/4th of the container width
        // height: 100,
        marginHorizontal: 10,
        // borderWidth: 1,
        // paddingLeft: 0,
    },
    headerContent: {
        flex: 1, // Takes the remaining 3/4th of the container width
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subheading: {
        fontSize: 16,
        color: '#666',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        margin: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // iOS shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // Android elevation
        elevation: 5,
    },
    items: {
        alignItems: 'flex-start',
    },
    oneItem: {
        flexDirection: 'row',

        padding: 10,
    },
    HighlightsIcon: {
        marginRight: 10,
    },
    cardTitle: {
        fontSize: 18,
        // fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Highlights;
