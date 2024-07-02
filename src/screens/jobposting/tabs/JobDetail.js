import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const JobDetail = ({ route }) => {
  const { job } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.location}>{job.location}</Text>
      <Text style={styles.salary}>Salary: {job.salary}</Text>
      <Text style={styles.details}>Type: {job.type}</Text>
      <Text style={styles.details}>Working Model: {job.workingModel}</Text>
      <Text style={styles.details}>Level: {job.level}</Text>
      <Text style={styles.applicants}>{job.applicants} Applicants</Text>
      <Text style={styles.description}>About this Job:</Text>
      <Text style={styles.descriptionText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Button
        title="Apply for Job"
        onPress={() => {
          /* Ajouter la logique d'application */
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  company: {
    fontSize: 18,
    color: "#666",
    marginBottom: 8,
  },
  location: {
    fontSize: 18,
    color: "#666",
    marginBottom: 8,
  },
  salary: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  details: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  applicants: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
});

export default JobDetail;
