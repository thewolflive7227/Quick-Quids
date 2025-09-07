// src/lib/stores/loadingStore.ts
import { writable } from 'svelte/store';

// A simple store that holds a true/false value for loading state
export const isLoading = writable(false);