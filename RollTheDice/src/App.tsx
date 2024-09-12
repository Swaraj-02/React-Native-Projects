import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {trigger} from 'react-native-haptic-feedback';

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

// Typescript in JS you can skip it [for type safety]-
type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

function App(): React.JSX.Element {
  //Player-1
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const [color, setColor] = useState('#FFFFFF');
  const [showDiceValOne, setShowDiceValOne] = useState(1);

  //Player-2
  const [diceImageTwo, setDiceImageTwo] =
    useState<ImageSourcePropType>(DiceOne);
  const [colorTwo, setColorTwo] = useState('#FFFFFF');

  const [showDiceValTwo, setShowDiceValTwo] = useState(1);

  //Player-1 Roll dice
  const rollDiceOnTap = () => {
    //Player-1
    let randomNum = Math.floor(Math.random() * 6) + 1;
    setShowDiceValOne(randomNum);

    switch (randomNum) {
      case 1:
        setDiceImage(DiceOne);
        setColor('FFFFFF');
        break;
      case 2:
        setDiceImage(DiceTwo);
        setColor('#fcba03');

        break;
      case 3:
        setDiceImage(DiceThree);
        setColor('#ed2009');

        break;
      case 4:
        setDiceImage(DiceFour);
        setColor('#1df0e5');

        break;
      case 5:
        setDiceImage(DiceFive);
        setColor('#d419cd');

        break;
      case 6:
        setDiceImage(DiceSix);
        setColor('#24e612');

        break;
      default:
        setDiceImage(DiceOne);
        setColor('FFFFFF');

        break;
    }

    // Trigger haptic feedback
    trigger('impactLight', options);
  };

  //Player-2 Roll dice
  const rollDiceOnTapTwo = () => {
    //Player-2
    let randomNumTwo = Math.floor(Math.random() * 6) + 1;
    setShowDiceValTwo(randomNumTwo);

    switch (randomNumTwo) {
      case 1:
        setDiceImageTwo(DiceOne);
        setColorTwo('FFFFFF');
        break;
      case 2:
        setDiceImageTwo(DiceTwo);
        setColorTwo('#fcba03');

        break;
      case 3:
        setDiceImageTwo(DiceThree);
        setColorTwo('#ed2009');

        break;
      case 4:
        setDiceImageTwo(DiceFour);
        setColorTwo('#1df0e5');

        break;
      case 5:
        setDiceImageTwo(DiceFive);
        setColorTwo('#d419cd');

        break;
      case 6:
        setDiceImageTwo(DiceSix);
        setColorTwo('#24e612');

        break;
      default:
        setDiceImageTwo(DiceOne);
        setColorTwo('FFFFFF');

        break;
    }

    // Trigger haptic feedback
    trigger('impactLight', options);
  };

  const handelReset = () => {
    setDiceImage(DiceOne);
    setDiceImageTwo(DiceOne);
    setColor('#FFFFFF');
    setColorTwo('#FFFFFF');
    setShowDiceValOne(1);
    setShowDiceValTwo(1);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={[styles.diceBox]}>
          <Pressable onPress={rollDiceOnTap}>
            <Text style={styles.rollDiceBtnText}> Roll the dice</Text>
          </Pressable>
          <Dice imageUrl={diceImage} />
        </View>

        <View style={styles.playerContainer}>
          <View>
            <Text style={styles.playerTxt}>Player-1</Text>
            <View style={[styles.playerBox, {backgroundColor: color}]}>
              <Text style={styles.diceVal}>{showDiceValOne}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.playerTxt}>Player-2</Text>
            <View style={[styles.playerBox, {backgroundColor: colorTwo}]}>
              <Text style={styles.diceVal}>{showDiceValTwo}</Text>
            </View>
          </View>
        </View>

        <View style={[styles.diceBox]}>
          <Dice imageUrl={diceImageTwo} />
          <Pressable onPress={rollDiceOnTapTwo}>
            <Text style={styles.rollDiceBtnText}> Roll the dice</Text>
          </Pressable>
        </View>
        <View>
          <TouchableOpacity onPress={handelReset}>
            <Text style={styles.resetBtnText}>Reset The Game</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF2F2',
    paddingVertical: 16,
  },
  diceBox: {
    alignItems: 'center',
  },
  playerContainer: {
    flexDirection: 'row',
    gap: 2,
  },
  playerTxt: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#000000',
    fontSize: 18,
  },
  playerBox: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceVal: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
  },
  diceImage: {
    width: 120,
    height: 120,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 14,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  resetBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    backgroundColor: '#d419cd',
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '700',
  },
});

export default App;
