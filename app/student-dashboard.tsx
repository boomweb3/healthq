import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function StudentDashboard() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, Student 👋</Text>
          <Text style={styles.subtitle}>How can we help you today?</Text>
        </View>
        <TouchableOpacity style={styles.logoutBtn} onPress={() => router.replace('/')}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Queue Status Card */}
      <View style={styles.queueCard}>
        <Text style={styles.queueTitle}>Current Queue</Text>
        <Text style={styles.queueNumber}>12</Text>
        <Text style={styles.queueLabel}>people waiting</Text>
        <View style={styles.waitBadge}>
          <Text style={styles.waitText}>Est. wait: ~30 mins</Text>
        </View>
      </View>

      {/* Actions */}
      <Text style={styles.sectionTitle}>What do you need?</Text>
      <View style={styles.actionsGrid}>
        <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/book-appointment')}>
          <Text style={styles.actionIcon}>📅</Text>
          <Text style={styles.actionLabel}>Book Appointment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <Text style={styles.actionIcon}>🩺</Text>
          <Text style={styles.actionLabel}>Available Doctors</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <Text style={styles.actionIcon}>📋</Text>
          <Text style={styles.actionLabel}>My Appointments</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <Text style={styles.actionIcon}>🔔</Text>
          <Text style={styles.actionLabel}>Notifications</Text>
        </TouchableOpacity>
      </View>

      {/* Available Doctors */}
      <Text style={styles.sectionTitle}>Available Doctors</Text>
      <View style={styles.doctorCard}>
        <View style={styles.doctorInfo}>
          <View style={styles.doctorAvatar}>
            <Text style={styles.avatarText}>Dr</Text>
          </View>
          <View>
            <Text style={styles.doctorName}>Dr. Adeyemi</Text>
            <Text style={styles.doctorSpec}>General Practitioner</Text>
          </View>
        </View>
        <View style={styles.availableBadge}>
          <Text style={styles.availableText}>Available</Text>
        </View>
      </View>

      <View style={styles.doctorCard}>
        <View style={styles.doctorInfo}>
          <View style={styles.doctorAvatar}>
            <Text style={styles.avatarText}>Dr</Text>
          </View>
          <View>
            <Text style={styles.doctorName}>Dr. Okafor</Text>
            <Text style={styles.doctorSpec}>Dentist</Text>
          </View>
        </View>
        <View style={[styles.availableBadge, styles.busyBadge]}>
          <Text style={[styles.availableText, styles.busyText]}>Busy</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
  logoutBtn: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  logoutText: {
    color: '#888',
    fontSize: 13,
  },
  queueCard: {
    backgroundColor: '#1a6fe6',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  queueTitle: {
    color: '#a8c8f8',
    fontSize: 14,
    marginBottom: 8,
  },
  queueNumber: {
    color: '#ffffff',
    fontSize: 56,
    fontWeight: 'bold',
  },
  queueLabel: {
    color: '#a8c8f8',
    fontSize: 14,
  },
  waitBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 12,
  },
  waitText: {
    color: '#ffffff',
    fontSize: 13,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },
  actionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    width: '47%',
    gap: 8,
  },
  actionIcon: {
    fontSize: 28,
  },
  actionLabel: {
    fontSize: 13,
    color: '#333',
    fontWeight: '500',
    textAlign: 'center',
  },
  doctorCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  doctorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  doctorAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#1a6fe6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  doctorName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  doctorSpec: {
    fontSize: 13,
    color: '#888',
  },
  availableBadge: {
    backgroundColor: '#e6f4ea',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  availableText: {
    color: '#2e7d32',
    fontSize: 13,
    fontWeight: '500',
  },
  busyBadge: {
    backgroundColor: '#fdecea',
  },
  busyText: {
    color: '#c62828',
  },
});