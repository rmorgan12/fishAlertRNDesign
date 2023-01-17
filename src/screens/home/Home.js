import React from 'react';
import { Button, View, Text, Image, StyleSheet, Pressable, AutoHeightImage } from 'react-native';
import { BleManager } from 'react-native-ble-plx';

// bleManager is name to access the BleManager Package
export const bleManager = new BleManager();

//Scan for BLE Device
export default class BleScanning {

  //Initiallizing Scan for BLE Device
  /*
  startScanning(onNewDevice: (device: BleDevice) => void) {
    bleManager.startDeviceScan([], null, (error, device) => {
      if (
        device?.name?.toUpperCase().includes(FIXED_NAME) ||
        device?.localName?.toUpperCase().includes(FIXED_NAME)
      ) {
        onNewDevice({
          name: device.name ?? '',
          id: device.id ?? ''
        });

        console.log('new DEVICE = ', device);
      }
    });
  }
  */
  startScanning(onNewDevice, function (device) { return void ; });
  {
      bleManager.startDeviceScan([], null, function (error, device) {
          var _a, _b, _c, _d;
          if (((_a = device === null || device === void 0 ? void 0 : device.name) === null || _a === void 0 ? void 0 : _a.toUpperCase().includes(FIXED_NAME)) ||
              ((_b = device === null || device === void 0 ? void 0 : device.localName) === null || _b === void 0 ? void 0 : _b.toUpperCase().includes(FIXED_NAME))) {
              onNewDevice({
                  name: (_c = device.name) !== null && _c !== void 0 ? _c : '',
                  id: (_d = device.id) !== null && _d !== void 0 ? _d : ''
              });
              console.log('new DEVICE = ', device);
          }
      });
  }
//stops scanning process
  stopScanning() {
    bleManager.stopDeviceScan();
  }
}


async connect(device: BleDevice) {
  connectedDevice = device;

  this.shouldNotifyWhenConnected = true;

  try {
    // connects to device is device using id
    await bleManager.connectToDevice(device.id);

    // discovers services and characteristics
    await bleManager.discoverAllServicesAndCharacteristicsForDevice(
      device.id
    );
    // optional
    this._showAllCharacteristics(device);
  } catch (err) {
    if (this.shouldNotifyWhenConnected) {
      throw 'Could not connect!';
    }
  }
}

// optional to see all services and characteristics
_showAllCharacteristics(device: BleDevice) {
//shows services
  bleManager.servicesForDevice(device.id).then((services) => {
    console.log('SERVICES = ', services);

    services.forEach((s) => {
      bleManager.characteristicsForDevice(device.id, s.uuid).then((char) => {
        console.log('CHARS = ', char);
      });
    });
  });
}

//

stopConnecting() {
  this.shouldNotifyWhenConnected = false;
}

//

disconnect() {
  if (connectedDevice) {
    this.shouldNotifyWhenConnected = false;

    console.log('CAAANCEEEEEL cancelDeviceConnection !!!');
    bleManager.cancelDeviceConnection(connectedDevice.id);
  }
}

//

onDisconnected(callback: () => void) {
  if (!connectedDevice) {
    return;
  }

  bleManager.onDeviceDisconnected(connectedDevice.id, (error, device) => {
    console.log('DISCONNECTED!!', error);

    if (this.shouldNotifyWhenConnected) {
      callback();
    }
  });
}

//

sendColor(color: HSV) {
  if (!connectedDevice) {
    return;
  }

  const { r, g, b } = rawHSVtoRGB(color);
  const a = 255;

  const msg = base64.encode(`${b}-${g}-${r}-${a}-`);

  // send info to device
  bleManager
    .writeCharacteristicWithResponseForDevice(
      connectedDevice?.id,
      SerialServiceUUID,
      SerialCharacteristicUUID,
      msg
    )
    .then((resp) => {
      console.log('WRITE resp = ', resp);
    })
    .catch((err) => {
      console.log('WRITE err = ', err);
    });
}














function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Image 
            style={{width: 450, height: 250}}
            source={require('../../assets/images/logo.jpg')}
        />
        <Text style={styles.loading_text}>Never Miss a Bite Again</Text>
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
        <View style={{margin:20}}>
        <Button
        title="Sign-Up"
        onPress={() => navigation.navigate('SignUp')}
      />
      </View>
      </View>
    );
  }

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d1d1cf',
        alignItems: 'center',
        justifyContent: 'center',
        padding:100,
    },
    loading_text: {
        color: 'black',
        fontSize: 34,
        fontWeight: 'bold',
        padding: 20,
    },
    loading_title_text: {
        color: 'black',
        fontSize: 44,
        fontWeight: 'bold'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});