/**
import { StyleSheet, Text, View, Button, Keyboard, Alert, TouchableOpacity, ScrollView, Image, } from 'react-native';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    renderers
} from 'react-native-popup-menu';
import { LinearGradient } from 'expo-linear-gradient';
import { Card } from 'react-native-elements';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import FIcon from 'react-native-vector-icons/Feather';
import EIcon from 'react-native-vector-icons/EvilIcons';
import IIcon from 'react-native-vector-icons/Ionicons';
import { color } from 'react-native-reanimated';

     const { Popover } = renderers;
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <View>
            <ScrollView stickyHeaderIndices={[0]} style={styles.scrollStyle}>
                <View style={{ elevation: 5 }}>
                    <View style={{ height: 30, backgroundColor: 'white' }}></View>
                    <View style={{ alignSelf: 'center', height: 50, flexDirection: 'row', backgroundColor: 'white', alignContent: 'space-around' }}>
                        <TouchableOpacity style={{ justifyContent: 'center', flex: 1, alignItems: 'flex-end', }}>
                            <Image
                                source={require('../../assets/Logo.png')}
                                style={{ width: '95%', height: '76%', }}
                            />
                        </TouchableOpacity>

                        <View style={{ flex: .8, flexDirection: 'row', alignItems: 'center', marginRight: '4%', alignSelf: 'center', justifyContent: 'flex-end' }}>
                            <TouchableOpacity style={{}}
                            //  onPress={()=>{}}
                            >
                                <Menu renderer={Popover} rendererProps={{ placement: 'bottom' }} onSelect={value => alert(`Selected number: ${value}`)}>
                                    <MenuTrigger>
                                        <FIcon name="more-vertical" style={{ fontSize: 30, }}></FIcon>
                                    </MenuTrigger>

                                    <MenuOptions customStyles={test}>
                                        <MenuOption value={1} text='Replace Task'
                                            customStyles={{ optionText: { color: '#FEC507' } }}
                                        />
                                        <MenuOption value={2} text='Delete Task'
                                            customStyles={{ optionText: { color: '#DC5454' } }}
                                        />
                                    </MenuOptions>
                                </Menu>



                            </TouchableOpacity>
                            <TouchableOpacity style={{}}

                            >

                                <EIcon name="gear" style={{ fontSize: 35 }}></EIcon>

                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', width: '90%', alignItems: 'flex-start', }}>
                    <Text style={{ fontSize: 30, }}>Discussions</Text>
                    <Text style={{ color: 'gray', alignSelf: 'center', fontSize: 28 }}> (n)</Text>
                </View >

                <View style={{ marginBottom: 50 }}>
                    <Card containerStyle={styles.listCard}>
                        <Card.Title>HELLO WORLD</Card.Title>
                        <Card.Divider />
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component structure than actual design.
                </Text>


                    </Card>

                </View>
            </ScrollView >

        </View>
    );
};


const test = {
    optionsContainer: {
        width: 125,
        height: 80,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'

    },

};


const styles = StyleSheet.create({
    scrollStyle: {

        borderColor: 'red',
        backgroundColor: 'white',
        paddingTop: 0,
        paddingBottom: 0,
        position: 'relative'
    },
    TouchableOpacityStyle: {
        //Here is the trick
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        //backgroundColor:'black'
    },
    logoView: {
        flex: 2,
        width: '85%',
        height: 450,

        alignSelf: 'center',

        marginTop: '-3%',
        marginBottom: '-18%'
    },
    logoPic: {
        height: '100%',
        width: '100%',


    },
    nameInput: {
        flex: 1,
        height: 80,
        marginBottom: '5%',
        flexDirection: 'row',

        borderColor: 'grey',
        alignSelf: 'stretch'
    },
    nameInputBoxes: {
        flex: 1,
        marginRight: '3%',
        marginLeft: '3%',
        justifyContent: 'center',
        justifyContent: 'space-evenly',


        borderColor: 'orange'
    },
    nameBox: {
        height: 45,
        backgroundColor: 'black',
        color: 'white',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        paddingHorizontal: 10,
        fontSize: 18
    },
    emailInputBox: {
        flex: 1,
        width: '70%',
        height: 80,
        marginBottom: '5%',
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        borderColor: 'purple',
        marginBottom: 25
    },
    emailBox: {
        height: 50,
        backgroundColor: 'white',
        color: 'black',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        paddingHorizontal: 10,
        fontSize: 18,
    },
    passwordInputBox: {
        flex: 1,
        width: '70%',
        height: 80,
        marginBottom: '5%',
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        borderColor: 'purple',
        marginBottom: 25
    },
    passwordBox: {
        height: 50,
        backgroundColor: 'white',
        color: 'black',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        paddingHorizontal: 10,
        fontSize: 18,
    },

    buttonBox: {
        flex: 1,
        width: '63%',
        height: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: '7%',
        borderColor: 'purple',
        marginTop: 30
    },
    buttonStyle: {
        backgroundColor: 'white',
        height: '100%',
        justifyContent: 'center',
        backgroundColor: 'transparent'

    },
    buttonText: {
        color: 'white',
        alignSelf: 'center',
    },
    backIcon: {
        flex: 1,
        height: 80,
        marginBottom: '5%',
        flexDirection: 'row',

        width: '95%',
        borderColor: 'grey',
        alignSelf: 'center'
    },

    listCard: {
        borderRadius: 30,
        elevation: 4,
        marginBottom: 15
    }
});
 */