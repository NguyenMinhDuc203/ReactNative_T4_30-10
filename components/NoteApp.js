// src/components/NoteApp.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const NoteApp = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state);
  const [noteText, setNoteText] = useState('');
  const [editNoteId, setEditNoteId] = useState(null);

  const handleAddNote = () => {
    if (editNoteId) {
      dispatch({ type: 'UPDATE_TODO_ASYNC', payload: { id: editNoteId, text: noteText } });
      setEditNoteId(null);
    } else {
      dispatch({ type: 'ADD_TODO_ASYNC', payload: { id: Date.now(), text: noteText } });
    }
    setNoteText('');
  };

  const handleEditNote = (note) => {
    setNoteText(note.text);
    setEditNoteId(note.id);
  };

  const handleRemoveNote = (id) => {
    dispatch({ type: 'REMOVE_TODO_ASYNC', payload: id });
  };

  // Style inline
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#f7f7f7',
      padding: 20,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
      height: 50
    },
    textarea: {
      width: '100%',
      padding: 15,
      marginBottom: 15,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      backgroundColor: '#fff',
      elevation: 2,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      height: 30
    },
    button: {
      padding: 10,
      marginRight: 5,
      borderRadius: 8,
      backgroundColor: '#007bff',
      color: 'white',
      textAlign: 'center',
      elevation: 2,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
    },
    buttonRemove: {
      padding: 10,
      borderRadius: 8,
      backgroundColor: '#dc3545',
      color: 'white',
      textAlign: 'center',
      elevation: 2,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
    },
    listContainer: {
      width: '100%',
      maxHeight: 300, // Giới hạn chiều cao cố định
      marginTop: 15,
      backgroundColor: '#fff',
      borderRadius: 8,
      elevation: 2,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      overflow: 'hidden', // Ẩn các phần tử vượt ra ngoài chiều cao cố định
    },
    li: {
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      gap: 5,
    },
    
  });

  return (
    <View style={styles.container}>
      
      <Text style={styles.heading}>Note App</Text>
      <TextInput
        style={styles.textarea}
        value={noteText}
        onChangeText={setNoteText}
        placeholder="Enter your note here..."
      />
      <TouchableOpacity style={styles.button} onPress={handleAddNote}>
        <Text style={{ color: '#fff' }}>{editNoteId ? 'Update Note' : 'Add Note'}</Text>
      </TouchableOpacity>
      <View style={styles.listContainer}>
        <ScrollView>
          <FlatList
            data={notes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.li}>
                <Text style={{ flexGrow: 1 }}>{item.text}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.button} onPress={() => handleEditNote(item)}>
                    <Text style={{ color: '#fff' }}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonRemove} onPress={() => handleRemoveNote(item.id)}>
                    <Text style={{ color: '#fff' }}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            style={styles.ul}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default NoteApp;
