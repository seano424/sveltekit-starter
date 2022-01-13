import { writable } from "svelte/store";

export const modal = writable(false)
export const userName = writable('you, whoever you are')