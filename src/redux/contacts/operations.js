import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://64ecb548f9b2b70f2bfad0bb.mockapi.io/phone_book';

export const fetchContacts = createAsyncThunk('contacts/fetchall',
    async (_, thunkAPI) => {
        try {
            const resp = await axios.get('/contacts');

            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    })

export const fetchAddContact = createAsyncThunk('contacs/addContact',
    async (contact, thunkAPI) => {
        try {
            const resp = await axios.post('/contacts', contact);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    })

export const fetchDeleteContact = createAsyncThunk('contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const resp = await axios.delete(`/contacts/${contactId}`);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    })