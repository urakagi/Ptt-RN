import React from "react";
import {Article} from "../model/article";
import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import utils from "../util/utils";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function ArticleListItem(props) {
    const a = props.article;
    const createTime = new Date(a.create_time * 1000);
    return (
        <TouchableWithoutFeedback onPress={openArticle}>
            <View style={styles.listItem}>
                <View style={styles.firstRow}>
                    <Text style={[styles.text, styles.secondaryText]}>[{a.class}]</Text>
                    <Icon style={[styles.icon]} name={'schedule'} size={16}/>
                    <Text style={[styles.text, styles.secondaryText]}>{
                        `${utils.timestampToMonth(createTime)}-${utils.timestampToDay(createTime)}`}</Text>
                    <Icon style={[styles.icon]} name={'person'} size={16}/>
                    <Text style={[styles.text, styles.secondaryText]}>{a.owner}</Text>
                </View>
                <View style={styles.secondRow}>
                    <Text style={[styles.text, styles.primaryText]}>{a.title}</Text>
                </View>
                <View style={styles.thirdRow}>
                    <Icon style={[styles.icon]} name={'upgrade'} size={16}/>
                    <Text style={[styles.text, styles.secondaryText]}>{a.recommend}</Text>
                    <Icon style={[styles.icon]} name={'chat-bubble-outline'} size={16}/>
                    <Text style={[styles.text, styles.secondaryText]}>{a.n_comments}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

function openArticle() {

}

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        marginVertical: 8,
        marginHorizontal: 14
    },
    text: {
        color: 'white'
    },
    primaryText: {
        flex: 1,
        fontSize: 20
    },
    secondaryText: {
        fontSize: 16,
        color: '#AAA',
        marginRight: 10
    },
    title: {
        color: '#AAA',
        fontSize: 10
    },
    firstRow: {
        flexDirection: 'row',
        textAlignVertical: 'center'
    },
    secondRow: {
        flexDirection: 'row',
    },
    thirdRow: {
        flexDirection: 'row',
    },
    icon: {
        color: 'white',
        marginRight: 3,
        textAlignVertical: 'center'
    }
})
