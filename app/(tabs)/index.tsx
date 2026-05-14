import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require('@/assets/images/oau health center.jpg')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.logoArea}>
          <Image
            source={require('@/assets/images/OAU Logo.webp')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.appName}>HealthQ</Text>
          <Text style={styles.tagline}>Smart health appointments at OAU</Text>
        </View>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.studentButton}>
            <Text style={styles.studentButtonText}>Student</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.doctorButton}>
            <Text style={styles.doctorButtonText}>Doctor</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(26, 111, 230, 0.75)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
    gap: 60,
  },
  logoArea: {
    alignItems: 'center',
    gap: 10,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 30,  
    borderWidth: 3,
    borderColor: '#ffffff',

  },
  appName: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  tagline: {
    fontSize: 16,
    color: '#a8c8f8',
    textAlign: 'center',
    paddingHorizontal: 32,
  },
  buttonArea: {
    width: '100%',
    paddingHorizontal: 32,
    gap: 16,
  },
  studentButton: {
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  studentButtonText: {
    color: '#1a6fe6',
    fontSize: 18,
    fontWeight: 'bold',
  },
  doctorButton: {
    backgroundColor: 'transparent',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  doctorButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});